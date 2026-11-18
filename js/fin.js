/* ============================================================
   Finances · shared records and chart kit
   Loaded after js/data.js, before js/shell.js.
   Every finance page reads from here so the numbers agree.
   ============================================================ */
(function () {
  var FIN = window.FIN = {};
  var B = window.B || { roster: [], sites: [], site: function () { return null; } };

  /* ---------- records ---------- */
  FIN.invoices = [
    { id: 'INV-2041', client: 'Cedar Retail Group', issued: '17 Nov', due: '30 Nov', amount: 6400000, state: 'Sent' },
    { id: 'INV-2038', client: 'Civic Tower Facilities', issued: '16 Nov', due: '29 Nov', amount: 5120000, state: 'Paid' },
    { id: 'INV-2031', client: 'Admiralty Heights', issued: '19 Oct', due: '02 Nov', amount: 980000, state: 'Overdue' },
    { id: 'INV-2027', client: 'Lagos State Archive', issued: '08 Nov', due: '22 Nov', amount: 1240000, state: 'Paid' },
    { id: 'INV-2024', client: 'LTC Holdings', issued: '05 Nov', due: '19 Nov', amount: 4860000, state: 'Paid' },
    { id: 'INV-2021', client: 'Bourdillon Estates', issued: '02 Nov', due: '16 Nov', amount: 2310000, state: 'Overdue' },
    { id: 'INV-2018', client: 'Apapa Ports Ltd', issued: '01 Nov', due: '15 Nov', amount: 7450000, state: 'Paid' }
  ];

  FIN.expenses = [
    { ref: 'EXP-0884', what: 'Fuel · patrol vans', where: 'Fleet · Lagos', cat: 'Fuel', day: '17 Nov', amount: 410000, state: 'Paid' },
    { ref: 'EXP-0881', what: 'Radio repairs · 6 handsets', where: 'Trade Centre', cat: 'Equipment', day: '14 Nov', amount: 186000, state: 'Paid' },
    { ref: 'EXP-0876', what: 'Uniform issue · 9 officers', where: 'Apapa Ports Ltd', cat: 'Uniforms', day: '10 Nov', amount: 342000, state: 'Paid' },
    { ref: 'EXP-0873', what: 'NFC tag replacement', where: 'Civic Tower', cat: 'Equipment', day: '09 Nov', amount: 64000, state: 'Paid' },
    { ref: 'EXP-0869', what: 'Generator diesel', where: 'Cedar Mall', cat: 'Fuel', day: '06 Nov', amount: 228000, state: 'Paid' },
    { ref: 'EXP-0864', what: 'Vehicle service · 2 vans', where: 'Fleet · Lagos', cat: 'Fleet', day: '03 Nov', amount: 515000, state: 'Approved' },
    { ref: 'EXP-0858', what: 'Overtime · 7 officers', where: 'Payroll', cat: 'Overtime', day: '01 Nov', amount: 890000, state: 'Approved' }
  ];

  FIN.clients = [
    { n: 'Apapa Ports Ltd', c: 'Ifeoma Nwosu', e: 'ifeoma@apapaports.ng', p: '+234 802 331 7740', v: 7450000, sla: 97, rw: 'Mar 2027', st: 'Active' },
    { n: 'Cedar Retail Group', c: 'Bola Akande', e: 'bola@cedarretail.ng', p: '+234 805 220 1188', v: 6400000, sla: 91, rw: 'Jan 2027', st: 'Renewal' },
    { n: 'Civic Tower Facilities', c: 'Emeka Obi', e: 'emeka@civictower.ng', p: '+234 806 914 6621', v: 5120000, sla: 99, rw: 'Aug 2027', st: 'Active' },
    { n: 'LTC Holdings', c: 'Sade Ogun', e: 'sade@ltcholdings.ng', p: '+234 809 700 4432', v: 4860000, sla: 94, rw: 'Jun 2027', st: 'Active' },
    { n: 'Bourdillon Estates', c: 'Ayo Bankole', e: 'ayo@bourdillon.ng', p: '+234 803 118 2094', v: 2310000, sla: 96, rw: 'Nov 2027', st: 'Active' },
    { n: 'Admiralty Heights', c: 'Ngozi Umeh', e: 'ngozi@admiralty.ng', p: '+234 807 445 9012', v: 1980000, sla: 88, rw: 'Feb 2027', st: 'Review' },
    { n: 'Lagos State Archive', c: 'Kunle Ajayi', e: 'kunle@lagosarchive.ng', p: '+234 805 663 2290', v: 1240000, sla: 82, rw: 'Sep 2027', st: 'Review' },
    { n: 'Greenfield Academy', c: 'RuthAnns Okoro', e: 'ruth@greenfield.ng', p: '+234 802 908 3377', v: 980000, sla: 98, rw: 'Jan 2027', st: 'Active' }
  ];

  FIN.drafts = {
    'Cedar Retail Group': [
      ['12 contracted posts × 30 days', 5760000],
      ['3 relief shifts · 11, 14, 16 Nov', 420000],
      ['NFC tag replacement × 2', 64000],
      ['Fuel levy · 6%', 156000]
    ],
    'Apapa Ports Ltd': [
      ['14 contracted posts × 30 days', 6720000],
      ['1 relief shift · 12 Nov', 170000],
      ['Port access levy', 560000]
    ]
  };

  /* spend per line this month; sums to the 31.60m operating cost */
  FIN.costSplit = [
    ['Wages & relief', 18.42, 'Wages'], ['Fuel & fleet', 5.14, 'Fuel'], ['Equipment & tags', 3.21, 'Equipment'],
    ['Overtime', 2.07, 'Overtime'], ['Uniforms', 1.58, 'Uniforms'], ['Insurance & other', 1.18, 'Other']
  ];
  /* what was budgeted per line; sums to 32.40m */
  FIN.budget = {
    'Wages & relief': 18.80, 'Fuel & fleet': 4.80, 'Equipment & tags': 3.60,
    'Overtime': 1.80, 'Uniforms': 2.00, 'Insurance & other': 1.40
  };

  FIN.months = [
    { m: 'Jun', rev: 38.4, cost: 27.2 }, { m: 'Jul', rev: 40.1, cost: 28.4 },
    { m: 'Aug', rev: 41.6, cost: 29.1 }, { m: 'Sep', rev: 44.3, cost: 30.2 },
    { m: 'Oct', rev: 46.3, cost: 31.0 }, { m: 'Nov', rev: 48.2, cost: 31.6 }
  ];

  FIN.office = [
    { n: 'Tolu Adeyemi', s: 'Operations manager', g: 850000, x: 42000, net: 808000, staff: true },
    { n: 'Hans Ojeh', s: 'Account manager', g: 720000, x: 36000, net: 684000, staff: true },
    { n: 'Adaeze Fola', s: 'Dispatcher', g: 480000, x: 24000, net: 456000, staff: true },
    { n: 'Bola Kemi', s: 'Finance officer', g: 460000, x: 23000, net: 437000, staff: true }
  ];

  FIN.ink = ['#12395c', '#4a6a86', '#7c93a8', '#a3b3c2', '#c6d0da', '#e3e8ed'];
  FIN.short = / (Ltd|Retail Group|Facilities|Holdings|Estates|Academy)$/;
  FIN.slaTarget = 95;

  /* ---------- payroll, derived from the shared roster ---------- */
  var DAYS = 26;
  function daysFor(o) { return o.state === 'noshow' ? 24 : o.state === 'late' ? 25 : DAYS; }

  FIN.officers = B.roster.map(function (o, i) {
    var d = daysFor(o);
    var x = Math.round((DAYS - d) * (o.salary / DAYS) / 500) * 500;
    var site = o.site === 'bench' ? 'Dormant' : (B.site(o.site) ? B.site(o.site).name : o.site);
    return {
      n: o.name, s: site, id: o.id, d: d, g: o.salary, x: x, net: o.salary - x,
      st: x > 4000 ? 'Exceptions' : 'Ready',
      inst: i % 13 === 5, staff: false
    };
  });

  FIN.payroll = function (group) {
    return group === 'staff' ? FIN.office.slice() : FIN.officers;
  };
  FIN.totals = function (rows) {
    var t = { gross: 0, ded: 0, net: 0 };
    rows.forEach(function (p) { t.gross += p.g; t.ded += p.x; t.net += p.net; });
    return t;
  };
  FIN.instantDue = function (rows, paid) {
    return rows.filter(function (p) { return p.inst && !paid[p.n]; });
  };

  /* ---------- formatting ---------- */
  FIN.esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  FIN.ngn = function (v) { return '₦' + Math.abs(v).toLocaleString('en-NG'); };
  FIN.mm = function (v) { return '₦' + v.toFixed(2) + 'm'; };
  FIN.money = function (v) {
    if (typeof v !== 'number') return FIN.esc(v);
    return '<span class="money' + (v < 0 ? ' neg' : '') + '">' + (v < 0 ? '−' : '') + FIN.ngn(v) + '</span>';
  };
  FIN.chip = function (v) {
    var cls = /Overdue|Exceptions|Review/.test(v) ? 'warn' : /Sent|Renewal|Approved/.test(v) ? 'info' : 'ok';
    return '<span class="chip ' + cls + '">' + FIN.esc(v) + '</span>';
  };

  /* ---------- chart kit ---------- */
  FIN.chartCard = function (title, cap, body, note) {
    return '<section class="panel chart-card"><div class="panel-head"><h2>' + title + '</h2>' +
      (cap ? '<span class="cap">' + cap + '</span>' : '') + '</div>' +
      '<div class="panel-body">' + body +
      (note ? '<div class="chart-note">' + note + '</div>' : '') + '</div></section>';
  };

  /* grouped columns: [{x, a, b, cap}] — b optional */
  FIN.cols = function (rows, max) {
    var each = rows.length <= 5;
    return '<div class="gcols">' + rows.map(function (r, i) {
      return '<div class="gc"><div class="gc-plot">' + ((each || i === rows.length - 1) && r.cap != null ? '<b>' + r.cap + '</b>' : '') +
        '<i style="height:' + Math.max(2, r.a / max * 100) + '%;background:var(--blue)"></i>' +
        (r.b == null ? '' : '<i style="height:' + Math.max(2, r.b / max * 100) + '%;background:#c3d0dc"></i>') +
        '</div><div class="gc-x">' + r.x + '</div></div>';
    }).join('') + '</div>';
  };

  /* horizontal bars: [[label, value, display, isBad]] */
  FIN.bars = function (rows) {
    var max = Math.max.apply(null, rows.map(function (r) { return r[1]; })) || 1;
    return '<div class="hbars">' + rows.map(function (r) {
      return '<div class="hb"><span class="hb-n">' + r[0] + '</span>' +
        '<span class="hb-t"><i' + (r[3] ? ' class="bad"' : '') + ' style="width:' + (r[1] / max * 100) + '%"></i></span>' +
        '<b>' + r[2] + '</b></div>';
    }).join('') + '</div>';
  };

  FIN.donut = function (segs, big, sub) {
    var total = segs.reduce(function (a, s) { return a + s[1]; }, 0) || 1;
    var R = 31, C = 2 * Math.PI * R, off = 0;
    var rings = segs.map(function (s, i) {
      var len = s[1] / total * C;
      var el = '<circle cx="42" cy="42" r="' + R + '" fill="none" stroke="' + FIN.ink[i % FIN.ink.length] +
        '" stroke-width="12" stroke-dasharray="' + len.toFixed(2) + ' ' + (C - len).toFixed(2) +
        '" stroke-dashoffset="' + (-off).toFixed(2) + '" transform="rotate(-90 42 42)"></circle>';
      off += len;
      return el;
    }).join('');
    var legend = '<div class="donut-leg">' + segs.map(function (s, i) {
      return '<div class="dl"><i style="background:' + FIN.ink[i % FIN.ink.length] + '"></i><span>' + s[0] + '</span><b>' + s[2] + '</b></div>';
    }).join('') + '</div>';
    return '<div class="dbody"><div class="donut-wrap">' +
      '<svg viewBox="0 0 84 84" class="donut">' + rings + '</svg>' +
      '<div class="donut-c"><b>' + big + '</b><small>' + sub + '</small></div></div>' +
      legend + '</div>';
  };

  /* ---------- shared totals ---------- */
  FIN.invoiceTotals = function () {
    var billed = 0, paid = 0, unpaid = 0, late = 0, lateCount = 0, paidCount = 0;
    FIN.invoices.forEach(function (r) {
      billed += r.amount;
      if (r.state === 'Paid') { paid += r.amount; paidCount++; }
      else {
        unpaid += r.amount;
        if (r.state === 'Overdue') { late += r.amount; lateCount++; }
      }
    });
    return { billed: billed, paid: paid, unpaid: unpaid, late: late, lateCount: lateCount, paidCount: paidCount, openCount: FIN.invoices.length - paidCount, count: FIN.invoices.length };
  };

  FIN.expenseTotals = function () {
    var all = 0, open = 0, openCount = 0;
    FIN.expenses.forEach(function (r) {
      all += r.amount;
      if (r.state === 'Approved') { open += r.amount; openCount++; }
    });
    return { all: all, open: open, openCount: openCount, count: FIN.expenses.length };
  };

  FIN.contractTotal = function () {
    return FIN.clients.reduce(function (a, c) { return a + c.v; }, 0);
  };

  /* whole-run wages: officers plus office staff, net of attendance deductions */
  FIN.wageBill = function () {
    var o = FIN.totals(FIN.officers), s = FIN.totals(FIN.office);
    return { net: o.net + s.net, gross: o.gross + s.gross, count: FIN.officers.length + FIN.office.length };
  };
})();
