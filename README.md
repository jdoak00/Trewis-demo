# Trewis-demo
<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Odborový systém</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.2/babel.min.js"></script>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --blue:#087cf4;--blue2:#0560c0;
  --green:#07fa70;--cyan:#00eddf;--gray:#999;
  --dark:#0d1117;--panel:#161c26;--panel2:#1d2535;--panel3:#222d40;
  --border:#263044;--border2:#2e3d56;
  --text:#dce6f5;--text2:#8a9bb5;--text3:#5a6e88;
  --white:#fff;
  --r:10px;--r-lg:16px;--r-xl:22px;
  --sh:0 2px 16px rgba(0,0,0,.25);
  --sh-lg:0 12px 48px rgba(0,0,0,.4);
  --font:'Plus Jakarta Sans',sans-serif;
}
html,body{font-family:var(--font);background:var(--dark);color:var(--text);min-height:100vh;-webkit-font-smoothing:antialiased;}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes slideRight{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:translateX(0)}}
/* LOGIN */
.login-bg{min-height:100vh;display:flex;align-items:center;justify-content:center;
  background:radial-gradient(ellipse 80% 55% at 50% -5%,rgba(8,124,244,.22) 0%,transparent 70%),
  radial-gradient(ellipse 50% 40% at 85% 85%,rgba(0,237,223,.12) 0%,transparent 60%),var(--dark);
  padding:20px;position:relative;overflow:hidden;}
.login-bg::before{content:'';position:absolute;inset:0;
  background:repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,.018) 60px),
  repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,.018) 60px);}
.login-card{background:var(--panel);border:1px solid var(--border2);border-radius:var(--r-xl);
  padding:44px 40px;width:400px;max-width:100%;box-shadow:var(--sh-lg);position:relative;z-index:1;
  animation:fadeUp .45s ease;}
.glow-top{position:absolute;top:-50px;left:50%;transform:translateX(-50%);width:200px;height:100px;
  background:radial-gradient(var(--blue),transparent 70%);filter:blur(28px);opacity:.55;pointer-events:none;}
.brand{display:flex;align-items:center;gap:14px;margin-bottom:32px;}
.brand-mark{width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,var(--blue),var(--cyan));
  display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;color:#fff;flex-shrink:0;
  box-shadow:0 4px 20px rgba(8,124,244,.45);}
.brand-name{font-size:18px;font-weight:800;color:var(--white);line-height:1.2;}
.brand-sub{font-size:11px;color:var(--text2);margin-top:2px;}
.lbl{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.07em;color:var(--text2);display:block;margin-bottom:7px;}
.inp{width:100%;padding:12px 14px;border-radius:var(--r);background:var(--panel2);border:1.5px solid var(--border);
  color:var(--text);font-family:var(--font);font-size:14px;outline:none;transition:.2s;}
.inp:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(8,124,244,.14);}
.inp::placeholder{color:var(--text3);}
.fld{margin-bottom:18px;}
.btn-login{width:100%;padding:13px;border-radius:var(--r);border:none;cursor:pointer;
  background:linear-gradient(135deg,var(--blue),#0560c0);color:#fff;font-family:var(--font);
  font-size:15px;font-weight:700;letter-spacing:.02em;transition:all .2s;box-shadow:0 4px 20px rgba(8,124,244,.4);}
.btn-login:hover{transform:translateY(-1px);box-shadow:0 6px 28px rgba(8,124,244,.5);}
.err-box{background:rgba(255,80,80,.1);border:1px solid rgba(255,80,80,.25);border-radius:8px;
  padding:10px 14px;font-size:13px;color:#ff8888;margin-bottom:16px;display:flex;align-items:center;gap:8px;}
.demo-tip{margin-top:18px;padding:11px 14px;background:rgba(8,124,244,.08);border:1px solid rgba(8,124,244,.18);
  border-radius:8px;font-size:12px;color:var(--text2);}
.demo-tip code{color:var(--cyan);background:rgba(0,237,223,.1);padding:1px 5px;border-radius:4px;}
/* LAYOUT */
.app{display:flex;min-height:100vh;}
.sidebar{width:248px;flex-shrink:0;background:var(--panel);border-right:1px solid var(--border);
  display:flex;flex-direction:column;position:fixed;top:0;left:0;bottom:0;z-index:100;transition:transform .3s ease;}
.sb-logo{padding:22px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px;}
.sb-bm{width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,var(--blue),var(--cyan));
  display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;color:#fff;flex-shrink:0;}
.sb-name{font-size:13px;font-weight:800;color:var(--white);line-height:1.3;}
.sb-nav{padding:14px 10px;flex:1;overflow-y:auto;}
.nav-sec{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--text3);padding:12px 10px 5px;}
.nav-btn{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;cursor:pointer;
  color:var(--text2);font-size:13.5px;font-weight:500;transition:all .15s;border:none;background:none;
  width:100%;text-align:left;font-family:var(--font);}
.nav-btn:hover{background:rgba(255,255,255,.05);color:var(--text);}
.nav-btn.active{background:linear-gradient(135deg,rgba(8,124,244,.18),rgba(0,237,223,.08));
  color:var(--white);border:1px solid rgba(8,124,244,.28);}
.sb-foot{padding:12px 10px;border-top:1px solid var(--border);}
.user-row{display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,.04);border-radius:8px;margin-bottom:8px;}
.av{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--cyan));
  display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#fff;flex-shrink:0;}
.u-name{font-size:13px;font-weight:600;color:var(--text);}
.u-role{font-size:11px;color:var(--text2);}
.main{margin-left:248px;flex:1;display:flex;flex-direction:column;min-height:100vh;}
.topbar{padding:15px 28px;background:var(--panel);border-bottom:1px solid var(--border);
  display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:50;gap:12px;}
.tb-left{display:flex;align-items:center;gap:12px;}
.pg-title{font-size:19px;font-weight:800;color:var(--white);}
.pg-sub{font-size:12px;color:var(--text2);margin-top:1px;}
.tb-right{display:flex;align-items:center;gap:8px;}
.content{padding:24px 28px;flex:1;}
/* VIEW TOGGLE */
.vt{display:flex;background:var(--panel2);border:1px solid var(--border);border-radius:8px;padding:3px;gap:2px;}
.vt-b{width:32px;height:28px;border:none;background:transparent;border-radius:6px;cursor:pointer;
  display:flex;align-items:center;justify-content:center;color:var(--text2);transition:.15s;}
