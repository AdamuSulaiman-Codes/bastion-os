/* ============================================================
   Bastion OS · Console shell
   Rail, top bar, status bar, icon sprite, palette, toasts.
   ============================================================ */
(function () {
  var NAV = [
    { group: 'Workspace', items: [
      { id: 'overview', label: 'Overview', href: 'index.html', icon: 'grid' }
    ] },
    { group: 'Operations', items: [
      { id: 'board', label: 'Assignments', href: 'board.html', icon: 'columns' },
      { id: 'people', label: 'Guards', href: 'people.html', icon: 'users', count: '3', hot: true },
      { id: 'sites', label: 'Sites', href: 'sites.html', icon: 'pin' },
      { id: 'attendance', label: 'Attendance', href: 'attendance.html', icon: 'clock' },
      { id: 'patrols', label: 'Patrols', href: 'patrols.html', icon: 'route' },
      { id: 'incidents', label: 'Incidents', href: 'incidents.html', icon: 'alert', count: '4', hot: true },
      { id: 'alerts', label: 'Alerts', href: 'alerts.html', icon: 'bell', count: '5', hot: true }
    ] },
    { group: 'Finances', items: [
      { id: 'summary', label: 'Summary', href: 'money.html', icon: 'wallet', children: [
        { id: 'budget', label: 'Budget', href: 'budget.html' },
        { id: 'expenses', label: 'Expenses', href: 'expenses.html' }
      ] },
      { id: 'invoices', label: 'Invoices', href: 'invoices.html', icon: 'copy' },
      { id: 'payroll', label: 'Payroll', href: 'payroll.html', icon: 'users' },
      { id: 'clients', label: 'Clients', href: 'clients.html', icon: 'mail' }
    ] },
    { group: 'Intelligence', items: [
      { id: 'napoleon', label: 'Napoleon', href: 'napoleon.html', icon: 'spark', tag: 'AI' },
      { id: 'crawler', label: 'Crawler', href: 'crawler.html', icon: 'nfc', count: '3', hot: true },
      { id: 'ontology', label: 'Ontology', href: 'ontology.html', icon: 'graph' },
      { id: 'analytics', label: 'Data analytics', href: 'analytics.html', icon: 'database' }
    ] }
  ];

  var SPRITE = {
    grid: '<rect x="3" y="3" width="7.5" height="7.5"/><rect x="13.5" y="3" width="7.5" height="7.5"/><rect x="3" y="13.5" width="7.5" height="7.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5"/>',
    columns: '<rect x="3" y="4" width="5" height="16"/><rect x="9.5" y="4" width="5" height="11"/><rect x="16" y="4" width="5" height="14"/>',
    users: '<circle cx="9" cy="8" r="3.4"/><path d="M2.6 20c.5-3.5 3-5.6 6.4-5.6s5.9 2.1 6.4 5.6"/><path d="M16.2 5a3.4 3.4 0 0 1 0 6.2"/><path d="M17.8 14.8c2 .7 3.3 2.5 3.6 5.2"/>',
    pin: '<path d="M12 21s7-5.9 7-11a7 7 0 1 0-14 0c0 5.1 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/>',
    calendar: '<rect x="3.4" y="5" width="17.2" height="15.6"/><path d="M3.4 9.6h17.2M8 3v4M16 3v4"/><path d="M7.4 13.2h2.3M11.4 13.2h2.3M15.4 13.2h1.8M7.4 16.8h2.3M11.4 16.8h2.3"/>',
    route: '<circle cx="6" cy="18.5" r="2.3"/><circle cx="18" cy="5.5" r="2.3"/><path d="M8.3 18.5h3.5a2.6 2.6 0 0 0 0-5.2H9.7a2.6 2.6 0 0 1 0-5.2h6.1"/>',
    alert: '<path d="M12 3.6 21 19.5H3L12 3.6Z"/><path d="M12 9.5v4.2"/><path d="M12 16.7v.2"/>',
    bell: '<path d="M18.2 8.8a6.2 6.2 0 1 0-12.4 0c0 5-2.2 6.2-2.2 6.2h16.8s-2.2-1.2-2.2-6.2Z"/><path d="M9.8 19a2.3 2.3 0 0 0 4.4 0"/>',
    wallet: '<rect x="3" y="6" width="18" height="13"/><path d="M3 10.4h18M16.3 15h2.1"/><path d="M6.2 6V4.6h10.4"/>',
    spark: '<path d="M12 3.4 13.7 9l5.6 1.7-5.6 1.7L12 18l-1.7-5.6L4.7 10.7 10.3 9 12 3.4Z"/><path d="M18.6 16.3l.6 1.9 1.9.6-1.9.6-.6 1.9-.6-1.9-1.9-.6 1.9-.6.6-1.9Z"/>',
    chart: '<path d="M3.5 20.5h17"/><path d="M6 17V11M10.5 17V5.8M15 17v-4.2M19.5 17V8.4"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 14.4a7.9 7.9 0 0 0 0-4.8l1.7-1.3-1.9-3.3-2 .8a7.8 7.8 0 0 0-4.1-2.4L12.8 1h-3.8l-.3 2.4a7.8 7.8 0 0 0-4.1 2.4l-2-.8L.7 8.3l1.7 1.3a7.9 7.9 0 0 0 0 4.8l-1.7 1.3 1.9 3.3 2-.8a7.8 7.8 0 0 0 4.1 2.4l.3 2.4h3.8l.3-2.4a7.8 7.8 0 0 0 4.1-2.4l2 .8 1.9-3.3-1.7-1.3Z" transform="translate(1.2 0) scale(.9)"/>',
    phone: '<rect x="7" y="2.4" width="10" height="19.2"/><path d="M10.4 5.1h3.2M10.2 18.5h3.6"/>',
    search: '<circle cx="10.8" cy="10.8" r="6.7"/><path d="m15.7 15.7 4.3 4.3"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    chevronDown: '<path d="m6.5 9.5 5.5 5.5 5.5-5.5"/>',
    chevronRight: '<path d="m9.5 6.5 5.5 5.5-5.5 5.5"/>',
    chevronLeft: '<path d="m14.5 6.5-5.5 5.5 5.5 5.5"/>',
    arrowRight: '<path d="M4.5 12h15M13.5 6l6 6-6 6"/>',
    arrowLeft: '<path d="M19.5 12h-15M10.5 6l-6 6 6 6"/>',
    arrowUpRight: '<path d="M7 17 17 7M9.5 7H17v7.5"/>',
    check: '<path d="m5 12.5 4.4 4.4L19 6.6"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    filter: '<path d="M3.5 5.5h17l-6.6 7.8v6.2l-3.8-2v-4.2L3.5 5.5Z"/>',
    download: '<path d="M12 3.5v11M7.8 10.5 12 14.7l4.2-4.2"/><path d="M4 18.5v1.5h16v-1.5"/>',
    upload: '<path d="M12 14.7v-11M7.8 7.7 12 3.5l4.2 4.2"/><path d="M4 18.5v1.5h16v-1.5"/>',
    mail: '<rect x="2.8" y="5" width="18.4" height="14"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',
    message: '<path d="M21 11.5a7.9 7.9 0 0 1-8 8 8.6 8.6 0 0 1-3.4-.7L4 21l1.4-4.4A7.7 7.7 0 0 1 4 11.5a8 8 0 0 1 8-8 8 8 0 0 1 9 8Z"/>',
    nfc: '<path d="M6.5 8.5a7 7 0 0 1 0 7"/><path d="M9.5 6a11 11 0 0 1 0 12"/><path d="M12.5 3.5a15 15 0 0 1 0 17"/>',
    camera: '<path d="M3.5 8.5h3l1.5-2.5h8L17.5 8.5h3v10h-17v-10Z"/><circle cx="12" cy="13" r="3.1"/>',
    map: '<path d="m9 4.5-5.5 2v14l5.5-2 6 2 5.5-2v-14l-5.5 2-6-2Z"/><path d="M9 4.5v14M15 6.5v14"/>',
    user: '<circle cx="12" cy="8" r="3.5"/><path d="M4.5 20.5c.7-3.9 3.6-6.1 7.5-6.1s6.8 2.2 7.5 6.1"/>',
    more: '<circle cx="5.5" cy="12" r="1.1"/><circle cx="12" cy="12" r="1.1"/><circle cx="18.5" cy="12" r="1.1"/>',
    logout: '<path d="M14.5 4.5h-10v15h10"/><path d="M10.5 12h10M17 8.5l3.5 3.5-3.5 3.5"/>',
    lock: '<rect x="4.5" y="10" width="15" height="10.5"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10"/>',
    refresh: '<path d="M20 11.5a8 8 0 1 0-2.6 6.4"/><path d="M20 4.5v7h-7"/>',
    send: '<path d="m3.5 11.5 17-8-8 17-2.2-6.8-6.8-2.2Z"/><path d="m11.3 13.7 5.2-5.2"/>',
    copy: '<rect x="9" y="9" width="11.5" height="11.5"/><path d="M15.5 9V4.5H4v11.5h4.5"/>',
    eye: '<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',
    external: '<path d="M14 4.5h5.5V10"/><path d="M19.5 4.5 11 13"/><path d="M18 14v5.5H4.5V6H10"/>',
    bolt: '<path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-8Z"/>',
    layers: '<path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z"/><path d="m3.5 12 8.5 4.2 8.5-4.2"/><path d="m3.5 16.5 8.5 4.2 8.5-4.2"/>',
    help: '<circle cx="12" cy="12" r="8.8"/><path d="M9.6 9.4a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .9-1 1.7"/><path d="M12 16.7v.2"/>',
    target: '<circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="4.4"/><circle cx="12" cy="12" r="1"/>',
    drag: '<path d="M9 6h.01M15 6h.01M9 12h.01M15 12h.01M9 18h.01M15 18h.01"/>',
    clock: '<circle cx="12" cy="12" r="8.8"/><path d="M12 7.2V12l3.4 2.1"/>',
    trash: '<path d="M4 7h16M9 7V4.5h6V7M6.5 7l1 13h9l1-13"/>',
    printer: '<path d="M7 9V3.5h10V9"/><rect x="3.5" y="9" width="17" height="8"/><path d="M7 14h10v6.5H7z"/>',
    play: '<path d="M8.5 5.5v13l10-6.5-10-6.5Z"/>',
    shield: '<path d="M12 3 19 6v6c0 4.4-3 7.7-7 9-4-1.3-7-4.6-7-9V6l7-3Z"/><path d="m9.2 12 2 2 3.6-3.8"/>',
    swap: '<path d="M4 8h13M13 4l4 4-4 4"/><path d="M20 16H7M11 12l-4 4 4 4"/>',
    sort: '<path d="M8 4v16M4 16l4 4 4-4"/><path d="M16 20V4M12 8l4-4 4 4"/>',
    graph: '<circle cx="6" cy="7" r="2.3"/><circle cx="18" cy="7" r="2.3"/><circle cx="12" cy="18" r="2.3"/><path d="M8.2 7.8 10 15.6M15.8 7.8 14 15.6M8.3 7h7.4"/>',
    database: '<ellipse cx="12" cy="6" rx="7.4" ry="2.9"/><path d="M4.6 6v6c0 1.6 3.3 2.9 7.4 2.9s7.4-1.3 7.4-2.9V6"/><path d="M4.6 12v6c0 1.6 3.3 2.9 7.4 2.9s7.4-1.3 7.4-2.9v-6"/>',
    dot: '<circle cx="12" cy="12" r="3.2"/>'
  };

  function icon(name, cls) {
    return '<svg class="ic ' + (cls || '') + '" aria-hidden="true"><use href="#i-' + name + '"/></svg>';
  }
  window.icon = icon;

  var page = document.body.getAttribute('data-nav') || 'overview';

  function isActive(it) {
    return it.id === page;
  }
  var parentIt = null;
  function itemHere() {
    var found = null;
    parentIt = null;
    NAV.forEach(function (g) {
      g.items.forEach(function (it) {
        if (it.id === page) found = it;
        (it.children || []).forEach(function (c) { if (c.id === page) { found = c; parentIt = it; } });
      });
    });
    return found;
  }
  function syncRail() {
    document.querySelectorAll('.rail-item[data-h]').forEach(function (a) {
      var on = a.getAttribute('data-h') === page;
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    var here = document.querySelector('.tb-crumb .here');
    var it = itemHere();
    if (here && it) here.textContent = it.label;
  }

  /* ---------- sprite ---------- */
  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden">';
  for (var k in SPRITE) sprite += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + SPRITE[k] + '</symbol>';
  sprite += '</svg>';
  document.body.insertAdjacentHTML('afterbegin', sprite);

  /* ---------- rail ---------- */
  var railHost = document.querySelector('[data-shell="rail"]');
  if (railHost) {
    var html = '<a class="rail-brand" href="index.html">' +
      '<span class="brand-mark"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6 19.4 5.8v6.1c0 4.6-3.1 8-7.4 9.5-4.3-1.5-7.4-4.9-7.4-9.5V5.8L12 2.6Z"/><path d="m9 11.8 2.2 2.2 4-4.2"/></svg></span>' +
      '<span class="brand-word">BASTION</span><span class="brand-os">OS 2</span></a><div class="rail-scroll">';

    NAV.forEach(function (g) {
      html += '<div class="rail-group">' + g.group + '</div>';
      g.items.forEach(function (it) {
        var active = isActive(it);
        html += '<a class="rail-item' + (active ? ' active' : '') + '" href="' + it.href + '"' +
          ' data-h="' + it.id + '"' +
          (active ? ' aria-current="page"' : '') + '>' + icon(it.icon) + '<span>' + it.label + '</span>' +
          (it.count ? '<b class="count' + (it.hot ? ' hot' : '') + '">' + it.count + '</b>' : '') +
          (it.tag ? '<i class="tag">' + it.tag + '</i>' : '') + '</a>';
        (it.children || []).forEach(function (c) {
          html += '<a class="rail-item sub' + (c.id === page ? ' active' : '') + '" href="' + c.href + '"' +
            ' data-h="' + c.id + '"' + (c.id === page ? ' aria-current="page"' : '') + '><span>' + c.label + '</span></a>';
        });
      });
    });
    html += '</div><div class="rail-foot">' +
      '<a class="rail-item' + (page === 'guard' ? ' active' : '') + '" href="guard-app.html">' + icon('phone') + '<span>Guard app</span></a>' +
      '<a class="rail-item' + (page === 'settings' ? ' active' : '') + '" href="settings.html">' + icon('settings') + '<span>Settings</span></a>' +
      '<div class="who"><span class="avatar a1">TA</span><div class="grow"><div class="who-name">Tolu Adeyemi</div>' +
      '<div class="who-role">Ops manager · admin</div></div>' +
      '<a class="who-out" href="signin.html" aria-label="Sign out of the console" title="Sign out">' + icon('logout') + '</a></div></div>';
    railHost.outerHTML = '<aside class="rail">' + html + '</aside>';
  }

  /* ---------- top bar ---------- */
  var topHost = document.querySelector('[data-shell="topbar"]');
  if (topHost) {
    var crumb = document.body.getAttribute('data-crumb') || '';
    var hereIt = itemHere();
    var here = document.body.getAttribute('data-here') || (hereIt ? hereIt.label : '');
    topHost.outerHTML =
      '<header class="topbar">' +
        '<div class="tb-crumb"><span class="root">Spectra Security</span>' +
          (crumb ? '<span class="sep">/</span><span>' + crumb + '</span>' : '') +
          (parentIt ? '<span class="sep">/</span><span>' + parentIt.label + '</span>' : '') +
          '<span class="sep">/</span><span class="here">' + here + '</span></div>' +
        '<button class="tb-search" type="button" data-palette-open>' + icon('search') +
          '<span>Search officers, sites, records</span><kbd>⌘K</kbd></button>' +
        '<div class="tb-right">' +
          '<div class="tb-clock"><span class="live"></span><b data-clock>08:42:17</b><em>WAT</em></div>' +
          '<a class="tb-btn" href="alerts.html" aria-label="5 unacknowledged alerts">' + icon('bell') + '</a>' +
          '<button class="tb-btn" type="button" aria-label="Help" data-toast="Control room · ext. 214">' + icon('help') + '</button>' +
          '<span class="tb-avatar" title="Tolu Adeyemi">TA</span>' +
        '</div></header>';
  }

  /* ---------- status bar ---------- */
  var statusHost = document.querySelector('[data-shell="status"]');
  if (statusHost) {
    statusHost.outerHTML =
      '<footer class="statusbar">' +
        '<span class="s-live">Live</span>' +
        '<span>sync 4s</span>' +
        '<span>56 posts · <b>53 filled</b> · 3 open</span>' +
        '<span class="sp">Spectra Security · Lagos</span>' +
        '<span><b data-clock>08:42:17</b> WAT</span>' +
        '<span>v2.4.1</span>' +
      '</footer>';
  }

  /* clock ticks off the console's own shift clock so it never contradicts the page */
  var t = 8 * 3600 + 42 * 60 + 17;
  setInterval(function () {
    t += 1;
    var hh = Math.floor(t / 3600) % 24, mm = Math.floor(t / 60) % 60, ss = t % 60;
    var s = (hh < 10 ? '0' : '') + hh + ':' + (mm < 10 ? '0' : '') + mm + ':' + (ss < 10 ? '0' : '') + ss;
    document.querySelectorAll('[data-clock]').forEach(function (el) { el.textContent = s; });
  }, 1000);

  /* ---------- palette ---------- */
  var RECORDS = [
    { label: 'Chinedu Eze', hint: 'Civic Tower · on post', href: 'people.html', icon: 'users' },
    { label: 'Fatima Bello', hint: 'Cedar Mall · SOS', href: 'incidents.html', icon: 'alert' },
    { label: 'Adebayo Ojo', hint: 'Apapa Terminal 2', href: 'people.html', icon: 'users' },
    { label: 'Cedar Mall', hint: 'Site · SOS open', href: 'sites.html', icon: 'pin' },
    { label: 'Civic Tower', hint: 'Site · 8 of 8 covered', href: 'sites.html', icon: 'pin' },
    { label: 'INC-2415 · SOS at Gate B', hint: 'Incident · critical', href: 'incidents.html', icon: 'alert' },
    { label: 'Move officers between sites', hint: 'Assignments', href: 'board.html', icon: 'columns' },
    { label: 'CP-12 · Trade Centre', hint: 'Patrol · tag dead 26h', href: 'patrols.html', icon: 'route' },
    { label: 'November payroll', hint: 'Finances · 59 officers', href: 'payroll.html', icon: 'wallet' },
    { label: 'Draft an invoice with Napoleon', hint: 'Finances · Invoices', href: 'invoices.html', icon: 'wallet' },
    { label: 'Officer · Site · Shift graph', hint: 'Ontology · 8 classes', href: 'ontology.html', icon: 'graph' },
    { label: 'Attendance by site', hint: 'Data analytics · measure', href: 'analytics.html', icon: 'database' },
    { label: 'November invoices', hint: 'Finances · 7 issued', href: 'invoices.html', icon: 'chart' }
  ];
  var SCREENS = [];
  NAV.forEach(function (g) {
    g.items.forEach(function (it) {
      SCREENS.push({ label: it.label, hint: g.group, href: it.href, icon: it.icon });
      (it.children || []).forEach(function (c) {
        SCREENS.push({ label: c.label, hint: g.group + ' · ' + it.label, href: c.href, icon: it.icon });
      });
    });
  });
  SCREENS.push({ label: 'Settings', hint: 'Workspace', href: 'settings.html', icon: 'settings' });
  SCREENS.push({ label: 'Guard app', hint: 'Field', href: 'guard-app.html', icon: 'phone' });
  var ALL = SCREENS.concat(RECORDS);

  var pal = document.createElement('div');
  pal.className = 'palette-scrim';
  pal.innerHTML = '<div class="palette" role="dialog" aria-modal="true" aria-label="Search">' +
    '<div class="palette-in">' + icon('search') +
      '<input type="text" placeholder="Search officers, sites, records, screens" data-pal-in aria-label="Search">' +
    '</div><div class="palette-list" data-pal-list></div>' +
    '<div class="palette-foot"><span>↑↓ move</span><span>↵ open</span><span>esc close</span><span style="margin-left:auto">⌘K</span></div></div>';
  document.body.appendChild(pal);

  var palIn = pal.querySelector('[data-pal-in]');
  var palList = pal.querySelector('[data-pal-list]');
  var cur = 0, shown = ALL;

  function paintPal() {
    shown = ALL.filter(function (r) {
      var q = palIn.value.trim().toLowerCase();
      return !q || (r.label + ' ' + r.hint).toLowerCase().indexOf(q) > -1;
    }).slice(0, 40);
    if (cur >= shown.length) cur = Math.max(0, shown.length - 1);
    palList.innerHTML = shown.length ? shown.map(function (r, i) {
      return '<a class="palette-item' + (i === cur ? ' cur' : '') + '" href="' + r.href + '">' +
        icon(r.icon) + '<span>' + r.label + '</span><span class="hint">' + r.hint + '</span></a>';
    }).join('') : '<div class="empty"><strong>Nothing matches</strong></div>';
  }
  function openPal() { pal.classList.add('open'); palIn.value = ''; cur = 0; paintPal(); setTimeout(function () { palIn.focus(); }, 10); }
  function closePal() { pal.classList.remove('open'); }

  palIn.addEventListener('input', function () { cur = 0; paintPal(); });
  pal.addEventListener('click', function (e) { if (e.target === pal) closePal(); });
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-palette-open]')) { e.preventDefault(); openPal(); }
  });
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openPal(); return; }
    if (!pal.classList.contains('open')) return;
    if (e.key === 'Escape') { closePal(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); cur = Math.min(shown.length - 1, cur + 1); paintPal(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); cur = Math.max(0, cur - 1); paintPal(); }
    else if (e.key === 'Enter' && shown[cur]) { location.href = shown[cur].href; }
  });

  /* ---------- toasts ---------- */
  var tw = document.createElement('div');
  tw.className = 'toast-wrap';
  tw.setAttribute('role', 'status');
  document.body.appendChild(tw);

  window.toast = function (msg, icon) {
    var el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = icon ? iconEl(icon) + '<span>' + msg + '</span>' : '<span>' + msg + '</span>';
    tw.appendChild(el);
    setTimeout(function () { el.remove(); }, 2600);
  };
  function iconEl(n) { return icon(n); }

  document.addEventListener('click', function (e) {
    var t2 = e.target.closest('[data-toast]');
    if (t2) toast(t2.getAttribute('data-toast'), 'check');
  });

  /* ---------- shared board state ---------- */
  /* Other screens read and write the same site mapping the board persists,
     so a move made on People shows up on Assignments. */
  window.boardStore = {
    read: function () {
      try { return JSON.parse(localStorage.getItem('bastion.v2.board') || 'null'); } catch (_) { return null; }
    },
    apply: function () {
      var r = this.read();
      if (r && r.sites && window.B) {
        window.B.roster.forEach(function (o) { if (r.sites[o.id]) o.site = r.sites[o.id]; });
      }
    },
    save: function () {
      if (!window.B) return;
      var r = this.read() || {};
      var sites = {};
      window.B.roster.forEach(function (o) { sites[o.id] = o.site; });
      r.sites = sites;
      try { localStorage.setItem('bastion.v2.board', JSON.stringify(r)); } catch (_) {}
    }
  };

  /* ---------- drawer helper ---------- */
  window.mountDrawer = function (drawer, scrim) {
    drawer.setAttribute('aria-hidden', 'true');
    drawer.inert = true;
    function open() {
      drawer.classList.add('open'); scrim.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false'); drawer.inert = false;
    }
    function close() {
      drawer.classList.remove('open'); scrim.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true'); drawer.inert = true;
    }
    scrim.addEventListener('click', close);
    drawer.querySelectorAll('[data-close]').forEach(function (b) { b.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('open')) close();
    });
    return { open: open, close: close };
  };

  /* ---------- hash-driven rail state ---------- */
  window.addEventListener('hashchange', function () {
    syncRail();
    /* section views read the same hash; let them paint before we read it */
  });
  syncRail();
})();
