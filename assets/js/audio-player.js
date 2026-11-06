/**
 * F9XRAudioPlayer - Custom podcast audio player
 * Vanilla JS, no dependencies. Attaches to [data-f9xr-audio] containers.
 *
 * Usage in Liquid:
 *   <div data-f9xr-audio data-src="{{ page.audio }}" data-type="audio/mpeg"
 *        data-vtt="{{ page.audio_vtt }}" data-duration="{{ page.audio_duration }}"></div>
 *   <script defer src="/articles/assets/js/audio-player.js"></script>
 */
(function () {
  'use strict';

  var SVG_NS = 'http://www.w3.org/2000/svg';

  function spriteUrl() {
    var script = document.currentScript || document.querySelector('script[data-sprite]');
    if (script) {
      var configured = script.getAttribute('data-sprite');
      if (configured) return configured;
    }
    return '/assets/icons/lucide-sprite.svg';
  }

  var SPRITE = spriteUrl();

  function makeIcon(name) {
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('class', 'lucide lucide-' + name);
    svg.setAttribute('width', '1em');
    svg.setAttribute('height', '1em');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    var use = document.createElementNS(SVG_NS, 'use');
    use.setAttribute('href', SPRITE + '#' + name);
    svg.appendChild(use);
    return svg;
  }

  function setIcon(svg, name) {
    if (!svg) return;
    svg.setAttribute('class', 'lucide lucide-' + name);
    var use = svg.querySelector('use');
    if (use) use.setAttribute('href', SPRITE + '#' + name);
  }

  function fmt(s) {
    if (!s || !isFinite(s)) return '0:00';
    var m = Math.floor(s / 60);
    var sec = Math.floor(s % 60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
  }

  function makeSpan(className, text) {
    var span = document.createElement('span');
    span.className = className;
    if (text !== undefined) span.textContent = text;
    return span;
  }

  function makeButton(className, label) {
    var button = document.createElement('button');
    button.className = 'f9xr-ap-btn ' + className;
    button.setAttribute('aria-label', label);
    return button;
  }

  function buildHeader(duration) {
    var header = document.createElement('div');
    header.className = 'f9xr-ap-header';

    var iconWrap = makeSpan('f9xr-ap-icon');
    iconWrap.appendChild(makeIcon('headphones'));
    header.appendChild(iconWrap);
    header.appendChild(makeSpan('f9xr-ap-label', 'Listen to this episode'));

    if (duration) {
      var dur = makeSpan('f9xr-ap-dur');
      dur.appendChild(makeIcon('clock'));
      dur.appendChild(document.createTextNode(' ' + duration));
      header.appendChild(dur);
    }
    return header;
  }

  function buildControls() {
    var controls = document.createElement('div');
    controls.className = 'f9xr-ap-controls';

    var back = makeButton('f9xr-ap-skip', 'Skip back 15 seconds');
    back.dataset.skip = '-15';
    back.appendChild(makeIcon('rotate-ccw'));
    back.appendChild(makeSpan('f9xr-ap-skip-label', '15'));

    var play = makeButton('f9xr-ap-play', 'Play');
    play.appendChild(makeIcon('play'));

    var forward = makeButton('f9xr-ap-skip', 'Skip forward 15 seconds');
    forward.dataset.skip = '15';
    forward.appendChild(makeIcon('rotate-cw'));
    forward.appendChild(makeSpan('f9xr-ap-skip-label', '15'));

    controls.append(back, play, forward);
    return controls;
  }

  function buildProgress(duration) {
    var row = document.createElement('div');
    row.className = 'f9xr-ap-row';
    row.appendChild(makeSpan('f9xr-ap-time f9xr-ap-current', '0:00'));

    var barWrap = document.createElement('div');
    barWrap.className = 'f9xr-ap-bar-wrap';
    var bar = document.createElement('div');
    bar.className = 'f9xr-ap-bar';
    var fill = document.createElement('div');
    fill.className = 'f9xr-ap-bar-fill';
    var knob = document.createElement('div');
    knob.className = 'f9xr-ap-bar-knob';
    bar.append(fill, knob);
    barWrap.appendChild(bar);
    row.appendChild(barWrap);

    row.appendChild(makeSpan('f9xr-ap-time f9xr-ap-total', duration || '0:00'));
    return row;
  }

  function buildVolumeRow() {
    var row = document.createElement('div');
    row.className = 'f9xr-ap-row f9xr-ap-bottom';

    var mute = makeButton('f9xr-ap-volume', 'Mute');
    mute.appendChild(makeIcon('volume-2'));

    var volWrap = document.createElement('div');
    volWrap.className = 'f9xr-ap-vol-wrap';
    var volBar = document.createElement('div');
    volBar.className = 'f9xr-ap-vol-bar';
    var volFill = document.createElement('div');
    volFill.className = 'f9xr-ap-vol-fill';
    volBar.appendChild(volFill);
    volWrap.appendChild(volBar);

    var speed = makeButton('f9xr-ap-speed', 'Playback speed');
    speed.textContent = '1x';

    row.append(mute, volWrap, speed);
    return row;
  }

  function buildTranscriptLink(url) {
    var link = document.createElement('a');
    link.className = 'f9xr-ap-vtt';
    link.href = url;
    link.setAttribute('download', '');
    link.appendChild(makeIcon('download'));
    link.appendChild(document.createTextNode(' Download transcript (.vtt)'));
    return link;
  }

  function buildPlayerShell(container, duration, transcript) {
    var shell = document.createElement('div');
    shell.className = 'f9xr-ap';
    shell.appendChild(buildHeader(duration));
    shell.appendChild(buildControls());
    shell.appendChild(buildProgress(duration));
    shell.appendChild(buildVolumeRow());

    container.replaceChildren(shell);
    if (transcript) container.appendChild(buildTranscriptLink(transcript));
  }

  function wireProgress(audio, elements) {
    var bar = elements.bar;
    var barWrap = elements.barWrap;
    var fill = elements.fill;
    var knob = elements.knob;
    var curTime = elements.curTime;
    var totTime = elements.totTime;

    audio.addEventListener('timeupdate', function () {
      var pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
      fill.style.width = pct + '%';
      knob.style.left = pct + '%';
      curTime.textContent = fmt(audio.currentTime);
    });
    audio.addEventListener('loadedmetadata', function () {
      totTime.textContent = fmt(audio.duration);
    });

    function seekFromEvent(e) {
      var rect = bar.getBoundingClientRect();
      var pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      audio.currentTime = pct * audio.duration;
    }
    var dragging = false;
    barWrap.addEventListener('mousedown', function (e) { dragging = true; seekFromEvent(e); });
    document.addEventListener('mousemove', function (e) { if (dragging) seekFromEvent(e); });
    document.addEventListener('mouseup', function () { dragging = false; });
    barWrap.addEventListener('touchstart', function (e) { dragging = true; seekFromEvent(e.touches[0]); }, { passive: true });
    barWrap.addEventListener('touchmove', function (e) { if (dragging) seekFromEvent(e.touches[0]); }, { passive: true });
    barWrap.addEventListener('touchend', function () { dragging = false; });
  }

  function wireSkip(audio, buttons) {
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        audio.currentTime = Math.max(0, Math.min(audio.duration || 0, audio.currentTime + parseInt(btn.dataset.skip)));
      });
    });
  }

  function wireSpeed(audio, speedBtn) {
    var speeds = [1, 1.25, 1.5, 2, 0.75, 0.5];
    var speedIdx = 0;
    var savedSpeed = parseFloat(localStorage.getItem('f9xr-playback-speed'));
    if (savedSpeed && speeds.indexOf(savedSpeed) !== -1) {
      speedIdx = speeds.indexOf(savedSpeed);
    }

    function applySpeed() {
      audio.playbackRate = speeds[speedIdx];
      speedBtn.textContent = speeds[speedIdx] + 'x';
      localStorage.setItem('f9xr-playback-speed', speeds[speedIdx]);
    }
    applySpeed();

    speedBtn.addEventListener('click', function () {
      speedIdx = (speedIdx + 1) % speeds.length;
      applySpeed();
    });
  }

  function wireVolume(audio, volBtn, volIcon, volWrap, volBar, volFill) {
    var prevVol = 1;
    function setVolIcon() {
      if (audio.muted || audio.volume === 0) {
        setIcon(volIcon, 'volume-x');
      } else if (audio.volume < 0.5) {
        setIcon(volIcon, 'volume-1');
      } else {
        setIcon(volIcon, 'volume-2');
      }
    }
    volBtn.addEventListener('click', function () {
      if (audio.muted || audio.volume === 0) {
        audio.muted = false;
        audio.volume = prevVol || 0.5;
      } else {
        prevVol = audio.volume;
        audio.muted = true;
      }
      volFill.style.width = (audio.muted ? 0 : audio.volume * 100) + '%';
      setVolIcon();
    });
    // Volume bar click
    volWrap.addEventListener('mousedown', function (e) {
      var rect = volBar.getBoundingClientRect();
      var pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      audio.volume = pct;
      audio.muted = false;
      volFill.style.width = (pct * 100) + '%';
      setVolIcon();
    });
    return setVolIcon;
  }

  function wireKeyboard(container, audio, togglePlay, volFill, setVolIcon) {
    container.setAttribute('tabindex', '0');
    container.addEventListener('keydown', function (e) {
      if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
      else if (e.code === 'ArrowLeft') { audio.currentTime = Math.max(0, audio.currentTime - 15); }
      else if (e.code === 'ArrowRight') { audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 15); }
      else if (e.code === 'ArrowUp') { audio.volume = Math.min(1, audio.volume + 0.1); audio.muted = false; volFill.style.width = (audio.volume * 100) + '%'; setVolIcon(); }
      else if (e.code === 'ArrowDown') { audio.volume = Math.max(0, audio.volume - 0.1); volFill.style.width = (audio.volume * 100) + '%'; setVolIcon(); }
    });
  }

  function createPlayer(container) {
    var src = container.dataset.src;
    var transcript = container.dataset.vtt || '';
    var duration = container.dataset.duration || '';

    buildPlayerShell(container, duration, transcript);

    var audio = document.createElement('audio');
    audio.preload = 'metadata';
    audio.src = src;
    container.appendChild(audio);

    var ap = container.querySelector('.f9xr-ap');
    var playBtn = container.querySelector('.f9xr-ap-play');
    var playIcon = playBtn.querySelector('.lucide');
    var barWrap = container.querySelector('.f9xr-ap-bar-wrap');
    var bar = container.querySelector('.f9xr-ap-bar');
    var fill = container.querySelector('.f9xr-ap-bar-fill');
    var knob = container.querySelector('.f9xr-ap-bar-knob');
    var curTime = container.querySelector('.f9xr-ap-current');
    var totTime = container.querySelector('.f9xr-ap-total');
    var speedBtn = container.querySelector('.f9xr-ap-speed');
    var volBtn = container.querySelector('.f9xr-ap-volume');
    var volIcon = volBtn.querySelector('.lucide');
    var volWrap = container.querySelector('.f9xr-ap-vol-wrap');
    var volBar = container.querySelector('.f9xr-ap-vol-bar');
    var volFill = container.querySelector('.f9xr-ap-vol-fill');
    var skipBtns = container.querySelectorAll('.f9xr-ap-skip');

    // Play / Pause
    function togglePlay() {
      if (audio.paused) { audio.play(); } else { audio.pause(); }
    }
    playBtn.addEventListener('click', togglePlay);
    audio.addEventListener('play', function () {
      setIcon(playIcon, 'pause');
      playBtn.setAttribute('aria-label', 'Pause');
      ap.classList.add('f9xr-ap-playing');
    });
    audio.addEventListener('pause', function () {
      setIcon(playIcon, 'play');
      playBtn.setAttribute('aria-label', 'Play');
      ap.classList.remove('f9xr-ap-playing');
    });

    wireProgress(audio, {
      bar: bar,
      barWrap: barWrap,
      fill: fill,
      knob: knob,
      curTime: curTime,
      totTime: totTime,
    });
    wireSkip(audio, skipBtns);
    wireSpeed(audio, speedBtn);
    var setVolIcon = wireVolume(audio, volBtn, volIcon, volWrap, volBar, volFill);
    wireKeyboard(container, audio, togglePlay, volFill, setVolIcon);
  }

  function init() {
    document.querySelectorAll('[data-f9xr-audio]').forEach(createPlayer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
