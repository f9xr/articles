import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.formatting.rule import CellIsRule
from openpyxl.utils import get_column_letter

CHARCOAL = "1F2937"
BLUE = "3B82F6"
LIGHT_BLUE = "DBEAFE"
LIGHT_GRAY = "F3F4F6"
WHITE = "FFFFFF"
GREEN = "DCFCE7"
YELLOW = "FEF9C3"
RED = "FEE2E2"

thin = Side(style="thin", color="D1D5DB")
border = Border(left=thin, right=thin, top=thin, bottom=thin)

wb = openpyxl.Workbook()

# ---------------------------------------------------------------- Sheet 1: Checklist
ws = wb.active
ws.title = "Pre-Purchase Checklist"

sections = [
    ("A. Speed and Core Web Vitals", [
        "Run the demo page through PageSpeed Insights on mobile and note LCP, INP and CLS",
        "Check the page weight and number of requests in browser developer tools",
        "Confirm it uses modern image formats (WebP/AVIF) and lazy loading below the fold",
        "Confirm the hero image can be prioritized (no lazy loading on the main image)",
        "Fonts are limited to one or two families and can be self hosted",
        "No render blocking CSS or JavaScript flagged in the report",
        "No auto playing background video on the homepage unless truly needed",
    ]),
    ("B. Mobile Experience", [
        "Demo opened on a real mid range phone, not only a desktop resize",
        "Tap targets are comfortable and spaced",
        "Text is readable without zooming",
        "No intrusive popups or full screen overlays on load",
        "Sticky headers and chat widgets do not cover content",
        "Same content appears on mobile and desktop",
    ]),
    ("C. Clean Code and Structure", [
        "View source: headline and body text appear in the raw HTML",
        "Only one H1 per page, with logical H2 and H3 order",
        "Uses semantic elements (header, nav, main, article, footer)",
        "Sidebar widget titles are not all marked as headings",
        "No excessive nesting of divs from a page builder",
    ]),
    ("D. SEO and Schema Control", [
        "Works with a trusted SEO plugin or lets you edit titles, descriptions and canonicals",
        "Supports breadcrumbs",
        "Outputs valid schema without duplicates (test with Google Rich Results Test)",
        "Lets you control robots meta, noindex on thin pages and canonical tags",
        "Supports clean permalink structures and hreflang for multiple languages",
        "Accessibility basics: contrast, focus states, alt text fields, skip links",
    ]),
    ("E. AI Search Readiness", [
        "Services, pricing, FAQs and reviews are in the initial HTML, not script injected",
        "Navigation uses real links (crawlable a href tags)",
        "Tabs and accordions keep their text in the page source",
        "No heavy client side rendering for basic content pages",
        "You can edit robots.txt and add sitemaps",
        "Site passes an agent readiness check",
    ]),
    ("F. Business and Local Features", [
        "Easy to add business name, address and phone consistently in header or footer",
        "Click to call and click for directions buttons work well on mobile",
        "Supports LocalBusiness and Organization schema",
        "Lightweight map embeds (not a heavy map on every page)",
        "Review and testimonial sections that load fast",
        "If you sell online, supports Product schema and your cart platform",
    ]),
    ("G. Maintenance, Support and Trust", [
        "Updated within the last 6 months, with a visible changelog",
        "Compatible with the latest version of your CMS and PHP",
        "Good reviews that mention support quality, not only design",
        "Clear license from the official developer (never nulled or pirated themes)",
        "Documentation exists and the vendor has a track record",
        "Child theme or safe customization method available",
    ]),
    ("H. Future Flexibility", [
        "Content stays readable if you disable the theme (not trapped in shortcodes)",
        "You can remove demo content and unused features",
        "Import and export tools exist for your settings",
        "Costs are clear: renewals, extra plugins, add ons",
    ]),
]

headers = ["Section", "Checklist Item", "Theme A", "Theme B", "Theme C"]
for c, h in enumerate(headers, 1):
    cell = ws.cell(row=1, column=c, value=h)
    cell.font = Font(bold=True, color=WHITE, size=11)
    cell.fill = PatternFill("solid", fgColor=CHARCOAL)
    cell.alignment = Alignment(horizontal="center", vertical="center")
    cell.border = border

dv = DataValidation(type="list", formula1='"Pass,Fail,N/A"', allow_blank=True)
dv.error = "Choose Pass, Fail or N/A"
dv.errorTitle = "Invalid entry"
ws.add_data_validation(dv)

