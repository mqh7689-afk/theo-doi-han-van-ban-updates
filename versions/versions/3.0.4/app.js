(function () {
  'use strict';

  function upgradeShellV304(){
    if(document.querySelector('.svg-sprite'))return; // Index.html mới đã có vỏ và CSS.
    var old=document.querySelector('.shell');if(!old)return;
    var unit=(old.querySelector('.brand strong')||{}).textContent||'Đơn vị sử dụng';
    var theme=document.createElement('style');theme.id='theme-v304';
    theme.textContent="\n/* ============================================================\n   V3.0.4 — XANH THAN ĐIỀU HÀNH. CSS thuần, không tải framework.\n   Giữ nguyên các ID, form, API; chỉ thay đổi lớp trình bày.\n   ============================================================ */\n:root{--ink:#eaf3ff;--navy:#081b38;--teal:#3b8fff;--sea:#102d53;--bg:#07162f;--border:#2a4164;--muted:#a4b9d7;--red:#ff6879;--orange:#ffba59;--ok:#49d99a;--shadow:0 12px 32px rgba(0,7,28,.16)}\nhtml{font-size:14px}.brand strong{color:#f7fbff!important}body{background:#07162f;color:var(--ink);font-family:system-ui,-apple-system,\"Segoe UI\",Arial,sans-serif}\n.svg-sprite{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}\n.ico{width:20px;height:20px;flex-shrink:0;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;vertical-align:middle}\n.shell{align-items:stretch;min-height:100dvh}\n.side{width:236px;min-height:100dvh;position:sticky;top:0;align-self:flex-start;background:linear-gradient(170deg,#102d5b 0%,#0a1c3a 58%,#102e5b 100%);border-right:1px solid #23436b;padding:25px 12px 20px;color:#eef6ff}\n.brand{padding:0 11px 24px;gap:12px;align-items:flex-start}.brand .mark{width:45px;height:45px;display:grid;place-items:center;border-radius:12px;background:linear-gradient(135deg,#187dff,#1151a5);box-shadow:0 6px 20px #167df544;color:#fff}.brand .mark .ico{width:29px;height:29px}\n.brand strong{font-size:16px;line-height:1.3;letter-spacing:-.25px}.brand small{display:block;margin-top:6px;max-width:140px;white-space:normal;line-height:1.3;color:#b7cde8;font-size:11px}\n.navigation{display:grid;gap:4px}.navbtn{font-size:13px;letter-spacing:.1px;padding:12px 14px;margin:0;font-weight:650;color:#d9e7fb;border-radius:11px;gap:13px}.navbtn .ico{width:19px;height:19px}\n.navbtn:hover,.navbtn.active{background:linear-gradient(100deg,#1678f6,#1452b2);color:#fff}.navbtn.active{box-shadow:0 8px 20px rgba(0,70,183,.28)}\n.sidefoot{border:0;color:#8eadd9;line-height:1.65;font-size:10px;padding:15px 10px}.sidefoot strong{color:#b6d2f5;font-size:11px}.sidebar-emblem{display:block;font-size:42px;line-height:1.4;opacity:.3;margin-bottom:6px}\n.main{min-width:0;background:radial-gradient(ellipse at 50% 0,#122f5a 0,#081c3a 38%,#07162f 76%)}\n.topbar{padding:17px clamp(18px,2.4vw,34px);min-height:89px;gap:18px;background:#0b1d3bcf;border-bottom:1px solid #28436a;flex-wrap:wrap}\n.topbar h1{font-size:21px;letter-spacing:-.55px;color:#f5f9ff;margin:2px 0 0}.topbar .desc{font-size:11px;color:#b3c8e8;margin:5px 0 0}.header-eyebrow{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:#65b7ff}.mid-dot{color:#708dae}\n.header-actions{display:flex;align-items:center;justify-content:flex-end;gap:10px;flex-wrap:wrap}.topsearch{display:flex;align-items:center;gap:9px;width:min(310px,30vw);min-width:175px;background:#172b4d;border:1px solid #314b6d;border-radius:11px;padding:8px 11px;color:#b9ccdf;box-shadow:inset 0 1px 1px #ffffff08}\n.topsearch .ico{width:18px;height:18px}.topsearch input{flex:1;width:80px;min-width:50px;border:0;outline:0;background:transparent;color:#eef5ff;box-shadow:none!important;font-size:12px}.topsearch input::placeholder{color:#b6c5dd}.key-hint{white-space:nowrap;font-size:10px;padding:4px 5px;border-radius:5px;background:#304563;color:#d2e0f1}\n.today-head{border:1px solid #2a4972;background:#152c51;border-radius:10px;color:#b4d2f4;font-size:11px;padding:10px 11px;white-space:nowrap}\n.btn{background:#176be6;border-color:#287cf1;color:#fff;min-height:39px;border-radius:10px;box-shadow:none}.btn:hover{background:#217cf5;filter:none}.btn.secondary{background:#173252;border-color:#385678;color:#d9eaff}.btn.secondary:hover{background:#244466}.btn.danger{color:#ffb4bd;border-color:#7b4053;background:#4d203a}\n.content{max-width:1610px;margin:0 auto;padding:24px clamp(17px,2.4vw,34px) 50px;animation:fade-content .16s ease both}\n@keyframes fade-content{from{opacity:.87;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}\n.card{background:linear-gradient(160deg,#172e53,#102342);border:1px solid #2c4468;box-shadow:0 8px 24px #00000013;border-radius:17px;color:#ebf4ff}\n.panel{padding:19px;margin-top:0}.panel h2,.panelhead h2{color:#eff7ff;font-size:16px;font-weight:760}.panel p{color:#aec1da}.panelhead{margin-bottom:15px;flex-wrap:wrap}.panelhead .btn{font-size:11px}\n.stats{grid-template-columns:repeat(4,minmax(0,1fr));gap:15px;margin:0 0 20px}\nbutton.stat.stat-link{min-height:162px;padding:22px 20px 17px;border:1px solid #ffffff1e;color:#fff;box-shadow:0 9px 24px #020d2470;position:relative;isolation:isolate;transition:transform .16s ease,box-shadow .16s ease}\nbutton.stat.stat-link:hover{transform:translateY(-3px);box-shadow:0 13px 26px #020d24a0}\nbutton.stat.stat-link:focus-visible{outline:3px solid #d3e7ff;outline-offset:3px}\nbutton.stat.stat-link .acc{display:none}\nbutton.stat.stat-link.total{background:linear-gradient(130deg,#268cf9,#064bb2)}\nbutton.stat.stat-link.processing{background:linear-gradient(130deg,#f8ab21,#b9670c)}\nbutton.stat.stat-link.urgent{background:linear-gradient(130deg,#f44e64,#ac283e)}\nbutton.stat.stat-link.done{background:linear-gradient(130deg,#19b777,#087047)}\n.stat .stat-top{display:flex;align-items:center;gap:13px}.stat .stat-icon{width:43px;height:43px;border-radius:12px;background:#ffffff22;display:grid;place-items:center}.stat .stat-icon .ico{width:24px;height:24px}\nbutton.stat.stat-link .lbl{font-size:13px;color:#fff;opacity:.98;font-weight:750}\nbutton.stat.stat-link .num{font-size:35px;color:#fff;font-weight:850;margin:8px 0 2px;line-height:1.06}\nbutton.stat.stat-link .hint{color:#fff;font-size:11px;opacity:.92;margin-top:7px;line-height:1.4}\nbutton.stat.stat-link .hint:after{content:''}button.stat.stat-link::before,button.stat.stat-link::after{content:none!important;display:none!important}\n.stat .stat-watermark{position:absolute;right:11px;bottom:14px;opacity:.12;z-index:-1}.stat .stat-watermark .ico{width:87px;height:87px;stroke-width:1.4}\n.dashboard-layout{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(350px,1fr);gap:17px;align-items:start}.dashboard-side{display:grid;gap:17px;min-width:0}\n.dashboard-main{min-width:0;min-height:380px}.panel-link{font-size:12px;color:#85ccff;background:none;border:0;font-weight:650;padding:5px;cursor:pointer}.panel-link:hover{text-decoration:underline;color:#fff}\n.tbl{min-width:610px}.tbl th{background:#243d64;color:#dceafa;font-size:11px;text-transform:none;letter-spacing:0;border-bottom:1px solid #36527b;padding:13px 12px}.tbl th:first-child{border-radius:9px 0 0 9px}.tbl th:last-child{border-radius:0 9px 9px 0}\n.tbl td{color:#e9f2fd;border-bottom:1px solid #2b4363;font-size:12px;padding:14px 12px}.tbl tbody tr:hover{background:#1c3a63}.tbl .idline{color:#a9bad3}\n.titlelink{color:#ecf4ff;font-weight:680}.titlelink:hover{color:#86ceff}\n.pill{font-size:10px;padding:5px 9px}.pill.bad{background:#7b283d;color:#ffd5dc}.pill.warn{background:#704919;color:#ffe2a8}.pill.ok{background:#135c47;color:#adffd7}.pill.soft{background:#173f75;color:#b4dcff}.pill.neutral{background:#344764;color:#e2eaf6}\n.due-card{background:#142c4b;border:1px solid #2a4165}.due-calendar{background:#203d62;color:#d4e9ff}.due-meta small{color:#adbfda}\n.dash-due-list{display:grid;gap:0}.dash-due{display:flex;align-items:flex-start;gap:11px;padding:11px 3px;border-bottom:1px solid #2b4263}.dash-due:last-child{border-bottom:0}.dash-due .dash-due-bar{height:42px;width:5px;border-radius:9px;flex-shrink:0;background:#f0b23c}.dash-due.over .dash-due-bar,.dash-due.bad .dash-due-bar{background:#ff566c}.dash-due .dash-due-info{min-width:0;flex:1}.dash-due .dash-due-info button{color:#eef7ff;font-size:12px;font-weight:720}.dash-due .dash-due-info small{display:block;color:#b6cae4;font-size:11px;line-height:1.55;margin-top:4px}.dash-due .dash-due-info strong{color:#ff9b9e}.dash-due .dash-due-chevron{font-size:20px;color:#8caed7}\n.mini-cal{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:3px;margin:9px 0 12px}.mini-cal .week{font-size:10px;color:#98afd2;text-align:center;padding:5px 0}.mini-cal .day{min-height:30px;text-align:center;border:0;background:transparent;color:#dcecff;border-radius:8px;position:relative;padding:5px 0;font-size:11px;cursor:pointer}\n.mini-cal .day:hover,.mini-cal .day.selected{background:#1e79fa;color:#fff}.mini-cal .day.today{outline:1px solid #5ab8ff;outline-offset:-2px}.mini-cal .day i{width:4px;height:4px;display:block;position:absolute;bottom:1px;left:calc(50% - 2px);border-radius:50%;background:#37dfa2}.mini-cal .day:disabled{cursor:default}.mini-cal .day:disabled:hover{background:transparent}.calendar-overview{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:15px}.mini-cal-tools{display:flex;justify-content:space-between;align-items:center;gap:8px}.mini-cal-tools strong{font-size:12px}.mini-cal-tools button{border:0;color:#a5d5ff;background:#26466c;border-radius:8px;padding:5px 9px;cursor:pointer}.mini-agenda{border-left:1px solid #314b72;padding-left:15px;display:flex;flex-direction:column;gap:10px}.mini-agenda-title{font-size:11px;font-weight:750;color:#b1d4fd}.mini-event{padding:9px 0;border-bottom:1px solid #2b466b;display:flex;gap:9px;align-items:flex-start}.mini-event:last-child{border-bottom:0}.mini-event .dot{width:7px;height:7px;flex-shrink:0;background:#25cf85;border-radius:50%;margin-top:6px}.mini-event strong{font-size:11px;color:#ecf7ff}.mini-event button{color:#d4e8fd;font-size:11px}.mini-event small{font-size:10px;display:block;color:#9ab8d8;margin-top:4px}\n.search{background:#132b4a;color:#f0f7ff;border:1px solid #365577}.search::placeholder{color:#acc2db}.search:focus,input:focus,textarea:focus,select:focus{border-color:#54a6ff;box-shadow:0 0 0 3px #2b93fa22}\n.chip{background:#193457;color:#c5d9f3;border-color:#35567a}.chip:hover{background:#264c7e}.chip.selected{background:#176ef0;color:#fff;border-color:#3488ff}\n.report-grid{margin-top:16px}.report-box{background:linear-gradient(130deg,#173253,#112542);border:1px solid #2c476f;color:#e8f4ff}.report-box h3{color:#f4f8ff}.minirow{border-color:#2c4669}.minirow span{color:#afc4df}.progress-track{background:#385579}.progress-fill{background:#30c88b}\n.agenda-row{background:#1a3759;border-color:#335478}.agenda-clock{background:#25486e;color:#b8e0ff}.agenda-main small{color:#b6cce4}.agenda-row.deadline{background:#49381e;border-color:#765938}.agenda-row.deadline .agenda-clock{background:#70501f;color:#ffdf9e}\n.empty{color:#b6c8e0}.empty p{color:#afc0d6}.subdued{color:#afc7e2}.note{background:#163e56;color:#c2e4e9}.note.warning{background:#50391f;color:#ffe4ba}\n.cal-toolbar strong{color:#eef6ff}.cal-week{color:#a8bed9}.cal-day{background:#142c4a;color:#d7e8fa;border-color:#345273}.cal-day.emptyday{background:#0e213e}.cal-day.is-today{background:#174a80;border-color:#4a9fff}.cal-event{background:#185044;color:#adf2d5}.cal-deadline{background:#665027;color:#ffecb9}.cal-deadline:hover{background:#856431}\n.modal{background:#f7faff;color:#1a3452;border:1px solid #d5e3f1}.modalhead{border-color:#d9e4ee}.modalhead h2{color:#18375a}.modalfoot{border-color:#d9e4ee}.modal .titlelink{color:#144d85}.modal .titlelink:hover{color:#176be6}.modal .note{background:#e3f5f8;color:#205862}.modal .note.warning{background:#fff5de;color:#805417}.modal .btn.secondary{background:#f4f8ff;color:#244267;border-color:#c5d8e8}.modal .btn.danger{background:#fff3f4;color:#b32439;border-color:#e7b8c0}\n.modal .field label{color:#3b5a77}.modal .field input,.modal .field textarea,.modal .field select{color:#173448;background:#fff}.modal .candidate{background:#fff;color:#1c3450}.modal .candidate p,.modal .help{color:#617b90}\n.overlay{background:#030e20b8}.modal{box-shadow:0 24px 70px #0007}.overlay.on .modal{animation:show-modal .16s ease-out both}@keyframes show-modal{from{opacity:.85;transform:translateY(7px)}to{opacity:1;transform:translateY(0)}}\n.spinner{background:#071a32c8;color:#e6f5ff}.toast{background:#12345b;box-shadow:0 12px 34px #0007}.toast.show{animation:fade-content .16s ease both}\n.filter-title{color:#eaf4ff}.field label{color:#c4daf4}.field input,.field textarea,.field select{background:#f6f9fe;color:#183754;border:1px solid #bbcfe4}\n.settings{max-width:820px}.settings .field label{color:#cde0f8}.settings h2{color:#edf6ff}\n.report-overview{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.report-tile{padding:18px}.report-tile .v{font-size:30px;font-weight:800;color:#fff}.report-tile small{display:block;color:#b3c8e2;margin-top:5px}.bar-track{background:#2d4668;height:9px;border-radius:9px;overflow:hidden;margin-top:10px}.bar-fill{height:100%;background:linear-gradient(90deg,#2699ee,#32d5ae);border-radius:9px}.report-detail{display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-top:15px}.report-detail .panel{margin:0}\n@media(max-width:1230px){.dashboard-layout{grid-template-columns:minmax(0,1fr)}.dashboard-side{grid-template-columns:1fr 1fr}.today-head{display:none}.topsearch{width:min(290px,28vw)}}\n@media(max-width:1050px){.topbar{flex-wrap:wrap}.topsearch{width:min(320px,45vw)}.stats{grid-template-columns:repeat(2,minmax(0,1fr))}.dashboard-side{grid-template-columns:1fr 1fr}}\n@media(max-width:700px){.side{position:static;min-height:0;width:100%;border-right:0;padding:9px 11px 12px}.brand{padding:3px 2px 10px;align-items:center}.brand .mark{width:31px;height:31px}.brand .mark .ico{width:20px;height:20px}.brand strong{font-size:13px}.brand strong br{display:none}.brand small{font-size:10px;max-width:none;margin-top:2px}.navigation{display:flex;overflow-x:auto;padding-bottom:2px}.navbtn{min-width:max-content;font-size:11px;padding:9px 12px}.navbtn .ico{width:15px;height:15px}.sidefoot{display:none}.topbar{padding:13px;min-height:0;gap:10px}.topbar h1{font-size:17px}.header-eyebrow{display:none}.header-actions{width:100%;justify-content:space-between}.topsearch{width:auto;min-width:0;flex:1}.key-hint{display:none}.content{padding:15px 12px 35px}.stats{gap:10px;margin-bottom:13px}.stat.stat-link{min-height:137px}.stat .stat-watermark .ico{width:52px;height:52px}.stat .stat-top{gap:7px}.stat .stat-icon{width:34px;height:34px}.stat .stat-icon .ico{width:20px;height:20px}button.stat.stat-link{padding:13px 12px 12px}button.stat.stat-link .lbl{font-size:11px}button.stat.stat-link .num{font-size:27px}.dashboard-side{grid-template-columns:1fr;gap:13px}.dashboard-layout{gap:13px}.panel{padding:14px}.panelhead{flex-direction:row;align-items:center}.calendar-overview{grid-template-columns:1fr}.mini-agenda{border-left:0;border-top:1px solid #314b72;padding:12px 0 0}.mini-cal .day{min-height:38px}.tbl{min-width:570px}.report-overview{grid-template-columns:1fr 1fr}.report-detail{grid-template-columns:1fr}.topsearch input{font-size:12px}}\n@media(max-width:385px){button.stat.stat-link{min-height:135px}.stat .stat-icon{display:none}.topbar .btn{padding:9px 11px}.report-overview{grid-template-columns:1fr}}\n@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}\n";
    document.head.appendChild(theme);
    old.insertAdjacentHTML('beforebegin',"<svg class=\"svg-sprite\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\"><defs>\n<symbol id=\"i-home\" viewBox=\"0 0 24 24\"><path d=\"m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z\"/></symbol>\n<symbol id=\"i-doc\" viewBox=\"0 0 24 24\"><path d=\"M6 2h8l5 5v14H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z\"/><path d=\"M14 2v6h5M8 12h8M8 16h8\"/></symbol>\n<symbol id=\"i-files\" viewBox=\"0 0 24 24\"><rect x=\"7\" y=\"3\" width=\"13\" height=\"16\" rx=\"2\"/><path d=\"M4 7H3v14h13v-2M10 8h7M10 12h7\"/></symbol>\n<symbol id=\"i-clock\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2\"/></symbol>\n<symbol id=\"i-bell\" viewBox=\"0 0 24 24\"><path d=\"M18 8a6 6 0 0 0-12 0c0 8-3 7-3 9h18c0-2-3-1-3-9M10 21h4\"/></symbol>\n<symbol id=\"i-check\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"m8 12 3 3 5-6\"/></symbol>\n<symbol id=\"i-calendar\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M7 2v6M17 2v6M3 10h18\"/></symbol>\n<symbol id=\"i-chart\" viewBox=\"0 0 24 24\"><path d=\"M5 20V10h4v10M10 20V4h4v16M15 20v-8h4v8M3 20h18\"/></symbol>\n<symbol id=\"i-settings\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"m19 13 2-1-2-1-.6-2 1-2-2-2-2 1-2-.6-1-2-1 2-2 .6-2-1-2 2 1 2-.6 2-2 1 2 1 .6 2-1 2 2 2 2-1 2 .6 1 2 1-2 2-.6 2 1 2-2-1-2z\"/></symbol>\n<symbol id=\"i-search\" viewBox=\"0 0 24 24\"><circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\"/><path d=\"m16 16 5 5\"/></symbol>\n<symbol id=\"i-plus\" viewBox=\"0 0 24 24\"><path d=\"M12 4v16M4 12h16\"/></symbol>\n<symbol id=\"i-arrow\" viewBox=\"0 0 24 24\"><path d=\"M4 12h16m-6-6 6 6-6 6\"/></symbol>\n<symbol id=\"i-sand\" viewBox=\"0 0 24 24\"><path d=\"M6 2h12M6 22h12M7 2c0 7 10 7 10 10s-10 3-10 10M17 2c0 7-10 7-10 10s10 3 10 10\"/></symbol>\n</defs></svg>\n<div class=\"shell\">\n <aside class=\"side\">\n  <div class=\"brand\"><div class=\"mark\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><use href=\"#i-doc\"></use></svg></div><div class=\"brand-words\"><strong>Theo dõi hạn<br>văn bản</strong><small></small></div></div>\n  <nav class=\"navigation\" id=\"nav\" aria-label=\"Điều hướng ứng dụng\">\n   <button type=\"button\" class=\"navbtn active\" data-view=\"home\"><svg class=\"ico\"><use href=\"#i-home\"></use></svg> Tổng quan</button>\n   <button type=\"button\" class=\"navbtn\" data-view=\"documents\"><svg class=\"ico\"><use href=\"#i-doc\"></use></svg> Văn bản</button>\n   <button type=\"button\" class=\"navbtn\" data-view=\"deadlines\"><svg class=\"ico\"><use href=\"#i-clock\"></use></svg> Mốc hạn</button>\n   <button type=\"button\" class=\"navbtn\" data-view=\"calendar\"><svg class=\"ico\"><use href=\"#i-calendar\"></use></svg> Lịch công tác</button>\n   <button type=\"button\" class=\"navbtn\" data-view=\"reports\"><svg class=\"ico\"><use href=\"#i-chart\"></use></svg> Báo cáo</button>\n   <button type=\"button\" class=\"navbtn\" data-view=\"settings\"><svg class=\"ico\"><use href=\"#i-settings\"></use></svg> Cài đặt</button>\n  </nav>\n  <div class=\"sidefoot\"><span class=\"sidebar-emblem\">▤</span><strong>Ứng dụng của đơn vị</strong><br>Dữ liệu lưu riêng trên Google Sheets<br>Không lưu tệp PDF/Word gốc.</div>\n </aside>\n <main class=\"main\">\n  <header class=\"topbar\">\n   <div class=\"headtitle\"><div class=\"header-eyebrow\"></div><h1>Theo dõi hạn văn bản</h1><div class=\"desc\"><span id=\"pageTitle\">Tổng quan</span><span class=\"mid-dot\"> · </span><span id=\"pageDesc\">Theo dõi hạn văn bản đến và đi</span></div></div>\n   <div class=\"header-actions\"><label class=\"topsearch\"><svg class=\"ico\"><use href=\"#i-search\"></use></svg><input type=\"search\" id=\"globalSearch\" placeholder=\"Tìm số, ký hiệu, trích yếu...\" aria-label=\"Tìm kiếm văn bản\"><span class=\"key-hint\">Ctrl + K</span></label><span class=\"today-head\" id=\"todayHead\">Hôm nay</span><button class=\"btn\" id=\"newDocBtn\"><svg class=\"ico\"><use href=\"#i-plus\"></use></svg><span class=\"desktoponly\">Tiếp nhận văn bản</span><span class=\"mobileonly\">Thêm</span></button></div>\n  </header>\n  <div class=\"content\" id=\"content\"><div class=\"card empty\">Đang kết nối bảng dữ liệu...</div></div>\n </main>\n</div>");
    old.remove();
    var brand=document.querySelector('.brand-words small');if(brand)brand.textContent=unit;
    var header=document.querySelector('.header-eyebrow');if(header)header.textContent=unit;
  }
  upgradeShellV304();

  var $ = function (selector) { return document.querySelector(selector); };
  var container = $('#content');
  var app = {
    docs: [], dues: [], events: [], calendarMonth: '', today: '', email: '', search: '', view: 'home',
    filter: 'all', webAppUrl: '', spreadsheetUrl: '', editing: null, selectedDues: []
  };
  var titles = {
    home: ['Tổng quan', 'Tình hình văn bản và mốc hạn cần xử lý'],
    documents: ['Văn bản', 'Văn bản đến và văn bản đi của đơn vị'],
    reports: ['Báo cáo', 'Thống kê nhanh từ dữ liệu của đơn vị'],
    DEN: ['Văn bản đến', 'Các hạn tham mưu và giải quyết văn bản đến'],
    DI: ['Văn bản đi', 'Các hạn soạn thảo, phát hành và phản hồi'],
    deadlines: ['Mốc hạn', 'Nhiều mốc hạn có thể thuộc cùng một văn bản'],
     calendar: ['Lịch công tác','Lịch họp, lịch làm việc và hạn văn bản'],
    settings: ['Cài đặt', 'Nhắc hạn qua email trên điện thoại']
  };
  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (ch) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
    });
  }
  function short(v,n) { v=String(v||''); return v.length>n?v.slice(0,n)+'…':v; }
  function vnDate(v) {
    v=String(v||'').slice(0,10);
    return /^\d{4}-\d{2}-\d{2}$/.test(v)?v.slice(8,10)+'/'+v.slice(5,7)+'/'+v.slice(0,4):'—';
  }
  function daysLeft(v) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(v||'') || !app.today) return 9999;
    return Math.round((Date.parse(v+'T00:00:00Z')-Date.parse(app.today+'T00:00:00Z'))/86400000);
  }
  function status(m) {
    if (m.TrangThai==='HOAN_THANH') return {label:'Hoàn thành',cls:'ok'};
    var n=daysLeft(m.NgayHan);
    if (n<0) return {label:'Quá hạn '+Math.abs(n)+' ngày',cls:'bad'};
    if (n===0) return {label:'Hạn hôm nay',cls:'bad'};
    if (n<=3) return {label:'Còn '+n+' ngày',cls:'warn'};
    if (n<=7) return {label:'Còn '+n+' ngày',cls:'soft'};
    return {label:'Còn '+n+' ngày',cls:'neutral'};
  }
  function note(text,isError) {
    var el=$('#toast');
    el.textContent=text;
    el.style.background=isError?'#aa3946':'#17615c';
    el.classList.add('show');
    clearTimeout(note.timer);
    note.timer=setTimeout(function(){el.classList.remove('show');},5000);
  }
  function busy(on) { $('#busy').classList.toggle('show',!!on); }
  function api(name) {
    var args=Array.prototype.slice.call(arguments,1);
    return new Promise(function(resolve,reject){
      if (!window.google || !google.script || !google.script.run) {
        reject(new Error('Hãy mở ứng dụng bằng đường dẫn Apps Script đã triển khai.'));
        return;
      }
      var run=google.script.run.withSuccessHandler(resolve).withFailureHandler(function(e){
        reject(new Error(e && e.message ? e.message : String(e)));
      });
      try { run[name].apply(run,args); } catch (error) { reject(error); }
    });
  }
  function docOf(id) { return app.docs.find(function(d){return d.ID===id;}) || {}; }
  function kpis() {
    var active=app.dues.filter(function(d){return d.TrangThai!=='HOAN_THANH';});
    return {
      soon:active.filter(function(d){var n=daysLeft(d.NgayHan);return n>=1&&n<=7;}).length,
      now:active.filter(function(d){return daysLeft(d.NgayHan)===0;}).length,
      over:active.filter(function(d){return daysLeft(d.NgayHan)<0;}).length,
      done:app.dues.length-active.length
    };
  }
  function uiIcon(name) {return '<svg class="ico" aria-hidden="true"><use href="#i-'+name+'"></use></svg>';}
  function card(name,number,style,desc,act,icon) {
    return '<button type="button" class="card stat stat-link '+style+'" data-act="'+(act==='documents'?'showView':'kpiFilter')+'" data-value="'+esc(act)+'" aria-label="'+esc(name)+': '+esc(number)+'. '+esc(desc)+'">'+
      '<span class="stat-top"><span class="stat-icon">'+uiIcon(icon)+'</span><span class="lbl">'+esc(name)+'</span></span>'+
      '<span class="num">'+esc(number)+'</span><span class="hint">'+esc(desc)+'</span><span class="stat-watermark">'+uiIcon(icon)+'</span></button>';
  }
  function pill(m) {var s=status(m);return '<span class="pill '+s.cls+'">'+esc(s.label)+'</span>';}
  function duesByDoc() {
    var map=Object.create(null);
    app.dues.forEach(function(d){(map[d.VanBanID]||(map[d.VanBanID]=[])).push(d);});
    return map;
  }
  function docPill(doc,byDoc) {
    var a=(byDoc||duesByDoc())[doc.ID]||[];
    if (!a.length) return '<span class="pill neutral">Chưa có hạn</span>';
    if (a.every(function(x){return x.TrangThai==='HOAN_THANH';})) return '<span class="pill ok">Đã hoàn thành</span>';
    var active=a.filter(function(x){return x.TrangThai!=='HOAN_THANH';});
    active.sort(function(a,b){return (a.NgayHan||'').localeCompare(b.NgayHan||'');});
    return pill(active[0]);
  }
  function setView(view) { app.view=view;app.search='';app.filter='all';render(); }
  function render() {
    var t=titles[app.view]||titles.home;
    $('#pageTitle').textContent=t[0];$('#pageDesc').textContent=t[1];
    $('#todayHead').textContent='Hôm nay '+vnDate(app.today);
    $('#newDocBtn').classList.toggle('hidden',app.view==='settings'||app.view==='reports');
    var activeNav=app.view==='DEN'||app.view==='DI'?'documents':app.view;
    document.querySelectorAll('.navbtn').forEach(function(el){el.classList.toggle('active',el.dataset.view===activeNav);});
    var global=$('#globalSearch');if(global&&document.activeElement!==global)global.value=app.search;
    if(app.view==='home')home();
    else if(app.view==='documents'||app.view==='DEN'||app.view==='DI')documents();
    else if(app.view==='deadlines')deadlines();
    else if(app.view==='calendar')calendarV32();
    else if(app.view==='reports')reports();
    else settings();
  }
  function miniCalendar() {
    var month=app.dashboardMonth||app.today.slice(0,7);
    var year=Number(month.slice(0,4)),m=Number(month.slice(5,7));
    var first=(new Date(Date.UTC(year,m-1,1)).getUTCDay()+6)%7;
    var count=new Date(Date.UTC(year,m,0)).getUTCDate();
    var day=app.dashboardDay||app.today;
    var entries=Object.create(null);
    app.events.forEach(function(e){if(e.TrangThai!=='HUY'&&e.Ngay&&(e.Ngay.slice(0,7)===month))entries[e.Ngay]=true;});
    var html='<div class="calendar-overview"><div><div class="mini-cal-tools"><button type="button" data-act="homePrev" aria-label="Tháng trước">‹</button><strong>Tháng '+m+'/'+year+'</strong><button type="button" data-act="homeNext" aria-label="Tháng sau">›</button></div><div class="mini-cal">';
    ['T2','T3','T4','T5','T6','T7','CN'].forEach(function(x){html+='<span class="week">'+x+'</span>';});
    for(var i=0;i<first;i++)html+='<span class="day"></span>';
    for(var n=1;n<=count;n++){
      var iso=month+'-'+String(n).padStart(2,'0');
      html+='<button type="button" class="day '+(iso===app.today?'today ':'')+(iso===day?'selected':'')+'" data-act="homeDay" data-value="'+iso+'" aria-label="Xem lịch '+n+'/'+m+'/'+year+'">'+n+(entries[iso]?'<i></i>':'')+'</button>';
    }
    html+='</div></div><div class="mini-agenda"><div class="mini-agenda-title">Công tác ngày '+vnDate(day)+'</div>';
    var onDay=app.events.filter(function(e){return e.Ngay===day&&e.TrangThai!=='HUY';}).sort(function(a,b){return (a.GioBatDau||'').localeCompare(b.GioBatDau||'');});
    if(onDay.length){onDay.slice(0,4).forEach(function(e){html+='<div class="mini-event"><span class="dot"></span><div><strong>'+esc(e.GioBatDau||'')+' – '+esc(e.GioKetThuc||'')+'</strong><div><button class="titlelink" data-act="calEdit" data-id="'+esc(e.ID)+'">'+esc(short(e.NoiDung,88))+'</button></div><small>'+esc(short(e.DiaDiem||'Lịch công tác',65))+'</small></div></div>';});}
    else html+='<div class="empty" style="padding:18px 0">Chưa có lịch công tác ngày này.</div>';
    html+='</div></div>';return html;
  }
  function home() {
    var byDoc=duesByDoc(),a=kpis(),activeDocs=app.docs.filter(function(d){return (byDoc[d.ID]||[]).some(function(x){return x.TrangThai!=='HOAN_THANH';});}).length;
    var recent=app.docs.slice().sort(function(x,y){return (y.NgayTao||'').localeCompare(x.NgayTao||'');}).slice(0,6);
    var next=app.dues.filter(function(x){return x.TrangThai!=='HOAN_THANH';}).sort(function(x,y){return (x.NgayHan||'').localeCompare(y.NgayHan||'');});
    var near=next.filter(function(x){var n=daysLeft(x.NgayHan);return n>=0&&n<=7;}).length;
    var body='<div class="stats">'+card('Tổng quan',app.docs.length,'total','Tổng văn bản đang theo dõi','documents','files')+
      card('Đang xử lý',activeDocs,'processing','Văn bản có mốc hạn chưa xong','open','sand')+
      card('Sắp đến hạn',near,'urgent','Mốc hạn trong 0–7 ngày','soon','bell')+
      card('Đã hoàn thành',a.done,'done','Mốc hạn đã hoàn thành','done','check')+'</div>';
    body+='<div class="dashboard-layout"><section class="card panel dashboard-main"><div class="panelhead"><h2>'+uiIcon('doc')+' &nbsp;Văn bản gần đây</h2><button class="panel-link" data-act="showView" data-value="documents">Xem tất cả →</button></div>';
    if(recent.length){
      body+='<div class="tablewrap"><table class="tbl"><thead><tr><th>Số ký hiệu</th><th>Trích yếu</th><th>Cơ quan ban hành</th><th>Hạn xử lý</th><th>Trạng thái</th></tr></thead><tbody>';
      recent.forEach(function(d){
        var ongoing=(byDoc[d.ID]||[]).filter(function(m){return m.TrangThai!=='HOAN_THANH';}).sort(function(x,y){return (x.NgayHan||'').localeCompare(y.NgayHan||'');});
        body+='<tr><td><strong>'+esc(short(d.SoKyHieu||'Chưa có số',32))+'</strong><div class="idline">'+(d.Loai==='DI'?'Văn bản đi':'Văn bản đến')+'</div></td><td><button class="titlelink" data-act="doc" data-id="'+esc(d.ID)+'">'+esc(short(d.TrichYeu,104))+'</button></td><td>'+esc(short(d.CoQuan||'—',48))+'</td><td>'+(ongoing.length?vnDate(ongoing[0].NgayHan):'—')+'</td><td>'+docPill(d,byDoc)+'</td></tr>';
      });body+='</tbody></table></div>';
    } else body+='<div class="empty">Chưa có văn bản. Nhấn “Tiếp nhận văn bản” để bắt đầu.</div>';
    body+='</section><div class="dashboard-side"><section class="card panel"><div class="panelhead"><h2>'+uiIcon('bell')+' &nbsp;Mốc hạn cần lưu ý</h2><button class="panel-link" data-act="showView" data-value="deadlines">Xem tất cả →</button></div><div class="dash-due-list">';
    if(next.length){next.slice(0,4).forEach(function(m){var d=docOf(m.VanBanID),n=daysLeft(m.NgayHan),style=n<=0?'bad':n<=7?'warn':'neutral';
      var info=n<0?'Quá hạn '+Math.abs(n)+' ngày':n===0?'Đến hạn hôm nay':'Còn '+n+' ngày';
      body+='<div class="dash-due '+style+'"><span class="dash-due-bar"></span><div class="dash-due-info"><button class="titlelink" data-act="due" data-id="'+esc(m.ID)+'">'+esc(short(d.SoKyHieu||'Văn bản',24))+' – '+esc(short(m.TenMoc,70))+'</button><small>Hạn: '+vnDate(m.NgayHan)+' · <strong>'+esc(info)+'</strong></small></div><span class="dash-due-chevron">›</span></div>';
    });}else body+='<div class="empty">Không có mốc hạn đang mở.</div>';
    body+='</div></section><section class="card panel"><div class="panelhead"><h2>'+uiIcon('calendar')+' &nbsp;Lịch công tác</h2><button class="panel-link" data-act="calAdd">+ Thêm lịch</button></div>'+miniCalendar()+'</section></div></div>';
    container.innerHTML=body;
  }
  function documents() {
    var byDoc=duesByDoc();
    var q=app.search.toLowerCase();
    var filtered=app.docs.filter(function(d){return (app.view==='documents'||d.Loai===app.view) && ((d.SoKyHieu||'')+' '+(d.TrichYeu||'')+' '+(d.CoQuan||'')).toLowerCase().includes(q);});
    filtered.sort(function(a,b){return (b.NgayTao||'').localeCompare(a.NgayTao||'');});
    var html='<div class="toolbar"><input id="search" class="search" placeholder="Tìm số, ký hiệu, cơ quan, trích yếu" value="'+esc(app.search)+'"><div class="filters">';
    [['documents','Tất cả'],['DEN','Văn bản đến'],['DI','Văn bản đi']].forEach(function(opt){html+='<button class="chip '+(app.view===opt[0]?'selected':'')+'" data-act="showView" data-value="'+opt[0]+'">'+opt[1]+'</button>';});
    html+='</div><span class="subdued">'+filtered.length+' văn bản</span></div><section class="card panel"><div class="panelhead"><h2>'+((titles[app.view]||titles.documents)[0])+'</h2></div>';
    if(filtered.length){
      html+='<div class="tablewrap"><table class="tbl"><thead><tr><th>Văn bản</th><th>Loại</th><th>Cơ quan</th><th>Ngày ban hành</th><th>Mốc hạn còn mở</th></tr></thead><tbody>';
      filtered.forEach(function(d){var due=byDoc[d.ID]||[];
        html+='<tr><td><button class="titlelink" data-act="doc" data-id="'+esc(d.ID)+'">'+esc(short(d.TrichYeu,105))+'</button><div class="idline">'+esc(d.SoKyHieu||'—')+'</div></td><td><span class="pill '+(d.Loai==='DI'?'ok':'soft')+'">'+(d.Loai==='DI'?'Đi':'Đến')+'</span></td><td>'+esc(short(d.CoQuan,55))+'</td><td>'+vnDate(d.NgayBanHanh)+'</td><td>'+due.filter(function(x){return x.TrangThai!=='HOAN_THANH';}).length+' / '+due.length+'</td></tr>';
      });html+='</tbody></table></div>';
    }else html+='<div class="empty">Chưa có văn bản phù hợp.</div>';
    container.innerHTML=html+'</section>';bindSearch(documents);
  }
  function reports() {
    var count=app.docs.length, incoming=app.docs.filter(function(d){return d.Loai==='DEN';}).length;
    var done=app.dues.filter(function(d){return d.TrangThai==='HOAN_THANH';}).length;
    var active=app.dues.length-done, late=app.dues.filter(function(d){return d.TrangThai!=='HOAN_THANH'&&daysLeft(d.NgayHan)<0;}).length;
    var pct=app.dues.length?Math.round(100*done/app.dues.length):0;
    function reportTile(n,title,desc){return '<section class="card report-tile"><strong class="v">'+n+'</strong><small>'+esc(title)+'</small><small>'+esc(desc)+'</small></section>';}
    var html='<div class="report-overview">'+reportTile(count,'Tổng văn bản','Số liệu từ VAN_BAN')+reportTile(app.dues.length,'Tổng mốc hạn','Số liệu từ MOC_HAN')+reportTile(pct+'%','Tỷ lệ mốc hạn hoàn thành','Tính trên toàn bộ mốc hạn')+'</div>';
    html+='<div class="report-detail"><section class="card panel"><h2>Phân loại văn bản</h2><div class="minirow"><span>Văn bản đến</span><strong>'+incoming+'</strong></div><div class="minirow"><span>Văn bản đi</span><strong>'+(count-incoming)+'</strong></div><div class="bar-track"><div class="bar-fill" style="width:'+(count?Math.round(100*incoming/count):0)+'%"></div></div></section>';
    html+='<section class="card panel"><h2>Tiến độ giải quyết mốc hạn</h2><div class="minirow"><span>Đã hoàn thành</span><strong>'+done+'</strong></div><div class="minirow"><span>Chưa hoàn thành</span><strong>'+active+'</strong></div><div class="minirow"><span>Trong đó quá hạn</span><strong>'+late+'</strong></div><div class="bar-track"><div class="bar-fill" style="width:'+pct+'%"></div></div></section></div>';
    html+='<div class="note" style="margin-top:16px">Thống kê được tính từ dữ liệu hiện có trong Google Sheets của người dùng. Đây là bảng tổng hợp trực tiếp trên Web App, không sửa bảng nguồn.</div>';
    container.innerHTML=html;
  }
  function deadlines() {
    var list=app.dues.filter(function(m){
      if(app.filter==='open'&&m.TrangThai==='HOAN_THANH')return false;
      if(app.filter==='today'&&(m.TrangThai==='HOAN_THANH'||daysLeft(m.NgayHan)!==0))return false;
      if(app.filter==='over'&&(m.TrangThai==='HOAN_THANH'||daysLeft(m.NgayHan)>=0))return false;
      if(app.filter==='soon'&&(m.TrangThai==='HOAN_THANH'||daysLeft(m.NgayHan)<0||daysLeft(m.NgayHan)>7))return false;
      if(app.filter==='done'&&m.TrangThai!=='HOAN_THANH')return false;
      var d=docOf(m.VanBanID);
      return (m.TenMoc+' '+m.CanCu+' '+d.TrichYeu+' '+d.SoKyHieu).toLowerCase().includes(app.search.toLowerCase());
    }).sort(function(a,b){return a.NgayHan.localeCompare(b.NgayHan);});
    var html='<div class="toolbar"><input id="search" class="search" placeholder="Tìm mốc hạn..." value="'+esc(app.search)+'"><div class="filters">';
    [['all','Tất cả'],['open','Chưa xong'],['soon','Trong 7 ngày'],['today','Hôm nay'],['over','Quá hạn'],['done','Hoàn thành']].forEach(function(opt){
      html+='<button class="chip '+(app.filter===opt[0]?'selected':'')+'" data-act="filter" data-value="'+opt[0]+'">'+opt[1]+'</button>';
    });html+='</div></div><section class="card panel"><div class="panelhead"><h2>'+list.length+' mốc hạn</h2></div>';
    if(list.length){
      html+='<div class="tablewrap"><table class="tbl"><thead><tr><th>Mốc hạn / Văn bản</th><th>Ngày hạn</th><th>Trạng thái</th><th>Thao tác</th></tr></thead><tbody>';
      list.forEach(function(m){
        var doc=docOf(m.VanBanID);
        html+='<tr><td><button class="titlelink" data-act="due" data-id="'+esc(m.ID)+'">'+esc(short(m.TenMoc,100))+'</button><div class="idline">'+esc(short(doc.SoKyHieu||doc.TrichYeu||'Văn bản',75))+'</div>'+(doc.ID?'<button type="button" class="btn secondary tiny" style="margin-top:7px" data-act="doc" data-id="'+esc(doc.ID)+'">Xem văn bản</button>':'')+'</td><td>'+vnDate(m.NgayHan)+'</td><td>'+pill(m)+'</td><td><button class="btn secondary tiny" data-act="toggle" data-id="'+esc(m.ID)+'">'+(m.TrangThai==='HOAN_THANH'?'Mở lại':'Hoàn thành')+'</button></td></tr>';
      });html+='</tbody></table></div>';
    }else{html+='<div class="empty">Không có mốc hạn phù hợp.</div>';}
    container.innerHTML=html+'</section>';bindSearch(deadlines);
  }
  function bindSearch(renderer) {
    var search=$('#search');if(!search)return;
    search.addEventListener('input',function(){app.search=search.value;});
    search.addEventListener('change',renderer);
    search.addEventListener('keydown',function(e){if(e.key==='Enter')renderer();});
  }
  