.vt-b.on{background:var(--blue);color:#fff;}
/* STATS */
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:22px;}
.stat{background:var(--panel);border:1px solid var(--border);border-radius:var(--r-lg);padding:18px 20px;position:relative;overflow:hidden;}
.stat::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--a,var(--blue));}
.stat-n{font-size:30px;font-weight:800;background:linear-gradient(135deg,var(--a,var(--blue)),var(--a2,var(--cyan)));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.stat-l{font-size:11px;color:var(--text2);margin-top:4px;text-transform:uppercase;letter-spacing:.05em;font-weight:500;}
/* CARD */
.card{background:var(--panel);border:1px solid var(--border);border-radius:var(--r-lg);overflow:hidden;box-shadow:var(--sh);}
.toolbar{padding:13px 18px;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--border);flex-wrap:wrap;}
.srch{position:relative;flex:1;min-width:180px;}
.srch-ic{position:absolute;left:11px;top:50%;transform:translateY(-50%);color:var(--text2);pointer-events:none;}
.srch input{width:100%;padding:9px 12px 9px 34px;background:var(--panel2);border:1.5px solid var(--border);
  border-radius:8px;color:var(--text);font-family:var(--font);font-size:13px;outline:none;transition:.2s;}
.srch input:focus{border-color:var(--blue);}
.srch input::placeholder{color:var(--text3);}
select.flt{padding:9px 12px;background:var(--panel2);border:1.5px solid var(--border);border-radius:8px;
  color:var(--text);font-family:var(--font);font-size:13px;outline:none;appearance:none;cursor:pointer;}
/* BUTTONS */
.btn{display:inline-flex;align-items:center;gap:6px;padding:9px 15px;border-radius:8px;font-size:13px;
  font-weight:600;cursor:pointer;border:none;transition:all .15s;font-family:var(--font);}
.btn-blue{background:var(--blue);color:#fff;box-shadow:0 2px 12px rgba(8,124,244,.3);}
.btn-blue:hover{background:var(--blue2);transform:translateY(-1px);}
.btn-out{background:transparent;color:var(--text2);border:1.5px solid var(--border);}
.btn-out:hover{border-color:var(--blue);color:var(--text);}
.btn-ghost{background:transparent;color:var(--text2);padding:7px;}
.btn-ghost:hover{color:var(--cyan);}
.btn-sm{padding:7px 12px;font-size:12px;}
.btn:disabled{opacity:.45;cursor:not-allowed;transform:none!important;}
/* TABLE */
.tbl-wrap{overflow-x:auto;}
table{width:100%;border-collapse:collapse;}
thead th{padding:9px 16px;font-size:10.5px;text-transform:uppercase;letter-spacing:.07em;color:var(--text2);
  font-weight:600;text-align:left;border-bottom:1px solid var(--border);background:rgba(255,255,255,.02);white-space:nowrap;}
tbody tr{border-bottom:1px solid rgba(255,255,255,.035);transition:background .12s;cursor:pointer;}
tbody tr:last-child{border-bottom:none;}
tbody tr:hover{background:rgba(8,124,244,.07);}
tbody td{padding:11px 16px;font-size:13px;}
.mc{display:flex;align-items:center;gap:10px;}
.mav{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--cyan));
  display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#fff;flex-shrink:0;}
.mn{font-weight:600;color:var(--white);font-size:13px;}
.me{font-size:11px;color:var(--text2);}
/* BADGES */
.bdg{display:inline-block;padding:3px 10px;border-radius:99px;font-size:11px;font-weight:600;}
.bdg-blue{background:rgba(8,124,244,.15);color:var(--blue);}
.bdg-cyan{background:rgba(0,237,223,.12);color:var(--cyan);}
.bdg-green{background:rgba(7,250,112,.12);color:var(--green);}
.bdg-gray{background:rgba(153,153,153,.15);color:var(--gray);}
/* ALPHA BAR */
.alpha-bar{display:flex;gap:2px;flex-wrap:wrap;padding:8px 18px;border-bottom:1px solid var(--border);}
.a-btn{min-width:26px;height:24px;border:none;background:transparent;border-radius:5px;font-size:11px;
  font-weight:700;color:var(--text3);cursor:pointer;transition:.1s;font-family:var(--font);}
.a-btn:hover{background:rgba(8,124,244,.15);color:var(--blue);}
.a-btn.on{background:var(--blue);color:#fff;}
.a-btn.off{opacity:.3;cursor:default;}
/* PAGINATION */
.pag{display:flex;align-items:center;gap:5px;padding:12px 18px;border-top:1px solid var(--border);flex-wrap:wrap;}
.pg-b{width:30px;height:30px;border:1.5px solid var(--border);border-radius:6px;background:transparent;
  cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;
  color:var(--text2);transition:.15s;font-family:var(--font);}
.pg-b:hover{border-color:var(--blue);color:var(--text);}
.pg-b.on{background:var(--blue);border-color:var(--blue);color:#fff;}
.pg-info{margin-left:auto;font-size:11px;color:var(--text2);}
/* DETAIL PANEL */
.detail-overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:200;display:flex;justify-content:flex-end;animation:fadeIn .2s;}
.detail-panel{width:480px;max-width:100%;height:100%;background:var(--panel);border-left:1px solid var(--border2);
  display:flex;flex-direction:column;box-shadow:var(--sh-lg);animation:slideRight .3s ease;}
.dp-head{padding:20px 24px;border-bottom:1px solid var(--border);display:flex;align-items:flex-start;justify-content:space-between;gap:12px;}
.dp-id{display:flex;align-items:center;gap:14px;}
.dp-av{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--cyan));
  display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#fff;flex-shrink:0;}
.dp-name{font-size:18px;font-weight:800;color:var(--white);}
.dp-body{flex:1;overflow-y:auto;padding:20px 24px;}
.dp-sec-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--text2);
  margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--border);}
