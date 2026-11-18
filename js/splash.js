/* ============================================================
   Bastion OS · startup plate
   One boot per browser session. Loaded in <head> so the plate
   exists before the first paint; it removes itself after the
   wordmark settles. ?boot in the URL replays it on demand.
   ============================================================ */
(function () {
  var KEY = 'bastion.boot';
  /* the sign-in and activation screens are the gate, not the app */
  if (/\/(signin|activate)\.html$/.test(location.pathname)) return;
  var seen = false;
  try { seen = sessionStorage.getItem(KEY) === '1'; } catch (_) {}
  var replay = /[?&]boot\b/.test(location.search);
  if (seen && !replay) return;
  try { sessionStorage.setItem(KEY, '1'); } catch (_) {}

  var css =
    '.boot{position:fixed;inset:0;z-index:9000;display:grid;place-items:center;background:#05111d;' +
      'opacity:1;transition:opacity .38s cubic-bezier(.4,0,1,1)}' +
    '.boot.out{opacity:0}' +
    '.boot.out .boot-in{opacity:0;transition:opacity .16s linear}' +
    '.boot-in{display:flex;flex-direction:column;align-items:center;gap:20px;padding-bottom:2vh}' +
    '.boot-plate{width:54px;height:54px;display:grid;place-items:center;background:#fff;' +
      'opacity:0;transform:scale(.94);animation:bootPlate .3s cubic-bezier(.2,.7,.2,1) .07s forwards}' +
    '.boot-plate svg{width:32px;height:32px;fill:none;stroke:#12395c;stroke-width:1.7;' +
      'stroke-linecap:round;stroke-linejoin:round}' +
    '.boot-shield{stroke-dasharray:64;stroke-dashoffset:64;animation:bootDraw .42s cubic-bezier(.2,.7,.2,1) .15s forwards}' +
    '.boot-check{stroke-dasharray:13;stroke-dashoffset:13;animation:bootDraw .3s cubic-bezier(.2,.7,.2,1) .4s forwards}' +
    '.boot-word{display:flex;align-items:baseline;gap:11px;overflow:hidden}' +
    '.boot-name{font:700 21px/1 var(--ui,-apple-system,system-ui,sans-serif);letter-spacing:.44em;' +
      'text-indent:.44em;color:#fff;opacity:0;transform:translateY(7px);' +
      'animation:bootWord .62s cubic-bezier(.16,.84,.3,1) .3s forwards}' +
    '.boot-os{font:600 10px/1 var(--mono,ui-monospace,Menlo,monospace);letter-spacing:.14em;' +
      'color:#a7c1dc;opacity:0;animation:bootOs .4s ease-out .62s forwards}' +
    '.boot-rule{width:196px;height:1px;background:#12344f;position:relative;overflow:hidden}' +
    '.boot-rule i{position:absolute;inset:0;background:#12395c;transform-origin:left;transform:scaleX(0);' +
      'animation:bootRule .42s cubic-bezier(.2,.7,.2,1) .56s forwards}' +
    '@keyframes bootPlate{to{opacity:1;transform:scale(1)}}' +
    '@keyframes bootDraw{to{stroke-dashoffset:0}}' +
    '@keyframes bootWord{to{opacity:1;transform:translateY(0);letter-spacing:.2em;text-indent:.2em}}' +
    '@keyframes bootOs{to{opacity:1}}' +
    '@keyframes bootRule{to{transform:scaleX(1)}}' +
    '@media (prefers-reduced-motion:reduce){' +
      '.boot-plate,.boot-name,.boot-os,.boot-rule i{animation:none;opacity:1;transform:none;letter-spacing:.2em;text-indent:.2em}' +
      '.boot-shield,.boot-check{animation:none;stroke-dashoffset:0}.boot{transition-duration:.16s}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var el = document.createElement('div');
  el.className = 'boot';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML =
    '<div class="boot-in">' +
      '<div class="boot-plate"><svg viewBox="0 0 24 24">' +
        '<path class="boot-shield" d="M12 2.6 19.4 5.8v6.1c0 4.6-3.1 8-7.4 9.5-4.3-1.5-7.4-4.9-7.4-9.5V5.8L12 2.6Z"/>' +
        '<path class="boot-check" d="m9 11.8 2.2 2.2 4-4.2"/>' +
      '</svg></div>' +
      '<div class="boot-word"><span class="boot-name">BASTION</span><span class="boot-os">OS 2</span></div>' +
      '<div class="boot-rule"><i></i></div>' +
    '</div>';
  document.documentElement.appendChild(el);

  var done = false;
  function exit() {
    if (done) return;
    done = true;
    el.classList.add('out');
    var kill = function () { if (el.parentNode) el.remove(); };
    el.addEventListener('transitionend', kill);
    setTimeout(kill, 500);
  }

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  setTimeout(exit, reduced ? 700 : 1200);
  ['pointerdown', 'keydown', 'wheel'].forEach(function (t) {
    window.addEventListener(t, exit, { once: true, passive: true });
  });
})();