row = 2
for section, items in sections:
    start = row
    for item in items:
        ws.cell(row=row, column=1, value=section if row == start else None)
        ws.cell(row=row, column=2, value=item)
        for col in (3, 4, 5):
            cell = ws.cell(row=row, column=col)
            cell.fill = PatternFill("solid", fgColor=LIGHT_GRAY)
            dv.add(cell)
        for col in range(1, 6):
            c = ws.cell(row=row, column=col)
            c.border = border
            c.alignment = Alignment(vertical="top", wrap_text=(col == 2))
        row += 1
    # merge section label vertically
    if row - 1 > start:
        ws.merge_cells(start_row=start, start_column=1, end_row=row - 1, end_column=1)
    top = ws.cell(row=start, column=1)
    top.font = Font(bold=True, color=CHARCOAL, size=11)
    top.fill = PatternFill("solid", fgColor=LIGHT_BLUE)
    top.alignment = Alignment(vertical="center", wrap_text=True)

ws.column_dimensions["A"].width = 26
ws.column_dimensions["B"].width = 78
for col in ("C", "D", "E"):
    ws.column_dimensions[col].width = 11
ws.freeze_panes = "A2"

# ---------------------------------------------------------------- Sheet 2: Scoring
sc = wb.create_sheet("Theme Scoring")

sc.merge_cells("A1:F1")
title = sc.cell(row=1, column=1, value="Weighted Theme Comparison  |  Score each criterion 1 (weak) to 5 (strong)")
title.font = Font(bold=True, color=WHITE, size=12)
title.fill = PatternFill("solid", fgColor=CHARCOAL)
title.alignment = Alignment(horizontal="center", vertical="center")

scoring_headers = ["Criteria", "Weight", "Theme A", "Theme B", "Theme C", ""]
for c, h in enumerate(scoring_headers, 1):
    cell = sc.cell(row=2, column=c, value=h)
    cell.font = Font(bold=True, color=WHITE)
    cell.fill = PatternFill("solid", fgColor=BLUE)
    cell.alignment = Alignment(horizontal="center", vertical="center")
    cell.border = border

criteria = [
    ("Mobile speed (LCP, INP, CLS)", 5),
    ("Clean HTML and headings", 4),
    ("SEO plugin and schema compatibility", 4),
    ("Content visible without JavaScript", 4),
    ("Mobile usability", 4),
    ("Update history and support", 3),
    ("Local or ecommerce features", 3),
    ("Flexibility and lock in risk", 2),
]

score_dv = DataValidation(type="list", formula1='"1,2,3,4,5"', allow_blank=True)
sc.add_data_validation(score_dv)

row = 3
for name, weight in criteria:
    sc.cell(row=row, column=1, value=name)
    sc.cell(row=row, column=2, value=weight)
    for col in (3, 4, 5):
        cell = sc.cell(row=row, column=col)
        cell.fill = PatternFill("solid", fgColor=LIGHT_GRAY)
        cell.alignment = Alignment(horizontal="center")
        score_dv.add(cell)
    for col in range(1, 6):
        c = sc.cell(row=row, column=col)
        c.border = border
    sc.cell(row=row, column=2).alignment = Alignment(horizontal="center")
    row += 1

total_row = row
max_row = row + 1
sc.cell(row=total_row, column=1, value="Weighted total (max 135)")
sc.cell(row=max_row, column=1, value="Percentage score")
for col in (3, 4, 5):
    L = get_column_letter(col)
    sc.cell(row=total_row, column=col, value=f"=SUMPRODUCT($B$3:$B${row-1},{L}3:{L}{row-1})")
    sc.cell(row=max_row, column=col, value=f"=IFERROR({L}{total_row}/SUMPRODUCT($B$3:$B${row-1},5),\"\")")
    sc.cell(row=max_row, column=col).number_format = "0%"

for r in (total_row, max_row):
    for col in range(1, 6):
        c = sc.cell(row=r, column=col)
        c.font = Font(bold=True, color=WHITE)
        c.fill = PatternFill("solid", fgColor=CHARCOAL)
        c.border = border
        if col > 1:
            c.alignment = Alignment(horizontal="center")

pct_range = f"C{max_row}:E{max_row}"
sc.conditional_formatting.add(pct_range, CellIsRule(operator="greaterThanOrEqual", formula=["0.8"], fill=PatternFill("solid", fgColor=GREEN)))
sc.conditional_formatting.add(pct_range, CellIsRule(operator="between", formula=["0.6", "0.7999"], fill=PatternFill("solid", fgColor=YELLOW)))
sc.conditional_formatting.add(pct_range, CellIsRule(operator="lessThan", formula=["0.6"], fill=PatternFill("solid", fgColor=RED)))

note_row = max_row + 2
sc.merge_cells(start_row=note_row, start_column=1, end_row=note_row, end_column=5)
note = sc.cell(row=note_row, column=1, value="Tip: test at least two or three theme demos. The winner is usually the fastest, cleanest theme, not the one with the most layouts.")
note.font = Font(italic=True, color=CHARCOAL)
note.alignment = Alignment(wrap_text=True, vertical="center")

