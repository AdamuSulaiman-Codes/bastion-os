/* ============================================================
   Bastion OS · Console · shared record set
   One source for sites, officers and the day's events.
   ============================================================ */
(function () {
  var B = window.B = window.B || {};

  B.meta = {
    org: 'Spectra Security',
    day: 'Tue 17 Nov',
    now: '08:42',
    posts: 56, filled: 53, officers: 59, bench: 5,
    attendance: 94.6, patrolOnTime: 89, openIncidents: 4, unacked: 5
  };

  /* key, name, area, client, code, posts, patrol %, geo, status, note, map x/y */
  B.sites = [
    { key: 'apapa', name: 'Apapa Terminal 2', area: 'Apapa', client: 'Apapa Ports Ltd', code: 'AT', posts: 12,
      patrols: 96, geo: '160 m', status: 'warn', state: 'One short', last: '08:44', next: '09:00', x: 96, y: 392,
      note: 'North gate is static until the 18:00 relief. Three officers clocked in late after the 07:30 handover.' },
    { key: 'archive', name: 'Archive Annex', area: 'Surulere', client: 'Lagos State Archive', code: 'AA', posts: 4,
      patrols: 82, geo: '70 m', status: 'warn', state: 'One short', last: '08:31', next: '09:10', x: 252, y: 322,
      note: 'Annex entrance has no one on it. Relief requested 06:20, still on the way.' },
    { key: 'cedar', name: 'Cedar Mall', area: 'Yaba', client: 'Cedar Retail Group', code: 'CM', posts: 7,
      patrols: 91, geo: '120 m', status: 'bad', state: 'SOS open', last: 'SOS 08:31', next: 'paused', x: 378, y: 246,
      note: 'SOS open at Gate B since 08:31. Two officers on scene, nobody hurt, statement outstanding.' },
    { key: 'trade', name: 'Trade Centre', area: 'Ikeja', client: 'LTC Holdings', code: 'TC', posts: 10,
      patrols: 93, geo: '200 m', status: 'warn', state: 'Tag dead', last: '08:41', next: '09:05', x: 552, y: 118,
      note: 'Checkpoint 12 has not answered for 26 hours. Dead tag, not a missed round.' },
    { key: 'bourdillon', name: 'Bourdillon', area: 'Ikoyi', client: 'Bourdillon Estates', code: 'BR', posts: 5,
      patrols: 99, geo: '90 m', status: 'ok', state: 'Covered', last: '08:50', next: '09:20', x: 604, y: 452,
      note: 'Every checkpoint on time this week.' },
    { key: 'civic', name: 'Civic Tower', area: 'Victoria Island', client: 'Civic Tower Facilities', code: 'CT', posts: 8,
      patrols: 100, geo: '80 m', status: 'ok', state: 'Covered', last: '08:52', next: '09:30', x: 556, y: 528,
      note: 'Every checkpoint answered this morning. Can spare one officer.' },
    { key: 'admiralty', name: 'Admiralty Estate', area: 'Lekki Phase 1', client: 'Admiralty Heights', code: 'AE', posts: 6,
      patrols: 88, geo: '240 m', status: 'warn', state: 'One short', last: '08:36', next: '09:15', x: 722, y: 496,
      note: 'The overnight gate post has nobody rostered. Six rest-day officers are vetted here.' },
    { key: 'greenfield', name: 'Greenfield School', area: 'Ajah', client: 'Greenfield Academy', code: 'GS', posts: 4,
      patrols: 100, geo: '130 m', status: 'ok', state: 'Covered', last: '08:38', next: '10:00', x: 862, y: 420,
      note: 'Morning drop-off finished 08:20. Pedestrian gate staffed until 16:00.' }
  ];

  /* officer, post, site key, sign-in, state */
  var R = [
    ['Adebayo Ojo','Day supervisor','apapa','05:52','on'],
    ['Ibrahim Musa','North gate','apapa','05:58','on'],
    ['Yakubu Danjuma','Control room','apapa','06:02','on'],
    ['Musa Bello','Gate 1','apapa','06:41','late'],
    ['Emeka Nwankwo','Perimeter','apapa','05:47','on'],
    ['Segun Adeleke','Wharf gate','apapa','05:55','on'],
    ['Hassan Lawal','Yard','apapa','06:38','late'],
    ['Peter Achebe','Patrol','apapa','06:03','on'],
    ['Chidi Okeke','Gate 3','apapa','05:49','on'],
    ['Suleiman Bako','Perimeter','apapa','06:06','on'],
    ['Tunde Kareem','Relief','apapa','06:44','late'],

    ['Chinedu Eze','Day supervisor','civic','05:44','on'],
    ['Emeka Obi','Tower desk','civic','05:51','on'],
    ['Bisi Adeleke','Lobby','civic','05:56','on'],
    ['Amina Yusuf','Visitor lane','civic','05:58','on'],
    ['Kelechi Umeh','Patrol','civic','06:01','on'],
    ['Ngozi Jideofor','Loading dock','civic','05:48','on'],
    ['Femi Olawale','Car park','civic','05:53','on'],
    ['Rita Onuoha','Floor 12','civic','05:57','on'],

    ['Fatima Bello','Day supervisor','cedar','05:46','sos'],
    ['Blessing Uche','Gate B','cedar','05:50','on'],
    ['Samuel Okonkwo','Patrol','cedar','05:55','on'],
    ['Joy Aluko','Retail floor','cedar','05:59','on'],
    ['David Ekong','Car park','cedar','06:04','on'],
    ['Halima Sani','Service gate','cedar','06:00','on'],
    ['Titi Oladipo','Gate C','cedar','05:52','on'],

    ['Ifeanyi Nwosu','Day supervisor','admiralty','05:54','on'],
    ['Bola Akin','Gate 2','admiralty','06:00','on'],
    ['Yusuf Sani','Patrol','admiralty','06:02','on'],
    ['Grace Adeyemi','Gate 1','admiralty','05:57','on'],
    ['Oluwaseun Balogun','Estate loop','admiralty','06:07','on'],

    ['Nnamdi Eze','Day supervisor','trade','05:43','on'],
    ['Chinelo Obi','Loading bay','trade','05:49','on'],
    ['Ibrahim Sule','Retail floor','trade','05:52','on'],
    ['Maryam Bello','Control room','trade','05:55','on'],
    ['Daniel Okafor','Car park','trade','06:01','on'],
    ['Abiodun Salami','Service yard','trade','05:58','on'],
    ['Hauwa Idris','Gate 4','trade','06:03','on'],
    ['Emeka Nwosu','Patrol','trade','05:50','on'],
    ['Tobi Adeyemi','Floor 2','trade','06:05','on'],
    ['Kunle Ajala','Gate 2','trade','05:47','on'],

    ['Sola Adebayo','Day supervisor','bourdillon','05:56','on'],
    ['Kunle Bakare','Main gate','bourdillon','06:00','on'],
    ['Uche Nnamdi','Patrol','bourdillon','05:59','on'],
    ['Zainab Musa','Residence desk','bourdillon','06:02','on'],
    ['Peter Obi','Rear gate','bourdillon','05:54','on'],

    ['Esther Ojo','Day supervisor','greenfield','06:04','on'],
    ['Faith Etim','Pedestrian gate','greenfield','06:08','on'],
    ['Joshua Danjuma','Pick-up gate','greenfield','06:06','on'],
    ['Ruth Nkem','Patrol','greenfield','06:10','on'],

    ['Bashir Adamu','Day supervisor','archive','05:51','on'],
    ['Chika Eze','Annex entrance','archive','—','noshow'],
    ['Andrew Idowu','Patrol','archive','05:58','on'],
    ['Sadiq Bello','Records hall','archive','06:03','on'],

    ['Ngozi Okafor','Patrol officer','bench','—','off'],
    ['Tunde Fashola','Gate officer','bench','—','off'],
    ['Halima Abubakar','Supervisor','bench','—','off'],
    ['Chinedu Obi','Patrol officer','bench','—','off'],
    ['Blessing Eze','Gate officer','bench','—','off']
  ];

  var salaryFor = function (post) { return /supervisor/i.test(post) ? 240000 : /patrol/i.test(post) ? 165000 : 150000; };
  var addedOn = ['Mar 2023', 'Aug 2023', 'Jan 2024', 'Jun 2024', 'Feb 2025'];

  B.roster = R.map(function (r, i) {
    var off = 1001 + i;
    var dormant = r[2] === 'bench';
    return {
      id: 'OFF-' + off, code: String(off).slice(-3), name: r[0], post: r[1], site: r[2], time: r[3], state: r[4],
      phone: '0803 ' + (210 + i) + ' ' + (4010 + i),
      initials: r[0].split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase(),
      photo: null,
      nin: '21' + ('00000000' + (30456789 + i * 13)).slice(-9),
      salary: salaryFor(r[1]),
      shift: dormant ? null : (i % 9 === 0 ? 'night' : 'day'),
      emp: (r[0] === 'Chinedu Obi' || r[0] === 'Blessing Eze') ? 'suspended' : 'active',
      tag: dormant ? null : 'NFC-' + off,
      added: addedOn[i % addedOn.length]
    };
  });

  B.guardCode = function (o) { return o.id.slice(-3); };
  B.avatarHTML = function (o, cls) {
    var c = 'avatar' + (cls ? ' ' + cls : '');
    if (o.photo) return '<img class="' + c + ' ph" src="' + o.photo + '" alt="">';
    return '<span class="' + c + '">' + o.initials + '</span>';
  };

  B.stateLabel = { on: 'On post', late: 'Late', sos: 'SOS', noshow: 'Not in', off: 'Dormant' };

  B.site = function (key) {
    for (var i = 0; i < B.sites.length; i++) if (B.sites[i].key === key) return B.sites[i];
    return null;
  };
  B.crew = function (key) {
    return B.roster.filter(function (o) { return o.site === key; });
  };
  B.onPost = function (key) {
    return B.crew(key).filter(function (o) { return o.state === 'on' || o.state === 'late' || o.state === 'sos'; }).length;
  };

  B.feed = [
    { t: '08:41', site: 'trade', text: 'CP-12 silent 26 hours, tag reported dead', tag: 'Patrol', tone: 'warn' },
    { t: '08:31', site: 'cedar', text: 'SOS raised at Gate B, two officers on scene', tag: 'Incident', tone: 'bad' },
    { t: '08:12', site: 'apapa', text: 'North gate handed over three officers late', tag: 'Attendance', tone: 'warn' },
    { t: '07:58', site: 'archive', text: 'Annex entrance unmanned, relief requested', tag: 'Cover', tone: 'warn' },
    { t: '07:30', site: 'civic', text: 'Day shift signed in, 8 of 8 posts', tag: 'Roster', tone: 'ok' },
    { t: '06:20', site: 'greenfield', text: 'Drop-off gate opened, patrol resumed', tag: 'Site', tone: 'ok' }
  ];

  B.alerts = [
    { id: 'ALT-8841', sev: 'Critical', t: '08:31', site: 'cedar', rule: 'SOS raised from guard app', detail: 'Gate B · Fatima Bello', state: 'Unacked' },
    { id: 'ALT-8839', sev: 'High', t: '08:41', site: 'trade', rule: 'Same checkpoint missed twice', detail: 'CP-12 · 3 rounds', state: 'Unacked' },
    { id: 'ALT-8836', sev: 'High', t: '07:58', site: 'archive', rule: 'Post unmanned past handover', detail: 'Annex entrance · 2h 22m', state: 'Unacked' },
    { id: 'ALT-8834', sev: 'High', t: '06:44', site: 'apapa', rule: 'Three late sign-ins, one shift', detail: 'Gate 1 · Yard · Relief', state: 'Unacked' },
    { id: 'ALT-8831', sev: 'Medium', t: '06:20', site: 'admiralty', rule: 'Night post unrostered', detail: 'Gate 2 · today 18:00', state: 'Unacked' },
    { id: 'ALT-8829', sev: 'Medium', t: '05:58', site: 'cedar', rule: 'Patrol completed outside geofence', detail: 'Round 3 · 240 m', state: 'Acked' },
    { id: 'ALT-8826', sev: 'Low', t: '05:40', site: 'civic', rule: 'Sign-in 4 min before window', detail: 'Lobby · Bisi Adeleke', state: 'Acked' },
    { id: 'ALT-8824', sev: 'Low', t: '05:22', site: 'greenfield', rule: 'Tag read twice in a minute', detail: 'CP-04 · duplicate', state: 'Acked' }
  ];

  /* crawler · one stored threat per incident, outlets merged by the ingest rule */
  B.crawlRun = {
    pass: '08:44', feeds: 6,
    read: 76, matched: 14, located: 9, dated: 7, stored: 4, merged: 3,
    noType: 62, noPlace: 5, undated: 2,
    sources: [
      { name: 'Punch', url: 'https://punchng.com/feed/', t: '08:44', read: 22, matched: 4 },
      { name: 'Vanguard', url: 'https://www.vanguardngr.com/feed/', t: '08:44', read: 18, matched: 3 },
      { name: 'Daily Trust', url: 'https://dailytrust.com/feed/', t: '08:44', read: 12, matched: 3 },
      { name: 'Channels TV', url: 'https://www.channelstv.com/feed/', t: '08:43', read: 10, matched: 2 },
      { name: 'Leadership', url: 'https://leadership.ng/feed/', t: '08:43', read: 9, matched: 1 },
      { name: 'Sahara Reporters', url: 'https://saharareporters.com/rss.xml', t: '08:42', read: 5, matched: 1 }
    ],
    held: [
      { t: '08:43', outlet: 'Vanguard', head: 'Truck queue backs up Wharf Road after container gate closes', reason: 'No crime type' },
      { t: '08:31', outlet: 'Punch', head: 'Street lights out along Awolowo Road after a feeder fault', reason: 'No crime type' },
      { t: '08:12', outlet: 'Daily Trust', head: 'Robbery suspects arrested after a chase on the expressway', reason: 'No location' },
      { t: '08:09', outlet: 'Leadership', head: 'Police parade robbery suspects in Ikeja', reason: 'Unreadable date' }
    ]
  };

  B.crawler = [
    { id: 'THR-1042', t: '08:36', site: 'apapa', area: 'Apapa', km: 0.4, dist: '400 m',
      head: 'Armed robbers raid a fuel station in Apapa, cart away cash',
      body: 'Gang arrived on three motorcycles, held the attendants and left towards Creek Road. No arrest reported.',
      source: 'Punch', crime: 'Robbery', kw: 'armed robbers',
      region: 'Lagos', lga: 'Apapa', town: '', precision: 'LGA area centre', coords: '6.4480, 3.3620',
      outlets: [
        { outlet: 'Punch', t: '08:36', url: 'https://punchng.com/feed/' },
        { outlet: 'Daily Trust', t: '08:39', url: 'https://dailytrust.com/feed/' },
        { outlet: 'Vanguard', t: '08:41', url: 'https://www.vanguardngr.com/feed/' }
      ],
      state: 'New' },
    { id: 'THR-1041', t: '08:22', site: 'cedar', area: 'Yaba', km: 0.15, dist: '150 m',
      head: 'Hoodlums attack traders at the Yaba market gate, two injured',
      body: 'Traders said the group came from the railway line and left before police reached the gate. Two people treated at the scene.',
      source: 'Channels TV', crime: 'Armed attack', kw: 'hoodlums',
      region: 'Lagos', lga: '', town: 'Yaba', precision: 'town centre', coords: '6.5095, 3.3711',
      outlets: [
        { outlet: 'Channels TV', t: '08:22', url: 'https://www.channelstv.com/feed/' },
        { outlet: 'Leadership', t: '08:24', url: 'https://leadership.ng/feed/' }
      ],
      link: { label: 'INC-2415 · SOS at Gate B', href: 'incidents.html' },
      state: 'Watching' },
    { id: 'THR-1040', t: '08:05', site: 'trade', area: 'Ikeja', km: 0.9, dist: '900 m',
      head: 'Thieves steal copper cables from an Ikeja substation',
      body: 'Staff found the cable trench open at 06:30. Supply to two streets is off while the run is replaced.',
      source: 'Punch', crime: 'Theft', kw: 'steal',
      region: 'Lagos', lga: 'Ikeja', town: '', precision: 'LGA area centre', coords: '6.6018, 3.3515',
      outlets: [{ outlet: 'Punch', t: '08:05', url: 'https://punchng.com/feed/' }],
      state: 'New' },
    { id: 'THR-1039', t: '07:48', site: 'admiralty', area: 'Lekki', km: 0.6, dist: '600 m',
      head: 'Police uncover an advance-fee scam office in Lekki',
      body: 'Four people detained and 12 laptops recovered. The office has rented desks in a serviced block since October.',
      source: 'Daily Trust', crime: 'Fraud', kw: 'scam',
      region: 'Lagos', lga: '', town: 'Lekki', precision: 'town centre', coords: '6.4478, 3.4723',
      outlets: [{ outlet: 'Daily Trust', t: '07:48', url: 'https://dailytrust.com/feed/' }],
      state: 'New' },
    { id: 'THR-1035', t: '21:12', day: '16 Nov', site: 'archive', area: 'Surulere', km: 1.2, dist: '1.2 km',
      head: 'Burglars break into a school in Surulere, cart away computers',
      body: 'Entry through a rear window between 01:00 and 04:00. The school is two streets from the annex boundary.',
      source: 'Leadership', crime: 'Theft', kw: 'burglars',
      region: 'Lagos', lga: '', town: 'Surulere', precision: 'town centre', coords: '6.4969, 3.3481',
      outlets: [{ outlet: 'Leadership', t: '21:12', url: 'https://leadership.ng/feed/' }],
      state: 'Sent' },
    { id: 'THR-1034', t: '19:40', day: '16 Nov', site: 'cedar', area: 'Yaba', km: 0.9, dist: '900 m',
      head: 'Phone snatchers on a motorcycle injure a rider in Yaba',
      body: 'The rider was treated at a clinic on Herbert Macaulay Way. The plate was partly covered.',
      source: 'Vanguard', crime: 'Robbery', kw: 'snatchers',
      region: 'Lagos', lga: '', town: 'Yaba', precision: 'town centre', coords: '6.5095, 3.3711',
      outlets: [{ outlet: 'Vanguard', t: '19:40', url: 'https://www.vanguardngr.com/feed/' }],
      state: 'Watching' },
    { id: 'THR-1033', t: '18:05', day: '16 Nov', site: 'trade', area: 'Ikeja', km: 0.6, dist: '600 m',
      head: 'Hoodlums burn a stall at the Ikeja computer village',
      body: 'Traders put the fire out before the service arrived. One stall lost its stock.',
      source: 'Punch', crime: 'Armed attack', kw: 'hoodlums',
      region: 'Lagos', lga: 'Ikeja', town: '', precision: 'LGA area centre', coords: '6.6018, 3.3515',
      outlets: [{ outlet: 'Punch', t: '18:05', url: 'https://punchng.com/feed/' }],
      state: 'Dismissed' }
  ];

  B.incidents = [
    { id: 'INC-2415', sev: 'Critical', site: 'cedar', title: 'SOS at Gate B', t: '08:31', state: 'Open', owner: 'Fatima Bello', detail: 'Guard pressed SOS during a dispute at the Gate B turnstile. Two officers on scene, no injuries. Lagos Police notified 08:34, statement outstanding.' },
    { id: 'INC-2412', sev: 'High', site: 'trade', title: 'Forced service door, level 2', t: '07:12', state: 'Investigating', owner: 'Nnamdi Eze', detail: 'Door frame bent, no entry gained. CCTV pulled for 06:40–07:10, contractor list requested from LTC facilities.' },
    { id: 'INC-2409', sev: 'Medium', site: 'apapa', title: 'Unauthorised vehicle at wharf gate', t: '06:02', state: 'Investigating', owner: 'Adebayo Ojo', detail: 'Vehicle turned back at 06:09. Plate logged, client notified.' },
    { id: 'INC-2407', sev: 'Medium', site: 'archive', title: 'Fence damage, north boundary', t: '21:40', state: 'Open', owner: 'Bashir Adamu', detail: 'Two panels pushed in. Temporary weld at 22:15, permanent repair booked.' },
    { id: 'INC-2404', sev: 'Low', site: 'civic', title: 'Cleared package left at lobby', t: '19:22', state: 'Resolved', owner: 'Chinedu Eze', detail: 'Owner collected 19:48. Log closed.' }
  ];

  B.range = [
    { key: '7', label: 'Last 7 days' },
    { key: '30', label: 'Last 30 days' },
    { key: 'month', label: 'This month' },
    { key: 'quarter', label: 'This quarter' }
  ];
})();
