<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>SPACE CRASH - 3D Engine</title>
    <style>
        /* 
         * =========================================
         * UI OVERLAY (TRANSPARENT FOR 3D BACKGROUND)
         * =========================================
         */
        :root {
            --primary: #00d2ff;
            --accent: #ffaa00;
            --success: #00ff9d;
            --danger: #ff004c;
            --ui-bg: rgba(10, 15, 30, 0.6);
            --glass-border: rgba(255, 255, 255, 0.1);
        }

        * { box-sizing: border-box; user-select: none; -webkit-tap-highlight-color: transparent; outline: none; }
        
        body {
            margin: 0;
            padding: 0;
            background-color: #000000;
            color: white;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        /* FULL SCREEN CANVAS */
        #gameCanvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        /* UI LAYER (On top of canvas) */
        .ui-layer {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            height: 100%;
            pointer-events: none; /* Let clicks pass through to canvas if needed, but we need buttons */
        }

        .ui-element { pointer-events: auto; }

        /* HEADER */
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%);
        }

        .logo { font-weight: 900; font-size: 1.5rem; letter-spacing: 2px; text-shadow: 0 0 10px var(--primary); }
        .wallet-btn {
            background: var(--ui-bg);
            border: 1px solid var(--glass-border);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 0.9rem;
            cursor: pointer;
            backdrop-filter: blur(5px);
            display: flex; align-items: center; gap: 8px;
            transition: 0.3s;
        }
        .wallet-btn:hover { background: var(--primary); color: black; border-color: var(--primary); }
        .wallet-btn.connected { border-color: var(--success); color: var(--success); }

        /* CENTER HUD (Multiplier) */
        .hud-center {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-shadow: 0 4px 20px rgba(0,0,0,0.8);
        }

        .multiplier {
            font-size: 5rem;
            font-weight: 800;
            font-variant-numeric: tabular-nums;
            line-height: 1;
            background: -webkit-linear-gradient(#fff, #aaa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0 0 10px rgba(0,210,255,0.5));
        }

        .status-badge {
            margin-top: 15px;
            background: var(--ui-bg);
            border: 1px solid var(--glass-border);
            padding: 8px 20px;
            border-radius: 30px;
            font-size: 0.9rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-weight: 600;
            backdrop-filter: blur(5px);
        }

        /* CONTROLS FOOTER */
        .controls-deck {
            background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%);
            padding: 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            padding-bottom: 30px;
        }

        .input-group {
            background: var(--ui-bg);
            border: 1px solid var(--glass-border);
            border-radius: 12px;
            padding: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .currency-switch {
            display: flex; gap: 10px; margin-bottom: 10px;
        }
        .curr-opt { 
            padding: 5px 10px; border: 1px solid var(--glass-border); 
            border-radius: 6px; font-size: 0.8rem; cursor: pointer; opacity: 0.6; 
        }
        .curr-opt.active { opacity: 1; border-color: var(--primary); background: rgba(0,210,255,0.1); color: var(--primary); }

        input {
            background: transparent; border: none; color: white;
            font-size: 1.2rem; font-weight: bold; width: 100px; text-align: right;
        }

        .btn-main {
            grid-column: 1 / -1;
            height: 70px;
            border-radius: 16px;
            border: none;
            font-size: 1.5rem;
            font-weight: 800;
            text-transform: uppercase;
            cursor: pointer;
            transition: transform 0.1s;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .btn-bet { background: var(--primary); color: #000; }
        .btn-cashout { background: var(--success); color: #000; animation: pulse 1s infinite; }
        .btn-waiting { background: #333; color: #666; cursor: not-allowed; }
        .btn-crash { background: var(--danger); color: white; animation: shake 0.5s; }

        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(0,255,157,0.7); } 70% { box-shadow: 0 0 0 15px rgba(0,255,157,0); } 100% { box-shadow: 0 0 0 0 rgba(0,255,157,0); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }

        /* Loader */
        .loader-spin { animation: spin 1s linear infinite; display: none; width: 14px; height: 14px; border: 2px solid #fff; border-top-color: transparent; border-radius: 50%; }
        @keyframes spin { to { transform: rotate(360deg); } }

    </style>
</head>
<body>

    <!-- CANVAS (BACKGROUND) -->
    <canvas id="gameCanvas"></canvas>

    <!-- UI LAYER -->
    <div class="ui-layer">
        <header class="ui-element">
            <div class="logo">STAR<span style="color:var(--primary)">CRASH</span></div>
            <button class="wallet-btn" id="btnWallet" onclick="wallet.toggle()">
                <div class="loader-spin" id="walletLoader"></div>
                <span id="walletText">CONNECT WALLET</span>
            </button>
        </header>

        <div class="hud-center">
            <div class="multiplier" id="multiplier">1.00x</div>
            <div class="status-badge" id="statusText">PREPARING ENGINES</div>
        </div>

        <div class="controls-deck ui-element">
            <div style="display:flex; flex-direction:column; gap:10px;">
                <div class="currency-switch">
                    <div class="curr-opt active ton" id="optTon" onclick="game.setCurr('TON')">TON</div>
                    <div class="curr-opt star" id="optStar" onclick="game.setCurr('STAR')">STARS</div>
                </div>
                <div class="input-group">
                    <input type="number" id="betInput" value="10">
                    <span style="font-size:0.8rem; color:#aaa;">MAX</span>
                </div>
            </div>
            <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; gap:5px;">
                <span style="font-size:0.8rem; color:#aaa;">BALANCE</span>
                <span id="balanceVal" style="font-size:1.2rem; font-weight:bold;">1000.00</span>
            </div>
            
            <button class="btn-main btn-waiting" id="actionBtn" onclick="game.action()">WAITING</button>
        </div>
    </div>

    <script>
        /**
         * =========================================
         * 3D SPACE ENGINE (Star Wars Style)
         * =========================================
         */
        class SpaceEngine {
            constructor(canvasId) {
                this.canvas = document.getElementById(canvasId);
                this.ctx = this.canvas.getContext('2d');
                this.stars = [];
                this.numStars = 400;
                this.ship = { x: 0, y: 0, z: 0, bank: 0 };
                this.speed = 0;
                this.width = 0;
                this.height = 0;
                this.particles = []; // Explosion particles
                this.fov = 300; // Field of view
                
                this.resize();
                window.addEventListener('resize', () => this.resize());
                this.initStars();
            }

            resize() {
                this.width = this.canvas.width = window.innerWidth;
                this.height = this.canvas.height = window.innerHeight;
                this.centerX = this.width / 2;
                this.centerY = this.height / 2;
            }

            initStars() {
                for(let i=0; i<this.numStars; i++) {
                    this.stars.push({
                        x: (Math.random() - 0.5) * 2000,
                        y: (Math.random() - 0.5) * 2000,
                        z: Math.random() * 2000,
                        color: Math.random() > 0.9 ? '#aaddff' : '#ffffff' // Some blue stars
                    });
                }
            }

            update(gameSpeed, isCrashed) {
                // Base speed depends on game multiplier
                this.speed = gameSpeed * 10; 

                // Move Stars
                this.stars.forEach(star => {
                    star.z -= this.speed;
                    
                    // Reset star if it passes camera
                    if(star.z <= 1) {
                        star.z = 2000;
                        star.x = (Math.random() - 0.5) * 2000;
                        star.y = (Math.random() - 0.5) * 2000;
                    }
                });

                // Ship Banking Animation (Sine wave based on time)
                if(!isCrashed) {
                    this.ship.bank = Math.sin(Date.now() / 500) * 0.2;
                }

                // Particles (Explosion)
                for(let i=this.particles.length-1; i>=0; i--) {
                    let p = this.particles[i];
                    p.x += p.vx;
                    p.y += p.vy;
                    p.z += p.vz; // Fly away in 3D
                    p.life -= 0.02;
                    if(p.life <= 0) this.particles.splice(i, 1);
                }
            }

            draw(multiplier, isCrashed) {
                // Clear with fade for trails? No, clean clear for crisp graphics
                this.ctx.fillStyle = '#050508'; 
                this.ctx.fillRect(0, 0, this.width, this.height);

                // 1. Draw Stars
                this.stars.forEach(star => {
                    // Projection: x' = x / z * FOV
                    const scale = this.fov / star.z;
                    const x2d = star.x * scale + this.centerX;
                    const y2d = star.y * scale + this.centerY;

                    // Draw star
                    const size = Math.max(0.5, (1 - star.z / 2000) * 3);
                    
                    this.ctx.fillStyle = star.color;
                    
                    // Warp Effect: Stretch stars if moving fast
                    if(multiplier > 2.0) {
                        const prevScale = this.fov / (star.z + this.speed * 2);
                        const prevX = star.x * prevScale + this.centerX;
                        const prevY = star.y * prevScale + this.centerY;
                        
                        this.ctx.beginPath();
                        this.ctx.moveTo(prevX, prevY);
                        this.ctx.lineTo(x2d, y2d);
                        this.ctx.strokeStyle = star.color;
                        this.ctx.lineWidth = size;
                        this.ctx.stroke();
                    } else {
                        this.ctx.beginPath();
                        this.ctx.arc(x2d, y2d, size, 0, Math.PI*2);
                        this.ctx.fill();
                    }
                });

                // 2. Draw Ship (If not crashed)
                if(!isCrashed) {
                    this.drawShip(this.centerX, this.centerY + 100, this.ship.bank, multiplier);
                } else {
                    // Draw explosion particles instead of ship
                    this.particles.forEach(p => {
                        const scale = this.fov / p.z;
                        const x2d = p.x * scale + this.centerX;
                        const y2d = p.y * scale + this.centerY;
                        
                        this.ctx.globalAlpha = p.life;
                        this.ctx.fillStyle = p.color;
                        this.ctx.beginPath();
                        this.ctx.arc(x2d, y2d, 5, 0, Math.PI*2);
                        this.ctx.fill();
                    });
                    this.ctx.globalAlpha = 1;
                }
            }

            drawShip(x, y, bankAngle, mult) {
                this.ctx.save();
                this.ctx.translate(x, y);
                this.ctx.rotate(bankAngle); // Bank (tilt)

                // Dynamic engine flame based on multiplier
                const flameLen = 20 + (mult * 5);
                
                // Thrusters
                this.ctx.fillStyle = `rgba(0, 210, 255, ${0.5 + Math.random()*0.5})`;
                this.ctx.beginPath();
                this.ctx.moveTo(-10, 30);
                this.ctx.lineTo(0, 30 + flameLen + Math.random()*10);
                this.ctx.lineTo(10, 30);
                this.ctx.fill();

                // Body (Simple Vector Fighter)
                this.ctx.fillStyle = '#ddd';
                this.ctx.strokeStyle = '#fff';
                this.ctx.lineWidth = 2;

                this.ctx.beginPath();
                this.ctx.moveTo(0, -40); // Nose
                this.ctx.lineTo(10, 10); // Wing Right inner
                this.ctx.lineTo(30, 20); // Wing Right tip
                this.ctx.lineTo(10, 30); // Engine Right
                this.ctx.lineTo(0, 30); // Tail center
                this.ctx.lineTo(-10, 30); // Engine Left
                this.ctx.lineTo(-30, 20); // Wing Left tip
                this.ctx.lineTo(-10, 10); // Wing Left inner
                this.ctx.closePath();
                
                this.ctx.fill();
                this.ctx.stroke();

                // Cockpit
                this.ctx.fillStyle = '#00d2ff';
                this.ctx.beginPath();
                this.ctx.moveTo(0, -10);
                this.ctx.lineTo(3, 5);
                this.ctx.lineTo(-3, 5);
                this.ctx.fill();

                this.ctx.restore();
            }

            explode() {
                // Create 3D explosion particles
                for(let i=0; i<50; i++) {
                    this.particles.push({
                        x: (Math.random()-0.5) * 20,
                        y: (Math.random()-0.5) * 20,
                        z: (Math.random()-0.5) * 20 + 100, // Near ship pos
                        vx: (Math.random()-0.5) * 10,
                        vy: (Math.random()-0.5) * 10,
                        vz: Math.random() * 5, // Fly towards screen
                        life: 1.0,
                        color: Math.random() > 0.5 ? '#ffaa00' : '#ff004c'
                    });
                }
            }
        }

        /**
         * =========================================
         * AUDIO ENGINE (FM Synthesis)
         * =========================================
         */
        class AudioEngine {
            constructor() {
                this.ctx = new (window.AudioContext || window.webkitAudioContext)();
                this.master = this.ctx.createGain();
                this.master.gain.value = 0.3;
                this.master.connect(this.ctx.destination);
            }
            resume() { if(this.ctx.state === 'suspended') this.ctx.resume(); }
            
            playTone(freq, type, duration) {
                this.resume();
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = type;
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
                osc.connect(gain);
                gain.connect(this.master);
                osc.start();
                osc.stop(this.ctx.currentTime + duration);
            }

            playCountdown() { this.playTone(800, 'square', 0.1); }
            playStart() {
                this.resume();
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.frequency.setValueAtTime(100, this.ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 1);
                gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1);
                osc.connect(gain);
                gain.connect(this.master);
                osc.start();
                osc.stop(this.ctx.currentTime + 1);
            }
            playCrash() {
                // White Noise for explosion
                const bufferSize = this.ctx.sampleRate * 0.5;
                const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
                const data = buffer.getChannelData(0);
                for(let i=0; i<bufferSize; i++) data[i] = Math.random()*2 - 1;
                const noise = this.ctx.createBufferSource();
                noise.buffer = buffer;
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.value = 1000;
                const gain = this.ctx.createGain();
                gain.gain.setValueAtTime(1, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.5);
                noise.connect(filter);
                filter.connect(gain);
                gain.connect(this.master);
                noise.start();
            }
        }

        /**
         * =========================================
         * GAME LOGIC
         * =========================================
         */
        class CrashGame {
            constructor() {
                this.state = {
                    phase: 'IDLE', // IDLE, COUNTDOWN, RUNNING, CRASHED
                    multiplier: 1.00,
                    crashPoint: 0,
                    currency: 'TON',
                    balances: { TON: 1000.00, STAR: 5000.00 },
                    bet: 0,
                    hasBet: false
                };

                this.space = new SpaceEngine('gameCanvas');
                this.audio = new AudioEngine();
                
                // Wallet Sim
                this.walletConnected = false;

                this.els = {
                    mult: document.getElementById('multiplier'),
                    status: document.getElementById('statusText'),
                    btn: document.getElementById('actionBtn'),
                    bal: document.getElementById('balanceVal'),
                    inp: document.getElementById('betInput'),
                    wTxt: document.getElementById('walletText'),
                    wLoad: document.getElementById('walletLoader'),
                    wBtn: document.getElementById('btnWallet')
                };

                this.loop();
                this.startRound();
            }

            toggleWallet() {
                if(this.walletConnected) return;
                this.els.wLoad.style.display = 'block';
                this.els.wTxt.style.opacity = '0.5';
                setTimeout(() => {
                    this.walletConnected = true;
                    this.els.wLoad.style.display = 'none';
                    this.els.wTxt.innerText = "EQD...4X9";
                    this.els.wBtn.classList.add('connected');
                    this.els.wTxt.style.opacity = '1';
                    this.state.balances.TON += 500; // Bonus
                    this.updateUI();
                }, 1000);
            }

            setCurr(c) {
                if(this.state.phase === 'RUNNING') return;
                this.state.currency = c;
                document.getElementById('optTon').classList.toggle('active', c==='TON');
                document.getElementById('optStar').classList.toggle('active', c==='STAR');
                this.updateUI();
            }

            action() {
                if(this.state.phase === 'COUNTDOWN') this.bet();
                if(this.state.phase === 'RUNNING' && this.state.hasBet) this.cashout();
            }

            bet() {
                const val = parseFloat(this.els.inp.value);
                if(val > this.state.balances[this.state.currency]) return;
                
                this.state.bet = val;
                this.state.hasBet = true;
                this.state.balances[this.state.currency] -= val;
                this.els.btn.innerText = "BET PLACED";
                this.updateUI();
            }

            cashout() {
                const win = this.state.bet * this.state.multiplier;
                this.state.balances[this.state.currency] += win;
                this.state.hasBet = false;
                this.els.btn.className = 'btn-main btn-waiting';
                this.els.btn.innerText = "WAITING";
                this.audio.playTone(1200, 'sine', 0.2); // Ping sound
                this.updateUI();
            }

            startRound() {
                this.state.phase = 'COUNTDOWN';
                this.state.multiplier = 1.00;
                this.state.hasBet = false;
                
                let t = 5.0;
                const iv = setInterval(() => {
                    if(this.state.phase !== 'COUNTDOWN') { clearInterval(iv); return; }
                    this.els.status.innerText = "T-MINUS " + t.toFixed(1) + "s";
                    this.els.btn.className = 'btn-main btn-waiting';
                    this.els.btn.innerText = "PLACE BET";
                    if(t > 3 && t < 3.1) this.audio.playCountdown();
                    if(t <= 0) {
                        clearInterval(iv);
                        this.runGame();
                    }
                    t -= 0.1;
                }, 100);
            }

            runGame() {
                this.state.phase = 'RUNNING';
                this.state.startTime = Date.now();
                
                // Logic
                const e = Math.random();
                this.state.crashPoint = Math.max(1.0, 0.96 / (1 - e));
                if(this.state.crashPoint > 100) this.state.crashPoint = 100;

                this.els.status.innerText = "HYPERSPACE ENGAGED";
                this.els.btn.innerText = this.state.hasBet ? "CASH OUT" : "WAITING";
                this.els.btn.className = this.state.hasBet ? "btn-main btn-cashout" : "btn-main btn-waiting";
                
                this.audio.playStart();
            }

            loop() {
                requestAnimationFrame(() => this.loop());

                // Logic
                if(this.state.phase === 'RUNNING') {
                    const elapsed = (Date.now() - this.state.startTime) / 1000;
                    this.state.multiplier = 1.0 + Math.pow(elapsed, 1.5) * 0.12;
                    
                    if(this.state.multiplier >= this.state.crashPoint) {
                        this.crash();
                    } else {
                        this.els.mult.innerText = this.state.multiplier.toFixed(2) + "x";
                        // Color shift based on speed
                        if(this.state.multiplier > 3) this.els.mult.style.color = "#ffaa00";
                        else this.els.mult.style.color = "white";
                    }
                }

                // Render 3D
                // Speed passed to space engine controls star warp speed
                let renderSpeed = 0;
                if(this.state.phase === 'RUNNING') renderSpeed = this.state.multiplier;
                
                this.space.update(renderSpeed, this.state.phase === 'CRASHED');
                this.space.draw(this.state.multiplier, this.state.phase === 'CRASHED');
            }

            crash() {
                this.state.phase = 'CRASHED';
                this.space.explode(); // 3D Explosion
                this.audio.playCrash();
                
                this.els.mult.innerText = this.state.crashPoint.toFixed(2) + "x";
                this.els.mult.style.color = "var(--danger)";
                this.els.status.innerText = "SHIP DESTROYED";
                this.els.status.style.color = "var(--danger)";
                this.els.btn.className = "btn-main btn-crash";
                this.els.btn.innerText = "CRASHED";

                if(this.state.hasBet) {
                    this.state.hasBet = false;
                    this.state.bet = 0;
                }

                setTimeout(() => {
                    this.els.status.style.color = "white";
                    this.startRound();
                }, 3000);
            }

            updateUI() {
                this.els.bal.innerText = this.state.balances[this.state.currency].toFixed(2);
            }
        }

        // Init
        const game = new CrashGame();
    </script>
</body>
</html>
