#!/usr/bin/env python3
"""Lint an F9XR markdown article for AI-writing patterns and SEO basics.

Adapted from the human-article-writer skill so it works on Jekyll posts:
- strips YAML front matter before counting words and headings
- lets F9XR keep its required "Key Takeaways" and "Conclusion" headings
  without flagging them as template headings

Usage:
  python tools/lint-article.py _posts/YYYY-MM-DD-slug.md --keywords "primary kw" "secondary kw"
  python tools/lint-article.py draft.md --allow-heading "key takeaways" "conclusion"

Prints FAIL / WARN / OK lines. Exit code 1 if any FAIL.
"""
import argparse
import re
import statistics
import sys


FLAG_WORDS = [
    "delve", "tapestry", "testament", "beacon", "realm", "embark", "unlock", "unleash",
    "elevate", "empower", "foster", "leverage", "harness", "robust", "seamless", "pivotal",
    "crucial", "vital", "multifaceted", "holistic", "nuanced", "intricate", "profound",
    "remarkable", "genuinely", "truly", "deeply", "ultimately", "essentially", "furthermore",
    "moreover", "additionally", "in conclusion", "it's worth noting", "it is worth noting",
    "importantly", "fast-paced", "ever-evolving", "game-changer", "game changer", "at its core",
    "plays a key role", "a wide range of", "serves as", "stands as", "navigate", "navigating",
    "journey", "landscape", "utilize", "utilise", "facilitate", "subsequently",
]
CLICHES = [
    "caterpillar", "butterfly", "phoenix", "double-edged", "tip of the iceberg",
    "roller coaster", "rollercoaster", "north star", "cellular level", "puzzle piece",
]
TEMPLATE_HEADINGS = [
    "bottom line", "final thoughts", "key takeaways", "conclusion",
    "in summary", "understanding ", "the power of", "the short answer", "tl;dr",
]


def strip_front_matter(raw):
    return re.sub(r"\A---\s*\r?\n.*?\r?\n---\s*\r?\n", "", raw, flags=re.S)


def strip_md(text):
    text = re.sub(r"```.*?```", " ", text, flags=re.S)
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
    return text


STOPWORDS = {"a", "an", "the", "your", "our", "their", "its", "my", "this", "that"}


def keyword_pattern(keyword):
    """Build a tolerant matcher so 'manage your WordPress site' matches
    'manage a WordPress site'. Exact adjacent wording is too strict for prose."""
    tokens = keyword.split()
    if not tokens:
        return None
    parts = [re.escape(tokens[0])]
    for token in tokens[1:]:
        article = r"(?:(?:a|an|the|your|our|their|its|my|this|that)\s+)?"
        parts.append(r"\s+" + article + re.escape(token))
    return r"\b" + "".join(parts) + r"\b"