.dp-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;}
.dp-field{background:var(--panel2);border-radius:8px;padding:11px 13px;}
.dp-lbl{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text3);margin-bottom:4px;}
.dp-val{font-size:13px;color:var(--text);font-weight:500;}
.dp-val.empty{color:var(--text3);font-style:italic;}
.dp-foot{padding:16px 24px;border-top:1px solid var(--border);display:flex;gap:10px;flex-wrap:wrap;}
/* EDIT */
.edit-section{background:var(--panel2);border:1px solid var(--border2);border-radius:var(--r);padding:16px;margin-bottom:16px;}
.edit-grid{display:grid;grid-template-columns:1fr 1fr;gap:11px;}
.edit-span{grid-column:1/-1;}
.finp{width:100%;padding:9px 12px;background:var(--panel3);border:1.5px solid var(--border);border-radius:8px;
  color:var(--text);font-family:var(--font);font-size:13px;outline:none;transition:.2s;}
.finp:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(8,124,244,.1);}
.finp::placeholder{color:var(--text3);}
/* MODAL */
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;
  z-index:300;padding:16px;animation:fadeIn .2s;}
.modal{background:var(--panel);border:1px solid var(--border2);border-radius:var(--r-xl);width:540px;max-width:100%;
  max-height:90vh;overflow-y:auto;box-shadow:var(--sh-lg);animation:fadeUp .25s ease;}
.modal-h{padding:20px 24px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;}
.modal-t{font-size:17px;font-weight:800;color:var(--white);}
.modal-b{padding:22px 24px;}
.modal-f{padding:14px 24px;border-top:1px solid var(--border);display:flex;justify-content:flex-end;gap:10px;}
.fgrid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.fspan{grid-column:1/-1;}
/* COMPOSE */
.compose{background:var(--panel);border:1px solid var(--border);border-radius:var(--r-lg);padding:26px;box-shadow:var(--sh);}
.c-title{font-size:18px;font-weight:800;color:var(--white);margin-bottom:18px;display:flex;align-items:center;gap:10px;}
.info-row{background:rgba(8,124,244,.08);border:1px solid rgba(8,124,244,.2);border-radius:8px;padding:11px 14px;
  font-size:12px;color:var(--text2);margin-bottom:16px;display:flex;gap:8px;line-height:1.55;}
.info-row b{color:var(--cyan);}
.rcpt-bar{display:flex;align-items:center;justify-content:space-between;background:var(--panel2);
  border:1.5px solid var(--border2);border-radius:8px;padding:11px 14px;font-size:13px;color:var(--text2);margin-bottom:14px;}
.rcpt-n{font-weight:700;color:var(--blue);}
.ftxt{width:100%;padding:11px 13px;background:var(--panel2);border:1.5px solid var(--border);border-radius:8px;
  color:var(--text);font-family:var(--font);font-size:13px;outline:none;resize:vertical;min-height:120px;transition:.2s;}
.ftxt:focus{border-color:var(--blue);}
.ftxt::placeholder{color:var(--text3);}
/* BATCH */
.batch-box{background:var(--panel2);border:1px solid var(--border2);border-radius:var(--r);padding:18px;margin-bottom:16px;}
.batch-title{font-size:13px;font-weight:700;color:var(--white);margin-bottom:12px;display:flex;justify-content:space-between;}
.batch-pct{color:var(--cyan);}
.progress-wrap{background:rgba(255,255,255,.07);border-radius:99px;height:6px;overflow:hidden;margin-bottom:10px;}
.progress-bar{height:100%;background:linear-gradient(90deg,var(--blue),var(--cyan));border-radius:99px;transition:width .25s;}
.batch-stats{display:flex;gap:16px;font-size:11px;color:var(--text2);}
.batch-stats b{color:var(--green);}
.batch-log{margin-top:10px;background:rgba(0,0,0,.25);border-radius:6px;padding:8px 10px;max-height:80px;
  overflow-y:auto;font-size:11px;color:var(--text2);font-family:monospace;line-height:1.6;}
.ok-box{background:rgba(7,250,112,.07);border:1px solid rgba(7,250,112,.22);border-radius:8px;
  padding:11px 14px;font-size:13px;color:var(--green);margin-bottom:14px;display:flex;gap:8px;align-items:center;}
.char-info{font-size:11px;color:var(--text2);display:flex;gap:16px;margin-bottom:14px;}
.char-info .hi{color:var(--cyan);}
/* TOAST */
.toast{position:fixed;bottom:24px;right:24px;padding:13px 18px;border-radius:10px;font-size:13px;font-weight:500;
  z-index:999;display:flex;align-items:center;gap:10px;box-shadow:0 8px 32px rgba(0,0,0,.5);max-width:300px;animation:fadeUp .3s ease;}