sc.column_dimensions["A"].width = 40
sc.column_dimensions["B"].width = 10
for col in ("C", "D", "E"):
    sc.column_dimensions[col].width = 13
sc.column_dimensions["F"].width = 3
sc.freeze_panes = "A3"

# ---------------------------------------------------------------- Sheet 3: Red Flags
rf = wb.create_sheet("Red Flags")
rf.merge_cells("A1:B1")
t = rf.cell(row=1, column=1, value="Walk-Away Red Flags  |  Any single YES = do not buy this theme")
t.font = Font(bold=True, color=WHITE, size=12)
t.fill = PatternFill("solid", fgColor=CHARCOAL)
t.alignment = Alignment(horizontal="center", vertical="center")

red_flags = [
    "Demo scores very poorly on mobile and the vendor blames the demo",
    "Dozens of bundled plugins required just to get the demo look",
    "Content vanishes when you view the page source",
    "Theme has not been updated in a year",
    "Sold on a shady marketplace, or offered as a free premium download",
    "No way to turn off features you do not use",
    "Support forum full of unanswered speed and conflict complaints",
]

for c, h in enumerate(["Red Flag", "Found? (Yes/No)"], 1):
    cell = rf.cell(row=2, column=c, value=h)
    cell.font = Font(bold=True, color=WHITE)
    cell.fill = PatternFill("solid", fgColor=BLUE)
    cell.alignment = Alignment(horizontal="center")
    cell.border = border

flag_dv = DataValidation(type="list", formula1='"Yes,No"', allow_blank=True)
rf.add_data_validation(flag_dv)

row = 3
for flag in red_flags:
    rf.cell(row=row, column=1, value=flag).alignment = Alignment(wrap_text=True, vertical="center")
    cell = rf.cell(row=row, column=2)
    cell.fill = PatternFill("solid", fgColor=LIGHT_GRAY)
    cell.alignment = Alignment(horizontal="center")
    flag_dv.add(cell)
    for col in (1, 2):
        rf.cell(row=row, column=col).border = border
    row += 1

rf.conditional_formatting.add(f"B3:B{row-1}", CellIsRule(operator="equal", formula=['"Yes"'], fill=PatternFill("solid", fgColor=RED), font=Font(bold=True, color="991B1B")))

rf.column_dimensions["A"].width = 80
rf.column_dimensions["B"].width = 16
rf.freeze_panes = "A3"

# ---------------------------------------------------------------- Sheet 4: How to Use
hu = wb.create_sheet("How to Use")
hu.column_dimensions["A"].width = 110
hu.column_dimensions["B"].width = 3

steps = [
    ("Website Theme SEO Checklist 2026", True),
    ("", False),
    ("Pick 2 or 3 candidate themes and open their live demos. You do not need to install anything.", False),
    ("", False),
    ("1. Run each demo through PageSpeed Insights on mobile. Note LCP, INP and CLS.", False),
    ("2. Right click the demo, choose View Page Source, and search for a sentence from the page. If it is missing, the content is loaded by JavaScript.", False),
    ("3. Open the Pre-Purchase Checklist sheet and fill Pass / Fail / N/A for each theme, section by section.", False),
    ("4. Open the Red Flags sheet. A single Yes usually means you should walk away.", False),
    ("5. Open the Theme Scoring sheet and give each theme a 1 to 5 score per criterion. The weighted totals and percentages calculate automatically.", False),
    ("6. Highest percentage wins. If two themes score close together, take the lighter, faster one.", False),
    ("", False),
    ("Need a hand instead? F9XR Team tests shortlisted themes against this checklist, and builds fast, mobile first, clean coded websites for people, Google and AI assistants.", False),
    ("Contact: https://f9xr.org/articles/press/contact.html", False),
    ("", False),
    ("Companion article: https://f9xr.org/articles/2026/10/19/how-website-theme-affects-seo-2026-checklist.html", False),
    ("Free to use and share. Keep this file for every theme decision you make.", False),
]

for i, (text, is_title) in enumerate(steps, 1):
    cell = hu.cell(row=i, column=1, value=text)
    cell.alignment = Alignment(wrap_text=True, vertical="top")
    if is_title:
        cell.font = Font(bold=True, size=14, color=WHITE)
        cell.fill = PatternFill("solid", fgColor=CHARCOAL)
        hu.row_dimensions[i].height = 26

wb.save("assets/downloads/website-theme-seo-checklist-2026.xlsx")
print("WROTE assets/downloads/website-theme-seo-checklist-2026.xlsx")
