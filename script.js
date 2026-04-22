<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>STAR CRASH - PRO EDITION</title>
    <style>
        /* 
         * =========================================
         * CLEAN & PRO UI SYSTEM
         * =========================================
         */
        :root {
            --primary: #0098ea;
            --accent: #ffd700;
            --success: #00ff9d;
            --danger: #ff004c;
            --ui-bg: rgba(10, 15, 30, 0.85);
            --glass-border: rgba(255, 255, 255, 0.1);
            --font-main: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        * { box-sizing: border-box; user-select: none; -webkit-tap-highlight-color: transparent; outline: none; }
        
        body {
            margin: 0;
            padding: 0;
            background-color: #000000;
            color: white;
            font-family: var(--font-main);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        /* BACKGROUND CANVAS */
        #gameCanvas {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: 1;
        }

        /* UI LAYER */
        .ui-layer {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            height: 100%;
            pointer-events: none;
        }

        .ui-element { pointer-events: auto; }

        /* HEADER - CLEANED UP */
        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 15px;
            background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 100%);
        }

        .brand {
            font-weight: 900; font-size: 1.3rem; letter-spacing: 1px; 
            text-transform: uppercase; text-shadow: 0 0 10px var(--primary);
        }
        .brand span { color: var(--primary); }

        .header-controls { display: flex; gap: 10px; }

        .icon-btn {
            width: 36px; height: 36px;
            background: var(--ui-bg);
            border: 1px solid var(--glass-border);
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; backdrop-filter: blur(5px);
            transition: 0.2s; color: #ccc;
        }
        .icon-btn:hover { border-color: var(--primary); color: var(--primary); }
        .icon-btn svg { width: 18px; height: 18px; }

        /* LIVE FEED (Moved to right top, cleaner) */
        .live-feed {
            position: absolute; right: 10px; top: 60px;
            width: 160px; max-height: 200px;
            background: rgba(0,0,0,0.4);
            backdrop-filter: blur(4px);
            border-radius: 8px; border: 1px solid var(--glass-border);
            padding: 8px;
            display: flex; flex-direction: column;
            mask-image: linear-gradient(to bottom, black, black 80%, transparent);
        }
        @media (max-width: 600px) { .live-feed { display: none; /* Hide on mobile to clean view */ } }
        
        .feed-title { font-size: 0.6rem; color: #888; text-transform: uppercase; font-weight: 700; margin-bottom: 4px; }
        .feed-list { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 3px; font-size: 0.7rem; }
        .feed-item { display: flex; justify-content: space-between; color: #ccc; }
        .feed-item .win { color: var(--success); }

        /* CENTER HUD */
        .hud-center {
            flex: 1;
            display: flex; flex-direction: column;
            justify-content: center; align-items: center;
            text-shadow: 0 0 20px rgba(0,0,0,1);
        }
        .multiplier { font-size: 4rem; font-weight: 800; font-variant-numeric: tabular-nums; }
        .status-badge { 
            margin-top: 10px; background: var(--ui-bg); border: 1px solid var(--glass-border); 
            padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; letter-spacing: 1px; font-weight: 600;
        }

        /* HISTORY BAR */
        .history-bar {
            position: absolute; top: 60px; left: 15px;
            display: flex; flex-direction: column; gap: 4px;
        }
        .hist-pill {
            font-size: 0.7rem; font-weight: bold; padding: 2px 6px;
            background: rgba(0,0,0,0.5); border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);
        }
        .h-low { border-bottom: 2px solid var(--primary); }
        .h-med { border-bottom: 2px solid var(--accent); }
        .h-high { border-bottom: 2px solid var(--danger); }

        /* CONTROLS FOOTER */
        .controls-deck {
            background: linear-gradient(0deg, rgba(0,0,0,0.95) 0%, transparent 100%);
            padding: 15px 20px 30px 20px;
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 15px;
        }
        @media (max-width: 600px) { .controls-deck { grid-template-columns: 1fr; gap: 12px; padding-bottom: 20px; } }

        .balance-display {
            display: flex; justify-content: space-between; align-items: flex-end;
            margin-bottom: 10px;
        }
        .bal-label { font-size: 0.75rem; color: #888; font-weight: bold; text-transform: uppercase; }
        .bal-val { font-size: 1.8rem; font-weight: 800; color: white; }

        .currency-toggle {
            display: flex; gap: 5px; background: rgba(0,0,0,0.6); padding: 3px; border-radius: 8px; margin-bottom: 8px;
        }
        .curr-opt { 
            flex: 1; text-align: center; padding: 6px; border-radius: 6px; font-size: 0.8rem; 
            font-weight: bold; cursor: pointer; color: #666; transition: 0.2s; 
        }
        .curr-opt.active.ton { background: var(--primary); color: white; }
        .curr-opt.active.star { background: var(--accent); color: black; }

        .input-box {
            background: var(--ui-bg); border: 1px solid var(--glass-border);
            padding: 8px 12px; border-radius: 8px; display: flex; align-items: center;
        }
        input { background: transparent; border: none; color: white; font-size: 1.2rem; font-weight: bold; width: 100%; text-align: right; }

        .btn-main {
            grid-column: 1 / -1;
            height: 65px; border-radius: 12px; border: none;
            font-size: 1.3rem; font-weight: 800; text-transform: uppercase;
            cursor: pointer; transition: transform 0.1s; box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }
        .btn-bet { background: var(--primary); color: white; }
        .btn-cashout { background: var(--success); color: black; animation: pulse 1s infinite; }
        .btn-waiting { background: #222; color: #555; cursor: not-allowed; }
        .btn-crash { background: var(--danger); color: white; animation: shake 0.4s; }

        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(0,255,157,0.7); } 70% { box-shadow: 0 0 0 15px rgba(0,255,157,0); } 100% { box-shadow: 0 0 0 0 rgba(0,255,157,0); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }

        /* ==============================
           WITHDRAWAL MODAL (THE NEW PART)
           ============================== */
        .modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
            z-index: 100; display: none; align-items: center; justify-content: center;
        }
        .modal-overlay.open { display: flex; animation: fadeIn 0.3s; }

        .modal-card {
            background: linear-gradient(145deg, #1a1f2e, #0d1016);
            border: 1px solid var(--glass-border);
            border-radius: 20px; padding: 30px;
            width: 90%; max-width: 400px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.8);
            position: relative;
        }

        .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .modal-title { font-size: 1.2rem; font-weight: 800; color: white; }
        .close-btn { background: none; border: none; color: #666; font-size: 1.5rem; cursor: pointer; }
        
        .withdraw-input-group { margin-bottom: 15px; }
        .withdraw-input-group label { display: block; color: #888; font-size: 0.8rem; margin-bottom: 5px; text-transform: uppercase; }
        .withdraw-input { width: 100%; background: rgba(0,0,0,0.3); border: 1px solid var(--glass-border); padding: 12px; border-radius: 8px; color: white; font-size: 1rem; }

        .btn-withdraw-action {
            width: 100%; padding: 15px; border-radius: 10px; border: none;
            background: var(--success); color: black; font-weight: 800; font-size: 1.1rem;
            cursor: pointer; transition: 0.2s;
        }
        .btn-withdraw-action:hover { filter: brightness(1.1); }

        @keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }

        /* Notification Toast */
        .toast {
            position: fixed; top: 80px; left: 50%; transform: translateX(-50%);
            background: var(--success); color: black; padding: 10px 20px; border-radius: 30px;
            font-weight: bold; z-index: 200; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            display: none; align-items: center; gap: 10px;
        }
        .toast.show { display: flex; animation: slideDown 0.3s; }
        @keyframes slideDown { from { transform: translate(-50%, -20px); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }

    </style>
</head>
<body>

    <!-- 3D CANVAS -->
    <canvas id="gameCanvas"></canvas>

    <!-- UI -->
    <div class="ui-layer">
        <!-- Header -->
        <div class="top-bar ui-element">
            <div class="brand">STAR<span>CRASH</span></div>
            <div class="header-controls">
                <!-- Withdraw Button -->
                <div class="icon-btn" onclick="withdrawSys.open()" title="Withdraw">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                </div>
                <!-- Wallet Connect -->
                <div class="icon-btn" onclick="walletSys.toggle()" id="walletBtn" style="border-radius:20px; width:auto; padding:0 15px; font-size:0.8rem; font-weight:bold;">
                    CONNECT
                </div>
                <!-- Language Switch (Hidden in Header, accessible via Modal logic) -->
                <!-- Using a small dot to show language -->
                <div class="icon-btn" onclick="game.toggleLang()" style="border-radius:20px; width:auto; padding:0 10px; font-size:0.7rem;">
                    RU/EN
                </div>
            </div>
        </div>

        <!-- Live Feed -->
        <div class="live-feed ui-element">
            <div class="feed-title" id="feedTitle">LIVE</div>
            <div class="feed-list" id="feedList"></div>
        </div>

        <!-- History -->
        <div class="history-bar ui-element" id="historyBar"></div>

        <!-- Center HUD -->
        <div class="hud-center">
            <div class="multiplier" id="multiplier">1.00x</div>
            <div class="status-badge" id="statusText">WAITING</div>
        </div>

        <!-- Controls -->
        <div class="controls-deck ui-element">
            <div style="display:flex; flex-direction:column;">
                <div class="balance-display">
                    <span class="bal-label">BALANCE</span>
                    <span class="bal-val" id="balanceVal">0.00</span>
                </div>
                <div class="currency-toggle">
                    <div class="curr-opt active ton" id="optTon" onclick="game.setCurr('TON')">TON</div>
                    <div class="curr-opt star" id="optStar" onclick="game.setCurr('STAR')">STARS</div>
                </div>
            </div>
            <div style="display:flex; flex-direction:column; justify-content:center;">
                 <div class="input-box" style="background:rgba(0,0,0,0.5); border:none;">
                    <input type="number" id="betInput" value="10" style="font-size:1rem;">
                 </div>
            </div>
            
            <button class="btn-main btn-waiting" id="actionBtn" onclick="game.action()">PLACE BET</button>
        </div>
    </div>

    <!-- WITHDRAWAL MODAL -->
    <div class="modal-overlay" id="withdrawModal">
        <div class="modal-card">
            <div class="modal-header">
                <div class="modal-title" id="withdrawTitle">WITHDRAW</div>
                <button class="close-btn" onclick="withdrawSys.close()">×</button>
            </div>
            
            <div class="withdraw-input-group">
                <label id="lbl-currency">Currency</label>
                <div style="display:flex; gap:10px; margin-bottom:5px;">
                    <button onclick="withdrawSys.setCur('TON')" id="wd-ton" style="flex:1; padding:8px; background:var(--primary); color:white; border:none; border-radius:6px; font-weight:bold;">TON</button>
                    <button onclick="withdrawSys.setCur('STAR')" id="wd-star" style="flex:1; padding:8px; background:#333; color:#aaa; border:none; border-radius:6px; font-weight:bold;">STAR</button>
                </div>
            </div>

            <div class="withdraw-input-group">
                <label id="lbl-amount">Amount</label>
                <input type="number" id="wdAmount" class="withdraw-input" placeholder="0.00">
            </div>

            <div class="withdraw-input-group">
                <label id="lbl-addr">Wallet Address (TON)</label>
                <input type="text" id="wdAddr" class="withdraw-input" placeholder="EQD...">
            </div>

            <button class="btn-withdraw-action" id="btnConfirmWithdraw" onclick="withdrawSys.confirm()">CONFIRM WITHDRAW</button>
        </div>
    </div>

    <!-- TOAST -->
    <div class="toast" id="toastMsg">
        <span>✅</span> <span id="toastText">Success</span>
    </div>

    <script>
        /**
         * =========================================
         * 3D ENGINE, AUDIO & GAME LOGIC (Same as before)
         * =========================================
         */
        class SpaceEngine {
            constructor(canvasId) {
                this.canvas = document.getElementById(canvasId);
                this.ctx = this.canvas.getContext('2d');
                this.stars = [];
                this.numStars = 300;
                this.ship = { x: 0, y: 0, bank: 0 };
                this.particles = [];
                this.speed = 0;
                this.width = 0;
                this.height = 0;
                this.fov = 300;
                this.resize();
                window.addEventListener('resize', () => this.resize());
                this.initStars();
            }
            resize() {
                this.width = this.canvas.width = window.innerWidth;
                this.height = this.canvas.height = window.innerHeight;
            }
            initStars() {
                for(let i=0; i<this.numStars; i++) {
                    this.stars.push({
                        x: (Math.random() - 0.5) * 2000,
                        y: (Math.random() - 0.5) * 2000,
                        z: Math.random() * 2000,
                        color: Math.random() > 0.9 ? '#00d2ff' : '#ffffff'
                    });
                }
            }
            update(gameSpeed, isCrashed) {
                this.speed = gameSpeed * 8;
                this.stars.forEach(star => {
                    star.z -= this.speed;
                    if(star.z <= 1) {
                        star.z = 2000;
                        star.x = (Math.random() - 0.5) * 2000;
                        star.y = (Math.random() - 0.5) * 2000;
                    }
                });
                if(!isCrashed) this.ship.bank = Math.sin(Date.now() / 500) * 0.2;
                
                for(let i=this.particles.length-1; i>=0; i--) {
                    let p = this.particles[i];
                    p.x += p.vx; p.y += p.vy; p.z += p.vz;
                    p.life -= 0.02;
                    if(p.life <= 0) this.particles.splice(i, 1);
                }
            }
            draw(mult, isCrashed) {
                this.ctx.fillStyle = '#050508';
                this.ctx.fillRect(0, 0, this.width, this.height);
                const cx = this.width / 2;
                const cy = this.height / 2;
                this.stars.forEach(star => {
                    const scale = this.fov / star.z;
                    const x = star.x * scale + cx;
                    const y = star.y * scale + cy;
                    const size = Math.max(0.5, (1 - star.z / 2000) * 3);
                    if(mult > 2.0) {
                        const prevScale = this.fov / (star.z + this.speed*2);
                        const px = star.x * prevScale + cx;
                        const py = star.y * prevScale + cy;
                        this.ctx.strokeStyle = star.color;
                        this.ctx.lineWidth = size;
                        this.ctx.beginPath(); this.ctx.moveTo(px, py); this.ctx.lineTo(x, y); this.ctx.stroke();
                    } else {
                        this.ctx.fillStyle = star.color;
                        this.ctx.beginPath(); this.ctx.arc(x, y, size, 0, Math.PI*2); this.ctx.fill();
                    }
                });
                if(!isCrashed) this.drawShip(cx, cy + 80, this.ship.bank);
                else {
                    this.particles.forEach(p => {
                        const scale = this.fov / p.z;
                        this.ctx.globalAlpha = p.life;
                        this.ctx.fillStyle = p.color;
                        this.ctx.beginPath();
                        this.ctx.arc(p.x * scale + cx, p.y * scale + cy, 5, 0, Math.PI*2);
                        this.ctx.fill();
                    });
                    this.ctx.globalAlpha = 1;
                }
            }
            drawShip(x, y, bank) {
                this.ctx.save(); this.ctx.translate(x, y); this.ctx.rotate(bank);
                const flameLen = 20 + Math.random()*10;
                this.ctx.fillStyle = `rgba(0, 150, 255, 0.6)`;
                this.ctx.beginPath(); this.ctx.moveTo(-10, 30); this.ctx.lineTo(0, 30+flameLen); this.ctx.lineTo(10, 30); this.ctx.fill();
                this.ctx.fillStyle = '#ccc'; this.ctx.strokeStyle = '#fff'; this.ctx.lineWidth=2;
                this.ctx.beginPath(); this.ctx.moveTo(0, -40); this.ctx.lineTo(10, 10); this.ctx.lineTo(30, 20);
                this.ctx.lineTo(10, 30); this.ctx.lineTo(0, 30); this.ctx.lineTo(-10, 30); this.ctx.lineTo(-30, 20); this.ctx.lineTo(-10, 10);
                this.ctx.closePath(); this.ctx.fill(); this.ctx.stroke();
                this.ctx.fillStyle = '#00d2ff';
                this.ctx.beginPath(); this.ctx.moveTo(0, -10); this.ctx.lineTo(3, 5); this.ctx.lineTo(-3, 5); this.ctx.fill();
                this.ctx.restore();
            }
            explode() {
                for(let i=0; i<60; i++) {
                    this.particles.push({
                        x: (Math.random()-0.5)*20, y: (Math.random()-0.5)*20, z: 100,
                        vx: (Math.random()-0.5)*15, vy: (Math.random()-0.5)*15, vz: Math.random()*5,
                        life: 1.0, color: Math.random()>0.5?'#ffaa00':'#ff004c'
                    });
                }
            }
        }

        class AudioSys {
            constructor() {
                this.ctx = new (window.AudioContext || window.webkitAudioContext)();
                this.master = this.ctx.createGain(); this.master.gain.value=0.3;
                this.master.connect(this.ctx.destination);
            }
            resume() { if(this.ctx.state==='suspended') this.ctx.resume(); }
            playTone(f, t, d) {
                this.resume();
                const o=this.ctx.createOscillator(); const g=this.ctx.createGain();
                o.type=t; o.frequency.value=f;
                g.gain.setValueAtTime(0.5, this.ctx.currentTime);
                g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime+d);
                o.connect(g); g.connect(this.master); o.start(); o.stop(this.ctx.currentTime+d);
            }
            tick() { this.playTone(800, 'square', 0.1); }
            start() {
                this.resume();
                const o=this.ctx.createOscillator(); const g=this.ctx.createGain();
                o.frequency.setValueAtTime(100, this.ctx.currentTime);
                o.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime+0.5);
                g.gain.linearRampToValueAtTime(0, this.ctx.currentTime+0.5);
                o.connect(g); g.connect(this.master); o.start(); o.stop(this.ctx.currentTime+0.5);
            }
            crash() {
                const bs=this.ctx.sampleRate*0.5; const b=this.ctx.createBuffer(1,bs,this.ctx.sampleRate);
                const d=b.getChannelData(0); for(let i=0;i<bs;i++) d[i]=Math.random()*2-1;
                const n=this.ctx.createBufferSource(); n.buffer=b;
                const f=this.ctx.createBiquadFilter(); f.type='lowpass'; f.frequency.value=800;
                const g=this.ctx.createGain(); g.gain.value=1; g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime+0.5);
                n.connect(f); f.connect(g); g.connect(this.master); n.start();
            }
        }

        /**
         * =========================================
         * WITHDRAWAL SYSTEM (NEW)
         * =========================================
         */
        class WithdrawSystem {
            constructor(game) {
                this.game = game;
                this.currency = 'TON';
                this.open = () => {
                    document.getElementById('withdrawModal').classList.add('open');
                    this.updateLabels();
                }
                this.close = () => document.getElementById('withdrawModal').classList.remove('open');
                
                this.setCur = (c) => {
                    this.currency = c;
                    document.getElementById('wd-ton').style.background = c==='TON'?'var(--primary)':'#333';
                    document.getElementById('wd-ton').style.color = c==='TON'?'white':'#aaa';
                    document.getElementById('wd-star').style.background = c==='STAR'?'var(--accent)':'#333';
                    document.getElementById('wd-star').style.color = c==='STAR'?'black':'#aaa';
                    this.updateLabels();
                };

                this.updateLabels = () => {
                    const lang = this.game.state.lang;
                    document.getElementById('withdrawTitle').innerText = lang==='ru'?"ВЫВОД СРЕДСТВ":"WITHDRAW";
                    document.getElementById('lbl-amount').innerText = lang==='ru'?"СУММА":"AMOUNT";
                    document.getElementById('lbl-addr').innerText = lang==='ru'?"АДРЕС КОШЕЛЬКА":"WALLET ADDRESS";
                    document.getElementById('btnConfirmWithdraw').innerText = lang==='ru'?"ПОДТВЕРДИТЬ":"CONFIRM";
                    document.getElementById('wdAmount').value = this.game.state.balances[this.currency].toFixed(2);
                }

                this.confirm = () => {
                    const amt = parseFloat(document.getElementById('wdAmount').value);
                    if(amt <= 0) return;
                    if(amt > this.game.state.balances[this.currency]) return;

                    // Simulate network
                    const btn = document.getElementById('btnConfirmWithdraw');
                    btn.innerText = "PROCESSING...";
                    btn.disabled = true;

                    setTimeout(() => {
                        this.game.state.balances[this.currency] -= amt;
                        this.game.updateUI();
                        this.close();
                        this.showToast();
                        btn.innerText = this.game.state.lang==='ru'?"ПОДТВЕРДИТЬ":"CONFIRM";
                        btn.disabled = false;
                    }, 2000);
                }

                this.showToast = () => {
                    const t = document.getElementById('toastMsg');
                    document.getElementById('toastText').innerText = this.game.state.lang==='ru'?"Успешно отправлено!":"Sent Successfully!";
                    t.classList.add('show');
                    setTimeout(() => t.classList.remove('show'), 3000);
                }
            }
        }

        class WalletSystem {
            constructor(game) {
                this.game = game;
                this.connected = false;
                this.toggle = () => {
                    if(this.connected) return;
                    const btn = document.getElementById('walletBtn');
                    btn.innerText = this.game.state.lang==='ru'?"ПОДКЛЮЧЕНИЕ...":"CONNECTING...";
                    setTimeout(() => {
                        this.connected = true;
                        btn.innerText = "EQD...8Xk";
                        btn.style.borderColor = "var(--success)";
                        btn.style.color = "var(--success)";
                        this.game.state.balances.TON += 5.00;
                        this.game.state.balances.STAR += 500.00;
                        this.game.updateUI();
                    }, 1500);
                }
            }
        }

        /**
         * =========================================
         * MAIN GAME LOGIC
         * =========================================
         */
        class CrashGame {
            constructor() {
                this.state = {
                    phase: 'IDLE',
                    multiplier: 1.00,
                    currency: 'TON',
                    balances: { TON: 0.00, STAR: 0.00 },
                    bet: 0,
                    hasBet: false,
                    crashPoint: 0,
                    lang: 'ru'
                };
                this.space = new SpaceEngine('gameCanvas');
                this.audio = new AudioSys();
                this.walletSys = new WalletSystem(this);
                
                // Expose for global buttons
                window.walletSys = this.walletSys;
                window.withdrawSys = new WithdrawSystem(this);

                this.els = {
                    mult: document.getElementById('multiplier'),
                    status: document.getElementById('statusText'),
                    btn: document.getElementById('actionBtn'),
                    bal: document.getElementById('balanceVal'),
                    inp: document.getElementById('betInput'),
                    hist: document.getElementById('historyBar'),
                    feed: document.getElementById('feedList'),
                    feedTitle: document.getElementById('feedTitle')
                };

                this.txt = {
                    ru: { next: "СЛЕД. РАУНД", bet: "СТАВКА", cash: "ЗАБРАТЬ", wait: "ОЖИДАНИЕ", crash: "КРАШ", live: "СТАВКИ" },
                    en: { next: "NEXT ROUND", bet: "BET", cash: "CASH OUT", wait: "WAITING", crash: "CRASHED", live: "LIVE" }
                };

                this.loop();
                this.startRound();
                this.feedBot();
            }

            toggleLang() {
                this.state.lang = this.state.lang==='ru'?'en':'ru';
                const t = this.txt[this.state.lang];
                this.els.feedTitle.innerText = t.live;
            }

            setCurr(c) {
                if(this.state.phase==='RUNNING' && this.state.hasBet) return;
                this.state.currency = c;
                document.getElementById('optTon').classList.toggle('active', c==='TON');
                document.getElementById('optStar').classList.toggle('active', c==='STAR');
                this.updateUI();
            }

            action() {
                if(this.state.phase==='COUNTDOWN') this.bet();
                else if(this.state.phase==='RUNNING' && this.state.hasBet) this.cashout();
            }

            bet() {
                const v = parseFloat(this.els.inp.value);
                if(v > this.state.balances[this.state.currency]) return;
                this.state.bet = v;
                this.state.hasBet = true;
                this.state.balances[this.state.currency] -= v;
                this.updateUI();
            }

            cashout() {
                const w = this.state.bet * this.state.multiplier;
                this.state.balances[this.state.currency] += w;
                this.state.hasBet = false;
                this.audio.playTone(1200, 'sine', 0.2);
                this.updateUI();
            }

            startRound() {
                this.state.phase='COUNTDOWN';
                this.state.multiplier=1.00;
                this.state.hasBet=false;
                this.els.btn.className='btn-main btn-waiting';
                this.els.btn.innerText = this.txt[this.state.lang].wait;
                
                let t=5.0;
                const iv=setInterval(()=>{
                    if(t<=0) { clearInterval(iv); this.run(); }
                    else {
                        this.els.status.innerText = this.txt[this.state.lang].next + " " + t.toFixed(1) + "s";
                        if(Math.floor(t*10)%10===0) this.audio.tick();
                    }
                    t-=0.1;
                },100);
            }

            run() {
                this.state.phase='RUNNING';
                this.state.startTime=Date.now();
                const e=Math.random();
                this.state.crashPoint = Math.max(1.0, 0.96/(1-e));
                if(this.state.crashPoint>100) this.state.crashPoint=100;

                this.els.btn.className = this.state.hasBet ? 'btn-main btn-cashout' : 'btn-main btn-waiting';
                this.els.btn.innerText = this.state.hasBet ? this.txt[this.state.lang].cash : this.txt[this.state.lang].wait;
                this.els.status.innerText = "LIVE";
                this.els.status.style.color = "var(--success)";
                this.audio.start();
            }

            loop() {
                requestAnimationFrame(()=>this.loop());
                if(this.state.phase==='RUNNING') {
                    const el=(Date.now()-this.state.startTime)/1000;
                    this.state.multiplier = 1.0 + Math.pow(el, 1.5) * 0.12;
                    if(this.state.multiplier>=this.state.crashPoint) this.crash();
                    else {
                        this.els.mult.innerText=this.state.multiplier.toFixed(2)+'x';
                        this.els.mult.style.color = this.state.multiplier>3?'#ffaa00':'white';
                    }
                }
                this.space.update(this.state.multiplier, this.state.phase==='CRASHED');
                this.space.draw(this.state.multiplier, this.state.phase==='CRASHED');
            }

            crash() {
                this.state.phase='CRASHED';
                this.state.multiplier=this.state.crashPoint;
                this.space.explode();
                this.audio.crash();
                this.els.mult.innerText=this.state.crashPoint.toFixed(2)+'x';
                this.els.mult.style.color="var(--danger)";
                this.els.status.innerText=this.txt[this.state.lang].crash;
                this.els.status.style.color="var(--danger)";
                this.els.btn.className='btn-main btn-crash';
                this.els.btn.innerText=this.txt[this.state.lang].crash;
                
                this.addHistory(this.state.crashPoint);
                if(this.state.hasBet) { this.state.hasBet=false; this.state.bet=0; }
                setTimeout(()=>this.startRound(), 3000);
            }

            addHistory(v) {
                const d=document.createElement('div');
                d.className='hist-pill '+(v<2?'h-low':(v<10?'h-med':'h-high'));
                d.innerText=v.toFixed(2)+'x';
                this.els.hist.prepend(d);
                if(this.els.hist.children.length>20) this.els.hist.lastChild.remove();
            }

            feedBot() {
                setInterval(()=>{
                    const names = ["User_9", "Alex", "Dmitry", "Crypto", "Whale"];
                    const n = names[Math.floor(Math.random()*names.length)];
                    const a = (Math.random()*100).toFixed(1);
                    const c = Math.random()>0.5?'TON':'★';
                    const d = document.createElement('div');
                    d.className='feed-item';
                    d.innerHTML = `<span>${n}</span> <span>${a} ${c}</span>`;
                    this.els.feed.prepend(d);
                    if(this.els.feed.children.length>15) this.els.feed.lastChild.remove();
                }, 2000);
            }

            updateUI() { this.els.bal.innerText=this.state.balances[this.state.currency].toFixed(2); }
        }

        const game = new CrashGame();
    </script>
</body>
</html>
