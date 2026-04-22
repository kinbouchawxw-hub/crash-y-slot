<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>CRASH LEGENDARY</title>
    
    <!-- =========================================
         SDK & LIBRARIES (Official)
         ========================================= -->
    <!-- 1. Telegram Web App SDK -->
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    
    <!-- 2. TonConnect SDK -->
    <script src="https://unpkg.com/@tonconnect/sdk@latest/dist/tonconnect-sdk.min.js"></script>
    
    <!-- 3. Font Awesome (Icons) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- =========================================
         CONFIGURACIÓN BÁSICA & META
         ========================================= -->
    <style>
        /* CSS Reset Inicial para asegurar que ocupe toda la pantalla en Telegram */
        * { box-sizing: border-box; user-select: none; -webkit-tap-highlight-color: transparent; outline: none; }
        body, html {
            margin: 0; padding: 0; width: 100%; height: 100%;
            background-color: #000000; /* Fondo negro profundo */
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
        }
        
        /* Capas de la aplicación */
        #app-container {
            position: relative;
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>

    <!-- 
       ================================================================
       ESTRUCTURA PRINCIPAL
       ================================================================ 
    -->
    <div id="app-container">
        <!-- 1. Capa de Gráficos (Canvas 3D) -->
        <canvas id="game-canvas"></canvas>

        <!-- 2. Capa de Interfaz de Usuario (UI) -->
        <div id="ui-layer">
            
            <!-- A. Pantalla de Inicio (Play Button) -->
            <div id="start-screen" style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; background:rgba(0,0,0,0.6); backdrop-filter:blur(10px); z-index:100;">
                <h1 style="font-size:3.5rem; font-weight:900; color:white; margin:0; text-shadow:0 0 30px #0098ea; letter-spacing:4px;">CRASH</h1>
                <button id="btn-start" style="margin-top:40px; padding:20px 60px; font-size:1.2rem; font-weight:800; background:#0098ea; color:white; border:none; border-radius:50px; box-shadow:0 0 30px rgba(0,152,234,0.4); cursor:pointer; text-transform:uppercase;">JUGAR</button>
            </div>

            <!-- B. Interfaz del Juego (Oculta al inicio) -->
            <div id="game-ui" style="display:none; height:100%; flex-direction:column; position:relative;">
                
                <!-- Cabecera Superior -->
                <header style="padding:15px 20px; display:flex; justify-content:space-between; align-items:center; background:linear-gradient(180deg, rgba(0,0,0,0.8), transparent);">
                    <div style="font-weight:900; font-size:1.2rem; letter-spacing:2px; color:white;">CRASH<span style="color:#0098ea;">.PRO</span></div>
                    
                    <!-- Botones de Wallet -->
                    <div style="display:flex; gap:10px;">
                        <div id="btn-wallet" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.1); padding:8px 15px; border-radius:20px; color:white; font-size:0.8rem; font-weight:700; cursor:pointer; backdrop-filter:blur(5px); display:flex; align-items:center; gap:5px;">
                            <i class="fa-solid fa-wallet"></i> <span id="wallet-text">CONECTAR</span>
                        </div>
                    </div>
                </header>

                <!-- Centro: Multiplicador -->
                <div style="flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center; position:relative;">
                    <div id="multiplier-display" style="font-size:5rem; font-weight:800; color:white; text-shadow:0 10px 40px rgba(0,0,0,0.8); font-variant-numeric: tabular-nums; transition:color 0.2s;">1.00x</div>
                    <div id="status-display" style="margin-top:20px; padding:8px 20px; background:rgba(0,0,0,0.5); border-radius:20px; font-size:0.9rem; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:rgba(255,255,255,0.6);">Esperando...</div>
                </div>

                <!-- Panel de Control (Abajo) -->
                <footer style="background:linear-gradient(0deg, #0f1115 0%, transparent 100%); padding:20px; padding-bottom:40px; display:flex; flex-direction:column; gap:15px;">
                    
                    <!-- Fila de Saldo y Apuesta -->
                    <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                        <div>
                            <div style="font-size:0.7rem; color:#888; font-weight:700; text-transform:uppercase;">Balance</div>
                            <div id="balance-val" style="font-size:1.8rem; font-weight:800; color:white;">0.00 <span style="color:#0098ea; font-size:1rem;">TON</span></div>
                        </div>
                        <div style="text-align:right;">
                            <div style="font-size:0.7rem; color:#888; font-weight:700; text-transform:uppercase;">Apuesta</div>
                            <input type="number" id="bet-input" value="10" style="background:transparent; border:none; color:white; font-size:1.5rem; font-weight:800; text-align:right; width:100px;">
                        </div>
                    </div>

                    <!-- Botón de Acción Principal -->
                    <button id="action-btn" style="width:100%; height:70px; border-radius:15px; border:none; background:#2b3139; color:#5c6370; font-size:1.4rem; font-weight:800; text-transform:uppercase; cursor:not-allowed; box-shadow:0 10px 20px rgba(0,0,0,0.3); transition:0.2s;">
                        ESPERANDO
                    </button>
                </footer>

                <!-- Barra Lateral de Historial (Izquierda) -->
                <div id="history-sidebar" style="position:absolute; top:80px; left:20px; display:flex; flex-direction:column; gap:5px;">
                    <!-- Se llena con JS -->
                </div>

            </div>
        </div>
    </div>

    <!-- 
       ================================================================
       FIN DE PARTE 1: ESTRUCTURA
       PEGA LA PARTE 2 (CSS) A CONTINUACIÓN
       ================================================================
    -->