.toast.ok{background:linear-gradient(135deg,#07fa70,#00c96a);color:#0a2a1a;}
.toast.error{background:linear-gradient(135deg,#ff4444,#c0392b);color:#fff;}
/* MOBILE */
.mob-nav{display:none;position:fixed;bottom:0;left:0;right:0;background:var(--panel);
  border-top:1px solid var(--border);padding:8px 0;z-index:100;}
.mn-items{display:flex;justify-content:space-around;}
.mn-btn{display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 18px;border:none;background:none;
  color:var(--text2);font-family:var(--font);font-size:10px;font-weight:600;cursor:pointer;transition:.15s;border-radius:8px;}
.mn-btn.on{color:var(--cyan);}
.mn-dot{width:4px;height:4px;border-radius:50%;background:var(--cyan);margin-top:1px;}
.mcards{display:grid;grid-template-columns:1fr;gap:9px;}
.mcard{background:var(--panel2);border:1px solid var(--border);border-radius:var(--r);padding:13px 15px;cursor:pointer;transition:border-color .15s;}
.mcard:hover{border-color:rgba(8,124,244,.4);}
.mcard-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:9px;}
.mcard-info{display:grid;grid-template-columns:1fr 1fr;gap:6px;}
.mi-lbl{font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.05em;margin-bottom:1px;}
.mi-val{font-size:12px;color:var(--text);font-weight:500;}
@media(max-width:768px){
  .sidebar{transform:translateX(-100%);}
  .sidebar.open{transform:translateX(0);}
  .main{margin-left:0!important;}
  .mob-nav{display:block;}
  .content{padding:14px;padding-bottom:80px;}
  .topbar{padding:13px 16px;}
  .stats{grid-template-columns:1fr 1fr;gap:10px;}
  .hide-mob{display:none!important;}
  .fgrid{grid-template-columns:1fr;}
  .edit-grid{grid-template-columns:1fr;}
  .dp-grid{grid-template-columns:1fr;}
  .detail-panel{width:100%;border-left:none;}
}
@media(min-width:769px){
  .mob-nav{display:none!important;}
  .sidebar{transform:translateX(0)!important;}
}
</style>
</head>
<body>
<div id="root"></div>
<script type="text/babel">
const { useState, useEffect, useRef } = React;

const DEMO_MEMBERS = [
  {id:1,jmeno:"Jana",prijmeni:"Nováková",email:"jana.novakova@email.cz",telefon:"+420 601 111 222",adresa:"Náměstí Míru 5, Praha 2",datumVstupu:"2019-03-15",typClenství:"Řádný člen",pozice:"Předseda"},
  {id:2,jmeno:"Petr",prijmeni:"Svoboda",email:"petr.svoboda@firma.cz",telefon:"+420 602 333 444",adresa:"Husova 12, Brno",datumVstupu:"2020-07-01",typClenství:"Řádný člen",pozice:"Tajemník"},
  {id:3,jmeno:"Marie",prijmeni:"Horáková",email:"m.horakova@email.cz",telefon:"+420 603 555 666",adresa:"Palackého 8, Ostrava",datumVstupu:"2021-01-20",typClenství:"Přidružený člen",pozice:"Člen"},
  {id:4,jmeno:"Tomáš",prijmeni:"Dvořák",email:"t.dvorak@prace.cz",telefon:"+420 604 777 888",adresa:"Jiráskova 3, Plzeň",datumVstupu:"2018-11-05",typClenství:"Řádný člen",pozice:"Pokladník"},
  {id:5,jmeno:"Lucie",prijmeni:"Procházková",email:"lucie.p@email.cz",telefon:"+420 605 999 000",adresa:"Mánesova 22, Liberec",datumVstupu:"2022-04-10",typClenství:"Čestný člen",pozice:"Člen"},
  {id:6,jmeno:"Martin",prijmeni:"Krejčí",email:"m.krejci@union.cz",telefon:"+420 606 100 200",adresa:"Budějovická 7, Č. Budějovice",datumVstupu:"2023-02-14",typClenství:"Přidružený člen",pozice:"Revizor"},
  {id:7,jmeno:"Eva",prijmeni:"Blahová",email:"eva.blahova@posta.cz",telefon:"+420 607 300 400",adresa:"Lidická 18, Olomouc",datumVstupu:"2017-09-01",typClenství:"Řádný člen",pozice:"Místopředseda"},
  {id:8,jmeno:"Adam",prijmeni:"Zeman",email:"a.zeman@mail.cz",telefon:"+420 608 500 600",adresa:"Korunní 4, Praha 10",datumVstupu:"2021-06-15",typClenství:"Řádný člen",pozice:"Člen"},
  {id:9,jmeno:"Barbora",prijmeni:"Malá",email:"b.mala@centrum.cz",telefon:"+420 609 700 800",adresa:"Nákladní 9, Pardubice",datumVstupu:"2020-11-30",typClenství:"Student",pozice:"Člen"},
  {id:10,jmeno:"Karel",prijmeni:"Novák",email:"k.novak@gmail.com",telefon:"+420 601 234 567",adresa:"Školní 3, Hradec Králové",datumVstupu:"2016-03-22",typClenství:"Řádný člen",pozice:"Člen"},
];
const TYPY=["Řádný člen","Přidružený člen","Čestný člen","Student"];
const POZICE=["Člen","Předseda","Místopředseda","Tajemník","Pokladník","Revizor"];
const EMPTY={jmeno:"",prijmeni:"",email:"",telefon:"",adresa:"",datumVstupu:"",typClenství:"Řádný člen",pozice:"Člen"};
const PAGE_SZ=10, BATCH=50, LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Icons
const Ic=({d,s=18,c="currentColor",sw=2})=>(
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {d.split("|").map((p,i)=><path key={i} d={p}/>)}
  </svg>
);
const IC={
  users:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2|M23 21v-2a4 4 0 0 0-3-3.87|M16 3.13a4 4 0 0 1 0 7.75|M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  mail:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z|M22 6l-10 7L2 6",
  sms:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  plus:"M12 5v14|M5 12h14",
  edit:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7|M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
  trash:"M3 6h18|M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
  search:"M21 21l-4.35-4.35|M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z",
  logout:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4|M16 17l5-5-5-5|M21 12H9",
  dl:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4|M7 10l5 5 5-5|M12 15V3",
  check:"M20 6L9 17l-5-5",
  x:"M18 6L6 18|M6 6l12 12",
  send:"M22 2L11 13|M22 2L15 22 8 13l-6-1z",
  phone:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z",
  info:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z|M12 8h.01|M12 12v4",
  menu:"M3 12h18|M3 6h18|M3 18h18",
  chevR:"M9 18l6-6-6-6",
  desktop:"M2 3h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z|M8 21h8|M12 17v4",
  mobile:"M12 18h.01|M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
};

let _tt;
const showToast=(set,msg,type="ok")=>{set({msg,type});clearTimeout(_tt);_tt=setTimeout(()=>set(null),3600);};
const csvExport=ms=>{
  const h=["ID","Jméno","Příjmení","Email","Telefon","Adresa","Vstup","Typ","Pozice"];
  const rows=ms.map(m=>[m.id,m.jmeno,m.prijmeni,m.email,m.telefon,m.adresa,m.datumVstupu,m.typClenství,m.pozice]);
  const blob=new Blob(["\ufeff",[h,...rows].map(r=>r.map(v=>`"${v}"`).join(",")).join("\n")],{type:"text/csv;charset=utf-8;"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="clenove.csv";a.click();
};
const badgeCls=t=>({"Řádný člen":"bdg-blue","Přidružený člen":"bdg-cyan","Čestný člen":"bdg-green","Student":"bdg-gray"}[t]||"bdg-gray");
const initials=(a,b)=>((a||"")[0]+(b||"")[0]).toUpperCase();
const sortAlpha=arr=>[...arr].sort((a,b)=>a.prijmeni.localeCompare(b.prijmeni,"cs")||a.jmeno.localeCompare(b.jmeno,"cs"));

function Login({onLogin}){
  const [f,setF]=useState({l:"",p:""});
  const [err,setErr]=useState("");
  const go=()=>{if(f.l==="admin"&&f.p==="odbory2024"){onLogin(f.l);}else{setErr("Nesprávné přihlašovací údaje.");}};
  return(
    <div className="login-bg">
      <div className="login-card">
        <div className="glow-top"/>
        <div className="brand">
          <div className="brand-mark">OS</div>
          <div><div className="brand-name">Odborový systém</div><div className="brand-sub">Správa členů · Email · SMS</div></div>
        </div>
        {err&&<div className="err-box"><Ic d={IC.x} s={14}/>{err}</div>}
        <div className="fld"><label className="lbl">Přihlašovací jméno</label><input className="inp" value={f.l} onChange={e=>setF({...f,l:e.target.value})} placeholder="admin"/></div>
        <div className="fld"><label className="lbl">Heslo</label><input className="inp" type="password" value={f.p} onChange={e=>setF({...f,p:e.target.value})} placeholder="••••••••" onKeyDown={e=>e.key==="Enter"&&go()}/></div>
        <button className="btn-login" onClick={go}>Přihlásit se</button>
        <div className="demo-tip">Demo: <code>admin</code> / <code>odbory2024</code></div>
      </div>
    </div>
  );
}

function DetailPanel({member,onClose,onSave,onDelete}){
  const [editing,setEditing]=useState(false);
  const [form,setForm]=useState({...member});
  const u=k=>e=>setForm({...form,[k]:e.target.value});
  const save=()=>{onSave(form);setEditing(false);};
  return(
    <div className="detail-overlay" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="detail-panel">
        <div className="dp-head">
          <div className="dp-id">
            <div className="dp-av">{initials(member.jmeno,member.prijmeni)}</div>
            <div>
              <div className="dp-name">{member.jmeno} {member.prijmeni}</div>
              <div style={{marginTop:4}}><span className={`bdg ${badgeCls(member.typClenství)}`}>{member.typClenství}</span></div>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={onClose}><Ic d={IC.x} s={18}/></button>
        </div>
        <div className="dp-body">
          {!editing?(
            <>
              <div className="dp-sec-title">Kontaktní údaje</div>
              <div className="dp-grid">
                {[["E-mail",member.email],["Telefon",member.telefon]].map(([l,v])=>(
                  <div key={l} className="dp-field"><div className="dp-lbl">{l}</div><div className={`dp-val ${!v?"empty":""}`}>{v||"—"}</div></div>
                ))}
                <div className="dp-field" style={{gridColumn:"1/-1"}}><div className="dp-lbl">Adresa</div><div className={`dp-val ${!member.adresa?"empty":""}`}>{member.adresa||"—"}</div></div>
                {[["Datum vstupu",member.datumVstupu],["Typ členství",member.typClenství],["Pracovní pozice",member.pozice]].map(([l,v])=>(
                  <div key={l} className="dp-field"><div className="dp-lbl">{l}</div><div className={`dp-val ${!v?"empty":""}`}>{v||"—"}</div></div>
                ))}
              </div>
            </>
          ):(
            <>
              <div className="dp-sec-title">Upravit údaje</div>
              <div className="edit-section">
                <div className="edit-grid">
                  {[["Jméno","jmeno"],["Příjmení","prijmeni"],["E-mail","email"],["Telefon","telefon"]].map(([l,k])=>(
                    <div key={k}><label className="lbl" style={{marginBottom:5}}>{l}</label><input className="finp" value={form[k]} onChange={u(k)}/></div>
                  ))}
                  <div className="edit-span"><label className="lbl" style={{marginBottom:5}}>Adresa</label><input className="finp" value={form.adresa} onChange={u("adresa")}/></div>
                  <div><label className="lbl" style={{marginBottom:5}}>Datum vstupu</label><input className="finp" type="date" value={form.datumVstupu} onChange={u("datumVstupu")}/></div>
                  <div><label className="lbl" style={{marginBottom:5}}>Typ členství</label><select className="finp" value={form.typClenství} onChange={u("typClenství")}>{TYPY.map(t=><option key={t}>{t}</option>)}</select></div>
                  <div><label className="lbl" style={{marginBottom:5}}>Pozice</label><select className="finp" value={form.pozice} onChange={u("pozice")}>{POZICE.map(p=><option key={p}>{p}</option>)}</select></div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="dp-foot">
          {!editing?(
            <>
              <button className="btn btn-blue" onClick={()=>setEditing(true)}><Ic d={IC.edit} s={14}/>Upravit údaje</button>
              <button className="btn btn-out" onClick={onClose}>Zavřít</button>
              <button className="btn btn-out btn-sm" style={{marginLeft:"auto",color:"#ff6b6b",borderColor:"rgba(255,107,107,.3)"}}
                onClick={()=>{if(window.confirm("Opravdu smazat tohoto člena?"))onDelete(member.id);}}>
                <Ic d={IC.trash} s={13}/>Smazat
              </button>
            </>
          ):(
            <>
              <button className="btn btn-blue" onClick={save}><Ic d={IC.check} s={14}/>Uložit změny</button>
              <button className="btn btn-out" onClick={()=>{setForm({...member});setEditing(false);}}>Zrušit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function AddModal({onSave,onClose}){
  const [f,setF]=useState(EMPTY);
  const u=k=>e=>setF({...f,[k]:e.target.value});
  return(
    <div className="overlay" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="modal">
        <div className="modal-h"><span className="modal-t">Přidat nového člena</span><button className="btn btn-ghost" onClick={onClose}><Ic d={IC.x} s={16}/></button></div>
        <div className="modal-b">
          <div className="fgrid">
            {[["Jméno","jmeno","Jana"],["Příjmení","prijmeni","Nováková"],["E-mail","email","jana@email.cz"],["Telefon","telefon","+420 601 234 567"]].map(([l,k,ph])=>(
              <div key={k}><label className="lbl" style={{marginBottom:6}}>{l}</label><input className="finp" value={f[k]} onChange={u(k)} placeholder={ph}/></div>
            ))}
            <div className="fspan"><label className="lbl" style={{marginBottom:6}}>Adresa</label><input className="finp" value={f.adresa} onChange={u("adresa")} placeholder="Ulice 1, Město"/></div>
            <div><label className="lbl" style={{marginBottom:6}}>Datum vstupu</label><input className="finp" type="date" value={f.datumVstupu} onChange={u("datumVstupu")}/></div>
            <div><label className="lbl" style={{marginBottom:6}}>Typ členství</label><select className="finp" value={f.typClenství} onChange={u("typClenství")}>{TYPY.map(t=><option key={t}>{t}</option>)}</select></div>
            <div><label className="lbl" style={{marginBottom:6}}>Pozice</label><select className="finp" value={f.pozice} onChange={u("pozice")}>{POZICE.map(p=><option key={p}>{p}</option>)}</select></div>
          </div>
        </div>
        <div className="modal-f">
          <button className="btn btn-out" onClick={onClose}>Zrušit</button>
          <button className="btn btn-blue" onClick={()=>onSave(f)}><Ic d={IC.check} s={14}/>Přidat člena</button>
        </div>
      </div>
    </div>
  );
}

function Members({members,setMembers,setToast,isMobile}){
  const [q,setQ]=useState("");
  const [typ,setTyp]=useState("");
  const [letter,setLetter]=useState("");
  const [pg,setPg]=useState(1);
  const [detail,setDetail]=useState(null);
  const [adding,setAdding]=useState(false);
  const sorted=sortAlpha(members);
  const avail=new Set(sorted.map(m=>m.prijmeni[0]?.toUpperCase()||""));
  const filtered=sorted.filter(m=>{
    const s=`${m.jmeno} ${m.prijmeni} ${m.email} ${m.telefon} ${m.pozice}`.toLowerCase();
    return s.includes(q.toLowerCase())&&(!typ||m.typClenství===typ)&&(!letter||m.prijmeni[0]?.toUpperCase()===letter);
  });
  const pages=Math.max(1,Math.ceil(filtered.length/PAGE_SZ));
  const slice=filtered.slice((pg-1)*PAGE_SZ,pg*PAGE_SZ);
  const addMember=fm=>{setMembers([...members,{...fm,id:Date.now()}]);showToast(setToast,"Člen přidán.");setAdding(false);};
  const saveMember=fm=>{setMembers(members.map(m=>m.id===fm.id?fm:m));showToast(setToast,"Údaje uloženy.");setDetail(fm);};
  const delMember=id=>{setMembers(members.filter(m=>m.id!==id));showToast(setToast,"Člen smazán.","error");setDetail(null);};
  const stats=[
    {n:members.length,l:"Celkem členů",a:"var(--blue)",a2:"var(--cyan)"},
    {n:members.filter(m=>m.typClenství==="Řádný člen").length,l:"Řádní členové",a:"var(--cyan)",a2:"var(--green)"},
    {n:members.filter(m=>m.typClenství==="Přidružený člen").length,l:"Přidružení",a:"var(--green)",a2:"var(--cyan)"},
    {n:members.filter(m=>m.typClenství==="Čestný člen").length,l:"Čestní členové",a:"var(--gray)",a2:"var(--blue)"},
  ];
  return(
    <div style={{animation:"fadeUp .4s ease"}}>
      <div className="stats">{stats.map((s,i)=><div className="stat" key={i} style={{"--a":s.a,"--a2":s.a2}}><div className="stat-n">{s.n}</div><div className="stat-l">{s.l}</div></div>)}</div>
      <div className="card">
        <div className="toolbar">
          <div className="srch"><span className="srch-ic"><Ic d={IC.search} s={14}/></span>
            <input placeholder="Hledat jméno, e-mail, telefon…" value={q} onChange={e=>{setQ(e.target.value);setPg(1);setLetter("");}}/>
          </div>
          <select className="flt hide-mob" value={typ} onChange={e=>{setTyp(e.target.value);setPg(1);}}>
            <option value="">Všechny typy</option>{TYPY.map(t=><option key={t}>{t}</option>)}
          </select>
          <button className="btn btn-out hide-mob" onClick={()=>csvExport(members)}><Ic d={IC.dl} s={13}/>CSV</button>
          <button className="btn btn-blue" onClick={()=>setAdding(true)}><Ic d={IC.plus} s={13}/>Přidat</button>
        </div>
        <div className="alpha-bar">
          <button className={`a-btn ${!letter?"on":""}`} onClick={()=>{setLetter("");setPg(1);}}>Vše</button>
          {LETTERS.map(l=>(
            <button key={l} className={`a-btn ${letter===l?"on":""} ${!avail.has(l)?"off":""}`}
              onClick={()=>{if(avail.has(l)){setLetter(letter===l?"":l);setPg(1);}}}>
              {l}
            </button>
          ))}
        </div>
        {isMobile?(
          <div style={{padding:12}}>
            <div className="mcards">
              {slice.length===0&&<div style={{textAlign:"center",padding:24,color:"var(--text2)"}}>Žádné záznamy</div>}
              {slice.map(m=>(
                <div className="mcard" key={m.id} onClick={()=>setDetail(m)}>
                  <div className="mcard-top">
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <div className="mav">{initials(m.jmeno,m.prijmeni)}</div>
                      <div><div className="mn">{m.prijmeni} {m.jmeno}</div><span className={`bdg ${badgeCls(m.typClenství)}`}>{m.typClenství}</span></div>
                    </div>
                    <Ic d={IC.chevR} s={16} c="var(--text3)"/>
                  </div>
                  <div className="mcard-info">
                    {[["E-mail",m.email],["Telefon",m.telefon],["Pozice",m.pozice],["Vstup",m.datumVstupu]].map(([l,v])=>(
                      <div key={l}><div className="mi-lbl">{l}</div><div className="mi-val">{v||"—"}</div></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ):(
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>#</th><th>Člen</th><th>Telefon</th><th>Typ členství</th><th>Pozice</th><th>Vstup</th></tr></thead>
              <tbody>
                {slice.length===0&&<tr><td colSpan="6" style={{textAlign:"center",padding:28,color:"var(--text2)"}}>Žádné záznamy</td></tr>}
                {slice.map((m,i)=>(
                  <tr key={m.id} onClick={()=>setDetail(m)} title="Kliknutím otevřete detail">
                    <td style={{color:"var(--text3)",fontSize:11}}>{(pg-1)*PAGE_SZ+i+1}</td>
                    <td><div className="mc"><div className="mav">{initials(m.jmeno,m.prijmeni)}</div><div><div className="mn">{m.prijmeni} {m.jmeno}</div><div className="me">{m.email}</div></div></div></td>
                    <td style={{color:"var(--text2)"}}>{m.telefon}</td>
                    <td><span className={`bdg ${badgeCls(m.typClenství)}`}>{m.typClenství}</span></td>
                    <td style={{color:"var(--text2)"}}>{m.pozice}</td>
                    <td style={{color:"var(--text3)",fontSize:12}}>{m.datumVstupu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="pag">
          {Array.from({length:pages},(_,i)=><button key={i} className={`pg-b ${pg===i+1?"on":""}`} onClick={()=>setPg(i+1)}>{i+1}</button>)}
          <div className="pg-info">{slice.length} z {filtered.length} záznamů (A–Z)</div>
        </div>
      </div>
      {detail&&<DetailPanel member={detail} onClose={()=>setDetail(null)} onSave={saveMember} onDelete={delMember}/>}
      {adding&&<AddModal onSave={addMember} onClose={()=>setAdding(false)}/>}
    </div>
  );
}

function Email({members,setToast}){
  const [sub,setSub]=useState("");
  const [msg,setMsg]=useState("");
  const [typ,setTyp]=useState("");
  const [busy,setBusy]=useState(false);
  const [done,setDone]=useState(false);
  const [sent,setSent]=useState(0);
  const [log,setLog]=useState([]);
  const [pct,setPct]=useState(0);
  const abortRef=useRef(false);
  const rcpt=(typ?members.filter(m=>m.typClenství===typ):members).filter(m=>m.email);
  const total=rcpt.length;
  const addLog=line=>setLog(l=>[...l.slice(-8),line]);
  const send=async()=>{
    if(!sub||!msg){showToast(setToast,"Vyplňte předmět i text.","error");return;}
    setBusy(true);setDone(false);setSent(0);setLog([]);setPct(0);abortRef.current=false;
    const batches=Math.ceil(total/BATCH);
    let sentCount=0;
    for(let b=0;b<batches;b++){
      if(abortRef.current)break;
      const from=b*BATCH,to=Math.min(from+BATCH,total);
      addLog(`Dávka ${b+1}/${batches}: odesílám ${to-from} e-mailů…`);
      await new Promise(r=>setTimeout(r,300));
      sentCount+=to-from;
      setSent(sentCount);setPct(Math.round((sentCount/total)*100));
    }
    setBusy(false);setDone(true);addLog(`✓ Hotovo — odesláno ${sentCount} e-mailů.`);
    showToast(setToast,`E-mail odeslán ${sentCount} příjemcům!`);
  };
  const stop=()=>{abortRef.current=true;setBusy(false);addLog("⚠ Zastaveno.");};
  return(
    <div style={{animation:"fadeUp .4s ease"}}>
      <div className="compose">
        <div className="c-title"><Ic d={IC.mail} s={20} c="var(--blue)"/>Hromadný e-mail</div>
        <div className="info-row"><Ic d={IC.info} s={15} c="var(--blue)"/>
          <div>Napojte <b>Brevo API</b> (300 e-mailů/den zdarma) nebo <b>SendGrid</b>. Odesílání po dávkách <b>{BATCH} e-mailů</b> — spolehlivé i pro 2 000 příjemců.</div>
        </div>
        <div style={{marginBottom:14}}>
          <label className="lbl" style={{marginBottom:6}}>Filtrovat příjemce</label>
          <select className="flt" style={{width:"100%",maxWidth:280}} value={typ} onChange={e=>setTyp(e.target.value)}>
            <option value="">Všichni členové s e-mailem</option>
            {TYPY.map(t=><option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="rcpt-bar">
          <span>Příjemci: <span className="rcpt-n">{total}</span> adres
            {total>0&&<span style={{fontSize:11,marginLeft:8,color:"var(--text3)"}}>({Math.ceil(total/BATCH)} dávek × {BATCH})</span>}
          </span>
          <span style={{fontSize:11,color:"var(--text3)"}}>brevo.com</span>
        </div>
        <div className="fld" style={{marginBottom:12}}>
          <label className="lbl" style={{marginBottom:6}}>Předmět e-mailu</label>
          <input className="finp" value={sub} onChange={e=>setSub(e.target.value)} placeholder="Pozvánka na členskou schůzi…"/>
        </div>
        <div className="fld" style={{marginBottom:14}}>
          <label className="lbl" style={{marginBottom:6}}>Text zprávy</label>
          <textarea className="ftxt" value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Vážená paní / Vážený pane,&#10;&#10;dovolujeme si Vás pozvat na…" style={{minHeight:140}}/>
        </div>
        {(busy||done)&&(
          <div className="batch-box">
            <div className="batch-title"><span>{busy?"Odesílám…":"Hotovo"}</span><span className="batch-pct">{pct}%</span></div>
            <div className="progress-wrap"><div className="progress-bar" style={{width:`${pct}%`}}/></div>
            <div className="batch-stats"><span>Odesláno: <b>{sent}</b></span><span>Celkem: {total}</span></div>
            <div className="batch-log">{log.map((l,i)=><div key={i}>{l}</div>)}</div>
          </div>
        )}
        {done&&!busy&&<div className="ok-box"><Ic d={IC.check} s={14} c="var(--green)"/>Odesláno {sent} příjemcům.</div>}
        <div style={{display:"flex",gap:10}}>
          <button className="btn btn-blue" onClick={send} disabled={busy||total===0}>
            <Ic d={IC.send} s={14}/>{busy?`Odesílám… (${sent}/${total})`:`Odeslat všem (${total})`}
          </button>
          {busy&&<button className="btn btn-out" onClick={stop}>Zastavit</button>}
        </div>
      </div>
    </div>
  );
}

function Sms({members,setToast}){
  const [msg,setMsg]=useState("");
  const [typ,setTyp]=useState("");
  const [busy,setBusy]=useState(false);
  const [done,setDone]=useState(false);
  const [pct,setPct]=useState(0);
  const [sent,setSent]=useState(0);
  const rcpt=(typ?members.filter(m=>m.typClenství===typ):members).filter(m=>m.telefon);
  const smsN=Math.ceil((msg.length||1)/160);
  const send=async()=>{
    if(!msg){showToast(setToast,"Napište text SMS.","error");return;}
    setBusy(true);setDone(false);setPct(0);setSent(0);
    const total=rcpt.length;
    for(let i=0;i<total;i++){await new Promise(r=>setTimeout(r,4));setSent(i+1);setPct(Math.round(((i+1)/total)*100));}
    setBusy(false);setDone(true);showToast(setToast,`SMS odesláno ${total} příjemcům!`);
  };
  return(
    <div style={{animation:"fadeUp .4s ease"}}>
      <div className="compose">
        <div className="c-title"><Ic d={IC.sms} s={20} c="var(--cyan)"/>Hromadná SMS</div>
        <div className="info-row"><Ic d={IC.info} s={15} c="var(--blue)"/>
          <div>SMS přes <b>Twilio</b> (~0,07 Kč/SMS) nebo <b>SMSbrana.cz</b> (~0,60–0,90 Kč/SMS).</div>
        </div>
        <div style={{marginBottom:14}}>
          <label className="lbl" style={{marginBottom:6}}>Filtrovat příjemce</label>
          <select className="flt" style={{width:"100%",maxWidth:280}} value={typ} onChange={e=>setTyp(e.target.value)}>
            <option value="">Všichni členové s telefonem</option>
            {TYPY.map(t=><option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="rcpt-bar">
          <span>Příjemci: <span className="rcpt-n">{rcpt.length}</span> čísel</span>
          <span style={{fontSize:11,color:"var(--text3)"}}>smsbrana.cz</span>
        </div>
        <div className="fld" style={{marginBottom:8}}>
          <label className="lbl" style={{marginBottom:6}}>Text SMS zprávy</label>
          <textarea className="ftxt" value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Vážený člene, zveme Vás na schůzi ZO…" style={{minHeight:100}}/>
        </div>
        <div className="char-info">
          <span>{msg.length}/160 znaků</span><span>{smsN} SMS/příjemce</span>
          <span className="hi">~{(rcpt.length*smsN*0.7).toFixed(0)} Kč celkem</span>
        </div>
        {busy&&<div style={{marginBottom:14}}>
          <div style={{fontSize:12,color:"var(--text2)",marginBottom:4}}>Odesílám {sent}/{rcpt.length}… {pct}%</div>
          <div className="progress-wrap"><div className="progress-bar" style={{width:`${pct}%`}}/></div>
        </div>}
        {done&&!busy&&<div className="ok-box"><Ic d={IC.check} s={14} c="var(--green)"/>SMS odesláno {sent} příjemcům.</div>}
        <button className="btn btn-blue" onClick={send} disabled={busy||rcpt.length===0}>
          <Ic d={IC.phone} s={14}/>{busy?`Odesílám… (${sent}/${rcpt.length})`:`Odeslat SMS (${rcpt.length})`}
        </button>
      </div>
    </div>
  );
}

const PAGES=[
  {id:"members",label:"Členové",icon:IC.users,sub:"Databáze členů"},
  {id:"email",label:"E-mail",icon:IC.mail,sub:"Hromadné e-maily"},
  {id:"sms",label:"SMS",icon:IC.sms,sub:"Hromadné SMS"},
];

function App(){
  const [auth,setAuth]=useState(false);
  const [user,setUser]=useState("");
  const [pg,setPg]=useState("members");
  const [members,setMembers]=useState(DEMO_MEMBERS);
  const [toastState,setToast]=useState(null);
  const [mobOpen,setMobOpen]=useState(false);
  const [isMobile,setIsMobile]=useState(window.innerWidth<=768);
  const [forceView,setForceView]=useState(null);
  useEffect(()=>{const fn=()=>setIsMobile(window.innerWidth<=768);window.addEventListener("resize",fn);return()=>window.removeEventListener("resize",fn);},[]);
  const effMobile=forceView?forceView==="mobile":isMobile;
  const cur=PAGES.find(p=>p.id===pg);
  if(!auth)return <Login onLogin={u=>{setAuth(true);setUser(u);}}/>;
  return(
    <div className="app">
      <div className={`sidebar ${mobOpen?"open":""}`}>
        <div className="sb-logo"><div className="sb-bm">OS</div><div className="sb-name">Odborový<br/>systém</div></div>
        <div className="sb-nav">
          <div className="nav-sec">Navigace</div>
          {PAGES.map(p=>(
            <button key={p.id} className={`nav-btn ${pg===p.id?"active":""}`} onClick={()=>{setPg(p.id);setMobOpen(false);}}>
              <Ic d={p.icon} s={16}/>{p.label}
            </button>
          ))}
        </div>
        <div className="sb-foot">
          <div className="user-row"><div className="av">{user[0]?.toUpperCase()}</div><div><div className="u-name">{user}</div><div className="u-role">Správce</div></div></div>
          <button className="nav-btn" onClick={()=>setAuth(false)}><Ic d={IC.logout} s={15}/>Odhlásit se</button>
        </div>
      </div>
      <div className="main" style={effMobile?{marginLeft:0}:{}}>
        <div className="topbar">
          <div className="tb-left">
            {effMobile&&<button className="btn btn-ghost" onClick={()=>setMobOpen(o=>!o)}><Ic d={IC.menu} s={20}/></button>}
            <div><div className="pg-title">{cur.label}</div><div className="pg-sub">{cur.sub}</div></div>
          </div>
          <div className="tb-right">
            <div className="vt">
              <button className={`vt-b ${forceView==="desktop"||(forceView===null&&!isMobile)?"on":""}`} onClick={()=>setForceView(v=>v==="desktop"?null:"desktop")} title="Desktop"><Ic d={IC.desktop} s={14}/></button>
              <button className={`vt-b ${forceView==="mobile"||(forceView===null&&isMobile)?"on":""}`} onClick={()=>setForceView(v=>v==="mobile"?null:"mobile")} title="Mobil"><Ic d={IC.mobile} s={14}/></button>
            </div>
            <div className="av hide-mob" style={{cursor:"default"}}>{user[0]?.toUpperCase()}</div>
          </div>
        </div>
        <div className="content">
          {pg==="members"&&<Members members={members} setMembers={setMembers} setToast={setToast} isMobile={effMobile}/>}
          {pg==="email"&&<Email members={members} setToast={setToast}/>}
          {pg==="sms"&&<Sms members={members} setToast={setToast}/>}
        </div>
      </div>
      <nav className="mob-nav">
        <div className="mn-items">
          {PAGES.map(p=>(
            <button key={p.id} className={`mn-btn ${pg===p.id?"on":""}`} onClick={()=>setPg(p.id)}>
              <Ic d={p.icon} s={20}/>{p.label}{pg===p.id&&<div className="mn-dot"/>}
            </button>
          ))}
        </div>
      </nav>
      {mobOpen&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.55)",zIndex:99}} onClick={()=>setMobOpen(false)}/>}
      {toastState&&(
        <div className={`toast ${toastState.type}`}>
          <Ic d={toastState.type==="error"?IC.x:IC.check} s={15}/>{toastState.msg}
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
</script>
</body>
</html>