function settings() {
  container.innerHTML =
    '<section class="card panel settings">' +
    '<h2>Nhận nhắc hạn qua email</h2>' +
    '<p>Email sẽ nhận thông báo các mốc sắp đến hạn, đến hạn và quá hạn.</p>' +
    '<div class="formgrid">' +
      '<div class="field span">' +
        '<label>Email nhận thông báo</label>' +
        '<input id="reminderEmail" type="email" value="' +
          esc(app.email) + '" placeholder="Địa chỉ Gmail">' +
      '</div>' +
    '</div>' +
    '<div style="display:flex;flex-wrap:wrap;gap:10px;margin:15px 0">' +
      '<button class="btn" data-act="saveEmail">Lưu email</button>' +
      '<button class="btn secondary" data-act="testEmail">Gửi email kiểm tra</button>' +
      '<button class="btn" data-act="enableReminder">Bật nhắc hạn hằng ngày</button>' +
    '</div>' +
    '<div class="note warning">Email tự động chỉ được gửi khi có mốc cần cảnh báo. Hãy bật thông báo Gmail trên điện thoại để nhận biết thư mới.</div>' +
    '</section>';
}

  function modal(title,body,footer) {
    $('#modalTitle').textContent=title;$('#modalBody').innerHTML=body;$('#modalFoot').innerHTML=footer||'';
    $('#modal').classList.add('on');
  }
  function closeModal(){ $('#modal').classList.remove('on'); }
  function input(label,id,type,value,span) {
    return '<div class="field'+(span?' span':'')+'"><label>'+label+'</label><input id="'+id+'" type="'+(type||'text')+'" value="'+esc(value||'')+'"></div>';
  }
  // Hiển thị ngày theo chuẩn Việt Nam, giữ ISO yyyy-MM-dd khi gửi máy chủ.
  function toDisplayDateVN(value) {
    var x=String(value||'').trim();
    if(/^\d{4}-\d{2}-\d{2}$/.test(x))return x.slice(8,10)+'/'+x.slice(5,7)+'/'+x.slice(0,4);
    return x;
  }
  function toIsoDateVN(value) {
    var x=String(value||'').trim(),m;
    if(!x)return '';
    if((m=x.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/))){
      var iso=m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0');
      return isValidDate(iso)?iso:null;
    }
    return /^\d{4}-\d{2}-\d{2}$/.test(x)&&isValidDate(x)?x:null;
  }
  function setIssueDate(iso) {
    if(iso)$('#dNgay').value=toDisplayDateVN(iso);
  }
  function docForm(doc,type) {
    doc=doc||{};app.editing=doc.ID||null;app.selectedDues=[];app.currentPdfFile=null;
    var body='<div class="formgrid"><div class="field"><label>Loại văn bản</label><select id="dLoai"><option value="DEN">Văn bản đến</option><option value="DI">Văn bản đi</option></select></div>'+
      input('Số, ký hiệu','dSo','text',doc.SoKyHieu)+'<div class="field"><label>Ngày ban hành (ngày/tháng/năm)</label><input id="dNgay" type="text" inputmode="numeric" placeholder="dd/mm/yyyy" maxlength="10" value="'+esc(toDisplayDateVN(doc.NgayBanHanh))+'"></div>'+input('Cơ quan ban hành','dCoQuan','text',doc.CoQuan)+
      '<div class="field span"><label>Trích yếu *</label><textarea id="dTrich" rows="2">'+esc(doc.TrichYeu||'')+'</textarea></div>'+
      '<div class="field span"><label>Liên kết đến hồ sơ công việc (nếu có)</label><input id="dLink" value="'+esc(doc.LienKetHoSo||'')+'"></div>'+
      '<div class="field span"><label>Nội dung chữ cần đối chiếu</label><textarea id="dText" rows="6" placeholder="Có thể dán nội dung chữ hoặc chọn PDF, DOCX, TXT">'+esc(doc.NoiDungChu||'')+'</textarea></div></div>'+
      '<div class="drop" id="drop"><strong>Chọn hoặc kéo thả PDF, DOCX, TXT</strong><span class="small">Đọc tạm trên máy, không lưu tệp gốc</span><input id="docFile" type="file" accept=".pdf,.docx,.txt" hidden></div>'+
      '<div style="margin-top:10px;display:flex;flex-wrap:wrap;gap:8px"><button class="btn secondary tiny" id="parseText">Gợi ý mốc hạn</button><button class="btn secondary tiny" id="parseOutgoing">Nhận diện văn bản</button><button class="btn secondary tiny" id="ocrFirst" style="display:none">Đọc ảnh trang đầu (OCR)</button></div>'+
      '<div class="help" style="margin-top:6px">Bộ đọc PDF: V3.32 (sửa ghép ngày ký số)</div><div id="suggestions"></div><div class="note" style="margin-top:10px">Mốc hạn do lãnh đạo giao nhưng không có trong văn bản: dùng “Thêm mốc” và ghi rõ căn cứ tại ô câu văn bản (ví dụ: “Lãnh đạo giao ngày…”, không ghi là hạn trong văn bản).</div><div class="sectionline">Mốc hạn cần theo dõi <button class="btn secondary tiny" id="addDue">＋ Thêm mốc</button></div><div id="inlineDues"></div>';
    modal(doc.ID?'Sửa thông tin văn bản':'Tiếp nhận văn bản',body,'<button class="btn secondary" id="cancel">Đóng</button><button class="btn" id="saveDoc">Lưu văn bản</button>');
    $('#dLoai').value=doc.Loai||type||'DEN';
    $('#cancel').onclick=closeModal;$('#saveDoc').onclick=saveDoc;
    $('#parseText').onclick=function(){parseSuggestions(false);};$('#parseOutgoing').onclick=function(){applyUnifiedMetadata(false);};$('#addDue').onclick=addDueEditor;$('#ocrFirst').onclick=ocrFirstPage;
    $('#drop').onclick=function(){$('#docFile').click();};
    $('#docFile').onchange=function(e){if(e.target.files[0])readFile(e.target.files[0]);};
    $('#drop').ondragover=function(e){e.preventDefault();};
    $('#drop').ondrop=function(e){e.preventDefault();if(e.dataTransfer.files[0])readFile(e.dataTransfer.files[0]);};
    renderDueEditors();
  }
  function readDueEditors() {
  var rows = [];
  document.querySelectorAll('.draft-due').forEach(function(el) {
    var index = Number(el.dataset.idx);
    var ngayNhap = $('#dateDue' + index).value.trim();

    rows.push({
      TenMoc: $('#nameDue' + index).value,
      NgayHan: toIsoDateVN(ngayNhap),
      CanCu: $('#evidenceDue' + index).value
    });
  });
  app.selectedDues = rows;
}
  function renderDueEditors() {
    var body='';app.selectedDues.forEach(function(m,i){
      body+='<div class="candidate draft-due" data-idx="'+i+'"><div class="formgrid">'+
        input('Tên mốc hạn *','nameDue'+i,'text',m.TenMoc)+input('Ngày hạn *','dateDue'+i,'text',m.NgayHan ? vnDate(m.NgayHan) : '')+
        '<div class="field span"><label>Câu văn bản làm căn cứ</label><textarea id="evidenceDue'+i+'" rows="2">'+esc(m.CanCu||'')+'</textarea></div></div><button type="button" class="btn secondary tiny" data-act="removeDraft" data-idx="'+i+'">Bỏ mốc</button></div>';
    });
    $('#inlineDues').innerHTML=body||'<div class="help">Chưa có hạn. Có thể thêm sau khi lưu văn bản.</div>';
  }
  function addDueEditor() {
    readDueEditors();app.selectedDues.push({TenMoc:'',NgayHan:'',CanCu:''});renderDueEditors();
  }
  function isValidDate(value) {
    if(!/^\d{4}-\d{2}-\d{2}$/.test(value||''))return false;
    var p=value.split('-').map(Number);var d=new Date(Date.UTC(p[0],p[1]-1,p[2]));
    return d.getUTCFullYear()===p[0]&&d.getUTCMonth()+1===p[1]&&d.getUTCDate()===p[2];
  }
  function cleanPdfText(text) {
    return String(text||'').normalize('NFC').replace(/\u00a0/g,' ')
      .replace(/[ \t]{2,}/g,' ').replace(/\s+([,.;:!?])/g,'$1')
      .split('\n').map(function(x){return x.trim();}).filter(Boolean).join('\n');
  }
  function normalizeHeaderLine(line){
    // Chỉ ghép các chữ cái bị PDF tách trong từ khóa hành chính; tránh ghép toàn bộ văn bản.
    return String(line||'').normalize('NFC')
      .replace(/\b([A-ZÀ-ỴĐ])(?:\s+([A-ZÀ-ỴĐ])){2,}\b/g,function(m){
        var parts=m.split(/\s+/);return parts.every(function(t){return t.length===1;})?parts.join(''):m;
      })
      .replace(/[ \t]{2,}/g,' ').trim();
  }
  function wordsCompact(s){return String(s||'').normalize('NFC').replace(/[^\p{L}\p{N}]/gu,'').toUpperCase();}
  function findAgency(lines){
    var patterns=[
      /(?:ỦY\s*BAN\s*NHÂN\s*DÂN|UỶ\s*BAN\s*NHÂN\s*DÂN)\s*(?:(?:TỈNH|THÀNH\s*PHỐ|HUYỆN|XÃ|PHƯỜNG)\s+[^\n]{2,65})?/i,
      /(?:SỞ\s+(?:GIÁO\s*DỤC|VĂN\s*HÓA|NỘI\s*VỤ|Y\s*TẾ|KHOA\s*HỌC|TÀI\s*CHÍNH|NÔNG\s*NGHIỆP)[^\n]{0,75})/i,
      /(?:BỘ\s+(?:GIÁO\s*DỤC|NỘI\s*VỤ|VĂN\s*HÓA|Y\s*TẾ|KHOA\s*HỌC)[^\n]{0,75})/i
    ];
    for(var i=0;i<Math.min(lines.length,18);i++){
      var line=normalizeHeaderLine(lines[i]);
      if(/CỘNG\s*HÒA|ĐỘC\s*LẬP|SỐ\s*[:：]|KÍNH\s*GỬI/i.test(line))continue;
      for(var j=0;j<patterns.length;j++){
        var m=line.match(patterns[j]);if(!m)continue;
        var v=m[0].split(/\s{3,}|\s+(?=CỘNG|Độc\s+lập|Số\s*:|Thái\s+Nguyên\s*,\s*ngày)/i)[0].trim();
        if(v.length>8&&v.length<100)return v;
      }
    }
    return '';
  }
  function extractDocNumber(lines){
    for(var i=0;i<Math.min(lines.length,28);i++){
      var l=normalizeHeaderLine(lines[i]);
      var m=l.match(/(?:^|\s)S\s*ố\s*[:：]\s*(?:\n\s*)?(\d{1,6}\s*\/\s*[A-ZÀ-ỴĐa-zđ0-9]+(?:\s*[-–]\s*[A-ZÀ-ỴĐa-zđ0-9]+){0,6})/i);
      if(!m && /\bS\s*ố\s*[:：]\s*$/.test(l) && i+1<lines.length){
        m=normalizeHeaderLine(lines[i+1]).match(/^(\d{1,6}\s*\/\s*[A-ZÀ-ỴĐa-zđ0-9]+(?:\s*[-–]\s*[A-ZÀ-ỴĐa-zđ0-9]+){0,6})/i);
      }
      if(m){
        var v=m[1].replace(/\s*\/\s*/g,'/').replace(/\s*[-–]\s*/g,'-').replace(/\s+/g,'');
        if(v.length<=60)return v;
      }
    }
    return '';
  }
  function extractIssueDate(lines){
    // Chỉ đọc ngày trong vùng tiêu đề; loại các dòng căn cứ pháp lý, số công văn dẫn chiếu.
    for(var i=0;i<Math.min(lines.length,20);i++){
      var l=normalizeHeaderLine(lines[i]);
      if(/căn\s+cứ|theo\s+công\s+văn|thực\s+hiện\s+công\s+văn|kính\s+gửi/i.test(l))continue;
      var m=l.match(/(?:^|[,，\s])ngày\s+(\d{1,2})\s+tháng\s+(\d{1,2})\s+năm\s+(20\d{2})\b/i)
        ||l.match(/(?:^|[,，\s])ngày\s+(\d{1,2})\s*[\/.\-]\s*(\d{1,2})\s*[\/.\-]\s*(20\d{2})\b/i);
      if(m){var date=m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0');if(isValidDate(date))return date;}
    }
    return '';
  }
  function extractSummary(lines){
    for(var i=0;i<Math.min(lines.length,45);i++){
      var l=normalizeHeaderLine(lines[i]);
      var m=l.match(/(?:^|\s)(?:V\s*\/\s*v|Về\s+việc)\s*[:：]?\s*(.*)$/i);
      if(!m)continue;
      var fragments=[m[1].trim()];
      for(var j=i+1;j<Math.min(lines.length,i+6);j++){
        var next=normalizeHeaderLine(lines[j]);
        if(/^(Kính\s+gửi|Căn\s+cứ|Số\s*:|Nơi\s+nhận|Điều\s+1|QUYẾT\s+ĐỊNH|CỘNG\s+HÒA|ỦY\s+BAN)/i.test(next))break;
        if(fragments.join(' ').length>240)break;
        fragments.push(next);
      }
      var summary=fragments.join(' ').replace(/\s+/g,' ').trim();
      if(summary.length>=8)return summary.slice(0,350);
    }
    // Không lấy nội dung phần mở đầu làm trích yếu nếu không rõ trường V/v.
    return '';
  }
  function pdfHeaderMetadata(items,pageHeight,pageWidth){
    // Đọc khung tiêu đề PDF theo tọa độ. Hỗ trợ các số/chữ ký số bị tách thành text-item riêng.
    const width=pageWidth||595, height=pageHeight||842, mid=width*0.48;
    const atoms=(items||[]).filter(it=>it&&it.str&&it.str.trim()&&it.transform).map(it=>({
      text:it.str.trim().normalize('NFC'),x:it.transform[4],y:height-it.transform[5],w:it.width||0
    })).filter(it=>it.y>35&&it.y<205);
    function rows(items,tolerance){
      const result=[];
      items.slice().sort((a,b)=>a.y-b.y||a.x-b.x).forEach(it=>{
        let target=result.find(row=>Math.abs(row.y-it.y)<=tolerance);
        if(!target){target={y:it.y,items:[]};result.push(target);}
        target.items.push(it);
      });
      return result.sort((a,b)=>a.y-b.y).map(row=>{
        row.items.sort((a,b)=>a.x-b.x);
        let text='',end=null;
        row.items.forEach(it=>{if(text&&end!==null&&it.x-end>2)text+=' ';text+=it.text;end=Math.max(end===null?0:end,it.x+it.w);});
        return {y:row.y,text:text.replace(/\s+/g,' ').trim(),items:row.items};
      });
    }
    const left=rows(atoms.filter(it=>it.x<mid&&it.y<165),5);
    const right=rows(atoms.filter(it=>it.x>=mid&&it.y<165),5);
    const all=rows(atoms.filter(it=>it.y<165),5);
    function compact(s){return s.replace(/\s*\/\s*/g,'/').replace(/\s*[-–]\s*/g,'-').replace(/\s+/g,'').toUpperCase();}
    let SoKyHieu='',NgayBanHanh='',CoQuan='',TrichYeu='';
    // Dòng 'Số:' có thể được in ở y=109, nhưng giá trị 6300 thuộc lớp chữ riêng ở y=111.
    let sr=left.find(r=>/S\s*ố\s*[:：]/i.test(r.text));
    if(sr){
      const near=atoms.filter(it=>it.x<mid&&Math.abs(it.y-sr.y)<=7).sort((a,b)=>a.x-b.x);
      const t=near.map(it=>it.text).join(' ');
      const n=t.match(/\b(\d{1,7})\b/);
      const suffix=t.match(/\/\s*([A-Za-zÀ-Ỵà-ỵĐđ0-9]+(?:\s*[-–]\s*[A-Za-zÀ-Ỵà-ỵĐđ0-9]+)*)/);
      if(n&&suffix)SoKyHieu=compact(n[1]+'/'+suffix[1]);
    }
    // Dòng ngày có thể bị lệch baseline 2-4 điểm (ngày 30 nằm y=114, phần còn lại y=111).
    const dr=right.find(r=>/ngày/i.test(r.text)&&/tháng/i.test(r.text)&&/năm/i.test(r.text));
    if(dr){
      const near=atoms.filter(it=>it.x>=mid&&Math.abs(it.y-dr.y)<=7).sort((a,b)=>a.x-b.x);
      const t=near.map(it=>it.text).join(' ').replace(/\s+/g,' ');
      const match=t.match(/ngày\s*(\d{1,2})\s*tháng\s*(\d{1,2})\s*năm\s*(20\d{2})/i);
      if(match){const d=match[3]+'-'+match[2].padStart(2,'0')+'-'+match[1].padStart(2,'0');if(isValidDate(d))NgayBanHanh=d;}
    }
    // Chỉ dùng cột trái TRƯỚC dòng số văn bản, loại quốc hiệu ở cột phải.
    const top=left.filter(r=>r.y<(sr?sr.y-8:115));
    const child=top.find(r=>/^(SỞ|PHÒNG|BAN|TRUNG TÂM)\s/i.test(r.text));
    const parent=top.find(r=>/^(UBND|ỦY BAN|UỶ BAN|BỘ)\s/i.test(r.text));
    if(child){CoQuan=child.text.replace(/\s+/g,' ');if(parent&&/^UBND\s+TỈNH\s+THÁI\s+NGUYÊN$/i.test(parent.text)&&/^SỞ GIÁO DỤC VÀ ĐÀO TẠO$/i.test(CoQuan))CoQuan+=' tỉnh Thái Nguyên';}
    else if(parent){const next=top.find(r=>r.y>parent.y&&r.y-parent.y<32&&/^(XÃ|PHƯỜNG|TỈNH|HUYỆN)\s+/i.test(r.text));CoQuan=parent.text+(next?' '+next.text:'');}
    // Trích yếu nhiều dòng nằm dưới dòng số, trong cột trái.
    const start=left.findIndex(r=>/^V\s*\/\s*v(?:\s|$)|^Về việc\b/i.test(r.text));
    if(start>=0){
      const parts=[];
      for(let j=start;j<Math.min(start+6,left.length);j++){
        const cur=left[j];if(j>start&&(cur.y-left[j-1].y>24||/^(Kính gửi|Căn cứ|Số:)/i.test(cur.text)))break;
        parts.push(cur.text);
      }
      TrichYeu=parts.join(' ').replace(/^V\s*\/\s*v\s*/i,'').replace(/^Về việc\s*/i,'').replace(/\s+/g,' ').trim();
    }
    return {SoKyHieu,NgayBanHanh,CoQuan,TrichYeu,debugLeft:left.map(x=>x.text).join('\n'),debugRight:right.map(x=>x.text).join('\n')};
  }
  // Bộ nhận diện bổ trợ định dạng văn bản hành chính, dùng chung cho hai loại.
  function outgoingMetaV34(raw, header) {
    const text=String(raw||'').normalize('NFC').replace(/\u00a0/g,' ');
    const lines=text.split(/\r?\n/).map(x=>x.replace(/\s+/g,' ').trim()).filter(Boolean);
    const top=lines.slice(0,65);
    const compact=x=>String(x||'').replace(/\s*\/\s*/g,'/').replace(/\s*[-–—]\s*/g,'-').replace(/\s+/g,'').toUpperCase();
    const clean=x=>String(x||'').replace(/\s+/g,' ').trim();
    const known={SoKyHieu:'',NgayBanHanh:'',CoQuan:'',TrichYeu:''};
    const strong=Object.assign({},header||{});
    // Số văn bản: ưu tiên khu vực gần nhãn "Số", tránh nhặt số công văn viện dẫn ở nội dung.
    for(let i=0;i<Math.min(top.length,28)&&!known.SoKyHieu;i++){
      if(!/(?:^|\s)S\s*ố\s*[:：]?\s*(?:\d|$)/i.test(top[i]))continue;
      const context=[top[i],top[i+1]||'',top[i+2]||''].join(' ');
      const m=context.match(/(?:S\s*ố\s*[:：]?\s*)?(\d{1,7})\s*\/\s*([A-ZÀ-ỴĐa-zđ0-9]{2,}(?:\s*[-–—]\s*[A-ZÀ-ỴĐa-zđ0-9]{1,}){0,7})/i);
      if(m)known.SoKyHieu=compact(m[1]+'/'+m[2]);
    }
    // Một vài PDF ký số đặt nhãn Số và phần số cách nhau trong lớp chữ.
    if(!known.SoKyHieu&&strong.SoKyHieu)known.SoKyHieu=strong.SoKyHieu;
    for(let i=0;i<Math.min(top.length,24)&&!known.NgayBanHanh;i++){
      const cur=top[i];
      if(/căn cứ|theo|kính gửi|thực hiện/i.test(cur))continue;
      const context=[cur,top[i+1]||''].join(' ');
      let m=context.match(/(?:^|[,，\s])ngày\s*(\d{1,2})\s*tháng\s*(\d{1,2})\s*năm\s*(20\d{2})/i)
        || context.match(/(?:^|[,，\s])ngày\s*(\d{1,2})\s*[.\/-]\s*(\d{1,2})\s*[.\/-]\s*(20\d{2})/i);
      if(m){let date=m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0');if(isValidDate(date))known.NgayBanHanh=date;}
    }
    if(!known.NgayBanHanh&&strong.NgayBanHanh)known.NgayBanHanh=strong.NgayBanHanh;
    // Cơ quan: các văn bản đi thường phát hành trực tiếp bởi UBND xã hoặc Phòng VHXH.
    // Giới hạn ở tiêu đề, không lấy cơ quan được kính gửi hoặc nơi nhận.
    const idxNumber=top.findIndex(x=>/^S\s*ố\s*[:：]?/i.test(x));
    let agencyTop=top.slice(0,idxNumber>=0?idxNumber:Math.min(top.length,12));
    agencyTop=agencyTop.filter(x=>!/CỘNG\s*HÒA|ĐỘC\s*LẬP|HẠNH\s*PHÚC|^[–—-]+$|^THÁI\s*NGUYÊN\s*,?\s*ngày/i.test(x));
    let agency=agencyTop.find(x=>/^(?:ỦY|UỶ)\s*BAN\s*NHÂN\s*DÂN\s+(?:XÃ|PHƯỜNG|TỈNH)(?=\s|$)/i.test(x))
      ||agencyTop.find(x=>/^UBND\s+(?:XÃ|PHƯỜNG|TỈNH)(?=\s|$)/i.test(x))
      ||agencyTop.find(x=>/^PHÒNG\s+VĂN\s*H[ÓO]A\s*[-–]\s*XÃ\s*HỘI/i.test(x))
      ||agencyTop.find(x=>/^PHÒNG\s+|^BAN\s+|^TRUNG\s+TÂM\s+/i.test(x));
    if(agency)known.CoQuan=clean(agency.split(/(?=CỘNG\s*HÒA|ĐỘC\s*LẬP)/i)[0]);
    if(!known.CoQuan&&strong.CoQuan)known.CoQuan=strong.CoQuan;
    // Trích yếu: công văn "V/v" và các loại Kế hoạch, Báo cáo, Quyết định, Tờ trình.
    // Không lấy phần "Căn cứ..." và không tự tạo tiêu đề khi thiếu.
    for(let i=0;i<Math.min(top.length,55)&&!known.TrichYeu;i++){
      const x=top[i];
      let m=x.match(/(?:^|\s)(?:V\s*\/\s*v|Về\s+việc)\s*[:：]?\s*(.*)$/i);
      if(!m)continue;
      let parts=[m[1].trim()];
      for(let j=i+1;j<Math.min(top.length,i+5);j++){
        if(/^(Kính\s+gửi|Căn\s+cứ|Nơi\s+nhận|Điều\s+1|QUYẾT\s+ĐỊNH|Số\s*[:：]|ỦY\s+BAN)/i.test(top[j]))break;
        if(parts.join(' ').length>250)break;
        parts.push(top[j]);
      }
      const result=clean(parts.join(' '));if(result.length>=8)known.TrichYeu=result.slice(0,350);
    }
    if(!known.TrichYeu){
      const kind=/^(KẾ\s*HOẠCH|BÁO\s*CÁO|TỜ\s*TRÌNH|QUYẾT\s*ĐỊNH|THÔNG\s*BÁO|GIẤY\s*MỜI|CÔNG\s*VĂN|CHƯƠNG\s*TRÌNH|PHƯƠNG\s*ÁN)$/i;
      for(let i=0;i<Math.min(top.length,55);i++){
        if(!kind.test(top[i]))continue;
        const parts=[];
        for(let j=i+1;j<Math.min(top.length,i+5);j++){
          if(/^(Căn\s+cứ|Kính\s+gửi|Điều\s+1|Nơi\s+nhận|QUYẾT\s+ĐỊNH|Số\s*[:：]|[IVX]+\s*[.\-])/i.test(top[j]))break;
          if(parts.join(' ').length>250)break;
          parts.push(top[j]);
        }
        const result=clean(parts.join(' '));
        if(result.length>=10){known.TrichYeu=result.slice(0,350);break;}
      }
    }
    if(!known.TrichYeu&&strong.TrichYeu)known.TrichYeu=strong.TrichYeu;
    return known;
  }
  // V3.5: Nhận diện chung cả văn bản đến và đi. Cơ quan ban hành chỉ lấy ở đầu trang.
  // V3.6: chỉ nhận cơ quan từ vùng tiêu đề, không ghép quốc hiệu vào tên cơ quan.
  function agencyUnifiedV35(raw,header){
    const clean=s=>String(s||'').normalize('NFC').replace(/\u00a0/g,' ').replace(/\s+/g,' ').trim();
    const left=String((header||{}).debugLeft||'').split(/\r?\n/).map(clean).filter(Boolean);
    const rawLines=String(raw||'').split(/\r?\n/).map(clean).filter(Boolean);
    const number=(header||{}).SoKyHieu||extractDocNumber(rawLines)||'';
    // Chữ CỘNG HÒA có thể bị gộp chung với UBND do PDF đọc hai cột sai thứ tự.
    const forbidden=/(?:CỘNG\s*(?:HÒA|HOÀ)?|HÒA\s*XÃ\s*HỘI|ĐỘC\s*LẬP|HẠNH\s*PHÚC|KÍNH\s*GỬI|NƠI\s*NHẬN|QUỐC\s*HIỆU)/i;
    const normalize=s=>clean(s).replace(/^UBND\s+/i,'ỦY BAN NHÂN DÂN ');
    function sanitize(s){
      let v=normalize(s).split(/(?=CỘNG\s*(?:HÒA|HOÀ)?|ĐỘC\s*LẬP|HẠNH\s*PHÚC|Kính\s*gửi|Số\s*[:：])/i)[0].trim();
      if(forbidden.test(v)||v.length>110)return '';
      if(/^(?:ỦY|UỶ)\s*BAN\s*NHÂN\s*DÂN\s*$/i.test(v))return ''; // chưa có địa danh
      return v;
    }
    function find(lines){
      const stop=lines.findIndex(s=>/^S\s*ố\s*[:：]/i.test(s));
      const top=lines.slice(0,Math.min(stop>=0?stop:lines.length,22));
      const matches=[];
      for(let i=0;i<top.length;i++){
        const s=clean(top[i]), next=clean(top[i+1]||'');
        const candidates=[];
        // Ưu tiên tên cơ quan chuyên môn cấp Sở, Bộ, Phòng ghi trên tiêu đề.
        if(/^(SỞ|BỘ|PHÒNG|TRUNG\s*TÂM|CHI\s*CỤC|VĂN\s*PHÒNG|BAN\s*QUẢN\s*LÝ)\s+[\p{L}]/iu.test(s))candidates.push({value:s,rank:120});
        if(/^(SỞ|BỘ|PHÒNG|TRUNG\s*TÂM|CHI\s*CỤC|VĂN\s*PHÒNG)$/iu.test(s)&&next&&!forbidden.test(next))candidates.push({value:s+' '+next,rank:125});
        // UBND phải đi kèm cấp và địa danh rõ ràng, không chấp nhận 'ỦY BAN NHÂN DÂN CỘNG'.
        if(/^(?:ỦY|UỶ)\s*BAN\s*NHÂN\s*DÂN\s+(XÃ|PHƯỜNG|TỈNH|HUYỆN|THÀNH\s*PHỐ|THỊ\s*TRẤN)\s+[\p{L}]/iu.test(s))candidates.push({value:s,rank:105});
        if(/^(?:ỦY|UỶ)\s*BAN\s*NHÂN\s*DÂN\s*$/i.test(s)&&/^(XÃ|PHƯỜNG|TỈNH|HUYỆN|THÀNH\s*PHỐ|THỊ\s*TRẤN)\s+[\p{L}]/iu.test(next))candidates.push({value:s+' '+next,rank:108});
        if(/^UBND\s+(XÃ|PHƯỜNG|TỈNH|HUYỆN)\s+[\p{L}]/iu.test(s))candidates.push({value:s,rank:105});
        // OCR có thể ghép nhầm tên UBND và quốc hiệu cùng dòng: chỉ lấy mảnh độc lập đủ cấp+địa danh.
        for(const c of candidates){
          const v=sanitize(c.value);
          if(v && !forbidden.test(v) && !/\b(?:CỘNG|HÒA|HOÀ)$/.test(v))matches.push({value:v,rank:c.rank});
        }
      }
      matches.sort((a,b)=>b.rank-a.rank);
      return matches[0]?matches[0].value:'';
    }
    // Ưu tiên khung cột trái PDF. Nếu kết quả trái không phù hợp ký hiệu, thử chữ toàn trang.
    const fromLeft=find(left), fromRaw=find(rawLines);
    const isSoGD=s=>/^SỞ\s+GIÁO\s+DỤC\s+VÀ\s+ĐÀO\s+TẠO/i.test(s);
    const isSoCode=/\/SGD(?:Đ|D)T(?:-|$)/i.test(number);
    if(isSoCode){
      if(isSoGD(fromLeft))return fromLeft;
      if(isSoGD(fromRaw))return fromRaw;
      // Không khẳng định một tên UBND khi số hiệu thuộc Sở Giáo dục và Đào tạo.
      return '';
    }
    if(fromLeft)return fromLeft;
    if(fromRaw)return fromRaw;
    // Không sử dụng header.CoQuan cũ nếu nó đã bị ghép quốc hiệu.
    return '';
  }
  // V3.7: Bốn trường được lấy độc lập. Ngày ban hành phải nằm ở DÒNG ĐỊA DANH,
  // không lấy bất kỳ ngày tháng trong phần giao nhiệm vụ, kể cả ở đầu văn bản.
  function issueDateV37(raw,header){
    const h=header||{};
    // Dữ liệu tách theo toạ độ vùng tiêu đề phải của trang đầu có độ tin cậy cao nhất.
    if(isValidDate(h.NgayBanHanh||''))return h.NgayBanHanh;
    const lines=cleanPdfText(raw).split('\n').slice(0,35);
    const prefix=/(?:^|[\s,])(?:[A-ZÀ-ỴĐ][\p{L}]{1,}(?:\s+[A-ZÀ-ỴĐ][\p{L}]{1,}){0,4})\s*,\s*ngày\s*/iu;
    // Chỉ chấp nhận cụm «<địa danh>, ngày ...»; tuyệt đối không lấy «trước ngày».
    for(let i=0;i<lines.length;i++){
      const line=lines[i].replace(/\s+/g,' ').trim();
      if(/(?:trước|đến|hạn|hoàn thành|báo cáo|gửi về|phải|chậm nhất)\s+ngày/i.test(line))continue;
      const pos=line.search(prefix);
      if(pos<0)continue;
      const part=line.slice(pos);
      const m=part.match(/,\s*ngày\s*(\d{1,2})\s*tháng\s*(\d{1,2})\s*năm\s*(20\d{2})/i)
        ||part.match(/,\s*ngày\s*(\d{1,2})\s*[.\/-]\s*(\d{1,2})\s*[.\/-]\s*(20\d{2})/i);
      if(m){const d=m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0');if(isValidDate(d))return d;}
    }
    return ''; // Không điền bừa ngày chỉ đạo/hạn xử lý.
  }
  // V3.10: Chỉ phân tích dải ngày ở góc PHẢI phía trên trang 1 đã OCR.
  // Chữ số 1 in nghiêng ở một số PDF được OCR đọc thành /, I, l hoặc |.
  // Không áp dụng phép sửa này cho nội dung văn bản / ngày hạn.
  function parseOcrHeaderDateV310(ocrText){
    const ascii=String(ocrText||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/gi,'d')
      .replace(/[\u00a0\u200b]/g,' ').replace(/[ \t]+/g,' ');
    // OCR có thể xuống dòng giữa ngày, tháng và năm nhưng trong phần đầu có dòng địa danh.
    const chunks=ascii.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
    for(let i=0;i<chunks.length;i++){
      const s=chunks.slice(i,i+3).join(' ');
      if(!/\bngay\b/i.test(chunks[i]) || !/\bthang\b/i.test(s) || !/\bnam\b/i.test(s))continue;
      let m=s.match(/\bngay\s*([0-9Iil|/!]{1,3})\s*thang\s*(\d{1,2})\s*nam\s*(20\d{2})\b/i);
      if(!m)continue;
      const raw=m[1];
      // Chỉ chỉnh ký tự OCR giống số 1 khi nằm TRONG cụm ngày ban hành.
      const dayText=raw.replace(/[Iil|/!]/g,'1');
      if(!/^\d{1,2}$/.test(dayText))continue;
      const d=m[3]+'-'+m[2].padStart(2,'0')+'-'+dayText.padStart(2,'0');
      if(isValidDate(d))return d;
    }
    return '';
  }
  // V3.11: Khi OCR trả về ngày không có thật (ví dụ 37), không tự đoán thành 31.
  // Chỉ trích xuất tháng/năm từ dải tiêu đề, để người sử dụng xác nhận chữ số ngày từ PDF gốc.
  function issueDateUncertainV311(ocrText){
    const ascii=String(ocrText||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/gi,'d');
    const s=ascii.replace(/\s+/g,' ');
    const m=s.match(/\bngay\s*([0-9Il|/!]{1,3})\s*[:.,;]?\s*thang\s*(\d{1,2})\s*nam\s*(20\d{2})\b/i);
    if(!m)return null;
    const dayRaw=m[1], month=Number(m[2]), year=Number(m[3]);
    if(month<1||month>12)return null;
    const numericDay=Number(dayRaw.replace(/[Il|/!]/g,'1'));
    const maxDay=new Date(Date.UTC(year,month,0)).getUTCDate();
    if(numericDay>=1&&numericDay<=maxDay)return null;
    return {dayRaw:dayRaw,month:month,year:year,maxDay:maxDay};
  }
  // V3.9: Khôi phục tên cơ quan ở hai dòng ĐỘC LẬP tại đầu văn bản.
  // Không bao giờ suy tên cơ quan từ số hiệu hoặc phần công văn viện dẫn.
  function agencyFromHeaderV39(raw,h){
    const clean=s=>String(s||'').normalize('NFC').replace(/\u00a0/g,' ').replace(/\s+/g,' ').trim();
    const candidates=[String((h||{}).debugLeft||''),String(raw||'')];
    for(const block of candidates){
      const lines=block.split(/\r?\n/).map(clean).filter(Boolean).slice(0,16);
      const stop=lines.findIndex(s=>/^S\s*ố\s*[:：]/i.test(s));
      const top=lines.slice(0,stop>=0?stop:Math.min(9,lines.length));
      for(let i=0;i<top.length;i++){
        const a=top[i].split(/CỘNG\s*HÒA|CỘNG\s*HOÀ/i)[0].trim();
        const b=(top[i+1]||'').split(/Độc\s*lập|CỘNG\s*HÒA|CỘNG\s*HOÀ/i)[0].trim();
        if(/^(?:ỦY|UỶ)\s*BAN\s*NHÂN\s*DÂN$/iu.test(a)&&/^(?:XÃ|PHƯỜNG|TỈNH|HUYỆN|THÀNH\s*PHỐ|THỊ\s*TRẤN)\s+\p{L}/iu.test(b))return clean(a+' '+b);
        if(/^UBND$/iu.test(a)&&/^(?:XÃ|PHƯỜNG|TỈNH|HUYỆN)\s+\p{L}/iu.test(b))return clean('ỦY BAN NHÂN DÂN '+b);
        if(/^(?:SỞ|PHÒNG|BỘ|CHI\s*CỤC|TRUNG\s*TÂM)\s+\p{L}/iu.test(a))return a;
      }
    }
    return '';
  }
  // V3.8: Phân tách 4 trường từ vùng tiêu đề trang đầu; KHÔNG dò thân văn bản
  // để lấp số văn bản hay ngày ban hành thiếu trong lớp chữ PDF.
  function unifiedMetaV35(raw,header){
    const h=header||{};
    const left=String(h.debugLeft||'');
    const right=String(h.debugRight||'');
    const lines=cleanPdfText(raw).split('\n');
    const headerLines=lines.slice(0,Math.max(0,lines.findIndex(x=>/^Kính\s+gửi\s*:/i.test(x)))||14);
    const leftLines=left?left.split(/\r?\n/).map(x=>x.trim()).filter(Boolean):headerLines;
    const no=(function(){
      // Trong PDF lớp chữ có thể chỉ có «Số: /UBND-VHXH»;
      // tuyệt đối KHÔNG lấy 10150/TCTTKĐA được nhắc ở phần nội dung.
      const ls=(left||headerLines.join('\n')).split(/\r?\n/);
      for(let i=0;i<Math.min(ls.length,16);i++){
        if(!/^\s*S\s*ố\s*[:：]/i.test(ls[i]))continue;
        const m=(ls[i]+' '+(ls[i+1]||'')).match(/S\s*ố\s*[:：]\s*(\d{1,7})\s*\/\s*([\p{L}0-9]+(?:\s*[-–]\s*[\p{L}0-9]+)*)/iu);
        if(m)return (m[1]+'/'+m[2]).replace(/\s+/g,'').replace(/–/g,'-');
      }
      return '';
    })();
    const agency=(function(){
      const arr=leftLines.map(x=>x.replace(/\s+/g,' ').trim()).filter(Boolean);
      const top=arr.slice(0,Math.max(0,arr.findIndex(x=>/^S\s*ố\s*:/i.test(x)))||8);
      for(let i=0;i<top.length;i++){
        const a=top[i],b=top[i+1]||'';
        if(/^(?:ỦY|UỶ)\s*BAN\s*NHÂN\s*DÂN\s*$/i.test(a)&&/^(?:XÃ|PHƯỜNG|TỈNH|HUYỆN|THÀNH PHỐ|THỊ TRẤN)\s+[\p{L}]/iu.test(b))return a+' '+b;
        if(/^UBND\s*$/i.test(a)&&/^(?:XÃ|PHƯỜNG|TỈNH|HUYỆN)\s+[\p{L}]/iu.test(b))return 'ỦY BAN NHÂN DÂN '+b;
        if(/^(?:SỞ|BỘ|PHÒNG|CHI CỤC|TRUNG TÂM|BAN QUẢN LÝ)\s+[\p{L}]/iu.test(a))return a;
        if(/^(?:ỦY|UỶ)\s*BAN\s*NHÂN\s*DÂN\s+(?:XÃ|PHƯỜNG|TỈNH|HUYỆN)\s+[\p{L}]/iu.test(a))return a;
      }
      return '';
    })();
    const issue=issueDateV37(right||headerLines.join('\n'),null)||issueDateV37('',h);
    const summary=(function(){
      const text=left||headerLines.join('\n');
      return extractTypedTitleV313(raw)||extractSummary(text.split(/\r?\n/))||'';
    })();
    // Header toạ độ ưu tiên, nhưng vẫn phải có mặt đủ số và ngày thật.
    return {SoKyHieu:no||h.SoKyHieu||'',NgayBanHanh:issue,
      CoQuan:agencyFromHeaderV39(raw,h)||agency||agencyUnifiedV35(raw,h)||'',TrichYeu:summary||h.TrichYeu||''};
  }
  // V3.13: Tiêu đề của KẾ HOẠCH/BÁO CÁO/QUYẾT ĐỊNH nằm DƯỚI tên loại,
  // không phải ở dòng V/v như công văn. Chỉ đọc phần trước Căn cứ/Mục đích.
  function extractTypedTitleV313(raw){
    const lines=String(raw||'').split(/\r?\n/).map(x=>x.replace(/\s+/g,' ').trim()).filter(Boolean);
    const labels=/^(KẾ\s*HOẠCH|BÁO\s*CÁO|QUYẾT\s*ĐỊNH|THÔNG\s*BÁO|TỜ\s*TRÌNH|CHƯƠNG\s*TRÌNH)$/iu;
    const stop=/^(Căn\s*cứ|Theo\s+đề\s+nghị|Kính\s+gửi|I\s*[.\-–]\s*|1\.\s*Mục\s*đích|Điều\s+1\b|Nơi\s+nhận)/iu;
    const noise=/^(Số\s*:|Phủ\s*Thông\s*,|Độc\s*lập|CỘNG\s*HÒA|ỦY\s*BAN|UỶ\s*BAN|XÃ\s+PHỦ\s+THÔNG)/iu;
    let at=-1;
    for(let i=0;i<Math.min(lines.length,28);i++)if(labels.test(lines[i])){at=i;break;}
    if(at<0)return '';
    const fragments=[];
    for(let j=at+1;j<Math.min(lines.length,at+9);j++){
      if(stop.test(lines[j]) || noise.test(lines[j]))break;
      fragments.push(lines[j]);
      if(fragments.join(' ').length>390)break;
    }
    const title=fragments.join(' ').replace(/\s+/g,' ').trim();
    return title.length>=10?title.slice(0,500):'';
  }
  function extractPlanTimeCandidatesV313(raw){
    // Đây là MỐC HOẠT ĐỘNG, KHÔNG tự coi là hạn pháp lý hoặc hạn báo cáo.
    const text=String(raw||'').normalize('NFC').replace(/\u00a0/g,' ');
    const lines=text.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
    // Bỏ phần căn cứ và ngày kỷ niệm xuất hiện trong chính tên kế hoạch.
    let start=lines.findIndex(x=>/^II\s*[.\-–]\s*NỘI\s*DUNG/i.test(x));
    if(start<0)start=lines.findIndex(x=>/^I\s*[.\-–]\s*MỤC\s*ĐÍCH/i.test(x));
    if(start<0)return {dates:[],periods:[]};
    const body=lines.slice(start).join('\n');
    // Ghép các dòng trong từng ý, ngắt tại đầu tiểu mục hoặc dấu đầu dòng.
    const segments=body.split(/\n(?=\s*(?:[-+]|\d+(?:\.\d+)*[.)]|[IVX]+\s*[.\-–]))/u)
      .map(x=>x.replace(/\s+/g,' ').trim()).filter(Boolean);
    const out=[],seen=new Set(),monthItems=[],seenPeriod=new Set();
    const dateRx=/(?:ngày\s*)?(\d{1,2})\s*[\/.-]\s*(\d{1,2})\s*[\/.-]\s*(20\d{2})|ngày\s*(\d{1,2})\s*tháng\s*(\d{1,2})\s*năm\s*(20\d{2})/giu;
    const timeWords=/(?:thời\s*gian|thực\s*hiện|tổ\s*chức|dự\s*kiến|từ\s*ngày|đến\s*ngày|đợt\s*thi\s*đua|trong\s*tháng|vào\s*tháng|kỷ\s*niệm|trưng\s*bày|tham\s*gia|hoàn\s*thành|lễ\s*kỷ\s*niệm)/iu;
    for(const segment of segments){
      if(!timeWords.test(segment))continue;
      // Không tạo lịch theo ngày sinh nhật/truyền thống trong tên sự kiện.
      const s=segment.replace(/\(\s*15\s*\/\s*4\s*\/\s*1947\s*[-–]\s*15\s*\/\s*4\s*\/\s*2027\s*\)/g,'');
      const hits=[];let match;dateRx.lastIndex=0;
      while((match=dateRx.exec(s))){
        const day=+(match[1]||match[4]),month=+(match[2]||match[5]),year=+(match[3]||match[6]);
        const iso=String(year)+'-'+String(month).padStart(2,'0')+'-'+String(day).padStart(2,'0');
        if(!isValidDate(iso))continue;
        // Không suy ngày công văn dẫn chiếu là lịch hoạt động.
        const before=s.slice(Math.max(0,match.index-65),match.index).toLowerCase();
        if(/(?:kế\s*hoạch\s*số|công\s*văn\s*số|tờ\s*trình\s*số|theo\s*đề\s*nghị)[^.;]{0,55}$/iu.test(before))continue;
        hits.push({date:iso,index:match.index});
      }
      if(hits.length && out.length<18){
        // Với khoảng 'từ ... đến ...', đánh dấu mốc bắt đầu và kết thúc hoạt động.
        hits.slice(0,4).forEach((h,i)=>{
          const key=h.date+'|'+segment.slice(0,55);if(seen.has(key))return;seen.add(key);
          let prefix='Mốc hoạt động – cần xác nhận';
          if(hits.length>1&&i===0)prefix='Bắt đầu hoạt động – cần xác nhận';
          if(hits.length>1&&i===hits.length-1)prefix='Kết thúc hoạt động – cần xác nhận';
          out.push({TenMoc:prefix,NgayHan:h.date,CanCu:segment.slice(0,1050),Nguon:'KE_HOACH',LoaiMoc:'HOAT_DONG'});
        });
      }
      // Chỉ có tháng/quý: không thể gán bừa ngày 01 hay ngày cuối tháng.
      if(!hits.length){
        const re=/(?:quý\s*(?:I{1,3}|IV|[1-4])\s*\/\s*20\d{2}|tháng\s*\d{1,2}\s*\/\s*20\d{2}|tháng\s*\d{1,2}\s*năm\s*20\d{2})/giu;
        const matches=s.match(re)||[];
        if(matches.length){const key=matches.join('|')+'|'+segment.slice(0,55);if(!seenPeriod.has(key)){seenPeriod.add(key);monthItems.push({KyHan:matches.join(' – '),CanCu:segment.slice(0,800)});}}
      }
    }
    return {dates:out.slice(0,18),periods:monthItems.slice(0,18)};
  }
  // V3.15: Đọc trang đầu theo tọa độ từng mảnh chữ PDF, không suy đoán từ nội dung thân văn bản.
  // Chỉ xử lý phần đầu trang và các văn bản có nhan đề hành chính rõ ràng.
  function pdfFirstPageStructuredV315(items,pageWidth,pageHeight){
    const width=pageWidth||595,height=pageHeight||842, middle=width*.41;
    const words=(items||[]).filter(o=>o&&o.str&&o.str.trim()&&o.transform).map(o=>({
      t:String(o.str).normalize('NFC').trim(),x:Number(o.transform[4]),
      y:height-Number(o.transform[5]),w:Number(o.width||0)
    })).filter(o=>Number.isFinite(o.x)&&Number.isFinite(o.y)&&o.y>=35&&o.y<235);
    const lines=(arr,tol)=>{
      const rows=[];
      arr.slice().sort((a,b)=>a.y-b.y||a.x-b.x).forEach(o=>{
        let row=rows.find(r=>Math.abs(r.y-o.y)<=tol);
        if(!row){row={y:o.y,words:[]};rows.push(row);}
        row.words.push(o);
      });
      return rows.sort((a,b)=>a.y-b.y).map(r=>{
        r.words.sort((a,b)=>a.x-b.x);
        let text='',end=-1;
        r.words.forEach(o=>{if(text&&o.x-end>2.2)text+=' ';text+=o.t;end=Math.max(end,o.x+o.w);});
        return {y:r.y,text:text.replace(/\s+/g,' ').trim(),words:r.words};
      });
    };
    const left=lines(words.filter(x=>x.x<middle),5.5);
    const right=lines(words.filter(x=>x.x>=middle),5.5);
    const all=lines(words,5.5);
    const numberRow=left.find(x=>/\bS\s*ố\s*[:：]/iu.test(x.text));
    let number='',date='',agency='',title='';
    if(numberRow){
      const adjacent=words.filter(x=>x.x<middle&&Math.abs(x.y-numberRow.y)<11).sort((a,b)=>a.x-b.x).map(x=>x.t).join(' ');
      const m=adjacent.match(/S\s*ố\s*[:：]\s*(\d{1,7})\s*\/\s*([\p{L}0-9]+(?:\s*[-–]\s*[\p{L}0-9]+)*)/iu);
      if(m)number=(m[1]+'/'+m[2]).replace(/\s+/g,'').replace(/–/g,'-');
    }
    // Ngày: xếp lại cả chữ số tách khỏi nền PDF dù baseline khác 2–6 px.
    // Giới hạn đúng vùng tiêu đề; không đọc ngày trong phần Căn cứ hay triển khai.
    const candidateDates=right.filter(r=>r.y>=75&&r.y<135&&/ngày/i.test(r.text));
    for(const r of candidateDates){
      const near=words.filter(x=>x.x>=middle&&Math.abs(x.y-r.y)<11).sort((a,b)=>a.x-b.x);
      let t=near.map(x=>x.t).join(' ').replace(/\s+/g,' ');
      let m=t.match(/ngày\s*(\d{1,2})\s*tháng\s*(\d{1,2})\s*năm\s*(20\d{2})/iu);
      // Một số PDF ký số giữ nhãn và năm trong 1 text-item, nhưng in riêng
      // số ngày và số tháng thành 2 text-item. Khi đó đọc theo vị trí X.
      if(!m && /ngày/i.test(r.text) && /tháng/i.test(r.text) && /năm\s*(20\d{2})/iu.test(r.text)){
        const year=r.text.match(/năm\s*(20\d{2})/iu)[1];
        const digitAtoms=near.filter(o=>/^\d{1,2}$/.test(o.t));
        if(digitAtoms.length===2){
          const a=digitAtoms[0].t,b=digitAtoms[1].t;
          m=[null,a,b,year];
        }
      }
      if(m){let iso=m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0');if(isValidDate(iso)){date=iso;break;}}
    }
    // Đầu cột trái, không bao giờ ghép quốc hiệu ở bên phải.
    const topLeft=left.filter(r=>r.y<(numberRow?numberRow.y-5:100));
    for(let i=0;i<topLeft.length;i++){
      const a=topLeft[i].text,b=(topLeft[i+1]||{}).text||'';
      if(/^(?:ỦY|UỶ)\s*BAN\s*NHÂN\s*DÂN$/iu.test(a)&&/^(?:XÃ|PHƯỜNG|TỈNH|HUYỆN)\s+\p{L}/iu.test(b)){agency=a+' '+b;break;}
      if(/^(?:SỞ|BỘ|PHÒNG|CHI CỤC|TRUNG TÂM)\s+\p{L}/iu.test(a)){agency=a;break;}
    }
    // Nhan đề Kế hoạch: lấy tất cả dòng kề sau tên loại, chỉ đến câu Căn cứ.
    const kindIndex=all.findIndex(r=>/^(?:KẾ\s*HOẠCH|BÁO\s*CÁO|QUYẾT\s*ĐỊNH|THÔNG\s*BÁO|TỜ\s*TRÌNH|CHƯƠNG\s*TRÌNH)$/iu.test(r.text));
    if(kindIndex>=0){
      const seg=[];const limit=all[kindIndex].y+105;
      for(let i=kindIndex+1;i<all.length;i++){
        const r=all[i];if(r.y>limit||/^(?:Căn\s+cứ|Kính\s+gửi|I\s*[.\-–]|Điều\s+1)/iu.test(r.text))break;
        seg.push(r.text);
      }
      title=seg.join(' ').replace(/\s+/g,' ').trim().slice(0,480);
    }
    return {SoKyHieu:number,NgayBanHanh:date,CoQuan:agency,TrichYeu:title,
      debugLeft:left.map(r=>r.text).join('\n'),debugRight:right.map(r=>r.text).join('\n'),
      debugTitle:all.filter(r=>r.y>120&&r.y<235).map(r=>r.text).join('\n')};
  }
  // V3.17: đọc chữ số NGÀY và THÁNG là các text item riêng của PDF ký số.
  // Không xử lý OCR // thành 11, không lấy ngày trong phần Căn cứ hay nội dung.
  function issueDateFromPdfAtomsV317(items,pageHeight,pageWidth){
    const h=pageHeight||842,w=pageWidth||595;
    const a=(items||[]).filter(it=>it&&it.str&&it.str.trim()&&it.transform).map(it=>({
      t:String(it.str).normalize('NFC').trim(),x:Number(it.transform[4]),
      y:h-Number(it.transform[5]),width:Number(it.width||0)
    })).filter(it=>Number.isFinite(it.x)&&Number.isFinite(it.y));
    // Dòng địa danh-ngày tháng nằm trong vùng tiêu đề trang thứ nhất.
    const lines=a.filter(it=>it.y>=65&&it.y<=155&&it.x>=w*.38&&
      /ngày/i.test(it.t)&&/tháng/i.test(it.t)&&/năm\s*20\d{2}/i.test(it.t));
    const details=[];
    for(const line of lines){
      const yearMatch=line.t.match(/năm\s*(20\d{2})/i);
      if(!yearMatch)continue;
      // Các atom ngày, tháng có thể có baseline xê dịch vài px so với dòng chữ.
      const near=a.filter(it=>Math.abs(it.y-line.y)<=14&&it.x>=line.x&&it.x<=w*.95)
        .sort((u,v)=>u.x-v.x);
      const digits=near.filter(it=>/^\d{1,2}$/.test(it.t));
      // Nếu PDF đọc được riêng ngày và tháng, chúng phải theo thứ tự trái -> phải,
      // cùng dòng tiêu đề, không nằm trong thân Kế hoạch.
      if(digits.length>=2){
        for(let i=0;i<digits.length-1;i++){
          const d=Number(digits[i].t),m=Number(digits[i+1].t),yr=Number(yearMatch[1]);
          const iso=String(yr)+'-'+String(m).padStart(2,'0')+'-'+String(d).padStart(2,'0');
          details.push('atom '+digits[i].t+' / '+digits[i+1].t+' -> '+iso);
          if(isValidDate(iso)&&d>=1&&d<=31&&m>=1&&m<=12)
            return {date:iso,debug:details.join('; ')};
        }
      }
      details.push('không đủ 2 atom số cạnh dòng: '+line.t);
    }
    return {date:'',debug:details.join('; ')||'không tìm thấy dòng địa danh-ngày tháng có năm ở vùng đầu trang'};
  }
  function mergeFirstPageHeaderV315(oldHead,newHead){
    const old=oldHead||{},fresh=newHead||{};
    // Metadata từ cấu trúc tọa độ có ưu tiên, nhưng không làm mất giá trị đã đọc hợp lệ.
    return {
      SoKyHieu:fresh.SoKyHieu||old.SoKyHieu||'',
      NgayBanHanh:fresh.NgayBanHanh||old.NgayBanHanh||'',
      CoQuan:fresh.CoQuan||old.CoQuan||'',
      TrichYeu:fresh.TrichYeu||old.TrichYeu||'',
      debugLeft:fresh.debugLeft||old.debugLeft||'',
      debugRight:fresh.debugRight||old.debugRight||'',
      debugTitle:fresh.debugTitle||''
    };
  }
  // V3.14: Nhận diện các loại Kế hoạch/Báo cáo/Quyết định từ *vùng đầu trang*.
  // Không dùng số/ngày của văn bản dẫn chiếu trong thân văn bản.
  function typedMetaV314(raw,header){
    const ls=String(raw||'').normalize('NFC').split(/\r?\n/)
      .map(x=>x.replace(/\s+/g,' ').trim()).filter(Boolean);
    const hdr=(header||{});
    const first=ls.slice(0,Math.min(55,ls.length));
    const kind=/^(?:KẾ\s*HOẠCH|BÁO\s*CÁO|QUYẾT\s*ĐỊNH|THÔNG\s*BÁO|TỜ\s*TRÌNH|CHƯƠNG\s*TRÌNH)\s*$/iu;
    const ix=first.findIndex(x=>kind.test(x));
    if(ix<0)return {TrichYeu:'',SoKyHieu:'',NgayBanHanh:'',CoQuan:''};
    // Vùng tiêu đề chỉ đến đoạn Căn cứ / I. Mục đích; không lấy các đoạn thực hiện.
    const ending=/^(?:Căn\s*cứ|Theo\s+đề\s+nghị|Kính\s+gửi|Điều\s+1|[IVX]+\s*[.\-–]|\d+[.]\s*(?:Mục\s*đích|Yêu\s*cầu)|UBND\s+.*\s+ban\s+hành)/iu;
    const parts=[];
    for(let j=ix+1;j<Math.min(first.length,ix+11);j++){
      if(ending.test(first[j]))break;
      // Ký hiệu, quốc hiệu và ngày ban hành không phải một phần trích yếu.
      if(/^(?:Số\s*:|(?:ỦY|UỶ)\s+BAN|CỘNG\s+HÒA|CỘNG\s+HOÀ|Độc\s+lập|Phủ\s+Thông\s*,\s*ngày)/iu.test(first[j]))continue;
      parts.push(first[j]);
      if(parts.join(' ').length>480)break;
    }
    const summary=parts.join(' ').replace(/\s+/g,' ').trim().slice(0,480);
    // Chỉ số văn bản ở dòng bắt đầu bằng Số: trước tên loại văn bản.
    let no=hdr.SoKyHieu||'';
    if(!no){
      for(const line of first.slice(0,ix)){
        const m=line.match(/(?:^|\s)S\s*ố\s*[:：]\s*(\d{1,7})\s*\/\s*([\p{L}0-9]+(?:\s*[-–]\s*[\p{L}0-9]+)*)/iu);
        if(m){no=(m[1]+'/'+m[2]).replace(/\s+/g,'').replace(/–/g,'-');break;}
      }
    }
    // Ưu tiên ngày đọc trực tiếp theo tọa độ từ PDF, sau đó chỉ dòng địa danh + ngày
    // trước nhãn KẾ HOẠCH. Không lấy ngày trong 'Căn cứ...' hay tiêu đề kỷ niệm.
    let date=isValidDate(hdr.NgayBanHanh||'')?hdr.NgayBanHanh:'';
    if(!date){
      for(const line of first.slice(0,ix)){
        const m=line.match(/(?:[\p{L}\s]{2,45}),\s*ngày\s*(\d{1,2})\s*tháng\s*(\d{1,2})\s*năm\s*(20\d{2})/iu);
        if(m){const iso=m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0');if(isValidDate(iso)){date=iso;break;}}
      }
    }
    // Nhận diện cột trái của phần đầu, không ghép quốc hiệu cột phải.
    let agency='';
    const source=String(hdr.debugLeft||'');
    const rawTop=String(raw||'').split(/\r?\n/).slice(0,24);
    const agencyLines=(source?source.split(/\r?\n/):rawTop)
      .map(x=>x.trimStart().split(/\s{3,}|CỘNG\s*H[ÒO]A|CỘNG\s*HOÀ|Độc\s*lập/iu)[0].trim()).filter(Boolean);
    for(let i=0;i<Math.min(8,agencyLines.length);i++){
      const a=agencyLines[i],b=agencyLines[i+1]||'';
      if(/^(?:ỦY|UỶ)\s*BAN\s*NHÂN\s*DÂN\s*$/iu.test(a)&&/^(?:XÃ|PHƯỜNG|TỈNH|HUYỆN)\s+\p{L}/iu.test(b)){
        agency=a+' '+b;break;
      }
      if(/^(?:SỞ|BỘ|PHÒNG)\s+\p{L}/iu.test(a)){agency=a;break;}
    }
    return {TrichYeu:summary,SoKyHieu:no,NgayBanHanh:date,CoQuan:agency};
  }
  // V3.18: Văn bản Đảng sử dụng một mẫu đầu trang khác văn bản hành chính.
  // Chỉ nhận thông tin từ phần đầu, không lấy ngày/số trong phần nội dung.
  // V3.19: Nhận diện đầu trang văn bản Đảng; không suy số/ngày từ đoạn dẫn chiếu.
  // Trên PDF ký số, phần chữ có thể chỉ ghi "Số -CV/ĐU" và thiếu chữ số thật.
  function partyMetaV318(raw, header){
    const h=header||{};
    const norm=s=>String(s||'').normalize('NFC').replace(/\u00a0/g,' ').replace(/\s+/g,' ').trim();
    const split=s=>String(s||'').split(/\r?\n/).map(norm).filter(Boolean);
    const left=split(h.debugLeft), body=split(raw);
    const right=split(h.debugRight);
    const headerLines=left.length?left.slice(0,20):body.slice(0,18);
    const isParty=headerLines.concat(right.slice(0,4)).some(s=>/ĐẢNG\s*(?:BỘ|ỦY|UỶ)|ĐẢNG\s+CỘNG\s+SẢN\s+VIỆT\s+NAM/iu.test(s));
    if(!isParty)return null;
    const stripRight=s=>norm(s.split(/ĐẢNG\s+CỘNG\s+SẢN\s+VIỆT\s+NAM/iu)[0]);
    let agency='';
    const agencyRx=/ĐẢNG\s*(?:ỦY|UỶ)\s+(?:XÃ|PHƯỜNG|THỊ\s+TRẤN|HUYỆN|TỈNH|THÀNH\s+PHỐ)\s+[\p{L}\s-]{2,70}/iu;
    for(const line of headerLines.slice(0,9)){
      const m=stripRight(line).match(agencyRx);
      if(m){agency=norm(m[0]).replace(/\s+(?:Số|ngày|Kính gửi).*$/iu,'');break;}
    }
    if(!agency){
      for(const line of headerLines.slice(0,8))if(/^ĐẢNG\s+BỘ\s+(?:XÃ|HUYỆN|TỈNH|PHƯỜNG)/iu.test(line)){agency=stripRight(line);break;}
    }
    // Chỉ đọc số bên trên dòng trích yếu, KHÔNG quét toàn văn.
    // Dạng hợp lệ: Số 1339 -CV/ĐU; Số: 53-CV/ĐU; Số 1339-CV/ĐU.
    let number='';
    const numberPattern=/(?:^|\s)S\s*ố\s*[:：.]?\s*(\d{1,7})\s*[-–—]\s*([\p{L}\d]{1,8}\s*\/\s*[\p{L}\d]{1,12})\b/iu;
    for(const line of headerLines.slice(0,14)){
      const m=line.match(numberPattern);
      if(m){number=(m[1]+'-'+m[2]).replace(/\s+/g,'').replace(/[–—]/g,'-');break;}
    }
    // Dữ liệu OCR và chữ gốc nằm ở các nguồn khác nhau; chỉ dùng header nếu đúng mẫu Đảng.
    if(!number && /^\d{1,7}-[\p{L}\d]+\/[\p{L}\d]+$/iu.test(norm(h.SoKyHieu)))number=norm(h.SoKyHieu);
    let date='';
    const dateLines=right.concat(body.slice(0,15));
    for(const line of dateLines){
      if(!/^[\p{L}\s.\-]{2,60},\s*ngày\b/iu.test(line))continue;
      const m=line.match(/ngày\s*(\d{1,2})\s*tháng\s*(\d{1,2})\s*năm\s*(20\d{2})/iu)
        ||line.match(/ngày\s*(\d{1,2})\s*[/.-]\s*(\d{1,2})\s*[/.-]\s*(20\d{2})/iu);
      if(!m)continue;
      const value=m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0');
      if(isValidDate(value)){date=value;break;}
    }
    // Trích yếu dạng "về việc" không có V/v hay tên loại văn bản.
    // Lấy phần sau "về việc" và các dòng nối tiếp, dừng ngay tại Kính gửi.
    let title='';
    const titleSource=left.length?left:body;
    for(let i=0;i<Math.min(titleSource.length,22);i++){
      const line=norm(titleSource[i]);
      let m=line.match(/^(?:v\s*\/\s*v|về\s+việc)\s*[:：.]?\s*(.*)$/iu);
      if(!m)continue;
      const pieces=[];if(m[1])pieces.push(m[1]);
      for(let j=i+1;j<Math.min(i+8,titleSource.length);j++){
        const next=norm(titleSource[j]);
        if(/^(?:Kính\s+gửi|Căn\s+cứ|Thực\s+hiện|Nơi\s+nhận|Số\s*:|\d+[.]|\*|ĐẢNG\s+CỘNG)/iu.test(next))break;
        if(/^[\p{L}\s.-]{2,48},\s*ngày\b/iu.test(next))break;
        pieces.push(next);
        if(pieces.join(' ').length>380)break;
      }
      title=norm(pieces.join(' ')).replace(/[.;:,\s]+$/,'');break;
    }
    // Các văn bản Đảng có tên loại trên một dòng riêng.
    if(!title){
      const names=/^(?:CÔNG\s+VĂN|THÔNG\s+BÁO|KẾ\s+HOẠCH|BÁO\s+CÁO|CHƯƠNG\s+TRÌNH|QUYẾT\s+ĐỊNH|KẾT\s+LUẬN|NGHỊ\s+QUYẾT|CHỈ\s+THỊ)$/iu;
      const k=titleSource.findIndex(x=>names.test(norm(x)));
      if(k>=0){const pieces=[];
        for(let j=k+1;j<Math.min(k+9,titleSource.length);j++){
          const v=norm(titleSource[j]);
          if(/^(?:Kính\s+gửi|Căn\s+cứ|Thực\s+hiện|Nơi\s+nhận)/iu.test(v))break;
          if(v)pieces.push(v);
        }
        title=norm(pieces.join(' ')).slice(0,450);
      }
    }
    return {SoKyHieu:number,NgayBanHanh:date,CoQuan:agency,TrichYeu:title};
  }
  // V3.21: Phân luồng nhận dạng vùng đầu văn bản của tổ chức Đảng và MTTQ.
  // Chỉ dùng dữ liệu ở đầu trang: không lấy số/ký hiệu từ câu viện dẫn trong thân.
  function orgMetaV321(raw,header){
    const h=header||{};
    const clean=x=>String(x||'').normalize('NFC').replace(/[\u00a0\u200b]/g,' ')
      .replace(/[\t ]+/g,' ').trim();
    const split=x=>String(x||'').split(/\r?\n/).map(clean).filter(Boolean);
    const body=split(raw),left=split(h.debugLeft),right=split(h.debugRight);
    // PDF: ưu tiên tọa độ cột trái; DOCX/TXT: lấy các dòng đầu tiên.
    const source=(left.length?left:body.slice(0,25)).slice(0,24);
    const cut=s=>clean(s.split(/ĐẢNG\s+CỘNG\s+SẢN\s+VIỆT\s+NAM|CỘNG\s+H[ÒO]A\s+XÃ\s+HỘI/iu)[0]);
    const lines=source.map(cut).filter(x=>x&&x!=='*'&&x!=='—'&&x!=='-');
    const beforeNumber=lines.findIndex(x=>/(?:^|\s)S\s*[ốôo]\s*[:：.]?\s*(?:\d|[-–—]|$)/iu.test(x));
    const beforeKind=lines.findIndex(x=>/^(?:CÔNG\s+VĂN|BÁO\s+CÁO|KẾ\s+HOẠCH|THÔNG\s+BÁO|QUYẾT\s+ĐỊNH|NGHỊ\s+QUYẾT|CHỈ\s+THỊ|TỜ\s+TRÌNH|GIẤY\s+MỜI|KẾT\s+LUẬN|HƯỚNG\s+DẪN|CHƯƠNG\s+TRÌNH)\s*$/iu.test(x));
    const headStop=Math.min(beforeNumber<0?20:beforeNumber,beforeKind<0?20:beforeKind);
    const names=lines.slice(0,Math.max(1,Math.min(headStop,16)));
    const partyName=/^(?:ĐẢNG\s*(?:BỘ|ỦY|UỶ)|TỈNH\s*[ỦU][YỶ]|THÀNH\s*[ỦU][YỶ]|HUYỆN\s*[ỦU][YỶ]|CHI\s*BỘ|BAN\s+CHẤP\s+HÀNH\s+TRUNG\s+ƯƠNG|(?:VĂN\s+PHÒNG|BAN\s+TỔ\s+CHỨC|ỦY\s+BAN\s+KIỂM\s+TRA)\s+(?:TỈNH|THÀNH|HUYỆN|ĐẢNG)\s*[ỦU][YỶ])/iu;
    const frontName=/(?:MẶT\s+TRẬN\s+TỔ\s+QUỐC|\bMTTQ\b|BAN\s+CÔNG\s+TÁC\s+MẶT\s+TRẬN)/iu;
    const isFront=names.some(x=>frontName.test(x));
    const isParty=!isFront&&(names.some(x=>partyName.test(x))||right.slice(0,4).some(x=>/ĐẢNG\s+CỘNG\s+SẢN\s+VIỆT\s+NAM/iu.test(x)));
    if(!isParty&&!isFront)return null;
    // Số đầu trang: phải có nhãn "Số"; cho phép số và ký hiệu nằm trên 2 dòng.
    // Không tự thêm chữ số khi lớp chữ PDF hoặc OCR không đọc ra được.
    const noLines=lines.slice(0,Math.min(beforeKind<0?24:beforeKind,24));
    let number='';
    for(let i=0;i<noLines.length;i++){
      if(!/(?:^|\s)S\s*[ốôo]\s*[:：.]?/iu.test(noLines[i]))continue;
      const context=[noLines[i],noLines[i+1]||''].join(' ');
      const m=context.match(/(?:^|\s)S\s*[ốôo]\s*[:：.]?\s*(\d{1,7})\s*([\/\-–—])\s*([\p{L}\d]{1,16}(?:\s*[-–—]\s*[\p{L}\d]{1,16}){0,5}(?:\s*\/\s*[\p{L}\d]{1,16}(?:\s*[-–—]\s*[\p{L}\d]{1,16}){0,5})?)/iu);
      if(!m)continue;
      const candidate=(m[1]+m[2]+m[3]).replace(/\s+/g,'').replace(/[–—]/g,'-');
      if((isParty&&/^\d{1,7}-[\p{L}\d]+\/[\p{L}\d]+(?:-[\p{L}\d]+)*$/iu.test(candidate))||
         (isFront&&/^\d{1,7}\/[\p{L}\d]+(?:-[\p{L}\d]+)*$/iu.test(candidate))||
         (isFront&&/^\d{1,7}-[\p{L}\d]+\/[\p{L}\d]+(?:-[\p{L}\d]+)*$/iu.test(candidate))){number=candidate;break;}
    }
    if(!number){
      // Chỉ chấp nhận số từ tọa độ trang 1 nếu bản thân nó đủ cấu trúc.
      const value=clean(h.SoKyHieu).replace(/\s+/g,'').replace(/[–—]/g,'-');
      if((isParty&&/^\d{1,7}-[\p{L}\d]+\/[\p{L}\d]+(?:-[\p{L}\d]+)*$/iu.test(value))||
         (isFront&&/^\d{1,7}\/[\p{L}\d]+(?:-[\p{L}\d]+)*$/iu.test(value))||
         (isFront&&/^\d{1,7}-[\p{L}\d]+\/[\p{L}\d]+(?:-[\p{L}\d]+)*$/iu.test(value)))number=value;
    }
    const isUnit=x=>/^(?:BAN\s+THƯỜNG\s+TRỰC|BAN\s+CÔNG\s+TÁC\s+MẶT\s+TRẬN|VĂN\s+PHÒNG|BAN\s+TỔ\s+CHỨC|BAN\s+TUYÊN\s+GIÁO|BAN\s+DÂN\s+VẬN|BAN\s+NỘI\s+CHÍNH|BAN\s+TUYÊN\s+GIÁO\s+VÀ\s+DÂN\s+VẬN|(?:ỦY|UỶ)\s+BAN\s+KIỂM\s+TRA|CƠ\s+QUAN\s+(?:ỦY|UỶ)\s+BAN\s+KIỂM\s+TRA|BAN\s+CHỈ\s+ĐẠO|TIỂU\s+BAN)/iu.test(x);
    if(isFront){
      let agency='',unit='';
      const frontRx=/^(?:(?:ỦY|UỶ)\s+BAN\s+(?:TRUNG\s+ƯƠNG\s+)?|CƠ\s+QUAN\s+(?:ỦY|UỶ)\s+BAN\s+)?(?:MẶT\s+TRẬN\s+TỔ\s+QUỐC(?:\s+VIỆT\s+NAM)?|MTTQ(?:\s+VIỆT\s+NAM)?)\b/iu;
      for(let i=0;i<names.length;i++){
        const row=names[i];
        if(frontRx.test(row)){
          agency=row;
          // Có biểu mẫu để riêng "ỦY BAN TRUNG ƯƠNG" và "MTTQ VIỆT NAM".
          if(i>0&&/^(?:ỦY|UỶ)\s+BAN\s+TRUNG\s+ƯƠNG$/iu.test(names[i-1])) agency=names[i-1]+' '+agency;
          const next=names[i+1]||'';
          if(/^(?:TỈNH|THÀNH\s+PHỐ|XÃ|PHƯỜNG|QUẬN|HUYỆN|THỊ\s+TRẤN)\s+[\p{L}\d]/iu.test(next)) agency+=' '+next;
        }
        if(/^BAN\s+CÔNG\s+TÁC\s+MẶT\s+TRẬN/iu.test(row))agency=row;
        if(/^BAN\s+THƯỜNG\s+TRỰC/iu.test(row))unit=row;
      }
      if(agency&&unit)agency+=' - '+unit;
      const kind=typedMetaV314(raw,h),base=unifiedMetaV35(raw,h);
      const date=isValidDate(h.NgayBanHanh||'')?h.NgayBanHanh:(kind.NgayBanHanh||base.NgayBanHanh||'');
      return {SoKyHieu:number,NgayBanHanh:date,CoQuan:agency,TrichYeu:kind.TrichYeu||base.TrichYeu||''};
    }
    const party=partyMetaV318(raw,h)||{};
    const primary=/^(?:ĐẢNG\s*(?:BỘ|ỦY|UỶ)|TỈNH\s*[ỦU][YỶ]|THÀNH\s*[ỦU][YỶ]|HUYỆN\s*[ỦU][YỶ]|CHI\s*BỘ|BAN\s+CHẤP\s+HÀNH\s+TRUNG\s+ƯƠNG)/iu;
    let agency='',parent='';
    for(const row of names){
      if(primary.test(row)){
        // Dòng cấp ủy cụ thể ở dưới có quyền ưu tiên dòng Đảng bộ cấp trên.
        parent=row;agency=row;
      }else if(isUnit(row)){
        agency=/(?:TỈNH|THÀNH|HUYỆN|ĐẢNG)\s*[ỦU][YỶ]/iu.test(row)?row:(parent?parent+' - '+row:row);
      }else if(partyName.test(row)){
        agency=row;
      }
    }
    const date=isValidDate(h.NgayBanHanh||'')?h.NgayBanHanh:(party.NgayBanHanh||'');
    return {SoKyHieu:number,NgayBanHanh:date,CoQuan:agency||party.CoQuan||'',TrichYeu:party.TrichYeu||''};
  }
  // V3.22: Chỉ nhận TRÍCH YẾU của Báo cáo/Kế hoạch... từ khối tiêu đề trang đầu.
  // PDF: đọc thêm khu vực GIỮA TRANG theo tọa độ, không phụ thuộc cột trái.
  // Văn bản chữ/DOCX: lấy các dòng sau TÊN LOẠI, dừng trước phần căn cứ/nội dung.
  function centerTitleTextV322(raw){
    const norm=x=>String(x||'').normalize('NFC').replace(/[\u00a0\u200b]/g,' ')
      .replace(/[ \t]+/g,' ').trim();
    const lines=String(raw||'').split(/\r?\n/).map(norm).filter(Boolean);
    const label=/^(?:BÁO\s*CÁO|KẾ\s*HOẠCH|QUYẾT\s*ĐỊNH|THÔNG\s*BÁO|TỜ\s*TRÌNH|CHƯƠNG\s*TRÌNH|KẾT\s*LUẬN|NGHỊ\s*QUYẾT|CHỈ\s*THỊ|HƯỚNG\s*DẪN|PHƯƠNG\s*ÁN)$/iu;
    const prefix=/^((?:BÁO\s*CÁO|KẾ\s*HOẠCH|QUYẾT\s*ĐỊNH|THÔNG\s*BÁO|TỜ\s*TRÌNH|CHƯƠNG\s*TRÌNH|KẾT\s*LUẬN|NGHỊ\s*QUYẾT|CHỈ\s*THỊ|HƯỚNG\s*DẪN|PHƯƠNG\s*ÁN))\s*[:：–-]?\s+(.{8,220})$/iu;
    const stop=/^(?:Căn\s+cứ(?:\s|$|[.,;:])|Theo\s+đề\s+nghị(?:\s|$|[.,;:])|Kính\s+gửi(?:\s|$|[.,;:])|Nơi\s+nhận(?:\s|$|[.,;:])|Điều\s+\d+\b|[IVX]{1,5}\s*[.\-–)]\s+|\d{1,2}\s*[.)]\s+(?:Mục|Yêu|Nội|Tổ|Phạm)|PHẦN\s+[IVX]|CHƯƠNG\s+[IVX]|ĐẢNG\s+CỘNG\s+SẢN|CỘNG\s+H[ÒO]A\b|Độc\s+lập(?:\s|$|[.,;:])|(?:ỦY|UỶ)\s+BAN\s+NHÂN\s+DÂN\b|Số\s*[:：])/iu;
    const dateline=/^[\p{L}\s.\-]{2,48},\s*ngày\b/iu;
    // Chỉ tìm tên loại trong vùng mở đầu, không nhận một nhãn ở phần thân văn bản.
    const first=lines.slice(0,Math.min(lines.length,45));
    const ix=first.findIndex((x,i)=>{
      if(!(label.test(x)||prefix.test(x)))return false;
      return !first.slice(0,i).some(y=>/^(?:Căn\s+cứ(?:\s|$|[.,;:])|Kính\s+gửi(?:\s|$|[.,;:])|[IVX]{1,5}\s*[.\-–)]\s+|Điều\s+\d+\b)/iu.test(y));
    });
    if(ix<0)return '';
    const parts=[];
    const heading=first[ix].match(prefix);
    if(heading)parts.push(heading[2]);
    for(let j=ix+1;j<Math.min(first.length,ix+8);j++){
      const v=first[j];
      if(stop.test(v)||dateline.test(v)||label.test(v))break;
      // Không lấy dòng số văn bản, dấu phân cách, thông tin ngày hoặc quốc hiệu.
      if(/^[*\-–—]+$/.test(v))continue;
      if(parts.join(' ').length+v.length>490)break;
      // Tiêu đề thường dài tối đa 5 dòng; phần sau thường bắt đầu thành đoạn văn.
      if(parts.length>=5)break;
      parts.push(v);
    }
    const result=norm(parts.join(' ')).replace(/[;,.:\s]+$/,'');
    return result.length>=8?result.slice(0,480):'';
  }
  function pdfCenterTitleV322(items,pageWidth,pageHeight){
    const w=pageWidth||595,h=pageHeight||842;
    const a=(items||[]).filter(it=>it&&it.str&&it.str.trim()&&it.transform).map(it=>({
      t:String(it.str).normalize('NFC').trim(),x:Number(it.transform[4]),
      y:h-Number(it.transform[5]),width:Number(it.width||0)
    })).filter(it=>Number.isFinite(it.x)&&Number.isFinite(it.y)&&it.y>=125&&it.y<=440);
    const rows=[];
    a.sort((u,v)=>u.y-v.y||u.x-v.x).forEach(it=>{
      let r=rows.find(r=>Math.abs(it.y-r.y)<=5);
      if(!r){r={y:it.y,items:[]};rows.push(r);}
      r.items.push(it);
    });
    const lines=rows.sort((u,v)=>u.y-v.y).map(r=>{
      r.items.sort((u,v)=>u.x-v.x);
      let t='',end=null;
      r.items.forEach(it=>{if(t&&end!==null&&it.x-end>2.5)t+=' ';t+=it.t;end=Math.max(it.x+it.width,end===null?0:end);});
      const x0=Math.min(...r.items.map(it=>it.x));
      const x1=Math.max(...r.items.map(it=>it.x+it.width));
      return {text:t.replace(/\s+/g,' ').trim(),y:r.y,x0,x1};
    });
    const label=/^(?:BÁO\s*CÁO|KẾ\s*HOẠCH|QUYẾT\s*ĐỊNH|THÔNG\s*BÁO|TỜ\s*TRÌNH|CHƯƠNG\s*TRÌNH|KẾT\s*LUẬN|NGHỊ\s*QUYẾT|CHỈ\s*THỊ|HƯỚNG\s*DẪN|PHƯƠNG\s*ÁN)(?:\s+.{8,170})?$/iu;
    // Một nhãn giữa trang phải đứng gần trục giữa; không tìm trong phần thân.
    const ix=lines.findIndex(r=>r.y<=350&&label.test(r.text)&&
      Math.abs((r.x0+r.x1)/2-w/2)<w*.27);
    if(ix<0)return '';
    const group=[lines[ix].text];
    let prev=lines[ix].y;
    for(let j=ix+1;j<lines.length&&j<=ix+6;j++){
      const r=lines[j];
      if(r.y-prev>34||r.y-lines[ix].y>122)break;
      if(/^(?:Căn\s+cứ(?:\s|$|[.,;:])|Theo\s+đề\s+nghị(?:\s|$|[.,;:])|Kính\s+gửi(?:\s|$|[.,;:])|Điều\s+\d+\b|[IVX]{1,5}\s*[.\-–)]\s+|\d{1,2}[.)]\s+|Nơi\s+nhận(?:\s|$|[.,;:])|ĐẢNG\s+CỘNG(?:\s|$|[.,;:])|CỘNG\s+H[ÒO]A\b)/iu.test(r.text))break;
      // Các dòng tiêu đề kế tiếp thường có lề trái được thu hẹp.
      if(r.x0<w*.095||r.x1>w*.93)break;
      if(Math.abs((r.x0+r.x1)/2-w/2)>w*.34)break;
      if(r.text.length>205)break;
      group.push(r.text);prev=r.y;
      if(group.length>=6)break;
    }
    return centerTitleTextV322(group.join('\n'));
  }

  // V3.28: Đọc riêng giấy mời / thư mời, không thay đổi các luồng văn bản đã ổn định.
  // Số và ngày đôi khi là lớp chữ của chữ ký số, đè lên chữ nền trong cùng dòng.
  // V3.29: Nhận diện số/ký hiệu giấy mời từ KHU VỰC chứa nhãn Số.
  // Không phụ thuộc số và ký hiệu có cùng text item hoặc cùng đường cơ sở.
  // Ưu tiên lớp chữ; thiếu số thì trả rỗng, không đoán từ văn bản được viện dẫn.
  function invitationHeaderAtomsV329(items,pageWidth,pageHeight){
    const w=pageWidth||595,h=pageHeight||842;
    const norm=s=>String(s||'').normalize('NFC').replace(/\u00a0/g,' ').replace(/[–—−]/g,'-').trim();
    const a=(items||[]).filter(it=>it&&it.str&&it.transform).map(it=>({
      t:norm(it.str), x:Number(it.transform[4]), y:h-Number(it.transform[5]), width:Number(it.width||0)
    })).filter(z=>z.t&&Number.isFinite(z.x)&&Number.isFinite(z.y)&&z.y>25&&z.y<Math.min(h*.36,330));
    const slash=/\/\s*([\p{L}\d&]+(?:\s*[-]\s*[\p{L}\d&]+){0,8})/iu;
    const party=/(\d{1,7})\s*-\s*([\p{L}\d&]+)\s*\/\s*([\p{L}\d&]+(?:\s*-\s*[\p{L}\d&]+){0,8})/iu;
    const compact=s=>norm(s).replace(/\s*\/\s*/g,'/').replace(/\s*-\s*/g,'-').replace(/\s+/g,'');
    const valid=s=>/^(?:\d{1,7}\/[^\s/]+|\d{1,7}-[^\s/]+\/[^\s/]+)$/u.test(s)&&/[\p{L}]/u.test(s.split('/').slice(1).join('/'));
    const labelRx=/^S\s*ố\s*[:：.]?/iu;
    const titleAtoms=a.filter(z=>/^(?:GIẤY|THƯ)\s*MỜI(?:\s|$)/iu.test(z.t)).sort((x,y)=>x.y-y.y);
    const titleY=titleAtoms.length?titleAtoms[0].y:Math.min(h*.22,190);
    const anchors=a.filter(z=>z.x>=0&&z.x<w*.6&&z.y<titleY-8&&labelRx.test(z.t))
      .sort((x,y)=>x.y-y.y||x.x-y.x);
    let number='',confidence='',debug='Không thấy nhãn Số tại phần đầu';
    for(const anchor of anchors){
      // Gom theo một DẢI Y (thay vì một hàng cố định), phù hợp PDF ký số.
      const near=a.filter(z=>z.x>=0&&z.x<w*.60&&Math.abs(z.y-anchor.y)<=21&&!/\bngày\b.*\b(tháng|năm)\b/iu.test(z.t))
        .sort((x,y)=>x.x-y.x||x.y-y.y);
      const combined=near.map(z=>z.t).join(' ').replace(/\s+/g,' ').trim();
      const inAnchor=anchor.t.replace(labelRx,'').trim();
      const full=[inAnchor,combined];
      for(const candidate of full){
        const match=candidate.match(party);
        if(match){const val=compact(match[1]+'-'+match[2]+'/'+match[3]);if(valid(val)){number=val;confidence='dòng Số, ký hiệu đầy đủ';break;}}
        // Chỉ chấp nhận số đứng trong vùng có nhãn Số (không đọc số dẫn chiếu).
        const normal=candidate.match(/(?:^|\s|[:：])([0-9]{1,7})\s*\/\s*([\p{L}\d&]+(?:\s*-\s*[\p{L}\d&]+){0,8})/iu);
        if(normal){const val=compact(normal[1]+'/'+normal[2]);if(valid(val)){number=val;confidence='dòng Số, ký hiệu đầy đủ';break;}}
      }
      if(number)break;
      // Ghép SỐ + PHẦN KÝ HIỆU có tọa độ gần nhau, có thể ở hai lớp chữ.
      let suf=anchor.t.match(slash);
      if(!suf)for(const z of near){const m=z.t.match(slash);if(m){suf=m;break;}}
      const digits=near.filter(z=>/^\d{1,7}$/.test(z.t)&&Math.abs(z.y-anchor.y)<=21&&
        z.x>=Math.max(0,anchor.x-18)&&z.x<w*.59);
      if(suf && digits.length){
        // Nếu có nhiều số có thể ghép, KHÔNG phỏng đoán.
        const unique=[...new Set(digits.map(z=>z.t))];
        if(unique.length===1){
          const val=compact(unique[0]+'/'+suf[1]);
          if(valid(val)){number=val;confidence='ghép theo vị trí dòng Số';break;}
        }else debug='Nhiều chữ số gần nhãn Số, cần xác minh';
      }else debug='Dòng Số thiếu số hoặc phần ký hiệu trong lớp chữ';
    }
    // Ngày ban hành đọc trong vùng bên phải: giữ lại cơ chế cũ nếu đã đúng.
    let date='';
    const dateAnchors=a.filter(z=>z.x>=w*.38&&z.y<Math.min(h*.3,220)&&/\bngày\b/iu.test(z.t)&&/\btháng\b/iu.test(z.t)&&/\bnăm\b/iu.test(z.t));
    for(const anchor of dateAnchors){
      if(/(?:căn\s*cứ|thực\s*hiện|kế\s*hoạch\s*số)/iu.test(anchor.t))continue;
      const near=a.filter(z=>z.x>=w*.38&&Math.abs(z.y-anchor.y)<=15).sort((x,y)=>x.x-y.x);
      const raw=near.map(z=>z.t).join(' ');
      let m=raw.match(/ngày\s*(\d{1,2})\s*tháng\s*(\d{1,2})\s*năm\s*(20\d{2})/iu);
      if(!m){
        const monthYear=anchor.t.match(/tháng\s*(\d{1,2})\s*năm\s*(20\d{2})/iu);
        const free=near.filter(z=>/^\d{1,2}$/.test(z.t)&&z.x>anchor.x&&z.x<w*.94);
        if(monthYear&&free.length===1)m=[null,free[0].t,monthYear[1],monthYear[2]];
      }
      if(m){const v=m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0');if(isValidDate(v)){date=v;break;}}
    }
    return {SoKyHieu:number,NgayBanHanh:date,DoTinCay:confidence,ChanDoan:debug};
  }
  // Chỉ dùng khi có nhãn Số và số/ký hiệu đều được đọc từ chính phần ĐẦU văn bản.
  function invitationNumberFromOcrV329(raw){
    const head=String(raw||'').normalize('NFC').replace(/[–—−]/g,'-').split(/\r?\n/).slice(0,13).join(' ');
    const a=head.match(/(?:^|\s)S\s*ố\s*[:：.]?\s*(\d{1,7})\s*\/\s*([\p{L}\d&]+(?:\s*-\s*[\p{L}\d&]+){0,8})/iu);
    if(a)return a[1]+'/'+a[2].replace(/\s*-\s*/g,'-');
    const b=head.match(/(?:^|\s)S\s*ố\s*[:：.]?\s*(\d{1,7})\s*-\s*([\p{L}\d&]+)\s*\/\s*([\p{L}\d&]+(?:\s*-\s*[\p{L}\d&]+){0,8})/iu);
    return b?b[1]+'-'+b[2]+'/'+b[3].replace(/\s*-\s*/g,'-'):'';
  }
  // V3.30: Bộ đọc dự phòng theo vị trí phần đầu; không sửa những ký hiệu đã đọc đúng.
  // Giữ nguồn chứng minh (label 'Số', suffix /GM-..., số cạnh nhãn); không đoán từ thân văn bản.
  function inviteNumberFallbackV330(items,rawLines,w,h){
    const W=w||595,H=h||842;
    const ary=(items||[]).filter(it=>it&&it.str&&it.transform).map(it=>({
      text:String(it.str||'').normalize('NFC').replace(/\u00a0/g,' ').replace(/[–—−]/g,'-').trim(),
      x:Number(it.transform[4]), y:H-Number(it.transform[5])
    })).filter(it=>it.text&&Number.isFinite(it.x)&&Number.isFinite(it.y)&&it.y>24&&it.y<Math.min(H*.37,310));
    const title=ary.filter(it=>/^(GIẤY|THƯ)\s*MỜI\b/iu.test(it.text)).sort((a,b)=>a.y-b.y)[0];
    const stop=title?title.y-7:Math.min(H*.25,205);
    const top=ary.filter(it=>it.y<stop);
    const anchors=top.filter(it=>it.x<W*.55&&/^(?:S\s*ố|SO)\s*[:：]/iu.test(it.text));
    const suffixRx=/\/\s*([\p{L}\p{N}&]+(?:\s*[-]\s*[\p{L}\p{N}&]+){0,8})/iu;
    const normalize=x=>String(x||'').replace(/\s*\/\s*/g,'/').replace(/\s*[-–—]\s*/g,'-').replace(/\s+/g,'');
    const isGood=x=>/^\d{1,7}(?:-[\p{L}\p{N}&]+)?\/[\p{L}\p{N}&]+(?:-[\p{L}\p{N}&]+){0,8}$/u.test(x);
    for(const label of anchors){
      const peers=top.filter(it=>it.x>Math.max(0,label.x-24)&&it.x<W*.53&&Math.abs(it.y-label.y)<=30);
      const suf=(label.text.match(suffixRx)||peers.map(z=>z.text.match(suffixRx)).find(Boolean));
      if(!suf)continue;
      const nums=peers.filter(z=>/^\d{1,7}$/.test(z.text));
      const distinct=[...new Set(nums.map(z=>z.text))];
      if(distinct.length===1){
        const result=normalize(distinct[0]+'/'+suf[1]);
        if(isGood(result))return {number:result,method:'vùng số/ký hiệu (tọa độ)'};
      }
      // Số đã có trong dòng nhãn, dù chữ bị tách khoảng cách.
      const inLabel=label.text.match(/S\s*ố\s*[:：]\s*(\d{1,7})/iu);
      if(inLabel){const v=normalize(inLabel[1]+'/'+suf[1]);if(isGood(v))return {number:v,method:'dòng Số (tọa độ)'};}
    }
    // Dự phòng khi PDF.js tách phần số thành dòng riêng. Không ghép nếu có 2 số cạnh tranh.
    const lines=String(rawLines||'').normalize('NFC').replace(/[–—−]/g,'-').split(/\r?\n/).map(v=>v.trim()).filter(Boolean);
    const cutoff=lines.slice(0,35).findIndex(l=>/^(GIẤY|THƯ)\s*MỜI\b/iu.test(l));
    const head=lines.slice(0,cutoff>=0?cutoff:Math.min(16,lines.length));
    for(let i=0;i<head.length;i++){
      if(!/(?:^|\s)S\s*ố\s*[:：]/iu.test(head[i]))continue;
      const match=head[i].match(suffixRx);
      if(!match)continue;
      const context=head.slice(Math.max(0,i-2),Math.min(head.length,i+3));
      const direct=context.join(' ').match(/(?:^|\s)S\s*ố\s*[:：]\s*(\d{1,7})\s*\/\s*([\p{L}\p{N}&-]+)/iu);
      if(direct){const v=normalize(direct[1]+'/'+direct[2]);if(isGood(v))return {number:v,method:'dòng Số (chữ PDF)'};}
      const stand=context.filter(t=>/^\d{1,7}$/.test(t));
      const unique=[...new Set(stand)];
      // Chỉ nhận số tách dòng khi có ít nhất 3 chữ số; số ngắn dễ nhầm với ngày ban hành.
      if(unique.length===1&&unique[0].length>=3){const v=normalize(unique[0]+'/'+match[1]);if(isGood(v))return {number:v,method:'ghép hai dòng PDF'};}
      // Nếu chữ số dài duy nhất, còn các số khác chỉ là ngày ban hành: chọn có kiểm soát.
      const long=unique.filter(v=>v.length>=3);
      if(long.length===1){const v=normalize(long[0]+'/'+match[1]);if(isGood(v))return {number:v,method:'chữ PDF nhiều dòng'};}
    }
    return {number:'',method:'chưa đủ căn cứ từ vùng Số'};
  }
  function invitationMetaV328(raw,header){
    const lines=String(raw||'').normalize('NFC').split(/\r?\n/)
      .map(x=>x.replace(/[\u00a0\u200b]/g,' ').replace(/\s+/g,' ').trim()).filter(Boolean);
    const start=lines.slice(0,50).findIndex(x=>/^(?:GIẤY\s*MỜI|THƯ\s*MỜI)(?:\s*(?:[:：-]\s*)?.*)?$/iu.test(x));
    if(start<0)return null;
    if(lines.slice(0,start).some(x=>/^(?:Kính\s*gửi|Căn\s*cứ|Thực\s*hiện|Điều\s+\d+)/iu.test(x)))return null;
    const h=header||{},before=lines.slice(0,start);
    let number=h.InviteNumber||h.SoKyHieu||'';
    if(!number){
      // Chỉ xét trước nhan đề; không lấy Kế hoạch/Công văn được viện dẫn ở phần thân.
      const txt=before.join(' ');
      const m=txt.match(/(?:^|\s)S\s*ố\s*[:：]\s*(\d{1,7})\s*\/\s*([\p{L}0-9&]+(?:\s*[-–—]\s*[\p{L}0-9&]+){0,7})/iu);
      if(m)number=(m[1]+'/'+m[2]).replace(/\s+/g,'').replace(/[–—]/g,'-');
    }
    if(!number)number=invitationNumberFromOcrV329(before.join('\n'));
    let date=isValidDate(h.NgayBanHanh||'')?h.NgayBanHanh:(h.InviteDate||'');
    if(!date){
      for(const line of before){
        const m=line.match(/^[^.;]{1,100},\s*ngày\s*(\d{1,2})\s*tháng\s*(\d{1,2})\s*năm\s*(20\d{2})/iu);
        if(m){let v=m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0');if(isValidDate(v)){date=v;break;}}
      }
    }
    let agency=String(h.CoQuan||'').trim();
    if(!agency){
      const left=String(h.debugLeft||'').split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
      const top=left.length?left.slice(0,12):before.slice(0,14);
      for(let i=0;i<top.length;i++){
        const x=top[i];
        if(/^(?:SỞ|CHI\s*CỤC|BAN\s+QUẢN\s+LÝ|PHÒNG|TRUNG\s+TÂM|VĂN\s+PHÒNG|BỘ)\s+[\p{L}]/iu.test(x)){agency=x;break;}
        if(/^(?:ỦY|UỶ)\s+BAN\s+NHÂN\s+DÂN\s+(?:XÃ|TỈNH|PHƯỜNG)\s+[\p{L}]/iu.test(x)){agency=x;break;}
      }
    }
    if(!agency)agency=agencyUnifiedV35(raw,h)||'';
    const title=[];
    const same=lines[start].match(/^(?:GIẤY\s*MỜI|THƯ\s*MỜI)\s*(?:[:：-]\s*)?(.{8,})$/iu);
    if(same)title.push(same[1]);
    for(let j=start+1;j<Math.min(start+9,lines.length);j++){
      const x=lines[j];
      if(/^(?:Kính\s*gửi|Trân\s*trọng\s*mời|Thực\s*hiện|Căn\s*cứ|\d+[.)]\s*(?:Thời\s*gian|Nội\s*dung)|Địa\s*điểm|Nơi\s*nhận)/iu.test(x))break;
      if(/^[*\-–—]+$/.test(x))continue;
      if(title.join(' ').length+x.length>480)break;
      title.push(x);
    }
    return {SoKyHieu:number,NgayBanHanh:date,CoQuan:agency,TrichYeu:title.join(' ').replace(/\s+/g,' ').replace(/[;.,:\s]+$/,'').slice(0,480)};
  }
  function invitationTimeV328(raw){
    const lines=String(raw||'').normalize('NFC').split(/\r?\n/)
      .map(x=>x.replace(/[\u00a0\u200b]/g,' ').replace(/[ \t]+/g,' ').trim()).filter(Boolean);
    const kind=lines.slice(0,55).some(x=>/^(?:GIẤY\s*MỜI|THƯ\s*MỜI)(?:\s*(?:[:：-]\s*)?.*)?$/iu.test(x));
    if(!kind)return [];
    const out=[],seen=new Set();
    const inviteTitle=(invitationMetaV328(raw,{})||{}).TrichYeu||'';
    const dateRx=/\bngày\s*(\d{1,2})\s*[\/.-]\s*(\d{1,2})\s*[\/.-]\s*(20\d{2})\b|\bngày\s*(\d{1,2})\s*tháng\s*(\d{1,2})\s*năm\s*(20\d{2})\b/giu;
    const timeRx=/(?:^|[\s:])([01]?\d|2[0-3])\s*(?:h|giờ)\s*([0-5]?\d)?\s*(?:phút)?[’']?|(?:^|[\s:])([01]?\d|2[0-3]):([0-5]\d)/iu;
    for(let i=0;i<lines.length;i++){
      if(!/^(?:\d+(?:\.\d+)*[.)]?\s*)?(?:[-*]\s*)?(?:Thời\s*gian(?:\s+(?:tổ\s*chức|hội\s*nghị|họp))?|Thời\s*điểm|Bắt\s*đầu|Giờ\s*khai\s*mạc)\s*[:：]/iu.test(lines[i]))continue;
      const sample=[lines[i]];
      if(!/\bngày\s*\d{1,2}/iu.test(lines[i])){
        if(lines[i+1]&&!/^(?:\d+(?:\.\d+)*[.)]?\s*)?(?:Thời\s*gian|Địa\s*điểm|Thành\s*phần|Nội\s*dung|Kính\s*gửi)\s*[:：]/iu.test(lines[i+1]))sample.push(lines[i+1]);
      }
      const clause=sample.join(' ');
      let m;dateRx.lastIndex=0;
      while((m=dateRx.exec(clause))){
        const iso=m[3]?(m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0')):(m[6]+'-'+m[5].padStart(2,'0')+'-'+m[4].padStart(2,'0'));
        if(!isValidDate(iso)||seen.has(iso+'|'+i))continue;
        seen.add(iso+'|'+i);
        const tim=clause.match(timeRx);
        const hours=tim?Number(tim[1]||tim[3]):null;
        const minutes=tim?Number(tim[2]||tim[4]||0):null;
        const clock=tim?String(hours).padStart(2,'0')+':'+String(minutes).padStart(2,'0'):'';
        out.push({TenMoc:'Tham dự: '+(inviteTitle?inviteTitle.slice(0,145):'cuộc họp theo giấy mời')+(clock?' (lúc '+clock+')':'')+' – cần xác nhận',
          NgayHan:iso, GioBatDau:clock, CanCu:clause.slice(0,1100),Nguon:'GIAY_MOI',LoaiMoc:'LICH_MOI'});
        if(out.length>=10)return out;
      }
    }
    return out;
  }
  function unifiedMetaV314(raw,header){
    const h=header||{};
    const invite=invitationMetaV328(raw,h);
    if(invite)return invite;
    const centered=String(h.TrichYeuCenter||'').trim()||centerTitleTextV322(raw);
    const typedHeadingPresent=String(raw||'').split(/\r?\n/).slice(0,45).some(x=>
      /^(?:BÁO\s*CÁO|KẾ\s*HOẠCH|QUYẾT\s*ĐỊNH|THÔNG\s*BÁO|TỜ\s*TRÌNH|CHƯƠNG\s*TRÌNH|KẾT\s*LUẬN|NGHỊ\s*QUYẾT|CHỈ\s*THỊ)(?:\s|$)/iu.test(x.trim()));
    const party=orgMetaV321(raw,header);
    if(party){
      // Nhận dạng cơ quan/số vẫn dùng V3.21; trích yếu tiêu đề giữa trang ưu tiên V3.22.
      if(centered)party.TrichYeu=centered;
      else if(typedHeadingPresent && /^(?:Căn\s+cứ|Kính\s+gửi|Theo\s+đề\s+nghị)/iu.test(party.TrichYeu||''))party.TrichYeu='';
      return party;
    }
    const base=unifiedMetaV35(raw,header);
    const kind=typedMetaV314(raw,header);
    // V3.22: loại trường hợp bộ nhận diện cũ lấy nhầm lời mở đầu Căn cứ...
    const fallbackTitle=h.TrichYeu||kind.TrichYeu||base.TrichYeu||'';
    const unsafeFallback=typedHeadingPresent&&/^(?:Căn\s+cứ|Kính\s+gửi|Theo\s+đề\s+nghị)/iu.test(fallbackTitle);
    // V3.15: ưu tiên dữ liệu đọc ở vị trí tiêu đề trang 1, không lấy số/ngày viện dẫn.
    // Tiêu đề kế hoạch có thể dài nhiều dòng; chỉ lấy từ khối KẾ HOẠCH đến Căn cứ.
    return {SoKyHieu:h.SoKyHieu||kind.SoKyHieu||base.SoKyHieu,
      NgayBanHanh:(isValidDate(h.NgayBanHanh||'')?h.NgayBanHanh:'')||kind.NgayBanHanh||base.NgayBanHanh,
      CoQuan:h.CoQuan||kind.CoQuan||base.CoQuan,
      TrichYeu:centered||(unsafeFallback?'':fallbackTitle)};
  }
  function applyUnifiedMetadata(fromFile){
    const txt=$('#dText').value||'';
    if(!txt.trim()){if(!fromFile)note('Chưa có nội dung chữ. Chọn PDF, DOCX hoặc dán nội dung.',true);return;}
    const result=unifiedMetaV314(txt,app.pdfHeader||null);
    const pairs=[['SoKyHieu','dSo'],['NgayBanHanh','dNgay'],['CoQuan','dCoQuan'],['TrichYeu','dTrich']];
    const added=[],missing=[];
    pairs.forEach(pair=>{
      const el=$('#'+pair[1]);
      if(!el.value.trim()&&result[pair[0]]){el.value=pair[1]==='dNgay'?toDisplayDateVN(result[pair[0]]):result[pair[0]];added.push(pair[0]);}
      if(!el.value.trim())missing.push(pair[0]);
    });
    if(!fromFile)note('Gợi ý thêm: '+(added.join(', ')||'không có trường mới')+'. '+(missing.length?'Vui lòng kiểm tra: '+missing.join(', '):'Hãy đối chiếu các ô với văn bản gốc.'));
  }
  function readDocMetadata(text,header){
    const r=unifiedMetaV314(text,header);
    $('#dSo').value=r.SoKyHieu;setIssueDate(r.NgayBanHanh);
    $('#dCoQuan').value=r.CoQuan;$('#dTrich').value=r.TrichYeu;
    return {date:!!r.NgayBanHanh,missing:Object.keys(r).filter(k=>!r[k])};
  }
  // Chỉ suy luận hạn từ các câu giao nhiệm vụ rõ ràng; không lấy ngày ban hành, ngày văn bản viện dẫn.
  function extractDueCandidates(raw){
    const clean=String(raw||'').normalize('NFC').replace(/\u00a0/g,' ').replace(/[ \t]+/g,' ');
    const chunks=clean.replace(/\r/g,'\n').split(/(?<=[.;!?])\s+|\n{2,}/u).map(s=>s.replace(/\s+/g,' ').trim()).filter(Boolean);
    const signals=/(?:chậm nhất|không muộn hơn|trước ngày|trước thời điểm|hoàn thành trước|hoàn thành chậm nhất|hạn (?:gửi|nộp|báo cáo|hoàn thành)|gửi (?:về|đến).*?trước ngày|nộp .*?trước ngày|báo cáo .*?trước ngày|đến hết ngày)/iu;
    const dateRx=/(?:ngày\s*)?(\d{1,2})\s*[\/.-]\s*(\d{1,2})\s*[\/.-]\s*(20\d{2})|ngày\s*(\d{1,2})\s*tháng\s*(\d{1,2})\s*năm\s*(20\d{2})/giu;
    const result=[],seen=new Set();
    for(const chunk of chunks){
      if(!signals.test(chunk))continue;
      // Khóa thời hạn phải nằm sát ngày; các mốc năm học và ngày viện dẫn không phải hạn.
      let match;
      dateRx.lastIndex=0;
      while((match=dateRx.exec(chunk))){
        const before=chunk.slice(Math.max(0,match.index-100),match.index+Math.min(12,match[0].length));
        if(!signals.test(before))continue;
        const day=Number(match[1]||match[4]),month=Number(match[2]||match[5]),year=Number(match[3]||match[6]);
        const date=String(year)+'-'+String(month).padStart(2,'0')+'-'+String(day).padStart(2,'0');
        if(!isValidDate(date))continue;
        const key=date+'|'+chunk.slice(0,70).toLowerCase();if(seen.has(key))continue;seen.add(key);
        const title=chunk.replace(/\s+/g,' ').slice(0,110);
        result.push({TenMoc:'Hạn xử lý – cần xác nhận',NgayHan:date,CanCu:chunk.slice(0,1100),Nguon:'VAN_BAN',title:title});
        if(result.length>=12)return result;
      }
    }
    return result;
  }
  function parseSuggestions(updateMetadata){
    const text=$('#dText').value||'';
    // Khi đọc tệp mới đã nhận diện metadata. Không ghi đè kết quả OCR và người dùng sửa!
    if(updateMetadata)readDocMetadata(text,app.pdfHeader||null);
    const suggestions=extractDueCandidates(text);
    const isPlan=/(?:\/KH[-–]|(?:^|\n)\s*KẾ\s*HOẠCH\s*(?:\n|$))/iu.test((($('#dSo')||{}).value||'')+'\n'+text.slice(0,1800));
    const planTime=isPlan?extractPlanTimeCandidatesV313(text):{dates:[],periods:[]};
    const inviteTime=invitationTimeV328(text);
    const issues=[];
    if(!$('#dSo').value)issues.push('số, ký hiệu');
    if(!$('#dNgay').value)issues.push('ngày ban hành');
    if(!$('#dCoQuan').value)issues.push('cơ quan ban hành');
    if(!$('#dTrich').value)issues.push('trích yếu');
    let html='<div class="note" style="margin-top:10px">'+(issues.length?'Cần kiểm tra theo bản gốc: '+esc(issues.join(', '))+'.':'Thông tin nhận diện cần được kiểm tra trước khi lưu.')+'</div>';
    if(app.pdfHeader){
      const h=app.pdfHeader;
      html+='<details style="margin-top:10px"><summary style="cursor:pointer;color:#376475">Kiểm tra dữ liệu tiêu đề PDF đã đọc (khi nhận diện còn sai)</summary><pre style="white-space:pre-wrap;max-height:230px;overflow:auto;font-size:11px;background:#f6fafb;padding:10px">'+
        esc('Số: '+(h.SoKyHieu||'[không đọc được]')+'\nNgày: '+(h.NgayBanHanh||'[không đọc được]')+'\nCơ quan: '+(h.CoQuan||'[không đọc được]')+'\nTrích yếu: '+(h.TrichYeu||'[không đọc được]')+'\n\n[Cột trái]\n'+(h.debugLeft||'')+'\n\n[Cột phải]\n'+(h.debugRight||'')+'\n\n[Số từ phần chữ ký số V3.31]\n'+(h.SigV331||'[trống]')+'; '+(h.SigDiagnosticV331||'[chưa thử]')+'\n[Ngày từ chữ ký V3.31]\n'+(h.SigDateV331||'[trống]')+'\n[Số giấy mời thử nghiệm V3.30]\n'+(h.InviteFallbackNumber||'[trống]')+' | '+(h.InviteFallbackMethod||'[chưa thử]')+'\n[Số giấy mời V3.29]\n'+(h.InviteNumber||'[trống]')+'\n\n[Khối tiêu đề]\n'+(h.debugTitle||'')+'\n\n[Ngày theo atom PDF]\n'+(h.debugDateAtoms||''))+'</pre></details>';
    }
    if(!suggestions.length&&!planTime.dates.length&&!planTime.periods.length&&!inviteTime.length){$('#suggestions').innerHTML=html+'<div class="note warning" style="margin-top:10px">Chưa tìm thấy hạn hoặc mốc hoạt động rõ ràng. Các khoảng thời gian không có ngày cụ thể cần được xác nhận trước khi tạo mốc.</div>';return;}
    const allSuggestions=suggestions.concat(planTime.dates,inviteTime);
    if(suggestions.length){
      html+='<div class="sectionline">Hạn xử lý nêu rõ trong văn bản – cần xác nhận</div>';
      suggestions.forEach(function(x,i){html+='<div class="candidate"><label><input type="checkbox" class="suggestion" data-idx="'+i+'"> <strong>'+vnDate(x.NgayHan)+'</strong> (hạn xử lý)</label><p>'+esc(x.CanCu)+'</p></div>';});
    }
    if(planTime.dates.length){
      html+='<div class="sectionline">Mốc tổ chức hoạt động trong kế hoạch – không mặc nhiên là hạn xử lý</div>';
      planTime.dates.forEach(function(x,i){html+='<div class="candidate"><label><input type="checkbox" class="suggestion" data-idx="'+(suggestions.length+i)+'"> <strong>'+vnDate(x.NgayHan)+'</strong> ('+esc(x.TenMoc)+')</label><p>'+esc(x.CanCu)+'</p></div>';});
    }
    if(inviteTime.length){
      html+='<div class="sectionline">Thời gian được mời tham dự – không phải hạn hoàn thành công việc</div>';
      inviteTime.forEach(function(x,i){
        const idx=suggestions.length+planTime.dates.length+i;
        html+='<div class="candidate"><label><input type="checkbox" class="suggestion" data-idx="'+idx+'"> <strong>'+vnDate(x.NgayHan)+'</strong>'+
          (x.GioBatDau?' lúc <strong>'+esc(x.GioBatDau)+'</strong>':'')+
          ' (lịch mời, cần xác nhận)</label><p>'+esc(x.CanCu)+'</p></div>';
      });
      html+='<div class="note warning">Đây là thời điểm họp, không phải hạn nộp báo cáo. Nếu chọn đưa vào Mốc hạn, hệ thống chỉ theo dõi theo ngày; giờ mời được giữ trong tên mốc. Anh cũng có thể nhập vào Lịch công tác để nhắc theo giờ.</div>';
    }
    if(planTime.periods.length){
      html+='<div class="sectionline">Thời gian theo tháng/quý – chưa có ngày cụ thể</div><div class="note warning">Các mục bên dưới chỉ để theo dõi. Anh cần xác định ngày thực tế theo phân công trước khi thêm mốc hạn; chương trình không tự đặt ngày.</div>';
      planTime.periods.forEach(function(x){html+='<div class="candidate"><b>'+esc(x.KyHan)+'</b><p>'+esc(x.CanCu)+'</p></div>';});
    }
    if(allSuggestions.length)html+='<button type="button" class="btn secondary tiny" id="pickSuggestions">Thêm các mốc đã chọn</button>';
    $('#suggestions').innerHTML=html;
    const pick=$('#pickSuggestions');
    if(pick)pick.onclick=function(){
      readDueEditors();let count=0;
      document.querySelectorAll('.suggestion:checked').forEach(function(el){
        const d=allSuggestions[Number(el.dataset.idx)];
        if(!d)return;
        if(!app.selectedDues.some(x=>x.NgayHan===d.NgayHan && x.CanCu===d.CanCu)){app.selectedDues.push({TenMoc:d.TenMoc,NgayHan:d.NgayHan,CanCu:d.CanCu});count++;}
      });
      renderDueEditors();note('Đã thêm '+count+' mốc. Hãy xác minh nhiệm vụ, loại mốc và người phụ trách trước khi lưu.');
    };
  }
  function pdfPageToLines(items){
    // Sắp xếp theo tọa độ, xuống dòng khi tọa độ Y thay đổi; không ghép mọi ô của trang vào một dòng.
    var lines=[];items.forEach(function(it){
      if(!it.str||!it.str.trim())return;
      var x=it.transform?it.transform[4]:0,y=it.transform?it.transform[5]:0;
      var line=lines.find(function(l){return Math.abs(l.y-y)<2.5;});
      if(!line){line={y:y,items:[]};lines.push(line);}line.items.push({x:x,text:it.str,width:it.width||0});
    });
    lines.sort(function(a,b){return b.y-a.y;});
    return lines.map(function(line){
      line.items.sort(function(a,b){return a.x-b.x;});
      var out='',lastRight=null;
      line.items.forEach(function(it){
        var gap=lastRight===null?0:it.x-lastRight;
        if(out && gap>2.4)out+=' ';
        out+=it.text;lastRight=it.x+it.width;
      });
      return out.trim();
    }).filter(Boolean).join('\n');
  }
  // OCR dự phòng cho PDF có lớp chữ thiếu chữ số, gặp ở một số PDF được ký số.
  // Chỉ thực thi sau khi người dùng nhấn nút. Không tự gửi ảnh tới máy chủ ứng dụng.
  async function loadOcrLib(){
    if(window.Tesseract)return;
    await new Promise(function(resolve,reject){
      var js=document.createElement('script');js.src='https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';
      js.onload=resolve;js.onerror=function(){reject(new Error('Không tải được OCR. Kiểm tra mạng hoặc chính sách bảo mật trình duyệt.'));};
      document.head.appendChild(js);
    });
    if(!window.Tesseract)throw new Error('Chưa khởi tạo được thư viện OCR.');
  }
  async function ocrFirstPage(approved){
    if(!app.currentPdfFile){note('Hãy chọn lại PDF trước khi dùng OCR.',true);return;}
    if(!approved&&!confirm('PDF thiếu chữ số trong lớp chữ. OCR trang đầu sẽ tải bộ nhận diện tiếng Việt từ dịch vụ bên thứ ba; chỉ tiếp tục với tài liệu được phép xử lý. Anh đồng ý?'))return;
    busy(true);let worker=null;
    try{
      await loadOcrLib();
      const pdf=await pdfjsLib.getDocument({data:await app.currentPdfFile.arrayBuffer()}).promise;
      const page=await pdf.getPage(1), viewport=page.getViewport({scale:3});
      const canvas=document.createElement('canvas');canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);
      await page.render({canvasContext:canvas.getContext('2d'),viewport}).promise;
      const crop=(x,y,w,h)=>{const c=document.createElement('canvas');c.width=Math.floor(canvas.width*w);c.height=Math.floor(canvas.height*h);c.getContext('2d').drawImage(canvas,canvas.width*x,canvas.height*y,canvas.width*w,canvas.height*h,0,0,c.width,c.height);return c;};
      worker=await Tesseract.createWorker('vie+eng',1);
      const left=(await worker.recognize(crop(.08,.045,.40,.23))).data.text;
      const right=(await worker.recognize(crop(.43,.045,.52,.18))).data.text;
      // Dòng địa danh/ngày có thể nằm thấp hơn khung quốc hiệu, OCR lại một dải riêng.
      const dateBand=(await worker.recognize(crop(.45,.105,.51,.135))).data.text;
      // V3.16: OCR lai rieng DONG NGAY, tranh nham "11" thanh "//".
      // Khong sua ky tu "//" thanh "11": OCR khong du bang chung de ket luan.
      let dateFocused='';
      if(!parseOcrHeaderDateV310(dateBand)&&!parseOcrHeaderDateV310(right)){
        try{
          const narrow=crop(.485,.119,.405,.046);
          const enlarged=document.createElement('canvas');
          enlarged.width=narrow.width*2;enlarged.height=narrow.height*2;
          const ctx=enlarged.getContext('2d',{willReadFrequently:true});
          ctx.imageSmoothingEnabled=true;
          ctx.drawImage(narrow,0,0,enlarged.width,enlarged.height);
          const pixels=ctx.getImageData(0,0,enlarged.width,enlarged.height);
          for(let k=0;k<pixels.data.length;k+=4){
            const grey=.299*pixels.data[k]+.587*pixels.data[k+1]+.114*pixels.data[k+2];
            const ink=grey<183?0:255;
            pixels.data[k]=pixels.data[k+1]=pixels.data[k+2]=ink;
          }
          ctx.putImageData(pixels,0,0);
          dateFocused=(await worker.recognize(enlarged)).data.text||'';
        }catch(_){/* Van de OCR thu hai khong duoc can tro xac nhan thu cong. */}
      }
      const leftLines=left.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
      const meta=unifiedMetaV314(left+'\n'+right+'\n'+dateBand,{debugLeft:left,debugRight:right+'\n'+dateBand,debugTitle:(app.pdfHeader||{}).debugTitle||''});
      // OCR đôi khi bỏ sót trích yếu hoặc cơ quan mà lớp chữ PDF đọc được.
      const textMeta=unifiedMetaV314($('#dText').value||'',app.pdfHeader||null);
      let centerOcr='';
      if(!meta.TrichYeu&&!textMeta.TrichYeu){
        // OCR riêng khu vực GIỮA TRANG theo yêu cầu người dùng, không quét toàn bộ thân.
        try{centerOcr=(await worker.recognize(crop(.10,.16,.80,.34))).data.text||'';
          const picked=centerTitleTextV322(centerOcr);
          if(picked)meta.TrichYeu=picked;
        }catch(_){/* OCR tiêu đề phụ không làm hỏng kết quả các ô khác. */}
      }
      if(!meta.TrichYeu)meta.TrichYeu=textMeta.TrichYeu;
      if(!meta.CoQuan)meta.CoQuan=textMeta.CoQuan;
      if(!meta.SoKyHieu)meta.SoKyHieu=textMeta.SoKyHieu;
      // PDF giấy mời có thể mất số trong lớp chữ nhưng OCR vẫn đọc được đúng dòng Số.
      const pdfIsInvite=!!invitationMetaV328($('#dText').value||'',app.pdfHeader||null);
      if(pdfIsInvite && !$('#dSo').value.trim()){
        const fromOcr=invitationNumberFromOcrV329(left);
        // Ưu tiên bằng chứng trực tiếp trên dòng 'Số'; không dùng ngày hay mã dẫn chiếu.
        meta.SoKyHieu=fromOcr||(textMeta.SoKyHieu||'');
      } else if(!meta.SoKyHieu)meta.SoKyHieu=invitationNumberFromOcrV329(left);
      if(!meta.NgayBanHanh)meta.NgayBanHanh=textMeta.NgayBanHanh;
      if(!meta.NgayBanHanh)meta.NgayBanHanh=parseOcrHeaderDateV310(dateFocused)||parseOcrHeaderDateV310(dateBand)||parseOcrHeaderDateV310(right);
      if(!meta.CoQuan)meta.CoQuan=agencyFromHeaderV39($('#dText').value||'',app.pdfHeader||{});
      if(!meta.NgayBanHanh && !$('#dNgay').value){
        const uncertain=issueDateUncertainV311(dateBand)||issueDateUncertainV311(right);
        if(uncertain){
          const response=window.prompt('OCR đọc ngày "'+uncertain.dayRaw+'" (không hợp lệ) trong dòng ngày ban hành tháng '+uncertain.month+'/'+uncertain.year+'.\nHãy xem trên PDF gốc và nhập CHỈ SỐ NGÀY (1–'+uncertain.maxDay+'). Để trống hoặc Hủy nếu chưa xác minh:','');
          if(response!==null && String(response).trim()!==''){
            const value=String(response).trim();
            const day=Number(value);
            if(/^\d{1,2}$/.test(value) && day>=1&&day<=uncertain.maxDay){
              meta.NgayBanHanh=uncertain.year+'-'+String(uncertain.month).padStart(2,'0')+'-'+String(day).padStart(2,'0');
            }else{
              note('Ngày xác nhận không hợp lệ. Vui lòng nhập ngày theo bản gốc.',true);
            }
          }
        }else{
          // PDF ký số có thể khuyết hẳn chữ số ngày/tháng trong lớp chữ.
          // Chỉ hỏi người dùng khi OCR đã nhận dòng địa danh/ngày từ PHẦN ĐẦU.
          const accentless=String(dateBand||right||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
          const hdr=accentless.replace(/đ/gi,'d').replace(/\s+/g,' ');
          if(/\bngay\b/i.test(hdr)&&/\bnam\b/i.test(hdr)&&!$('#dNgay').value){
            const response=window.prompt('Dòng ngày ban hành trên PDF chưa OCR đầy đủ. Hãy đối chiếu bản gốc và nhập ngày/tháng/năm (dd/mm/yyyy); để trống hoặc Hủy nếu chưa xác minh:','');
            if(response && toIsoDateVN(response))meta.NgayBanHanh=toIsoDateVN(response);
          }
        }
      }


      const updates=[];
      [['SoKyHieu','dSo'],['NgayBanHanh','dNgay'],['CoQuan','dCoQuan'],['TrichYeu','dTrich']].forEach(pair=>{
        const el=$('#'+pair[1]);if(!el.value.trim()&&meta[pair[0]]){el.value=pair[1]==='dNgay'?toDisplayDateVN(meta[pair[0]]):meta[pair[0]];updates.push(pair[0]);}
      });
      let panel=document.getElementById('ocrResult');if(panel)panel.remove();
      panel=document.createElement('div');panel.id='ocrResult';panel.className='note warning';panel.style.marginTop='12px';
      const missingIssueDate=!$('#dNgay').value.trim();
      const missingOrgNumber=/(?:ĐẢNG\s*(?:BỘ|ỦY|UỶ)|TỈNH\s*(?:ỦY|UỶ)|MẶT\s+TRẬN\s+TỔ\s+QUỐC|\bMTTQ\b)/iu.test($('#dText').value.slice(0,900)) && !$('#dSo').value.trim();
      panel.innerHTML='<b>Đã đọc ảnh tiêu đề trang đầu (cần đối chiếu bản gốc).</b> Bổ sung: '+esc(updates.join(', ')||'không có trường mới')+
        (missingOrgNumber?'<div style="margin:9px 0;padding:10px;background:#fff;border-radius:8px"><b>Chưa đọc được số, ký hiệu trong lớp chữ/OCR.</b> Hãy đối chiếu số trên PDF gốc. <button type="button" class="btn secondary tiny" id="confirmOrgNumberV321">Xác nhận số, ký hiệu</button></div>':'')+
        (missingIssueDate?'<div style="margin:9px 0;padding:10px;background:#fff;border-radius:8px"><b>Chưa đọc được tháng trong ngày ban hành.</b> OCR có thể nhầm chữ số thành dấu //; không được lấy ngày từ nội dung văn bản. <button type="button" class="btn secondary tiny" id="confirmIssueDateV316">Xác nhận ngày/tháng/năm</button></div>':'')+
        '<details><summary>Xem kết quả OCR</summary><pre style="white-space:pre-wrap;max-height:200px;overflow:auto">'+esc(left+'\n'+right+'\n[Dải ngày OCR]\n'+dateBand+'\n[OCR riêng dòng ngày]\n'+dateFocused+'\n[OCR khối tiêu đề giữa]\n'+centerOcr)+'</pre></details>';
      $('#suggestions').before(panel);
      const numberConfirmButton=panel.querySelector('#confirmOrgNumberV321');
      if(numberConfirmButton)numberConfirmButton.onclick=function(){
        const response=window.prompt('Đối chiếu PDF gốc và nhập số, ký hiệu Đảng hoặc MTTQ (ví dụ 1339-CV/ĐU, 23/BC-MTTQ-BTT). Không lấy số được viện dẫn:','');
        if(response===null)return;
        const value=String(response).trim().replace(/\s+/g,'').replace(/[–—]/g,'-');
        if(!/^(?:\d{1,7}-[\p{L}\d]+\/[\p{L}\d]+(?:-[\p{L}\d]+)*|\d{1,7}\/[\p{L}\d]+(?:-[\p{L}\d]+)*)$/iu.test(value)){note('Số ký hiệu chưa hợp lệ. Ví dụ: 1339-CV/ĐU hoặc 23/BC-MTTQ-BTT.',true);return;}
        $('#dSo').value=value;numberConfirmButton.parentNode.innerHTML='<b>Đã xác nhận số ký hiệu:</b> '+esc(value);
      };
      const dateConfirmButton=panel.querySelector('#confirmIssueDateV316');
      if(dateConfirmButton)dateConfirmButton.onclick=function(){
        const response=window.prompt('Đối chiếu dòng ngày trên PDF GỐC và nhập đủ ngày/tháng/năm (dd/mm/yyyy). Không lấy ngày từ công văn được dẫn chiếu:', $('#dNgay').value||'');
        if(response===null)return;
        const iso=toIsoDateVN(response);
        if(!iso){note('Ngày chưa hợp lệ. Nhập dd/mm/yyyy, ví dụ 03/11/2026.',true);return;}
        setIssueDate(iso);
        dateConfirmButton.parentNode.innerHTML='<b>Đã xác nhận ngày ban hành:</b> '+esc(toDisplayDateVN(iso))+' (cần khớp với PDF gốc).';
        note('Đã điền ngày ban hành theo xác nhận. Hãy kiểm tra rồi lưu văn bản.');
      };
      parseSuggestions(false);
      note('Đã đọc ảnh phần đầu. Hãy kiểm tra bốn ô thông tin trước khi lưu.');
    }catch(e){note('OCR không hoàn thành: '+e.message,true);}finally{if(worker)try{await worker.terminate();}catch(e){}busy(false);}
  }

/**
 * PDF /Sig widget appearance numeric reader - browser/Node compatible.
 * Only reads signed PDF bytes already provided by the user; no network or upload.
 * Intended as a fallback when PDF.js text layer lacks digits in upper page header.
 */
async function readSignatureAppearanceHeaderV331(pdfData, pageAnnotations, pageSize){
  const bytes=pdfData instanceof Uint8Array?pdfData:new Uint8Array(pdfData);
  if(bytes.byteLength>20*1024*1024) return {error:'PDF vượt 20MB'};
  let src='';
  // latin1 maps bytes directly to codepoints; chunking avoids call stack limits.
  // Do not use TextDecoder('iso-8859-1'): browsers map it to Windows-1252,
  // corrupting binary compressed streams containing bytes 0x80..0x9F.
  for(let i=0;i<bytes.length;i+=16384)src+=String.fromCharCode.apply(null,bytes.subarray(i,i+16384));
  const objs=new Map();
  const rx=/(?:^|[\r\n])(\d{1,8})\s+(\d+)\s+obj\b/g;
  let m;
  while((m=rx.exec(src))){
    const begin=rx.lastIndex,end=src.indexOf('endobj',begin);
    if(end<0)break;
    if(end-begin<2000000)objs.set(Number(m[1]),src.slice(begin,end));
    rx.lastIndex=end+6;
  }
  // Many signed PDFs pack /Sig widgets and /Font dictionaries into /ObjStm.
  // Expand the contained indirect objects before following /AP, /Font, /ToUnicode references.
  const byteEncoder=(text)=>Uint8Array.from(text,c=>c.charCodeAt(0)&255);
  const memo=new Map();
  async function decodedObj(id){
    if(memo.has(id))return memo.get(id);
    const raw=objs.get(id)||'';
    if(!raw)return '';
    const s=raw.search(/\bstream\r?\n/);
    if(s<0)return raw;
    const marker=raw.slice(s).match(/^stream\r?\n/);
    if(!marker)return '';
    const start=s+marker[0].length;
    let length=null;
    const before=raw.slice(0,s), len=before.match(/\/Length\s+(\d+)\b/);
    if(len)length=Number(len[1]);
    const rawStream=(length!==null&&start+length<=raw.length)?raw.slice(start,start+length):raw.slice(start,raw.indexOf('endstream',start)).replace(/\r?\n$/,'');
    if(!/\/FlateDecode\b/.test(before)){memo.set(id,rawStream);return rawStream;}
    if(typeof DecompressionStream==='undefined')return '';
    try{
      const st=new Blob([byteEncoder(rawStream)]).stream().pipeThrough(new DecompressionStream('deflate'));
      const dec=new Uint8Array(await new Response(st).arrayBuffer());
      let res='';
      for(let i=0;i<dec.length;i+=16384)res+=String.fromCharCode.apply(null,dec.subarray(i,i+16384));
      memo.set(id,res);return res;
    }catch(e){return '';}
  }
  for(const [id,dict] of [...objs]){
    if(!/\/Type\s*\/ObjStm\b/.test(dict))continue;
    const nm=dict.match(/\/N\s+(\d+)/),fst=dict.match(/\/First\s+(\d+)/);
    if(!nm||!fst)continue;
    const data=await decodedObj(id);
    const first=Number(fst[1]),n=Number(nm[1]);
    if(!data||n>1000||first>data.length||first<0)continue;
    const pairs=[...data.slice(0,first).matchAll(/(\d+)\s+(\d+)/g)].slice(0,n)
      .map(x=>[Number(x[1]),Number(x[2])]);
    for(let i=0;i<pairs.length;i++){
      const [objNum,offset]=pairs[i];const end=i+1<pairs.length?pairs[i+1][1]:data.length-first;
      const value=data.slice(first+offset,first+end).trim();
      if(value&&!objs.has(objNum))objs.set(objNum,value);
    }
  }
  function fontRefs(id){
    const o=objs.get(id)||''; const f=o.match(/\/Font\s*<<([\s\S]{0,2000}?)>>/);
    if(!f)return [];
    return [...f[1].matchAll(/\/[A-Za-z\d]+\s+(\d+)\s+\d+\s+R/g)].map(z=>Number(z[1]));
  }
  const cmapCache=new Map();
  async function cmapForFont(id){
    if(cmapCache.has(id))return cmapCache.get(id);
    const obj=objs.get(id)||'';
    const ref=obj.match(/\/ToUnicode\s+(\d+)\s+\d+\s+R\b/);
    if(!ref)return new Map();
    const cm=await decodedObj(Number(ref[1]));
    const mapping=new Map();let mode='';
    for(const line of cm.split(/[\r\n]+/)){
      const s=line.trim();
      if(/beginbfrange\b/.test(s)){mode='range';continue;}
      if(/beginbfchar\b/.test(s)){mode='char';continue;}
      if(/endbfrange|endbfchar/.test(s)){mode='';continue;}
      const hex=[...s.matchAll(/<([0-9A-Fa-f]+)>/g)].map(x=>x[1]);
      if(mode==='char'&&hex.length>=2){mapping.set(parseInt(hex[0],16),hexToUnicode(hex[1]));}
      if(mode==='range'&&hex.length>=3){
        let start=parseInt(hex[0],16),end=parseInt(hex[1],16);
        if(end-start>128)continue;
        if(s.includes('[')){
          for(let k=start;k<=end;k++){const j=k-start+2;if(hex[j])mapping.set(k,hexToUnicode(hex[j]));}
        }else{
          const code=parseInt(hex[2],16);
          for(let k=start;k<=end;k++)mapping.set(k,String.fromCodePoint(code+k-start));
        }
      }
    }
    cmapCache.set(id,mapping);return mapping;
  }
  function hexToUnicode(hex){
    try{if(hex.length%4===0){let out='';for(let k=0;k<hex.length;k+=4)out+=String.fromCharCode(parseInt(hex.slice(k,k+4),16));return out;}return '';}
    catch(e){return '';}
  }
  async function streamText(id){
    const stream=await decodedObj(id);
    if(!stream)return '';
    const fs=fontRefs(id);
    const cmap=fs.length?await cmapForFont(fs[0]):new Map();
    const result=[];
    // Signature value appears as hex glyph strings in Tj / TJ arrays.
    const pieces=[...stream.matchAll(/<([0-9a-fA-F]{4,})>\s*Tj\b/g)];
    for(const p of pieces){
      const h=p[1];let val='';
      const lens=cmap.size?4:2;
      for(let j=0;j+ lens<=h.length;j+=lens){
        const cp=parseInt(h.slice(j,j+lens),16);
        val+=cmap.get(cp)||(cmap.size?'':String.fromCharCode(cp));
      }
      if(val)result.push(val);
    }
    for(const arr of stream.matchAll(/\[([\s\S]{0,400}?)\]\s*TJ\b/g)){
      let val='';for(const match of arr[1].matchAll(/<([0-9A-Fa-f]{2,})>/g)){
        const h=match[1],step=cmap.size?4:2;
        for(let j=0;j+step<=h.length;j+=step){const cp=parseInt(h.slice(j,j+step),16);val+=cmap.get(cp)||(cmap.size?'':String.fromCharCode(cp));}
      }if(val)result.push(val);
    }
    return result.join('');
  }
  async function findTextInAppearance(id,depth,seen){
    if(depth>6||seen.has(id))return [];
    seen.add(id);
    const own=await streamText(id),out=own?[own]:[];
    const obj=objs.get(id)||'';
    const blocks=[...obj.matchAll(/\/XObject\s*<<([\s\S]{0,5000}?)>>/g)];
    for(const block of blocks){
      for(const rr of block[1].matchAll(/\/[A-Za-z\d]+\s+(\d+)\s+\d+\s+R/g)){
        out.push(...await findTextInAppearance(Number(rr[1]),depth+1,seen));
      }
    }
    return out;
  }
  const candidates=[];
  for(const [id,obj] of objs){
    if(!/\/FT\s*\/Sig\b/.test(obj)||!/\/Subtype\s*\/Widget\b/.test(obj))continue;
    const rectMatch=obj.match(/\/Rect\s*\[\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\]/);
    const ap=obj.match(/\/AP\s*<<[\s\S]{0,400}?\/N\s+(\d+)\s+\d+\s+R/);
    if(!rectMatch||!ap)continue;
    const rect=rectMatch.slice(1).map(Number);
    const onPage=(pageAnnotations||[]).some(a=>a.fieldType==='Sig'&&a.rect&&a.rect.every((n,k)=>Math.abs(n-rect[k])<1.1));
    if(!onPage)continue;
    const pageH=(pageSize&&pageSize[1])||842;
    const centerY=pageH-(rect[1]+rect[3])/2;
    const centerX=(rect[0]+rect[2])/2;
    if(centerY<35||centerY>220)continue;
    const arr=await findTextInAppearance(Number(ap[1]),0,new Set());
    const vals=[...new Set(arr.map(v=>v.trim()).filter(v=>/^\d{1,7}$/.test(v)))];
    if(vals.length===1)candidates.push({value:vals[0],x:centerX,y:centerY,rect});
  }
  const nums=candidates.filter(z=>z.x<((pageSize&&pageSize[0])||595)*.54);
  const dates=candidates.filter(z=>z.x>((pageSize&&pageSize[0])||595)*.54);
  return {number:nums.length===1?nums[0].value:'',day:dates.length===1?dates[0].value:'',candidates,parsedObjects:objs.size};
}



  /**
   * V3.31 - Reconcile page-one signature appearance digits with normal PDF text.
   * Reject numbers from unrelated page annotations and cited documents.
   */
  function matchHeaderSignatureV331(items, sig, width, height){
    const W=Number(width)||595,H=Number(height)||842;
    if(!sig||(!sig.number&&!sig.day))return {number:'',date:'',explanation:'Chữ ký không có số đọc được'};
    const a=(items||[]).filter(it=>it&&it.str&&it.transform).map(it=>({
      t:String(it.str||'').normalize('NFC').replace(/\u00a0/g,' '),
      x:Number(it.transform[4]),y:H-Number(it.transform[5])
    })).filter(x=>Number.isFinite(x.x)&&Number.isFinite(x.y)&&x.y>30&&x.y<210);
    const label=a.filter(x=>x.x<W*.53&&/^\s*S\s*ố(?:\s|[:：]|$)/iu.test(x.t)).sort((x,y)=>x.y-y.y)[0];
    const numbers=(sig.candidates||[]).filter(x=>x.x<W*.53&&x.value===sig.number);
    let number='',date='';
    if(label&&numbers.length===1&&Math.abs(label.y-numbers[0].y)<24){
      const rightStart=a.filter(x=>x.x>W*.4&&/\bngày\b/iu.test(x.t)).map(x=>x.x)
        .reduce((m,x)=>Math.min(m,x),Infinity);
      const leftLimit=Math.min(W*.49,rightStart<Infinity?rightStart-8:W*.49);
      const row=a.filter(x=>x.x>=Math.max(0,label.x-18)&&x.x<leftLimit&&Math.abs(x.y-label.y)<20)
        .sort((x,y)=>x.x-y.x);
      // Join text fragments independently of PDF.js text-item boundaries.
      const flat=row.map(z=>z.t).join('').replace(/[\s\u200b\u00ad]/g,'')
        .replace(/[–—−]/g,'-');
      const afterLabel=flat.slice(flat.search(/Số[:：]?/iu));
      const mark=afterLabel.match(/\/([\p{L}\p{N}&]{2,}(?:-[\p{L}\p{N}&]+){0,10})/u);
      if(mark&&/[\p{L}]/u.test(mark[1])){
        // Handle Party-style: Số: -GM/ĐU, as well as administrative: Số: /GM-SYT.
        const pre=(afterLabel.split('/')[0]||'').replace(/^Số[:：]?/iu,'');
        const partyPrefix=pre.match(/-([\p{L}\p{N}&]{1,20})$/u);
        const v=sig.number+(partyPrefix?'-'+partyPrefix[1]:'')+'/'+mark[1];
        if(/^\d{1,7}(?:-[\p{L}\p{N}&]+)?\/[\p{L}\p{N}&]{2,}(?:-[\p{L}\p{N}&]+){0,10}$/u.test(v))number=v;
      }
    }
    const dateLabels=a.filter(x=>x.x>W*.43&&/\bngày\b/iu.test(x.t));
    const dates=(sig.candidates||[]).filter(x=>x.x>W*.54&&x.value===sig.day);
    if(dates.length===1){
      const lbl=dateLabels.sort((x,y)=>Math.abs(x.y-dates[0].y)-Math.abs(y.y-dates[0].y))[0];
      if(lbl&&Math.abs(lbl.y-dates[0].y)<24){
        // V3.32: Only pieces on the SAME printed line as the date label.
        // Never mix in the national motto above it. PDF.js may split a year
        // into adjacent fragments such as "năm 202" and "6": joining them
        // with an artificial space made the old regex miss the year 2026.
        const datePieces=a.filter(x=>x.x>W*.42&&Math.abs(x.y-lbl.y)<=7)
          .sort((x,y)=>x.x-y.x);
        const dateLine=datePieces.map(x=>x.t).join('')
          .replace(/[\u00a0\u200b\u200c\u200d\u200e\u200f]/g,'')
          .replace(/\s+/g,'');
        // Require "ngày", "tháng" and "năm" on that line, as well as
        // a matching signature-day widget on the same row. No guessing from
        // another date in the body or from the filename.
        const m=/ngày[^\r\n]{0,40}?tháng(\d{1,2})năm(20\d{2})(?!\d)/iu.exec(dateLine);
        if(m){
          const v=m[2]+'-'+m[1].padStart(2,'0')+'-'+sig.day.padStart(2,'0');
          if(isValidDate(v))date=v;
        }
      }
    }
    return {number,date,explanation:'Chữ số nhận từ phần hiển thị chữ ký PDF; ký hiệu và tháng/năm đối chiếu dòng tiêu đề'};
  }

  async function readFile(f) {
    if(f.size>12*1024*1024){note('Chỉ hỗ trợ tệp dưới 12 MB.',true);return;}
    busy(true);
    try{
      var name=f.name.toLowerCase(),text='';app.pdfHeader=null;app.currentPdfFile=null;$('#ocrFirst').style.display='none';
      if(name.endsWith('.txt'))text=await f.text();
      else if(name.endsWith('.docx')){
        if(!window.mammoth)throw new Error('Chưa tải được thư viện DOCX. Anh có thể dán nội dung chữ.');
        var out=await mammoth.extractRawText({arrayBuffer:await f.arrayBuffer()});text=out.value;
      }else if(name.endsWith('.pdf')){
        app.currentPdfFile=f;$('#ocrFirst').style.display='inline-flex';
        if(!window.pdfjsLib)throw new Error('Chưa tải được thư viện PDF. Anh có thể dán nội dung chữ.');
        pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        var pdfFileBytesV331=new Uint8Array(await f.arrayBuffer());
        var pdf=await pdfjsLib.getDocument({data:pdfFileBytesV331.slice()}).promise;
        var parts=[];
        for(var i=1;i<=Math.min(pdf.numPages,120);i++){
          var page=await pdf.getPage(i),raw=await page.getTextContent();
          if(i===1){
            const v=page.view;
            app.pdfHeader=mergeFirstPageHeaderV315(
              pdfHeaderMetadata(raw.items,v[3]-v[1],v[2]-v[0]),
              pdfFirstPageStructuredV315(raw.items,v[2]-v[0],v[3]-v[1]));
            const atomDate=issueDateFromPdfAtomsV317(raw.items,v[3]-v[1],v[2]-v[0]);
            // Tọa độ số ngày và số tháng lấy từ lớp chữ, không chịu lỗi OCR.
            if(atomDate.date)app.pdfHeader.NgayBanHanh=atomDate.date;
            app.pdfHeader.debugDateAtoms=atomDate.debug;
            // V3.22: đọc trích yếu giữa trang, kể cả nằm thấp hơn vùng tiêu đề đầu trang.
            app.pdfHeader.TrichYeuCenter=pdfCenterTitleV322(raw.items,v[2]-v[0],v[3]-v[1]);
            // Bổ sung theo kiểu giấy mời; chỉ điền khi bộ đọc cũ chưa có kết quả.
            const inviteHead=invitationHeaderAtomsV329(raw.items,v[2]-v[0],v[3]-v[1]);
            app.pdfHeader.InviteNumber=inviteHead.SoKyHieu;
            app.pdfHeader.InviteDate=inviteHead.NgayBanHanh;
            // V3.30: lớp dự phòng cho trường hợp số/ký hiệu không tự điền.
            const fallback=inviteNumberFallbackV330(raw.items,pdfPageToLines(raw.items),v[2]-v[0],v[3]-v[1]);
            app.pdfHeader.InviteFallbackNumber=fallback.number;
            app.pdfHeader.InviteFallbackMethod=fallback.method;
            if(!app.pdfHeader.InviteNumber&&fallback.number)app.pdfHeader.InviteNumber=fallback.number;
            // V3.31: chữ số trong một số PDF ký số nằm trong chữ ký số, không nằm ở lớp chữ PDF.js.
            // Chỉ dùng khi số có mặt trong ô Sig đúng vị trí dòng Số ở trang đầu.
            try{
              const annos=await page.getAnnotations({intent:'any'});
              const hasHeaderSig=annos.some(a=>a.fieldType==='Sig'&&a.rect&&((v[3]-v[1])-(a.rect[1]+a.rect[3])/2)<220);
              const shouldRecover=hasHeaderSig&&(!app.pdfHeader.SoKyHieu||!app.pdfHeader.NgayBanHanh);
              const sig=shouldRecover
                ? await readSignatureAppearanceHeaderV331(pdfFileBytesV331,annos,[v[2]-v[0],v[3]-v[1]])
                : {number:'',day:'',candidates:[]};
              const match=matchHeaderSignatureV331(raw.items,sig,v[2]-v[0],v[3]-v[1]);
              app.pdfHeader.SigV331=match.number||'';
              app.pdfHeader.SigDateV331=match.date||'';
              app.pdfHeader.SigDiagnosticV331='Widget: '+(sig.candidates||[]).map(z=>z.value+' ở x='+Math.round(z.x)+', y='+Math.round(z.y)).join('; ')+'. '+(match.number?'Khớp số/ký hiệu.':'Chưa khớp số/ký hiệu.');
              if(match.number&&!app.pdfHeader.SoKyHieu)app.pdfHeader.SoKyHieu=match.number;
              if(match.number&&!app.pdfHeader.InviteNumber)app.pdfHeader.InviteNumber=match.number;
              if(match.date&&!app.pdfHeader.NgayBanHanh)app.pdfHeader.NgayBanHanh=match.date;
              if(match.date&&!app.pdfHeader.InviteDate)app.pdfHeader.InviteDate=match.date;
            }catch(sigError){app.pdfHeader.SigDiagnosticV331='Không đọc được phần hiển thị chữ ký: '+String(sigError.message||sigError).slice(0,100);}
          }
          parts.push(pdfPageToLines(raw.items));
        }
        text=parts.join('\n');
      }else throw new Error('Chỉ hỗ trợ PDF, DOCX hoặc TXT.');
      if(!text.trim())throw new Error('Tệp không có chữ đọc được (có thể là ảnh scan).');
      $('#dText').value=cleanPdfText(text).slice(0,22000);
      parseSuggestions(true);
      // V3.32: final UI reconciliation after readDocMetadata() has filled all fields.
      if(name.endsWith('.pdf')&&app.pdfHeader){
        if(!$('#dSo').value.trim()&&app.pdfHeader.SigV331)$('#dSo').value=app.pdfHeader.SigV331;
        if(!$('#dNgay').value.trim()&&app.pdfHeader.SigDateV331)setIssueDate(app.pdfHeader.SigDateV331);
      }
      // V3.30: thực hiện sau parseSuggestions(true), vì bước này ghi lại bốn ô.
      // Chỉ điền khi trống, không thay số mà bản chính thức đã đọc được.
      if(name.endsWith('.pdf')&&app.pdfHeader&&!$('#dSo').value.trim()){
        const invite=invitationMetaV328($('#dText').value||'',app.pdfHeader);
        const num=app.pdfHeader.InviteNumber||app.pdfHeader.InviteFallbackNumber||'';
        if(invite&&num){$('#dSo').value=num;}
      }
      // Gắn số tìm được tại tọa độ trang đầu vào trường nhập (chỉ khi văn bản là giấy mời).
      if(name.endsWith('.pdf') && invitationMetaV328($('#dText').value||'',app.pdfHeader||null)
        && app.pdfHeader && app.pdfHeader.InviteNumber && !$('#dSo').value.trim()){
        $('#dSo').value=app.pdfHeader.InviteNumber;
      }
      const orgHeaderLikely=/(?:ĐẢNG\s*(?:BỘ|ỦY|UỶ)|TỈNH\s*(?:ỦY|UỶ)|MẶT\s+TRẬN\s+TỔ\s+QUỐC|\bMTTQ\b)/iu.test($('#dText').value.slice(0,900));
      if(name.endsWith('.pdf')&&(!$('#dSo').value||!$('#dNgay').value||!$('#dTrich').value||(orgHeaderLikely&&!$('#dCoQuan').value))){
        note('Chưa đủ thông tin đầu văn bản. Với giấy mời, số và ký hiệu có thể nằm ở các lớp chữ khác nhau; hãy kiểm tra bản gốc hoặc dùng OCR sau khi xác nhận quyền xử lý.');
        if(confirm('Bản PDF có thông tin phần đầu chưa trích xuất đủ. Anh có đồng ý đọc ảnh trang đầu bằng OCR? Thư viện OCR tải từ bên thứ ba, chỉ thực hiện với tài liệu được phép xử lý.')){
          // readFile đang bật spinner; cho UI đóng thao tác đọc trước khi OCR.
          setTimeout(function(){ocrFirstPage(true);},30);
        }
      }else note('Đã nhận diện phần đầu văn bản. Hãy kiểm tra bốn ô trước khi lưu.');
    }catch(e){note(e.message,true);}finally{busy(false);}
  }
  async function saveDoc() {
    readDueEditors();
    var payload={
      ID:app.editing||'',Loai:$('#dLoai').value,SoKyHieu:$('#dSo').value,
      NgayBanHanh:toIsoDateVN($('#dNgay').value),CoQuan:$('#dCoQuan').value,
      TrichYeu:$('#dTrich').value,NoiDungChu:$('#dText').value,
      LienKetHoSo:$('#dLink').value,deadlines:app.selectedDues
    };
    if(!isValidDate(payload.NgayBanHanh)){note('Ngày ban hành không hợp lệ. Hãy nhập theo dạng ngày/tháng/năm, ví dụ 31/10/2026.',true);$('#dNgay').focus();return;}
    if(!payload.TrichYeu.trim()){note('Anh cần nhập trích yếu.',true);return;}
    for(var i=0;i<payload.deadlines.length;i++){
      if(!payload.deadlines[i].TenMoc.trim()||!isValidDate(payload.deadlines[i].NgayHan)){
        note('Cần nhập tên và ngày hợp lệ cho từng mốc hạn.',true);return;
      }
    }
    busy(true);
    try{await api('saveDocument',payload);closeModal();await reload();note('Đã lưu văn bản.');}
    catch(e){note(e.message,true);}finally{busy(false);}
  }
  async function showDoc(id) {
    busy(true);
    try{
      var d=await api('getDocumentDetail',id);
      var list=app.dues.filter(function(x){return x.VanBanID===id;});
      var html='<div class="detailbody"><p><span class="pill soft">'+(d.Loai==='DEN'?'Văn bản đến':'Văn bản đi')+'</span></p><h2>'+esc(d.TrichYeu)+'</h2>'+
        '<p><strong>Số, ký hiệu:</strong> '+esc(d.SoKyHieu||'—')+'　<strong>Ngày:</strong> '+vnDate(d.NgayBanHanh)+'</p><p><strong>Cơ quan:</strong> '+esc(d.CoQuan||'—')+'</p>';
      if(d.LienKetHoSo)html+='<p><a href="'+esc(d.LienKetHoSo)+'" rel="noopener noreferrer" target="_blank">Mở hồ sơ công việc</a></p>';
      html+='<div class="sectionline">Mốc hạn <button class="btn secondary tiny" data-act="newDue" data-id="'+esc(id)+'">＋ Thêm mốc hạn</button></div>';
      list.forEach(function(m){html+='<div class="candidate"><button class="titlelink" data-act="due" data-id="'+esc(m.ID)+'">'+esc(m.TenMoc)+'</button><p>Hạn: '+vnDate(m.NgayHan)+' · '+status(m).label+'</p></div>';});
      if(!list.length)html+='<p>Chưa có mốc hạn được xác nhận.</p>';
      html+='<div class="sectionline">Nội dung chữ đã lưu</div><pre>'+esc(d.NoiDungChu||'Không lưu nội dung chữ')+'</pre></div>';
      modal('Thông tin văn bản',html,
  '<button class="btn secondary" id="cancel">Đóng</button>'+
  '<button class="btn danger" id="deleteDoc">Xóa văn bản</button>'+
  '<button class="btn" id="editDoc">Sửa văn bản</button>'
);
      $('#cancel').onclick=closeModal;
      $('#editDoc').onclick=function(){docForm(d,d.Loai);};
$('#deleteDoc').onclick = async function() {
  var soMoc = app.dues.filter(function(m) {
    return m.VanBanID === id;
  }).length;

  var thongBao =
    'Anh/chị có chắc chắn muốn xóa văn bản này?\n\n' +
    'Số, ký hiệu: ' + (d.SoKyHieu || 'Không có') + '\n' +
    'Số mốc hạn liên quan: ' + soMoc + '\n\n' +
    'Văn bản và các mốc hạn liên quan sẽ bị xóa vĩnh viễn.';

  if (!confirm(thongBao)) return;

  busy(true);
  try {
    await api('deleteDocument', id);
    closeModal();
    await reload();
    note('Đã xóa văn bản và các mốc hạn liên quan.');
  } catch (e) {
    note(e.message, true);
  } finally {
    busy(false);
  }
};

    }catch(e){note(e.message,true);}finally{busy(false);}
  }
  function dueForm(m) {
    var d=docOf(m.VanBanID);
    var html='<div class="note" style="margin-bottom:12px">'+esc(short(d.TrichYeu||'Văn bản',210))+'</div><div class="formgrid">'+
      input('Tên mốc hạn *','mName','text',m.TenMoc,true)+input('Ngày hạn *','mDate','text',m.NgayHan ? vnDate(m.NgayHan) : '')+
      '<div class="field"><label>Trạng thái</label><select id="mState"><option value="CHUA_XONG">Chưa hoàn thành</option><option value="HOAN_THANH">Đã hoàn thành</option></select></div>'+ 
      '<div class="field span"><label>Câu văn bản làm căn cứ</label><textarea id="mSource" rows="3">'+esc(m.CanCu||'')+'</textarea></div><div class="field span"><label>Ghi chú</label><textarea id="mNote" rows="2">'+esc(m.GhiChu||'')+'</textarea></div></div>';
    modal(m.ID?'Sửa mốc hạn':'Thêm mốc hạn',html,'<button class="btn secondary" id="cancel">Đóng</button><button class="btn" id="saveDue">Lưu mốc hạn</button>');
    $('#mState').value=m.TrangThai||'CHUA_XONG';$('#cancel').onclick=closeModal;
    $('#saveDue').onclick=async function(){
      var ngayNhap = $('#mDate').value.trim();
var ngayISO = toIsoDateVN(ngayNhap);

if (!$('#mName').value.trim() || !ngayISO) {
  note('Vui lòng nhập tên mốc và ngày hạn hợp lệ theo DD/MM/YYYY.', true);
  return;
}

var data = {
  ID: m.ID || '',
  VanBanID: m.VanBanID,
  TenMoc: $('#mName').value,
  NgayHan: ngayISO,
  TrangThai: $('#mState').value,
  CanCu: $('#mSource').value,
  GhiChu: $('#mNote').value
};
      busy(true);
      try{await api('saveMilestone',data);closeModal();await reload();note('Đã lưu mốc hạn.');}
      catch(e){note(e.message,true);}finally{busy(false);}
    };
  }
  async function toggle(id) {
    var m=app.dues.find(function(x){return x.ID===id;});if(!m)return;
    var done=m.TrangThai!=='HOAN_THANH';
    if(!confirm(done?'Xác nhận đã hoàn thành mốc hạn này?':'Mở lại mốc hạn này để theo dõi tiếp?'))return;
    busy(true);
    try{await api('setMilestoneStatus',id,done);await reload();note(done?'Đã hoàn thành.':'Đã mở lại mốc hạn.');}
    catch(e){note(e.message,true);}finally{busy(false);}
  }
  function calEsc(v){return esc(v||'');}
  function calendarV32(){
    var month=app.calendarMonth||app.today.slice(0,7), y=Number(month.slice(0,4)),m=Number(month.slice(5,7));
    var first=(new Date(Date.UTC(y,m-1,1)).getUTCDay()+6)%7;
    var count=new Date(Date.UTC(y,m,0)).getUTCDate();
    var rows='<div class="cal-toolbar"><div class="filters"><button class="btn secondary" data-act="calPrev">‹ Trước</button><strong class="filter-title" style="padding:10px">Tháng '+m+'/'+y+'</strong><button class="btn secondary" data-act="calNext">Sau ›</button><button class="btn secondary" data-act="calToday">Hôm nay</button></div><button class="btn" data-act="calAdd">＋ Thêm lịch</button></div>';
    rows+='<div class="card panel"><div class="cal-grid">';
    ['T2','T3','T4','T5','T6','T7','CN'].forEach(function(x){rows+='<div class="cal-week">'+x+'</div>';});
    for(var blank=0;blank<first;blank++)rows+='<div class="cal-day emptyday"></div>';
    for(var d=1;d<=count;d++){
      var iso=month+'-'+String(d).padStart(2,'0');
      var events=app.events.filter(function(e){return e.Ngay===iso&&e.TrangThai!=='HUY';});
      var dues=app.dues.filter(function(x){return x.NgayHan===iso&&x.TrangThai!=='HOAN_THANH';});
      rows+='<div class="cal-day '+(iso===app.today?'is-today':'')+'"><strong>'+d+'</strong>';
      events.forEach(function(e){rows+='<button class="cal-event" data-act="calEdit" data-id="'+calEsc(e.ID)+'">'+calEsc(e.GioBatDau)+' · '+calEsc(short(e.NoiDung,45))+'</button>';});
      dues.forEach(function(e){rows+='<button type="button" class="cal-deadline" data-act="due" data-id="'+calEsc(e.ID)+'">⏰ '+calEsc(short(e.TenMoc,40))+'</button>';});
      rows+='</div>';
    }
    rows+='</div></div>';
    var monthEvents=app.events.filter(function(e){return e.Ngay&&e.Ngay.slice(0,7)===month&&e.TrangThai!=='HUY';}).map(function(e){return {day:e.Ngay,time:e.GioBatDau||'',name:e.NoiDung||'',place:e.DiaDiem||'',id:e.ID,kind:'event'};});
    var monthDues=app.dues.filter(function(e){return e.NgayHan&&e.NgayHan.slice(0,7)===month&&e.TrangThai!=='HOAN_THANH';}).map(function(e){return {day:e.NgayHan,time:'',name:e.TenMoc||'',place:'Hạn văn bản',id:e.ID,kind:'deadline'};});
    var agenda=monthEvents.concat(monthDues).sort(function(a,b){return (a.day+a.time).localeCompare(b.day+b.time);});
    rows+='<section class="card panel mobile-agenda"><div class="panelhead"><h2>Lịch và hạn theo ngày</h2><span class="subdued">'+agenda.length+' mục trong tháng</span></div>';
    if(agenda.length){rows+='<div class="agenda-stack">';agenda.forEach(function(e){rows+='<div class="agenda-row '+(e.kind==='deadline'?'deadline':'')+'"><div class="agenda-clock">'+esc(e.day.slice(8,10))+'/'+esc(e.day.slice(5,7))+'<br><small>'+esc(e.time||'Hạn')+'</small></div><div class="agenda-main"><strong>'+esc(short(e.name,110))+'</strong><small>'+esc(e.place)+'</small></div><button class="btn secondary tiny" data-act="'+(e.kind==='deadline'?'due':'calEdit')+'" data-id="'+esc(e.id)+'">Mở</button></div>';});rows+='</div>';}
    else rows+='<div class="empty">Tháng này chưa có lịch công tác hoặc hạn đang mở.</div>';
    rows+='</section><p class="subdued" style="margin-top:12px">Xanh ngọc: lịch công tác · Vàng cam: hạn văn bản. Thao tác vào “Mở” để xem chi tiết.</p>';
    container.innerHTML=rows;
  }
  async function loadCalendarV32(){
    try{var r=await api('getCalendarV32');app.events=r.events||[];}
    catch(e){note('Không đọc được lịch: '+e.message,true);}
  }
  function calendarFormV32(e){
    e=e||{};
    var h='<div class="formgrid">'+
      input('Ngày *','cDate','date',e.Ngay||app.today)+input('Bắt đầu *','cStart','time',e.GioBatDau||'08:00')+
      input('Kết thúc *','cEnd','time',e.GioKetThuc||'09:00')+
      '<div class="field"><label>Loại lịch</label><select id="cType"><option value="HOP">Họp</option><option value="CONG_TAC">Công tác</option><option value="KHAC">Khác</option></select></div>'+
      input('Nội dung *','cName','text',e.NoiDung||'')+input('Địa điểm','cPlace','text',e.DiaDiem||'')+
      input('Người chủ trì','cLead','text',e.ChuTri||'')+
      '<div class="field"><label>Nhắc trước</label><select id="cRem"><option value="KHONG">Không nhắc</option><option value="30">30 phút</option><option value="60">1 giờ</option><option value="1440">1 ngày</option></select></div>'+
      '<div class="field"><label>Trạng thái</label><select id="cStatus"><option value="DU_KIEN">Dự kiến</option><option value="XAC_NHAN">Đã xác nhận</option><option value="HUY">Hủy</option></select></div>'+
      '<div class="field span"><label>Ghi chú</label><textarea id="cNote">'+esc(e.GhiChu||'')+'</textarea></div></div>';
    modal(e.ID?'Sửa lịch công tác':'Thêm lịch công tác',h,'<button class="btn secondary" id="cClose">Đóng</button>'+(e.ID?'<button class="btn danger" id="cDelete">Xóa</button>':'')+'<button class="btn" id="cSave">Lưu lịch</button>');
    $('#cType').value=e.Loai||'CONG_TAC';$('#cRem').value=e.NhacTruoc||'KHONG';$('#cStatus').value=e.TrangThai||'DU_KIEN';$('#cClose').onclick=closeModal;
    $('#cSave').onclick=async function(){
      var d={ID:e.ID||'',Ngay:$('#cDate').value,GioBatDau:$('#cStart').value,GioKetThuc:$('#cEnd').value,Loai:$('#cType').value,NoiDung:$('#cName').value,DiaDiem:$('#cPlace').value,ChuTri:$('#cLead').value,NhacTruoc:$('#cRem').value,TrangThai:$('#cStatus').value,GhiChu:$('#cNote').value};
      busy(true);try{await api('saveCalendarV32',d);await loadCalendarV32();closeModal();if(app.view==='home')home();else calendarV32();note('Đã lưu lịch.');}catch(err){note(err.message,true);}finally{busy(false);}
    };
    if(e.ID)$('#cDelete').onclick=async function(){if(!confirm('Xóa lịch công tác này?'))return;busy(true);try{await api('deleteCalendarV32',e.ID);await loadCalendarV32();closeModal();if(app.view==='home')home();else calendarV32();}catch(err){note(err.message,true);}finally{busy(false);}};
  }
  async function reload(){
    busy(true);
    try{
      var result=await api('getAppData');
      app.docs=result.docs||[];app.dues=result.dues||[];app.email=result.email||'';
      app.today=result.today||new Date().toISOString().slice(0,10);
      app.webAppUrl=result.webAppUrl||'';app.spreadsheetUrl=result.spreadsheetUrl||'';
      await loadCalendarV32();
      render();
    }catch(e){
      container.innerHTML='<div class="card empty"><strong>Không đọc được Google Sheets</strong><p>'+esc(e.message)+'</p></div>';
      note(e.message,true);
    }finally{busy(false);}
  }
  
  document.addEventListener('click',function(e){
    var nav=e.target.closest('.navbtn');
    if(nav){setView(nav.dataset.view);return;}

    var b=e.target.closest('[data-act]');
    if(!b)return;

    var act=b.dataset.act,id=b.dataset.id;

    if(act==='showView'){
      setView(b.dataset.value);
      return;
    }
    if(act==='homePrev'||act==='homeNext'){
      var parts=(app.dashboardMonth||app.today.slice(0,7)).split('-').map(Number);
      app.dashboardMonth=new Date(Date.UTC(parts[0],parts[1]-1+(act==='homeNext'?1:-1),1)).toISOString().slice(0,7);
      app.dashboardDay=app.dashboardMonth+'-01';
      home();return;
    }
    if(act==='homeDay'){
      app.dashboardDay=b.dataset.value;
      home();return;
    }
    if(act==='calToday'||act==='goCalendarToday'){
      app.calendarMonth=app.today.slice(0,7);
      setView('calendar');
      return;
    }

    if(act==='calAdd'){calendarFormV32();return;}

    if(act==='calEdit'){
      calendarFormV32(app.events.find(x=>x.ID===id));
      return;
    }

    if(act==='calPrev'||act==='calNext'){
      var base=app.calendarMonth||app.today.slice(0,7);
      var parts=base.split('-').map(Number);
      app.calendarMonth=new Date(Date.UTC(
        parts[0],
        parts[1]-1+(act==='calNext'?1:-1),
        1
      )).toISOString().slice(0,7);
      calendarV32();
      return;
    }

    if(act==='doc'){showDoc(id);return;}

    if(act==='due'){
      var item=app.dues.find(function(x){return x.ID===id;});
      if(item)dueForm(item);
      return;
    }

    if(act==='newDue'){dueForm({VanBanID:id});return;}

    if(act==='toggle'){toggle(id);return;}

    if(act==='kpiFilter'){
      app.view='deadlines';
      app.search='';
      app.filter=b.dataset.value;
      render();
      return;
    }

    if(act==='filter'){
      app.filter=b.dataset.value;
      deadlines();
      return;
    }

    if(act==='removeDraft'){
      readDueEditors();
      app.selectedDues.splice(Number(b.dataset.idx),1);
      renderDueEditors();
      return;
    }

    // Lưu email nhận thông báo.
    if(act==='saveEmail'){
      busy(true);
      api('saveReminderEmail',$('#reminderEmail').value)
        .then(function(r){
          app.email=r.email;
          note('Đã lưu email.');
        })
        .catch(function(err){
          note(err.message,true);
        })
        .finally(function(){
          busy(false);
        });
      return;
    }

    // Gửi email kiểm tra.
    if(act==='testEmail'){
      busy(true);
      api('sendTestEmail')
        .then(function(){
          note('Đã gửi email kiểm tra.');
        })
        .catch(function(err){
          note(err.message,true);
        })
        .finally(function(){
          busy(false);
        });
      return;
    }

    // Bật nhắc hạn tự động hằng ngày.
    if(act==='enableReminder'){
      if(!confirm(
        'Bật nhắc hạn qua email hằng ngày vào khoảng 7 giờ sáng?'
      ))return;

      busy(true);
      api('batNhacHanHangNgay')
        .then(function(){
          note('Đã bật nhắc hạn hằng ngày thành công.');
        })
        .catch(function(err){
          note(err.message,true);
        })
        .finally(function(){
          busy(false);
        });
      return;
    }

  });

  var globalSearch=$('#globalSearch');
  if(globalSearch){
    globalSearch.addEventListener('keydown',function(e){
      if(e.key==='Enter'){
        e.preventDefault();app.view='documents';app.filter='all';app.search=globalSearch.value.trim();render();
        var local=$('#search');if(local)local.focus();
      }
    });
    window.addEventListener('keydown',function(e){
      if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){
        e.preventDefault();globalSearch.focus();globalSearch.select();
      }
    });
  }
  $('#newDocBtn').addEventListener('click',function(){
    docForm(null,app.view==='DI'?'DI':'DEN');
  });

  $('#closeModal').onclick=closeModal;

  $('#modal').addEventListener('click',function(e){
    if(e.target===$('#modal'))closeModal();
  });

  window.addEventListener('keydown',function(e){
    if(e.key==='Escape')closeModal();
  });

  if(window.google&&google.script&&google.script.run){
    reload();
  }else{
    app.today=new Date().toISOString().slice(0,10);
    render();
    note('Chế độ xem thử. Khi triển khai Apps Script, dữ liệu sẽ lấy từ Google Sheets.');
  }
})();

/* V3.0.4: giao dien xanh than, dong bo cac module; khong thay API. */