</body>
</html>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>CRASH LEGENDARY - MULTIPLAYER</title>
    
    <!-- =========================================
         SDKS OFICIALES
         ========================================= -->
    <!-- 1. Telegram WebApp SDK -->
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    
    <!-- 2. TonConnect SDK -->
    <script src="https://unpkg.com/@tonconnect/sdk@latest/dist/tonconnect-sdk.min.js"></script>
    
    <!-- 3. Font Awesome (Iconos Pro) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- =========================================
         SISTEMA DE DISEÑO (CSS)
         ========================================= -->
    <style>
        /* Variables de Color - Estilo Casino Oscuro */
        :root {
            --brand-primary: #0098ea;   /* TON Blue */
            --brand-accent: #ffd700;    /* Gold */
            --brand-win: #00ff9d;      /* Green */
            --brand-loss: #ff004c;     /* Red */
            --bg-dark: #09090b;         /* Deep Black */
            --glass-bg: rgba(20, 22, 27, 0.7);
            --glass-border: rgba(255, 255, 255, 0.08);
            --font-main: 'Inter', 'Segoe UI', sans-serif;
        }

        /* Reset Base */
        * { box-sizing: border-box; user-select: none; -webkit-tap-highlight-color: transparent; outline: none; }
        
        body, html {
            margin: 0; padding: 0; width: 100%; height: 100%;
            background-color: var(--bg-dark);
            font-family: var(--font-main);
            color: #ffffff;
            overflow: hidden;
            -webkit-font-smoothing: antialiased;
        }

        /* Contenedor Principal */
        #app {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        /* =========================================
         * CAPAS (LAYERS)
         * ========================================= */
        
        /* Capa 1: Canvas 3D (Fondo) */
        #render-layer {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: 1;
            pointer-events: none;
        }

        /* Capa 2: Interfaz de Usuario (UI) */
        #ui-layer {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            height: 100%;
            pointer-events: none; /* Dejar pasar clics si es necesario */
        }

        .pointer-events-auto { pointer-events: auto; }

        /* =========================================
         * PANTALLA DE INICIO (PLAY)
         * ========================================= */
        #start-screen {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(8px);
            z-index: 50;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: opacity 0.5s ease;
        }
        #start-screen.hidden {
            opacity: 0;
            pointer-events: none;
        }

        .logo-text {
            font-size: 3rem;
            font-weight: 900;
            letter-spacing: 4px;
            text-transform: uppercase;
            margin-bottom: 40px;
            text-shadow: 0 0 30px var(--brand-primary);
        }
        .logo-text span { color: var(--brand-primary); }

        .btn-start {
            background: linear-gradient(135deg, var(--brand-primary), #0055ff);
            color: white;
            border: none;
            padding: 18px 50px;
            border-radius: 30px;
            font-size: 1.2rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(0, 152, 234, 0.4);
            transition: transform 0.2s;
        }
        .btn-start:active { transform: scale(0.95); }

        /* =========================================
         * UI DEL JUEGO (MAIN GAME UI)
         * ========================================= */
        #game-interface {
            display: none;
            height: 100%;
            flex-direction: column;
        }

        /* HEADER */
        .game-header {
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(180deg, rgba(0,0,0,0.8), transparent);
        }

        .header-brand { font-weight: 900; letter-spacing: 1px; font-size: 1.1rem; }
        .header-controls { display: flex; gap: 10px; }

        .btn-icon {
            width: 40px; height: 40px;
            border-radius: 12px;
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 1rem;
            cursor: pointer;
            backdrop-filter: blur(10px);
        }

        /* LISTA DE JUGADORES (MULTIPLAYER) */
        .player-list-sidebar {
            position: absolute;
            top: 70px; right: 20px;
            width: 140px;
            max-height: 250px;
            overflow-y: auto;
            background: rgba(0,0,0,0.4);
            border-radius: 10px;
            padding: 10px;
            border: 1px solid var(--glass-border);
            mask-image: linear-gradient(to bottom, black, transparent);
        }

        .player-item {
            font-size: 0.75rem;
            margin-bottom: 6px;
            display: flex;
            justify-content: space-between;
            color: #ccc;
        }
        .player-name { font-weight: 600; }
        .player-bet { color: var(--brand-accent); }

        /* AREA CENTRAL (HUD) */
        .game-hud {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .multiplier-display {
            font-size: 5rem;
            font-weight: 800;
            text-shadow: 0 5px 20px rgba(0,0,0,0.5);
            font-variant-numeric: tabular-nums;
        }

        .status-indicator {
            margin-top: 15px;
            padding: 6px 16px;
            border-radius: 20px;
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            backdrop-filter: blur(5px);
        }

        /* PANEL DE CONTROL (ABAJO) */
        .controls-panel {
            padding: 20px;
            background: linear-gradient(0deg, rgba(10,12,16,0.95), transparent);
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }

        .balance-row {
            display: flex; justify-content: space-between;
            margin-bottom: 15px;
            align-items: flex-end;
        }
        .label-sm { font-size: 0.7rem; color: #888; font-weight: 700; text-transform: uppercase; }
        .value-lg { font-size: 1.6rem; font-weight: 800; }

        .input-group {
            background: rgba(0,0,0,0.3);
            border: 1px solid var(--glass-border);
            border-radius: 12px;
            padding: 12px;
            display: flex; justify-content: space-between; align-items: center;
            margin-bottom: 15px;
        }
        .game-input {
            background: transparent; border: none; color: white;
            font-size: 1.2rem; font-weight: 700; width: 100%; text-align: right;
        }

        .btn-action {
            width: 100%;
            height: 65px;
            border-radius: 12px;
            border: none;
            font-size: 1.3rem;
            font-weight: 800;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
            transition: 0.2s;
        }

        /* Estados del Botón */
        .state-idle { background: #2b3139; color: #5c6370; cursor: not-allowed; }
        .state-bet { background: var(--brand-primary); color: white; }
        .state-cashout { background: var(--brand-win); color: black; animation: pulse-green 1s infinite; }
        .state-crashed { background: var(--brand-loss); color: white; }

        @keyframes pulse-green {
            0% { box-shadow: 0 0 0 0 rgba(0, 255, 157, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(0, 255, 157, 0); }
            100% { box-shadow: 0 0 0 0 rgba(0, 255, 157, 0); }
        }

    </style>
</head>
<body>

    <!-- CAPA 1: CANVAS (FONDO) -->
    <canvas id="render-layer"></canvas>

    <!-- CAPA 2: UI -->
    <div id="ui-layer">
        
        <!-- PANTALLA DE INICIO -->
        <div id="start-screen" class="pointer-events-auto">
            <div class="logo-text">CRASH<span>.CASINO</span></div>
            <button class="btn-start" id="btn-init">ENTRAR AL JUEGO</button>
        </div>

        <!-- INTERFAZ DE JUEGO -->
        <div id="game-interface">
            
            <!-- CABECERA -->
            <header class="game-header pointer-events-auto">
                <div class="header-brand">CRASH <span style="color:var(--brand-primary)">PRO</span></div>
                <div class="header-controls">
                    <!-- Conectar Wallet -->
                    <div class="btn-icon" id="btn-wallet" title="Conectar Wallet">
                        <i class="fa-solid fa-wallet"></i>
                    </div>
                </div>
            </header>

            <!-- LISTA DE JUGADORES (Simulada) -->
            <div class="player-list-sidebar pointer-events-auto" id="player-list">
                <div style="font-size:0.6rem; color:#666; text-align:center; margin-bottom:5px; text-transform:uppercase;">Jugadores en Sala</div>
                <!-- Se llenará con JS -->
            </div>

            <!-- CENTRO -->
            <div class="game-hud">
                <div class="multiplier-display" id="multiplier-val">1.00x</div>
                <div class="status-indicator" id="status-val">ESPERANDO</div>
            </div>

            <!-- CONTROLES -->
            <footer class="controls-panel pointer-events-auto">
                <div class="balance-row">
                    <div>
                        <div class="label-sm">Tu Balance</div>
                        <div class="value-lg" id="balance-val">0.00 TON</div>
                    </div>
                    <div style="text-align:right;">
                        <div class="label-sm">Apuesta</div>
                        <div style="font-size:1.1rem; font-weight:700;">Auto 2.0x</div>
                    </div>
                </div>

                <div class="input-group">
                    <span class="label-sm">CANTIDAD</span>
                    <input type="number" class="game-input" id="bet-amount" value="5">
                </div>

                <button class="btn-action state-idle" id="main-action">ESPERANDO RONDA</button>
            </footer>

        </div>
    </div>

    <!-- 
       ================================================================
       FIN DE PARTE 1
       COPIA LA PARTE 2 A CONTINUACIÓN
       ================================================================
    -->

</body>
</html>
    <!-- 
       ================================================================
       PARTE 2: MOTORES DE LÓGICA Y TELEGRAM SDK
       ================================================================
    -->

    <script>
        /**
         * ==============================================================================
         * 1. CONFIGURACIÓN DE TELEGRAM WEBAPP
         * Maneja el botón "Atrás", pantalla completa y temas.
         * ==============================================================================
         */
        const tgApp = window.Telegram.WebApp;
        
        function initTelegram() {
            try {
                // Preparar la app
                tgApp.ready();
                tgApp.expand(); // Abrir en pantalla completa

                // Configurar botón de atrás
                tgApp.BackButton.show();
                tgApp.BackButton.onClick(() => {
                    // Si estamos jugando, preguntar (opcional), o salir directamente
                    // Aquí simplemente cerramos para simplificar
                    tgApp.close();
                });

                // Color de cabecera (Oscuro estilo Casino)
                tgApp.setHeaderColor('#09090b');
                tgApp.setBackgroundColor('#09090b');

                console.log("Telegram App Inicializada");
            } catch (e) {
                console.warn("No se ejecuta en Telegram (Modo Navegador)", e);
            }
        }

        /**
         * ==============================================================================
         * 2. SISTEMA DE AUDIO (Sintetizador Web Audio API)
         * Sonidos profesionales sin archivos mp3 externos.
         * ==============================================================================
         */
        class SoundEngine {
            constructor() {
                this.ctx = new (window.AudioContext || window.webkitAudioContext)();
                this.masterGain = this.ctx.createGain();
                this.masterGain.gain.value = 0.3; // Volumen global
                this.masterGain.connect(this.ctx.destination);
            }

            // Necesario reanudar el contexto tras interacción del usuario
            resume() {
                if (this.ctx.state === 'suspended') this.ctx.resume();
            }

            // Generar un tono simple
            playTone(freq, type = 'sine', duration = 0.1) {
                if(!this.ctx) return;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                
                osc.type = type;
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                
                // Envolvente de sonido (Attack/Decay)
                gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
                
                osc.connect(gain);
                gain.connect(this.masterGain);
                
                osc.start();
                osc.stop(this.ctx.currentTime + duration);
            }

            // Sonido de Cuenta Atrás (Beep corto)
            playTick() { this.playTone(800, 'square', 0.05); }

            // Sonido de Victoria (Acorde Mayor)
            playWin() {
                const notes = [523.25, 659.25, 783.99, 1046.50]; // Do Mi Sol Do
                notes.forEach((note, i) => {
                    setTimeout(() => this.playTone(note, 'sine', 0.3), i * 80);
                });
            }

            // Sonido de Crash (Ruido Blanco filtrado)
            playCrash() {
                if(!this.ctx) return;
                const bufferSize = this.ctx.sampleRate * 0.5;
                const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
                const data = buffer.getChannelData(0);
                
                // Generar ruido blanco
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = Math.random() * 2 - 1;
                }

                const noise = this.ctx.createBufferSource();
                noise.buffer = buffer;
                
                // Filtro paso-bajo para que suene grave/explosivo
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(1000, this.ctx.currentTime);
                filter.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.3);
                
                const gain = this.ctx.createGain();
                gain.gain.setValueAtTime(1, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);

                noise.connect(filter);
                filter.connect(gain);
                gain.connect(this.masterGain);
                noise.start();
            }
        }

        /**
         * ==============================================================================
         * 3. UTILIDADES MATEMÁTICAS
         * ==============================================================================
         */
        const Utils = {
            random: (min, max) => Math.random() * (max - min) + min,
            randomInt: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
            formatMoney: (num) => num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        };

        /**
         * ==============================================================================
         * 4. SIMULADOR DE MULTIPLAYER (Sala de Juego)
         * Genera "jugadores" falsos para dar sensación de casino vivo.
         * ==============================================================================
         */
        class PlayerBotSystem {
            constructor(elementId) {
                this.container = document.getElementById(elementId);
                this.names = ["CryptoKing", "Alex", "Dmitry", "Whale_01", "Satoshi", "Ninja", "ProGamer", "TraderX"];
                this.isPlaying = false;
            }

            start() {
                this.isPlaying = true;
                this.simulateActivity();
            }

            stop() {
                this.isPlaying = false;
            }

            simulateActivity() {
                // Añadir un jugador nuevo aleatoriamente
                const addPlayer = () => {
                    if (!this.isPlaying) return;
                    
                    const name = this.names[Math.floor(Math.random() * this.names.length)];
                    const bet = Utils.random(10, 500).toFixed(1);
                    
                    const el = document.createElement('div');
                    el.className = 'player-item';
                    el.innerHTML = `<span class="player-name">${name}</span> <span class="player-bet">${bet}</span>`;
                    
                    // Animación de entrada
                    el.style.opacity = '0';
                    this.container.prepend(el);
                    
                    // Trigger reflow
                    void el.offsetWidth; 
                    el.style.transition = 'opacity 0.5s';
                    el.style.opacity = '1';

                    // Mantener solo los últimos 10 jugadores
                    if (this.container.children.length > 10) {
                        this.container.lastElementChild.remove();
                    }

                    // Siguiente jugador en 2 a 6 segundos
                    setTimeout(addPlayer, Utils.random(2000, 6000));
                };

                // Iniciar el ciclo
                addPlayer();
            }
        }

        /**
         * ==============================================================================
         * 5. CONTROLADOR DEL JUEGO (CORE LOGIC)
         * Maneja los estados, apuestas y el algoritmo de Crash.
         * ==============================================================================
         */
        class CrashGame {
            constructor() {
                // -- ESTADO INICIAL --
                this.state = {
                    phase: 'INTRO', // INTRO, COUNTDOWN, RUNNING, CRASHED
                    multiplier: 1.00,
                    balance: 0.00, // Empieza en 0 hasta conectar wallet
                    bet: 0.00,
                    hasBet: false,
                    crashPoint: 0,
                    currency: 'TON'
                };

                // -- SISTEMAS --
                this.audio = new SoundEngine();
                this.players = new PlayerBotSystem('player-list');
                
                // -- REFERENCIAS DOM --
                this.ui = {
                    startScreen: document.getElementById('start-screen'),
                    gameInterface: document.getElementById('game-interface'),
                    btnInit: document.getElementById('btn-init'),
                    mult: document.getElementById('multiplier-val'),
                    status: document.getElementById('status-val'),
                    mainBtn: document.getElementById('main-action'),
                    balance: document.getElementById('balance-val'),
                    betInput: document.getElementById('bet-amount')
                };

                // -- INICIALIZACIÓN --
                this.init();
            }

            init() {
                // Preparar Telegram
                initTelegram();

                // Event Listeners
                this.ui.btnInit.addEventListener('click', () => this.startSession());
                this.ui.mainBtn.addEventListener('click', () => this.handleMainClick());
                
                // Bucle de Renderizado principal
                this.loop();
            }

            // --- CONTROL DE SESIÓN ---
            startSession() {
                // Audio requiere interacción del usuario
                this.audio.resume();

                // Transición de UI
                this.ui.startScreen.classList.add('hidden');
                this.ui.gameInterface.style.display = 'flex';

                // Iniciar simulación de jugadores
                this.players.start();

                // Comenzar primer ciclo
                this.startRound();
            }

            // --- ESTADOS DEL JUEGO ---

            startRound() {
                this.state.phase = 'COUNTDOWN';
                this.state.multiplier = 1.00;
                this.state.hasBet = false;
                
                // UI Reset
                this.ui.mult.innerText = "1.00x";
                this.ui.mult.style.color = "#ffffff";
                this.ui.status.innerText = "CERRANDO APUESTAS";
                this.setButtonState('IDLE');

                let timeLeft = 5.0;
                const interval = setInterval(() => {
                    if (this.state.phase !== 'COUNTDOWN') { clearInterval(interval); return; }
                    
                    this.ui.status.innerText = `SIGUIENTE RONDA: ${timeLeft.toFixed(1)}s`;
                    
                    if (timeLeft <= 0) {
                        clearInterval(interval);
                        this.runGame();
                    } else if (timeLeft < 3 && Math.floor(timeLeft * 10) % 10 === 0) {
                        this.audio.playTick(); // Sonidos de los últimos 3 segundos
                    }
                    
                    timeLeft -= 0.1;
                }, 100);
            }

            runGame() {
                this.state.phase = 'RUNNING';
                this.state.startTime = Date.now();

                // ALGORITMO DE CRASH (Con ventaja de la casa 4%)
                // Fórmula estándar: 0.96 / (1 - Random)
                const e = Math.random();
                this.state.crashPoint = Math.max(1.00, 0.96 / (1 - e));
                
                // Limitar a 50x para esta demo (casinos reales pueden ir a infinito)
                if (this.state.crashPoint > 50) this.state.crashPoint = 50;

                console.log(`[GAME] Crash Point: ${this.state.crashPoint.toFixed(2)}x`);

                // Actualizar UI
                this.setButtonState(this.state.hasBet ? 'CASHOUT' : 'WAITING');
                this.ui.status.innerText = "EN VIVO";
                this.ui.status.style.color = "var(--brand-win)";
            }

            handleMainClick() {
                if (this.state.phase === 'COUNTDOWN') {
                    this.placeBet();
                } else if (this.state.phase === 'RUNNING' && this.state.hasBet) {
                    this.cashOut();
                }
            }

            placeBet() {
                const amount = parseFloat(this.ui.betInput.value);
                
                if (isNaN(amount) || amount <= 0) return;
                
                if (amount > this.state.balance) {
                    // Feedback visual de error (Simple)
                    this.ui.mainBtn.style.background = "var(--brand-loss)";
                    setTimeout(() => this.ui.mainBtn.style.background = "", 500);
                    return;
                }

                this.state.bet = amount;
                this.state.hasBet = true;
                this.state.balance -= amount;

                this.updateBalanceUI();
                this.setButtonState('BET_PLACED');
            }

            cashOut() {
                if (!this.state.hasBet) return;

                const winAmount = this.state.bet * this.state.multiplier;
                this.state.balance += winAmount;
                
                this.state.hasBet = false;
                this.state.bet = 0;
                
                this.audio.playWin();
                this.updateBalanceUI();
                this.setButtonState('WAITING');
            }

            crash() {
                this.state.phase = 'CRASHED';
                this.state.multiplier = this.state.crashPoint;
                this.audio.playCrash();

                // UI Updates
                this.ui.mult.innerText = `${this.state.crashPoint.toFixed(2)}x`;
                this.ui.mult.style.color = "var(--brand-loss)";
                this.ui.status.innerText = "CRASHED";
                this.ui.status.style.color = "var(--brand-loss)";
                this.setButtonState('CRASHED');

                // Si el jugador apostó y no sacó, perdió la apuesta (ya descontada)
                if (this.state.hasBet) {
                    this.state.hasBet = false;
                    this.state.bet = 0;
                }

                // Reiniciar después de 3 segundos
                setTimeout(() => this.startRound(), 3000);
            }

            // --- BUCLE PRINCIPAL (FÍSICA Y RENDER) ---
            loop() {
                requestAnimationFrame(() => this.loop());

                if (this.state.phase === 'RUNNING') {
                    const now = Date.now();
                    const elapsed = (now - this.state.startTime) / 1000;

                    // Fórmula de crecimiento exponencial
                    // 1.0 + (t^1.6) * 0.09
                    this.state.multiplier = 1.00 + Math.pow(elapsed, 1.6) * 0.09;

                    // Actualizar DOM
                    this.ui.mult.innerText = this.state.multiplier.toFixed(2) + 'x';
                    
                    // Cambio de color según velocidad
                    if (this.state.multiplier > 2.0) {
                        this.ui.mult.style.color = "var(--brand-accent)";
                    } else {
                        this.ui.mult.style.color = "#ffffff";
                    }

                    // Comprobar CRASH
                    if (this.state.multiplier >= this.state.crashPoint) {
                        this.crash();
                    }
                }
            }

            // -- UI HELPERS --
            updateBalanceUI() {
                this.ui.balance.innerText = `${Utils.formatMoney(this.state.balance)} TON`;
            }

            setButtonState(state) {
                const btn = this.ui.mainBtn;
                // Reset clases
                btn.className = 'btn-action'; 

                switch(state) {
                    case 'IDLE':
                        btn.classList.add('state-idle');
                        btn.innerText = "ESPERANDO RONDA";
                        break;
                    case 'BET_PLACED':
                        btn.classList.add('state-bet');
                        btn.innerText = "APUESTA REALIZADA";
                        break;
                    case 'WAITING':
                        btn.classList.add('state-idle');
                        btn.innerText = "ESPERANDO...";
                        break;
                    case 'CASHOUT':
                        btn.classList.add('state-cashout');
                        btn.innerText = "SACAR DINERO";
                        break;
                    case 'CRASHED':
                        btn.classList.add('state-crashed');
                        btn.innerText = "CRASHED";
                        break;
                }
            }
        }

        // -- INICIALIZACIÓN DEL JUEGO AL CARGAR LA PÁGINA --
        window.addEventListener('DOMContentLoaded', () => {
            const game = new CrashGame();
        });

        // 
        // FIN DE PARTE 2
        // COPIA LA PARTE 3 (Gráficos 3D) A CONTINUACIÓN
        //
    </script>
        <!-- 
       ================================================================
       PARTE 3: IDIOMAS, WALLET Y GRÁFICOS 3D
       ================================================================
    -->

    <script>
        /**
         * ==============================================================================
         * 1. SISTEMA DE IDIOMAS (RUSSIAN / ENGLISH)
         * Maneja la traducción dinámica de la interfaz.
         * ==============================================================================
         */
        class LanguageManager {
            constructor() {
                this.currentLang = 'en'; // Default English
                this.translations = {
                    ru: {
                        title: "CRASH .CASINO",
                        play: "Войти в игру",
                        balance: "Твой Баланс",
                        bet: "Ставка",
                        waiting: "ОЖИДАНИЕ",
                        cashout: "ЗАБРАТЬ",
                        crashed: "КРАШ",
                        live: "В ИГРЕ",
                        nextRound: "СЛЕД. РАУНД",
                        connect: "ПОДКЛЮЧИТЬ",
                        connected: "ПОДКЛЮЧЕНО",
                        wallet: "Кошелек",
                        players: "Игроки в зале",
                        auto: "Авто 2.0x"
                    },
                    en: {
                        title: "CRASH .CASINO",
                        play: "ENTER GAME",
                        balance: "YOUR BALANCE",
                        bet: "BET",
                        waiting: "WAITING",
                        cashout: "CASH OUT",
                        crashed: "CRASHED",
                        live: "LIVE",
                        nextRound: "NEXT ROUND",
                        connect: "CONNECT",
                        connected: "CONNECTED",
                        wallet: "Wallet",
                        players: "PLAYERS IN ROOM",
                        auto: "AUTO 2.0x"
                    }
                };
            }

            toggle() {
                this.currentLang = this.currentLang === 'en' ? 'ru' : 'en';
                this.updateUI();
                
                // Disparar evento personalizado para que el juego lo sepa
                window.dispatchEvent(new CustomEvent('languageChange', { detail: this.currentLang }));
            }

            get(key) {
                return this.translations[this.currentLang][key] || key;
            }

            updateUI() {
                const t = this.translations[this.currentLang];
                
                // Actualizar textos estáticos si existen
                const map = {
                    'btn-init': 'play',
                    'balance-val': 'balance', // El texto estático del balance
                    'status-val': 'waiting' // Estado inicial
                };

                for (const [id, key] of Object.entries(map)) {
                    const el = document.getElementById(id);
                    if (el) el.innerText = t[key];
                }
            }
        }

        /**
         * ==============================================================================
         * 2. SISTEMA DE WALLET (TONCONNECT REAL)
         * Conexión segura con Tonkeeper, MyTonWallet, etc.
         * ==============================================================================
         */
        class WalletManager {
            constructor(gameInstance) {
                this.game = gameInstance;
                this.connected = false;
                this.address = null;
                
                // Manifesto embebido en Base64 (Para evitar archivos externos)
                const manifest = {
                    url: window.location.href,
                    name: "Crash Legendary",
                    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png"
                };
                const manifestBase64 = 'data:application/manifest+json;base64,' + btoa(JSON.stringify(manifest));

                this.tonConnect = new TonConnect({ manifestUrl: manifestBase64 });

                // Restaurar sesión anterior
                this.tonConnect.restoreConnection().then((wallet) => {
                    if (wallet) {
                        this.onWalletConnect(wallet);
                    }
                });

                // Botón UI (Inyectamos el botón de idioma que faltaba en HTML)
                this.injectLangButton();
            }

            injectLangButton() {
                // Añadir botón de idioma al header
                const header = document.querySelector('.header-controls');
                if(header) {
                    const btn = document.createElement('div');
                    btn.className = 'btn-icon';
                    btn.style.width = 'auto';
                    btn.style.padding = '0 15px';
                    btn.style.fontSize = '0.7rem';
                    btn.style.fontWeight = 'bold';
                    btn.innerText = 'RU/EN';
                    btn.onclick = () => window.langSys.toggle();
                    header.appendChild(btn);
                }
            }

            async toggleConnect() {
                if (this.connected) {
                    await this.tonConnect.disconnect();
                } else {
                    await this.tonConnect.connect();
                }
            }

            onWalletConnect(wallet) {
                this.connected = true;
                this.address = wallet.account.address;
                
                // Formatear dirección (EQD...abc)
                const shortAddr = this.address.slice(0, 4) + '...' + this.address.slice(-4);
                
                // Actualizar botón UI
                const btn = document.getElementById('btn-wallet');
                if (btn) {
                    const span = btn.querySelector('span');
                    if(span) span.innerText = shortAddr;
                    btn.style.borderColor = 'var(--brand-win)';
                    btn.style.color = 'var(--brand-win)';
                }

                // IMPORTANTE: Dar saldo de bono por conectar
                // En una app real, esto vendría del backend
                if(this.game) {
                    this.game.addFunds(50.00); // Bonus de 50 TON
                    this.game.updateUI();
                }

                console.log("Wallet Connected:", this.address);
            }

            onWalletDisconnect() {
                this.connected = false;
                this.address = null;

                const btn = document.getElementById('btn-wallet');
                if (btn) {
                    const span = btn.querySelector('span');
                    if(span) span.innerText = window.langSys.get('connect');
                    btn.style.borderColor = '';
                    btn.style.color = '';
                }
            }
        }

        /**
         * ==============================================================================
         * 3. MOTOR GRÁFICO 3D (CANVAS)
         * Efecto de velocidad, estrellas y partículas de explosión.
         * ==============================================================================
         */
        class CanvasRenderer {
            constructor(canvasId) {
                this.canvas = document.getElementById(canvasId);
                this.ctx = this.canvas.getContext('2d');
                this.width = 0;
                this.height = 0;
                this.stars = [];
                this.particles = []; // Para explosiones
                
                this.resize();
                window.addEventListener('resize', () => this.resize());
                
                // Inicializar estrellas
                for(let i=0; i<200; i++) {
                    this.stars.push({
                        x: (Math.random() - 0.5) * 2000,
                        y: (Math.random() - 0.5) * 2000,
                        z: Math.random() * 2000
                    });
                }
                
                // Iniciar Loop de renderizado independiente del juego
                this.renderLoop();
            }

            resize() {
                this.width = this.canvas.width = window.innerWidth;
                this.height = this.canvas.height = window.innerHeight;
            }

            createExplosion() {
                // Crear 50 partículas
                for(let i=0; i<50; i++) {
                    this.particles.push({
                        x: 0, y: 0, z: 100, // Centro de la pantalla
                        vx: (Math.random() - 0.5) * 20,
                        vy: (Math.random() - 0.5) * 20,
                        vz: Math.random() * 10,
                        life: 1.0,
                        color: Math.random() > 0.5 ? '#ff004c' : '#ffaa00'
                    });
                }
            }

            renderLoop() {
                requestAnimationFrame(() => this.renderLoop());

                // Fondo Negro
                this.ctx.fillStyle = '#09090b';
                this.ctx.fillRect(0, 0, this.width, this.height);

                const cx = this.width / 2;
                const cy = this.height / 2;

                // Obtener estado global del juego para sincronizar velocidad
                // Asumimos que window.game existe desde Parte 2
                let gameSpeed = 0;
                let isCrashed = false;
                
                if (window.game) {
                    gameSpeed = window.game.state.phase === 'RUNNING' ? window.game.state.multiplier : 0;
                    isCrashed = window.game.state.phase === 'CRASHED';
                }

                // --- DIBUJAR ESTRELLAS ---
                const fov = 300;
                this.stars.forEach(star => {
                    // Mover estrella hacia la cámara
                    star.z -= gameSpeed * 15;
                    
                    // Resetear si pasa la cámara
                    if(star.z <= 10) {
                        star.z = 2000;
                        star.x = (Math.random() - 0.5) * 2000;
                        star.y = (Math.random() - 0.5) * 2000;
                    }

                    // Proyección 3D a 2D
                    const scale = fov / (fov + star.z);
                    const x2d = star.x * scale + cx;
                    const y2d = star.y * scale + cy;

                    // Tamaño basado en profundidad
                    const size = Math.max(0.5, (1 - star.z/2000) * 3);

                    if(gameSpeed > 1.5) {
                        // Efecto Warp (Líneas)
                        const prevZ = star.z + (gameSpeed * 20);
                        const prevScale = fov / (fov + prevZ);
                        const px = star.x * prevScale + cx;
                        const py = star.y * prevScale + cy;
                        
                        this.ctx.strokeStyle = '#fff';
                        this.ctx.lineWidth = size;
                        this.ctx.beginPath();
                        this.ctx.moveTo(px, py);
                        this.ctx.lineTo(x2d, y2d);
                        this.ctx.stroke();
                    } else {
                        // Estrellas normales
                        this.ctx.fillStyle = '#fff';
                        this.ctx.beginPath();
                        this.ctx.arc(x2d, y2d, size, 0, Math.PI*2);
                        this.ctx.fill();
                    }
                });

                // --- DIBUJAR NAVE (Si no ha crasheado) ---
                if(!isCrashed) {
                    this.drawShip(cx, cy + 100, gameSpeed);
                } else {
                    // Dibujar partículas de explosión
                    this.updateAndDrawParticles(cx, cy);
                }
            }

            drawShip(x, y, speed) {
                this.ctx.save();
                this.ctx.translate(x, y);
                
                // Inclinación (Banking) basada en el tiempo
                this.ctx.rotate(Math.sin(Date.now() / 500) * 0.1 * speed);

                // Motores
                const flameLen = 20 + Math.random() * (speed * 5);
                this.ctx.fillStyle = `rgba(0, 152, 234, 0.6)`;
                this.ctx.beginPath();
                this.ctx.moveTo(-10, 30); this.ctx.lineTo(0, 30+flameLen); this.ctx.lineTo(10, 30);
                this.ctx.fill();

                // Cuerpo
                this.ctx.fillStyle = '#ccc';
                this.ctx.strokeStyle = '#fff';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(0, -40);
                this.ctx.lineTo(10, 10);
                this.ctx.lineTo(30, 20);
                this.ctx.lineTo(10, 30);
                this.ctx.lineTo(0, 30);
                this.ctx.lineTo(-10, 30);
                this.ctx.lineTo(-30, 20);
                this.ctx.lineTo(-10, 10);
                this.ctx.closePath();
                this.ctx.fill();
                this.ctx.stroke();

                this.ctx.restore();
            }

            updateAndDrawParticles(cx, cy) {
                for (let i = this.particles.length - 1; i >= 0; i--) {
                    let p = this.particles[i];
                    p.x += p.vx;
                    p.y += p.vy;
                    p.z += p.vz;
                    p.life -= 0.02;

                    if (p.life <= 0) {
                        this.particles.splice(i, 1);
                    } else {
                        const fov = 300;
                        const scale = fov / (fov + p.z);
                        const x2d = p.x * scale + cx;
                        const y2d = p.y * scale + cy;

                        this.ctx.globalAlpha = p.life;
                        this.ctx.fillStyle = p.color;
                        this.ctx.beginPath();
                        this.ctx.arc(x2d, y2d, 5 * scale, 0, Math.PI * 2);
                        this.ctx.fill();
                    }
                }
                this.ctx.globalAlpha = 1;
            }
        }

        /**
         * ==============================================================================
         * INICIALIZACIÓN Y CONEXIÓN DE SISTEMAS
         * Aquí unimos todo lo de las partes anteriores.
         * ==============================================================================
         */
        window.addEventListener('DOMContentLoaded', () => {
            
            // 1. Inicializar Idioma
            window.langSys = new LanguageManager();

            // 2. Inicializar Juego (CrashGame de la Parte 2)
            // Nota: CrashGame debe ser global para que el Canvas acceda a su estado
            window.game = new CrashGame();

            // 3. Inicializar Wallet y enlazarlo al juego
            window.walletSys = new WalletManager(window.game);
            
            // Enlazar botón de wallet del HTML a la lógica
            const walletBtn = document.getElementById('btn-wallet');
            if(walletBtn) {
                walletBtn.addEventListener('click', () => window.walletSys.toggleConnect());
            }

            // 4. Inicializar Gráficos 3D
            const renderer = new CanvasRenderer('render-layer');

            // 5. "Parchear" el juego para que dispare explosiones
            // Sobreescribimos el método crash del juego original
            const originalCrash = window.game.crash.bind(window.game);
            window.game.crash = function() {
                renderer.createExplosion(); // BOOM!
                originalCrash(); // Ejecutar lógica original (sonidos, textos)
            };

            // 6. Escuchar cambios de idioma para actualizar botones del juego
            window.addEventListener('languageChange', (e) => {
                const lang = e.detail;
                const btn = document.getElementById('main-action');
                const status = document.getElementById('status-val');
                
                if(!btn || !status) return;

                // Actualizar textos dinámicos según idioma y estado
                const t = window.langSys.translations[lang];
                
                // Lógica simple de actualización visual (para demo)
                if(window.game.state.phase === 'COUNTDOWN') {
                    status.innerText = `${t.nextRound}: 5.0s`;
                }
            });

            console.log("SISTEMA COMPLETO INICIADO");
        });

    </script>
</body>
</html>