def sentences(text):
    body = "\n".join(
        line for line in text.splitlines()
        if line.strip() and not line.lstrip().startswith(("#", "|"))
    )
    body = re.sub(r"[*_`>]", "", body)
    parts = re.split(r"(?<=[.!?])\s+|\n+", body)
    return [p.strip() for p in parts if p.strip() and re.search(r"[A-Za-z]", p)]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("file")
    parser.add_argument("--keywords", nargs="*", default=[])
    parser.add_argument(
        "--allow-heading",
        nargs="*",
        default=[],
        help="headings to exempt from the template-heading warning",
    )
    args = parser.parse_args()

    raw = open(args.file, encoding="utf-8").read()
    raw = strip_front_matter(raw)
    text = strip_md(raw)
    low = text.lower()
    allowed = [h.lower() for h in args.allow_heading]
    fails = 0

    def report(level, msg):
        nonlocal fails
        if level == "FAIL":
            fails += 1
        print(f"{level}: {msg}")

    words = re.findall(r"[A-Za-z0-9']+", text)
    print(f"Words: {len(words)}")

    dash_hits = re.findall(r".{0,25}(?:—|–| - ).{0,25}", text)
    if dash_hits:
        report("FAIL", f"{len(dash_hits)} dash(es) used as punctuation, e.g. '{dash_hits[0].strip()}'")
    else:
        report("OK", "no dashes")

    found = {}
    for word in FLAG_WORDS:
        count = len(re.findall(r"\b" + re.escape(word) + r"\b", low))
        if count:
            found[word] = count
    total = sum(found.values())
    level = "FAIL" if total >= 4 else ("WARN" if total else "OK")
    report(level, f"flagged vocabulary x{total}: {found}" if total else "no flagged vocabulary")

    cliches = [item for item in CLICHES if item in low]
    report("WARN" if cliches else "OK", f"cliched images: {cliches}" if cliches else "no stock cliches")

    # Match the actual "X is not Y. It is Z." flip, not every sentence
    # containing "does not" followed by a comma.
    flips = re.findall(
        r"(?:isn't|is not|aren't|are not|wasn't|was not)\s+[^.!?]{1,60}[.!?]\s+"
        r"(?:it|that|this)\s+(?:is|was|'s)\s+",
        low,
    )
    flips += re.findall(
        r"\bnot about\b[^.!?]{0,60}[,.]?\s*(?:it'?s|it is)\s+about\b",
        low,
    )
    flips += re.findall(
        r"(?:don't|do not|doesn't|does not)\s+[^.!?]{1,60}[.!?]\s+"
        r"(?:it|that|this)\s+(?:is|'s)\s+",
        low,
    )
    report(
        "FAIL" if len(flips) > 2 else ("WARN" if flips else "OK"),
        f"'not X, it's Y' contrasts x{len(flips)} (keep max 1)" if flips else "no contrast flips",
    )

    triplets = re.findall(r"\b\w+(?: \w+)?, \w+(?: \w+)?,? and \w+", text)
    per_1k = len(triplets) / max(len(words), 1) * 1000
    report("WARN" if per_1k > 3 else "OK", f"'A, B, and C' triplets x{len(triplets)} ({per_1k:.1f}/1000 words)")

    bold = re.findall(r"^\s*(?:[-*]\s+)?\*\*[^*]+(?:[.:]\*\*|\*\*[.:])", raw, flags=re.M)
    report("WARN" if len(bold) > 2 else "OK", f"bolded lead-in paragraphs x{len(bold)}")

    heads = [h.strip("# ").lower() for h in re.findall(r"^#{1,6} .+$", raw, flags=re.M)]
    bad = [
        h for h in heads
        if any(t in h for t in TEMPLATE_HEADINGS) and not any(a in h for a in allowed)
    ]
    report("WARN" if bad else "OK", f"template headings: {bad}" if bad else "headings not templated")

    sents = sentences(raw)
    lens = [len(s.split()) for s in sents]
    if len(lens) > 5:
        sd = statistics.pstdev(lens)
        mean = statistics.mean(lens)
        short = sum(1 for length in lens if length <= 6) / len(lens) * 100
        long_ = sum(1 for length in lens if length >= 25) / len(lens) * 100
        level = "OK" if sd >= 7 else ("WARN" if sd >= 5 else "FAIL")
        report(
            level,
            f"sentence length mean {mean:.1f}, stdev {sd:.1f} (want 7+), "
            f"short<=6w {short:.0f}%, long>=25w {long_:.0f}%",
        )
        if short > 30:
            report("WARN", "too many fragments/short sentences (>30%); reads choppy")
        runs = sum(1 for i in range(len(lens) - 3) if max(lens[i:i + 4]) - min(lens[i:i + 4]) <= 4)
        if runs > len(lens) * 0.15:
            report("WARN", f"{runs} flat runs of 4 similar-length sentences")

    passive = [
        s for s in sents
        if re.search(
            r"\b(is|are|was|were|be|been|being|get|got|gets)\s+(\w+ly\s+)?"
            r"\w+(ed|en|wn|lt|ught|ne)\b(\s+by\b)?",
            s.lower(),
        )
    ]
    passive_pct = len(passive) / max(len(sents), 1) * 100
    report(
        "FAIL" if passive_pct > 12 else ("WARN" if passive_pct > 8 else "OK"),
        f"passive voice approx {passive_pct:.0f}% (target <10%; heuristic, check manually)",
    )

    paras = [
        p for p in re.split(r"\n\s*\n", raw)
        if p.strip() and not p.lstrip().startswith(("#", "|", "-", "*", "1."))
    ]
    long_paras = [p for p in paras if len(re.split(r"(?<=[.!?])\s+", p.strip())) > 4]
    report("WARN" if long_paras else "OK", f"{len(long_paras)} paragraph(s) over 4 sentences")
    para_lens = [len(p.split()) for p in paras]
    if len(para_lens) > 4 and statistics.pstdev(para_lens) < 12:
        report("WARN", f"paragraph lengths too uniform (stdev {statistics.pstdev(para_lens):.1f} words)")

    sections = re.split(r"^#{2,3} .+$", raw, flags=re.M)[1:]
    section_lens = [len(s.split()) for s in sections if s.strip()]
    if len(section_lens) >= 4:
        cv = statistics.pstdev(section_lens) / max(statistics.mean(section_lens), 1)
        report("WARN" if cv < 0.35 else "OK", f"section length variation {cv:.2f} (want >0.35): {section_lens}")

    first_100 = " ".join(words[:100]).lower()
    for keyword in args.keywords:
        pattern = keyword_pattern(keyword)
        if not pattern:
            continue
        count = len(re.findall(pattern, low, flags=re.I))
        density = count * len(keyword.split()) / max(len(words), 1) * 100
        in_first = bool(re.search(pattern, first_100, flags=re.I))
        in_heading = any(re.search(pattern, h, flags=re.I) for h in heads)
        level = "WARN" if density > 2.5 or count == 0 else "OK"
        report(
            level,
            f"keyword '{keyword}': {count}x, density {density:.2f}%, "
            f"in first 100 words: {in_first}, in a heading: {in_heading}",
        )

    placeholders = re.findall(r"\[(?:add|insert|your|todo)[^\]]*\]|\bTODO\b|\bXX%", raw, flags=re.I)
    report("FAIL" if placeholders else "OK", f"unfilled placeholders: {placeholders[:3]}" if placeholders else "no placeholders")

    candour = [
        "the honest answer", "honestly", "let's be real", "let's be honest", "here's the thing",
        "the truth is", "nobody talks about", "nobody tells you", "most guides", "most articles",
        "yours may differ", "your mileage may vary", "grain of salt", "let's face it",
        "if you're reading this", "in my opinion",
    ]
    hits = {phrase: low.count(phrase) for phrase in candour if phrase in low}
    count = sum(hits.values())
    report("FAIL" if count >= 2 else ("WARN" if count else "OK"), f"performed candour / hook-pivot phrases: {hits}" if count else "no performed candour")
    opening = " ".join(words[:40]).lower()
    if any(phrase in opening for phrase in ["honest", "truth", "most guides", "nobody", "plain", "simple answer"]):
        report("FAIL", "opening uses a contrarian hook / honesty announcement")

    qa = re.findall(r"\b\w+(?: \w+){0,3}\?[ \t]+(?:Yes|No|Absolutely|Definitely|Sure|Nope|Maybe|Not really)\b[.!]", text)
    report("FAIL" if len(qa) > 1 else ("WARN" if qa else "OK"), f"'Boring? Yes.' fragments x{len(qa)}: {qa[:3]}" if qa else "no Q-and-answer fragments")

    currencies = {
        key: bool(re.search(pattern, text, flags=re.I))
        for key, pattern in {
            "INR": r"₹|\brupees?\b|\bINR\b|\blakh|\bcrore",
            "USD": r"\$\d|\bdollars?\b|\bUSD\b",
            "GBP": r"£|\bpounds?\b",
            "EUR": r"€|\beuros?\b",
        }.items()
    }
    used = [key for key, present in currencies.items() if present]
    report("WARN" if len(used) > 1 else "OK", f"mixed currencies {used}; pick one target market" if len(used) > 1 else "single locale currency")
    if re.search(r"\b(?:colour|favour|organis)", low) and re.search(r"\b(?:color|favor|organiz)", low):
        report("WARN", "mixed UK/US spelling")

    print(f"\n{fails} FAIL(s)")
    sys.exit(1 if fails else 0)


if __name__ == "__main__":
    main()
