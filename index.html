<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>STAR CRASH - ENTERPRISE EDITION</title>
    
    <!-- =========================================
         EXTERNAL LIBRARIES
         ========================================= -->
    <!-- TonConnect SDK -->
    <script src="https://unpkg.com/@tonconnect/sdk@latest/dist/tonconnect-sdk.min.js"></script>
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- =========================================
         CSS DESIGN SYSTEM
         ========================================= -->
    <style>
        /* 
         * =========================================
         * CORE VARIABLES & RESET
         * =========================================
         */
        :root {
            /* Brand Colors */
            --brand-primary: #0098ea;      /* TON Blue */
            --brand-accent: #ffd700;       /* Gold Stars */
            --brand-success: #00ff9d;      /* Green Profit */
            --brand-danger: #ff004c;       /* Red Crash */
            --brand-dark: #050507;         /* Deep Space Black */
            
            /* UI Colors */
            --ui-glass: rgba(20, 25, 35, 0.85);
            --ui-border: rgba(255, 255, 255, 0.1);
            --ui-text-main: #ffffff;
            --ui-text-muted: #8b96a6;
            
            /* Typography */
            --font-display: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            --font-mono: 'Fira Code', monospace;
            
            /* Animation Curves */
            --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
            --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Global Reset & Base Styles */
        * {
            box-sizing: border-box;
            user-select: none; /* Prevent text selection on mobile tap */
            -webkit-tap-highlight-color: transparent;
            outline: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        body {
            margin: 0;
            padding: 0;
            background-color: var(--brand-dark);
            color: var(--ui-text-main);
            font-family: var(--font-display);
            height: 100vh;
            width: 100vw;
            overflow: hidden; /* Prevent scrolling */
            display: flex;
            flex-direction: column;
        }

        /* =========================================
         * LAYOUT CONTAINERS
         * ========================================= */
        
        /* 1. Canvas Layer (Background) */
        #render-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        /* 2. UI Overlay Layer */
        #ui-overlay {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            height: 100%;
            pointer-events: none; /* Let clicks pass to canvas if needed */
        }

        .pointer-events-auto {
            pointer-events: auto;
        }

        /* =========================================
         * LANDING PAGE SYSTEM
         * ========================================= */
        #landing-page {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 500; /* Above everything */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: radial-gradient(circle at center, rgba(5, 5, 7, 0.2), rgba(5, 5, 7, 0.95)),
                        url('https://assets.codepen.io/13471/internal/avatars/users/default.png?format=auto&version=1513628002&width=80&height=80'); /* Placeholder BG */
            backdrop-filter: blur(10px);
            transition: opacity 0.8s var(--ease-out-expo), transform 0.8s var(--ease-out-expo);
        }

        /* Animation for Logo */
        .hero-logo {
            font-size: 6rem;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 10px;
            text-shadow: 0 0 50px rgba(0, 152, 234, 0.5);
            margin-bottom: 60px;
            animation: floatLogo 4s ease-in-out infinite;
        }
        
        .hero-logo span {
            color: var(--brand-primary);
            background: linear-gradient(to right, #0098ea, #00d2ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        @keyframes floatLogo {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }

        /* Primary Action Button */
        .btn-giant {
            padding: 25px 80px;
            font-size: 1.8rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 3px;
            background: linear-gradient(135deg, var(--brand-primary), #0055ff);
            border: 2px solid rgba(255, 255, 255, 0.2);
            color: white;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 0 10px 40px rgba(0, 152, 234, 0.4);
            transition: all 0.3s var(--ease-out-expo);
            position: relative;
            overflow: hidden;
        }

        .btn-giant::before {
            content: '';
            position: absolute;
            top: 0; left: -100%;
            width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: 0.5s;
        }

        .btn-giant:hover {
            transform: scale(1.05);
            box-shadow: 0 15px 50px rgba(0, 152, 234, 0.6);
            border-color: white;
        }

        .btn-giant:hover::before {
            left: 100%;
        }

        /* Utility to hide elements */
        .hidden {
            opacity: 0;
            pointer-events: none;
            transform: scale(1.1);
        }

        /* =========================================
         * MAIN GAME UI STRUCTURE
         * ========================================= */
        #game-interface {
            opacity: 0;
            transition: opacity 1s ease-in;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        #game-interface.visible {
            opacity: 1;
        }

        /* Header Bar */
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 25px;
            background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 100%);
        }

        .brand-mini {
            font-weight: 900;
            font-size: 1.4rem;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        .header-controls {
            display: flex;
            gap: 15px;
        }

        /* Icon Buttons */
        .btn-icon {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            background: var(--ui-glass);
            border: 1px solid var(--ui-border);
            color: var(--ui-text-muted);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            backdrop-filter: blur(10px);
            transition: all 0.2s ease;
        }

        .btn-icon:hover {
            border-color: var(--brand-primary);
            color: white;
            transform: translateY(-2px);
            background: rgba(0, 152, 234, 0.1);
        }

        .btn-icon.active {
            border-color: var(--brand-success);
            color: var(--brand-success);
            background: rgba(0, 255, 157, 0.1);
        }

        /* Central HUD */
        .hud-container {
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
            line-height: 1;
            text-shadow: 0 0 40px rgba(0,0,0,0.5);
            font-variant-numeric: tabular-nums;
            transition: color 0.1s;
        }

        .game-status-pill {
            margin-top: 20px;
            padding: 8px 24px;
            border-radius: 30px;
            background: var(--ui-glass);
            border: 1px solid var(--ui-border);
            font-size: 0.9rem;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        /* History Sidebar */
        .history-sidebar {
            position: absolute;
            top: 80px;
            left: 20px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            max-height: 400px;
            overflow: hidden;
        }

        .history-item {
            font-size: 0.75rem;
            font-weight: 700;
            padding: 4px 8px;
            background: rgba(0,0,0,0.5);
            border: 1px solid rgba(255,255,255,0.05);
            border-radius: 4px;
            min-width: 60px;
            text-align: center;
            animation: slideInLeft 0.3s ease-out;
            border-left: 3px solid transparent;
        }

        .h-low { border-left-color: var(--brand-primary); }
        .h-med { border-left-color: var(--brand-accent); }
        .h-high { border-left-color: var(--brand-danger); }

        @keyframes slideInLeft {
            from { transform: translateX(-20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        /* Control Deck Footer */
        .control-deck {
            background: linear-gradient(0deg, rgba(0,0,0,0.95) 0%, transparent 100%);
            padding: 25px 30px 40px 30px;
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 20px;
            backdrop-filter: blur(20px);
        }

        @media (max-width: 900px) {
            .control-deck {
                grid-template-columns: 1fr;
                gap: 15px;
            }
        }

        .panel-card {
            background: var(--ui-glass);
            border: 1px solid var(--ui-border);
            border-radius: 16px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        /* Balance Display */
        .balance-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 15px;
        }

        .label-sm {
            font-size: 0.7rem;
            color: var(--ui-text-muted);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .value-lg {
            font-size: 2rem;
            font-weight: 800;
            color: white;
        }

        /* Currency Toggle */
        .currency-switcher {
            display: flex;
            background: rgba(0,0,0,0.3);
            padding: 4px;
            border-radius: 10px;
            margin-bottom: 15px;
        }

        .curr-opt {
            flex: 1;
            text-align: center;
            padding: 10px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 0.9rem;
            cursor: pointer;
            color: var(--ui-text-muted);
            transition: all 0.2s;
        }

        .curr-opt.active.ton {
            background: var(--brand-primary);
            color: white;
            box-shadow: 0 4px 12px rgba(0, 152, 234, 0.3);
        }

        .curr-opt.active.star {
            background: var(--brand-accent);
            color: black;
            box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
        }

        /* Inputs */
        .input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
        }

        .game-input {
            width: 100%;
            background: transparent;
            border: none;
            color: white;
            font-size: 1.4rem;
            font-weight: 700;
            text-align: right;
            font-family: var(--font-mono);
        }

        /* Main Action Button (Dynamic) */
        .btn-main-action {
            width: 100%;
            height: 70px;
            border-radius: 16px;
            border: none;
            font-size: 1.4rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            cursor: pointer;
            transition: transform 0.1s, box-shadow 0.2s;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .btn-main-action:active {
            transform: scale(0.98);
        }

        /* Action States */
        .state-bet { background: var(--brand-primary); color: white; }
        .state-cashout { 
            background: var(--brand-success); 
            color: black; 
            animation: pulse-green 1.5s infinite; 
        }
        .state-waiting { background: #222; color: #555; cursor: not-allowed; }
        .state-crashed { background: var(--brand-danger); color: white; animation: shake 0.5s; }

        @keyframes pulse-green {
            0% { box-shadow: 0 0 0 0 rgba(0, 255, 157, 0.7); }
            70% { box-shadow: 0 0 0 20px rgba(0, 255, 157, 0); }
            100% { box-shadow: 0 0 0 0 rgba(0, 255, 157, 0); }
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10% { transform: translateX(-5px); }
            30% { transform: translateX(5px); }
            50% { transform: translateX(-5px); }
            70% { transform: translateX(5px); }
            90% { transform: translateX(-2px); }
        }

        /* =========================================
         * MODAL SYSTEM
         * ========================================= */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.85);
            backdrop-filter: blur(12px);
            z-index: 1000;
            display: none;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .modal-overlay.open {
            display: flex;
            opacity: 1;
        }

        .modal-card {
            width: 90%;
            max-width: 450px;
            background: linear-gradient(145deg, #1a1f2e, #0d1016);
            border: 1px solid var(--ui-border);
            border-radius: 24px;
            padding: 30px;
            box-shadow: 0 25px 50px rgba(0,0,0,0.5);
            position: relative;
            transform: scale(0.9);
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .modal-overlay.open .modal-card {
            transform: scale(1);
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px solid var(--ui-border);
        }

        .modal-title {
            font-size: 1.4rem;
            font-weight: 800;
            color: white;
        }

        .btn-close {
            background: none;
            border: none;
            color: var(--ui-text-muted);
            font-size: 1.5rem;
            cursor: pointer;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            margin-bottom: 8px;
            color: var(--ui-text-muted);
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
        }

        .modal-input {
            width: 100%;
            background: rgba(0,0,0,0.3);
            border: 1px solid var(--ui-border);
            padding: 12px 15px;
            border-radius: 10px;
            color: white;
            font-size: 1rem;
            font-family: var(--font-mono);
        }
        
        .modal-input:focus {
            border-color: var(--brand-primary);
            box-shadow: 0 0 0 3px rgba(0, 152, 234, 0.1);
        }

        .btn-modal-action {
            width: 100%;
            padding: 15px;
            border-radius: 12px;
            border: none;
            background: var(--brand-primary);
            color: white;
            font-weight: 800;
            font-size: 1.1rem;
            cursor: pointer;
            margin-top: 10px;
        }

        /* Toast Notifications */
        .toast-container {
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2000;
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
        }

        .toast {
            background: rgba(30, 30, 35, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid var(--ui-border);
            color: white;
            padding: 12px 24px;
            border-radius: 30px;
            font-weight: 600;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideDownFade 0.4s ease-out;
        }

        .toast.success { border-left: 4px solid var(--brand-success); }
        .toast.error { border-left: 4px solid var(--brand-danger); }

        @keyframes slideDownFade {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

    </style>
</head>
<body>

    <!-- 1. 3D CANVAS LAYER -->
    <canvas id="render-canvas"></canvas>

    <!-- 2. UI OVERLAY -->
    <div id="ui-overlay" class="pointer-events-auto">
        
        <!-- A. LANDING PAGE (Visible on load) -->
        <div id="landing-page">
            <div class="hero-logo">STAR<span>CRASH</span></div>
            <button class="btn-giant" id="btn-enter-game">INITIALIZE SYSTEM</button>
        </div>

        <!-- B. MAIN GAME INTERFACE (Hidden initially) -->
        <div id="game-interface">
            <!-- HEADER -->
            <header>
                <div class="brand-mini">STAR<span>CRASH</span></div>
                <div class="header-controls">
                    <!-- Withdraw Button -->
                    <div class="btn-icon" id="btn-withdraw-trigger" title="Withdraw Funds">
                        <i class="fa-solid fa-arrow-trend-up"></i>
                    </div>
                    <!-- Deposit Button -->
                    <div class="btn-icon" id="btn-deposit-trigger" title="Deposit Funds">
                        <i class="fa-solid fa-wallet"></i>
                    </div>
                    <!-- Wallet Connect -->
                    <div class="btn-icon" id="btn-wallet-connect" style="border-radius: 25px; width: auto; padding: 0 20px; font-size: 0.8rem; font-weight: 700;">
                        CONNECT
                    </div>
                    <!-- Language Toggle -->
                    <div class="btn-icon" id="btn-lang-toggle" style="border-radius: 25px; width: auto; padding: 0 15px; font-size: 0.75rem;">
                        RU/EN
                    </div>
                </div>
            </header>

            <!-- CENTER HUD -->
            <div class="hud-container">
                <div class="multiplier-display" id="disp-multiplier">1.00x</div>
                <div class="game-status-pill" id="disp-status">SYSTEM READY</div>
            </div>

            <!-- HISTORY -->
            <div class="history-sidebar" id="list-history"></div>

            <!-- FOOTER CONTROLS -->
            <div class="control-deck">
                <!-- Left Panel: Balance & Input -->
                <div class="panel-card">
                    <div class="balance-row">
                        <span class="label-sm">BALANCE</span>
                        <span class="value-lg" id="disp-balance">0.00</span>
                    </div>
                    
                    <div class="currency-switcher">
                        <div class="curr-opt active ton" id="opt-ton">TON</div>
                        <div class="curr-opt star" id="opt-star">STARS</div>
                    </div>

                    <div class="input-wrapper" style="background:rgba(0,0,0,0.3); padding:10px; border-radius:8px;">
                        <span class="label-sm" style="margin-right:10px;">BET</span>
                        <input type="number" id="input-bet" class="game-input" value="10">
                    </div>
                </div>

                <!-- Right Panel: Main Action -->
                <div style="display: flex; flex-direction: column; justify-content: center; gap: 10px;">
                    <button class="btn-main-action state-waiting" id="btn-main-action">WAITING</button>
                    <div style="text-align: center; font-size: 0.8rem; color: var(--ui-text-muted); font-weight: 700; text-transform: uppercase;">
                        Next Round: <span id="disp-timer">5.0s</span>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- MODAL: DEPOSIT -->
    <div class="modal-overlay" id="modal-deposit">
        <div class="modal-card">
            <div class="modal-header">
                <div class="modal-title">DEPOSIT FUNDS</div>
                <button class="btn-close" onclick="uiManager.closeModal('modal-deposit')">×</button>
            </div>
            <div style="text-align: center; margin-bottom: 20px;">
                <div style="background: white; width: 180px; height: 180px; margin: 0 auto; padding: 10px; border-radius: 10px;">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=StarCrashDeposit" alt="QR">
                </div>
                <p style="color: var(--ui-text-muted); font-size: 0.9rem; margin-top: 10px;">Send TON to your connected wallet address.</p>
                <div id="deposit-address-display" style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; font-family: var(--font-mono); font-size: 0.8rem; color: #888; margin-top: 10px; word-break: break-all;">
                    Connect wallet to view address
                </div>
            </div>
            <button class="btn-modal-action" onclick="uiManager.closeModal('modal-deposit')">CLOSE</button>
        </div>
    </div>

    <!-- MODAL: WITHDRAW -->
    <div class="modal-overlay" id="modal-withdraw">
        <div class="modal-card">
            <div class="modal-header">
                <div class="modal-title">WITHDRAW</div>
                <button class="btn-close" onclick="uiManager.closeModal('modal-withdraw')">×</button>
            </div>
            
            <div class="form-group">
                <label class="form-label">Currency</label>
                <div style="display: flex; gap: 10px;">
                    <button id="wd-btn-ton" onclick="withdrawSystem.setCurrency('TON')" style="flex:1; padding:10px; background:var(--brand-primary); color:white; border:none; border-radius:8px; font-weight:bold;">TON</button>
                    <button id="wd-btn-star" onclick="withdrawSystem.setCurrency('STAR')" style="flex:1; padding:10px; background:#333; color:#aaa; border:none; border-radius:8px; font-weight:bold;">STAR</button>
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Amount</label>
                <input type="number" id="wd-input-amount" class="modal-input" placeholder="0.00">
            </div>

            <div class="form-group">
                <label class="form-label">Destination Address</label>
                <input type="text" id="wd-input-addr" class="modal-input" placeholder="EQD...">
            </div>

            <button class="btn-modal-action" onclick="withdrawSystem.submit()">CONFIRM WITHDRAWAL</button>
        </div>
    </div>

    <!-- TOAST CONTAINER -->
    <div class="toast-container" id="toast-container"></div>

    <!-- 
        ================================================================
        END OF PART 1: HTML & CSS
        ================================================================
        
        NEXT: Paste PART 2 (JavaScript: Math, Audio, Physics) right before the closing </body> tag.
    -->
</body>
</html>
    <!-- 
       ================================================================
       PART 2: JAVASCRIPT CORE SYSTEMS (Engines)
       ================================================================
    -->

    <script>
        /**
         * ==============================================================================
         * 1. UTILITY LIBRARY
         * Math helpers and formatters
         * ==============================================================================
         */
        const Utils = {
            /**
             * Linear Interpolation between two values
             * @param {number} start 
             * @param {number} end 
             * @param {number} amt - Amount between 0 and 1
             */
            lerp: (start, end, amt) => {
                return (1 - amt) * start + amt * end;
            },

            /**
             * Clamp a number between min and max
             */
            clamp: (val, min, max) => {
                return Math.min(Math.max(val, min), max);
            },

            /**
             * Generate random float in range
             */
            random: (min, max) => {
                return Math.random() * (max - min) + min;
            },

            /**
             * Generate random integer in range
             */
            randomInt: (min, max) => {
                return Math.floor(Math.random() * (max - min + 1) + min);
            },

            /**
             * Format currency string
             */
            formatCurrency: (val, symbol = '') => {
                return val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + symbol;
            },

            /**
             * Generate hash from string
             */
            hash: (str) => {
                let hash = 0;
                for (let i = 0; i < str.length; i++) {
                    hash = ((hash << 5) - hash) + str.charCodeAt(i);
                    hash |= 0; 
                }
                return hash;
            }
        };

        /**
         * ==============================================================================
         * 2. AUDIO ENGINE (Procedural Synthesis)
         * Uses Web Audio API to generate SFX in real-time.
         * No external mp3/wav files required.
         * ==============================================================================
         */
        class AudioEngine {
            constructor() {
                this.ctx = new (window.AudioContext || window.webkitAudioContext)();
                
                // Master Compressor/Limiter to prevent clipping
                this.compressor = this.ctx.createDynamicsCompressor();
                this.compressor.threshold.setValueAtTime(-24, this.ctx.currentTime);
                this.compressor.knee.setValueAtTime(30, this.ctx.currentTime);
                this.compressor.ratio.setValueAtTime(12, this.ctx.currentTime);
                this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
                this.compressor.release.setValueAtTime(0.25, this.ctx.currentTime);

                this.masterGain = this.ctx.createGain();
                this.masterGain.gain.value = 0.4; // Master volume

                // Chain: Source -> Compressor -> Master -> Destination
                this.compressor.connect(this.masterGain);
                this.masterGain.connect(this.ctx.destination);

                this.isMuted = false;
            }

            /**
             * Must be called on user interaction
             */
            resume() {
                if (this.ctx.state === 'suspended') {
                    this.ctx.resume();
                }
            }

            /**
             * Play a synthesized tone
             * @param {number} freq - Frequency in Hz
             * @param {string} type - Oscillator type (sine, square, sawtooth, triangle)
             * @param {number} duration - Duration in seconds
             * @param {number} vol - Volume (0 to 1)
             */
            playTone(freq, type = 'sine', duration = 0.5, vol = 0.5) {
                if (this.isMuted) return;
                this.resume();

                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = type;
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

                // ADSR Envelope (Attack, Decay, Sustain, Release)
                gain.gain.setValueAtTime(0, this.ctx.currentTime);
                gain.gain.linearRampToValueAtTime(vol, this.ctx.currentTime + 0.02); // Fast attack
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration); // Decay

                osc.connect(gain);
                gain.connect(this.compressor);

                osc.start();
                osc.stop(this.ctx.currentTime + duration + 0.1);
            }

            /**
             * Generate White Noise for explosions/crashes
             */
            createNoiseBuffer(duration) {
                const bufferSize = this.ctx.sampleRate * duration;
                const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
                const data = buffer.getChannelData(0);
                
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = Math.random() * 2 - 1;
                }
                return buffer;
            }

            /**
             * Play Explosion Sound
             * Uses filtered noise
             */
            playCrash() {
                if (this.isMuted) return;
                this.resume();

                const noiseBuffer = this.createNoiseBuffer(0.6);
                const noise = this.ctx.createBufferSource();
                noise.buffer = noiseBuffer;

                // Lowpass Filter to make it sound muffled/deep
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(1000, this.ctx.currentTime);
                filter.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.5);

                const gain = this.ctx.createGain();
                gain.gain.setValueAtTime(1, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.5);

                noise.connect(filter);
                filter.connect(gain);
                gain.connect(this.compressor);
                noise.start();
            }

            /**
             * Play Success/Win Sound (Arpeggio)
             */
            playWin() {
                if (this.isMuted) return;
                this.resume();
                
                // Major Triad Arpeggio
                const notes = [523.25, 659.25, 783.99, 1046.50]; // C Major
                notes.forEach((freq, i) => {
                    const t = this.ctx.currentTime + (i * 0.08);
                    this.playToneAtTime(freq, 'sine', t, 0.4, 0.3);
                });
            }

            playToneAtTime(freq, type, time, duration, vol) {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = type;
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(vol, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
                osc.connect(gain);
                gain.connect(this.compressor);
                osc.start(time);
                osc.stop(time + duration);
            }

            playCountdown() {
                this.playTone(800, 'square', 0.1, 0.2);
            }

            playClick() {
                this.playTone(1200, 'triangle', 0.05, 0.1);
            }
        }

        /**
         * ==============================================================================
         * 3. 3D MATH & PHYSICS
         * Handles 3D projection to 2D canvas and vector math
         * ==============================================================================
         */
        class Camera3D {
            constructor(width, height) {
                this.cx = width / 2;
                this.cy = height / 2;
                this.fov = 300; // Field of View (Depth)
                this.viewDistance = 500; // Distance from camera to projection plane
            }

            resize(width, height) {
                this.cx = width / 2;
                this.cy = height / 2;
            }

            /**
             * Project a 3D point (x,y,z) to 2D screen coordinates (x,y)
             * Returns null if point is behind camera or too far
             */
            project(x, y, z) {
                if (z <= 0) return null; // Behind camera

                const scale = this.fov / (this.viewDistance + z);
                const x2d = (x * scale) + this.cx;
                const y2d = (y * scale) + this.cy;

                return { x: x2d, y: y2d, scale: scale };
            }
        }

        /**
         * ==============================================================================
         * 4. PARTICLE SYSTEM
         * High-performance particle engine
         * ==============================================================================
         */
        class Particle {
            constructor(x, y, z, type) {
                this.x = x;
                this.y = y;
                this.z = z;
                this.type = type; // 'spark', 'smoke', 'debris'
                
                // Physics properties
                const speed = Math.random() * 15 + 5;
                const angle = Math.random() * Math.PI * 2;
                const vAngle = (Math.random() - 0.5) * Math.PI; // 3D spread

                this.vx = Math.cos(angle) * Math.cos(vAngle) * speed;
                this.vy = Math.sin(angle) * Math.cos(vAngle) * speed;
                this.vz = Math.sin(vAngle) * speed;

                this.life = 1.0; // Alpha
                this.decay = Math.random() * 0.02 + 0.01;
                
                // Visual properties
                this.size = Math.random() * 4 + 1;
                this.gravity = 0.5;
                
                this.setColor();
            }

            setColor() {
                if (this.type === 'spark') {
                    // Gold/Orange/Yellow
                    this.color = Math.random() > 0.5 ? '#ffcc00' : '#ff6600';
                } else if (this.type === 'smoke') {
                    this.color = '#888888';
                    this.gravity = 0.1; // Smoke floats
                    this.decay = 0.005;
                } else {
                    // Debris (Dark grey)
                    this.color = '#444444';
                }
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.z += this.vz;
                
                this.vy += this.gravity; // Apply Gravity

                // Air Resistance (Friction)
                this.vx *= 0.98;
                this.vy *= 0.98;
                this.vz *= 0.98;

                this.life -= this.decay;
            }
        }

        class ParticleSystem {
            constructor() {
                this.particles = [];
            }

            /**
             * Create an explosion at specific 3D coordinates
             */
            explode(x, y, z, count = 50) {
                for (let i = 0; i < count; i++) {
                    const typeRand = Math.random();
                    let type = 'debris';
                    if (typeRand > 0.8) type = 'spark';
                    else if (typeRand > 0.6) type = 'smoke';

                    this.particles.push(new Particle(x, y, z, type));
                }
            }

            update() {
                for (let i = this.particles.length - 1; i >= 0; i--) {
                    const p = this.particles[i];
                    p.update();

                    if (p.life <= 0) {
                        this.particles.splice(i, 1);
                    }
                }
            }

            /**
             * Draw all particles
             * @param {CanvasRenderingContext2D} ctx 
             * @param {Camera3D} camera 
             */
            draw(ctx, camera) {
                ctx.globalCompositeOperation = 'lighter'; // Additive blending for glow effect

                for (const p of this.particles) {
                    const proj = camera.project(p.x, p.y, p.z);
                    if (!proj) continue;

                    ctx.globalAlpha = p.life;
                    ctx.fillStyle = p.color;
                    
                    ctx.beginPath();
                    // Size scales with Z distance
                    ctx.arc(proj.x, proj.y, p.size * proj.scale, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.globalCompositeOperation = 'source-over'; // Reset blend mode
                ctx.globalAlpha = 1.0;
            }
        }

        /**
         * ==============================================================================
         * 5. GRAPHICS ENGINE (Starfield & Ship)
         * Handles the main canvas rendering loop
         * ==============================================================================
         */
        class Star {
            constructor() {
                this.reset(true);
            }

            reset(randomZ = false) {
                // Spread stars in a wide tunnel
                this.x = (Math.random() - 0.5) * 3000;
                this.y = (Math.random() - 0.5) * 3000;
                // If randomZ is false, we spawn it at the far end (for continuous stream)
                this.z = randomZ ? Math.random() * 2000 : 2000;
                
                // 10% chance of being a blue "nebula" star
                this.color = Math.random() > 0.9 ? '#00d2ff' : '#ffffff';
                this.size = Math.random() * 2;
            }
        }

        class Starfield {
            constructor(count) {
                this.stars = [];
                for (let i = 0; i < count; i++) {
                    this.stars.push(new Star());
                }
                this.speed = 0; // Current movement speed
            }

            /**
             * Update star positions based on game speed
             */
            update(gameSpeed) {
                this.speed = gameSpeed * 20; // Sensitivity multiplier

                this.stars.forEach(star => {
                    star.z -= this.speed;

                    // Reset star if it passes the camera (z <= 0)
                    if (star.z <= 1) {
                        star.reset(false);
                    }
                });
            }

            draw(ctx, camera, multiplier) {
                // Clear screen with trail effect (optional, currently solid clear in loop)
                ctx.fillStyle = '#050507';
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                this.stars.forEach(star => {
                    const proj = camera.project(star.x, star.y, star.z);
                    if (!proj) return;

                    // Draw Star
                    ctx.fillStyle = star.color;
                    
                    // Warp Effect: If speed is high (multiplier > 2), draw lines instead of dots
                    if (multiplier > 1.5) {
                        const prevZ = star.z + (this.speed * 3); // Calculate previous position for tail
                        const prevProj = camera.project(star.x, star.y, prevZ);
                        
                        if (prevProj) {
                            ctx.strokeStyle = star.color;
                            ctx.lineWidth = proj.scale * 2;
                            ctx.beginPath();
                            ctx.moveTo(prevProj.x, prevProj.y);
                            ctx.lineTo(proj.x, proj.y);
                            ctx.stroke();
                        }
                    } else {
                        // Normal Dot
                        ctx.beginPath();
                        ctx.arc(proj.x, proj.y, star.size * proj.scale, 0, Math.PI * 2);
                        ctx.fill();
                    }
                });
            }
        }

        class ShipGraphics {
            /**
             * Draw the spaceship at screen center
             * Supports banking (rotation) effects
             */
            draw(ctx, width, height, bankAngle, time) {
                const cx = width / 2;
                const cy = (height / 2) + 100; // Position slightly lower than center

                ctx.save();
                ctx.translate(cx, cy);
                ctx.rotate(bankAngle); // Apply banking tilt

                // 1. Engine Thrusters (Animated)
                const flameLen = 20 + Math.sin(time * 50) * 10;
                ctx.fillStyle = `rgba(0, 150, 255, 0.6)`;
                ctx.beginPath();
                ctx.moveTo(-10, 30);
                ctx.lineTo(0, 30 + flameLen); // Center Flame
                ctx.lineTo(10, 30);
                ctx.fill();

                // Side Thrusters
                ctx.fillStyle = `rgba(0, 200, 255, 0.4)`;
                ctx.beginPath();
                ctx.moveTo(-28, 15);
                ctx.lineTo(-35, 15 + flameLen * 0.6);
                ctx.lineTo(-20, 15);
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(28, 15);
                ctx.lineTo(35, 15 + flameLen * 0.6);
                ctx.lineTo(20, 15);
                ctx.fill();

                // 2. Ship Body (Main Hull)
                ctx.fillStyle = '#cccccc'; // Silver
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.lineJoin = 'round';

                ctx.beginPath();
                // Nose
                ctx.moveTo(0, -40); 
                // Top fuselage
                ctx.lineTo(10, 10);
                // Wing root top
                ctx.lineTo(30, 20); 
                // Wing tip
                ctx.lineTo(10, 30); 
                // Wing root bottom
                ctx.lineTo(0, 30); 
                // Tail bottom center
                ctx.lineTo(-10, 30); 
                // Left Wing root bottom
                ctx.lineTo(-30, 20); 
                // Left Wing tip
                ctx.lineTo(-10, 10); 
                // Top fuselage back
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // 3. Cockpit
                ctx.fillStyle = '#00d2ff'; // Cyan glass
                ctx.beginPath();
                ctx.moveTo(0, -10);
                ctx.lineTo(3, 5);
                ctx.lineTo(-3, 5);
                ctx.fill();

                // 4. Cockpit Glow (Lighting)
                ctx.shadowColor = '#00d2ff';
                ctx.shadowBlur = 15;
                ctx.fillStyle = 'rgba(0, 210, 242, 0.8)';
                ctx.fill();
                ctx.shadowBlur = 0; // Reset shadow

                ctx.restore();
            }
        }

        // 
        // END OF PART 2: CORE SYSTEMS
        // NEXT: PART 3 (Game Logic, Wallet, UI Controller)
        //
    </script>
    <!-- 
       ================================================================
       PART 3: GAME LOGIC & WALLET BRIDGE (The Brain)
       ================================================================
    -->

    <script>
        /**
         * ==============================================================================
         * 6. TONCONNECT WALLET SYSTEM
         * Manages real wallet connection using the SDK loaded in HTML head.
         * ==============================================================================
         */
        class WalletBridge {
            constructor(gameController) {
                this.game = gameController;
                this.connected = false;
                this.address = null;
                
                // Manifest definition for TonConnect
                // Using a Data URI to avoid needing an external manifest.json file
                this.manifestUrl = 'data:application/manifest+json;base64,' + btoa(JSON.stringify({
                    url: window.location.href,
                    name: "Star Crash Enterprise",
                    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png"
                }));

                // Initialize TonConnect
                this.tonConnect = new TonConnect({ manifestUrl: this.manifestUrl });

                // Restore previous session on load
                this.tonConnect.restoreConnection().then((wallet) => {
                    if (wallet) {
                        this.handleConnect(wallet);
                    }
                });

                // Listen for status changes
                this.tonConnect.onStatusChange((wallet) => {
                    if (wallet) {
                        this.handleConnect(wallet);
                    } else {
                        this.handleDisconnect();
                    }
                });
            }

            async toggleConnection() {
                if (this.connected) {
                    await this.tonConnect.disconnect();
                } else {
                    await this.tonConnect.connect();
                }
            }

            handleConnect(wallet) {
                this.connected = true;
                this.address = wallet.account.address;
                
                // Update UI to show connected state
                const btn = document.getElementById('btn-wallet-connect');
                const depositAddr = document.getElementById('deposit-address-display');

                const friendlyAddress = this.address.slice(0, 6) + '...' + this.address.slice(-4);
                
                btn.innerText = friendlyAddress;
                btn.classList.add('active');
                
                if(depositAddr) depositAddr.innerText = this.address;

                // In a real app, you would fetch balance from your backend here.
                // For this standalone demo, we credit a bonus amount.
                console.log("Wallet Connected:", this.address);
                uiManager.toast("Wallet Connected Successfully", "success");
                
                this.game.setBalance('TON', 100.00); // Demo funds
            }

            handleDisconnect() {
                this.connected = false;
                this.address = null;
                
                const btn = document.getElementById('btn-wallet-connect');
                btn.innerText = "CONNECT";
                btn.classList.remove('active');
                
                this.game.setBalance('TON', 0.00);
            }

            getAddress() {
                return this.address;
            }
        }

        /**
         * ==============================================================================
         * 7. GAME CONTROLLER (The Brain)
         * Orchestrates State, Logic, Loop, and DOM Updates.
         * ==============================================================================
         */
        class GameController {
            constructor() {
                // --- GAME STATE ---
                this.state = {
                    phase: 'INTRO',      // INTRO, COUNTDOWN, RUNNING, CRASHED
                    multiplier: 1.00,
                    currency: 'TON',
                    balances: {
                        TON: 0.00,
                        STAR: 0.00
                    },
                    bet: 0.00,
                    hasBet: false,
                    autoCashout: 2.00,
                    crashPoint: 0,
                    startTime: 0,
                    lang: 'en'
                };

                // --- SYSTEMS INSTANTIATION ---
                this.audio = new AudioEngine();
                this.particles = new ParticleSystem();
                
                // Canvas Setup
                this.canvas = document.getElementById('render-canvas');
                this.ctx = this.canvas.getContext('2d');
                this.resizeCanvas();
                window.addEventListener('resize', () => this.resizeCanvas());

                // 3D Scene Setup
                this.camera = new Camera3D(this.canvas.width, this.canvas.height);
                this.starfield = new Starfield(400);
                this.ship = new ShipGraphics();

                // DOM Element References
                this.ui = {
                    landing: document.getElementById('landing-page'),
                    gameInterface: document.getElementById('game-interface'),
                    multiplier: document.getElementById('disp-multiplier'),
                    status: document.getElementById('disp-status'),
                    btnMain: document.getElementById('btn-main-action'),
                    balance: document.getElementById('disp-balance'),
                    betInput: document.getElementById('input-bet'),
                    timer: document.getElementById('disp-timer'),
                    history: document.getElementById('list-history'),
                    optTon: document.getElementById('opt-ton'),
                    optStar: document.getElementById('opt-star')
                };

                // Bind Wallet
                this.wallet = new WalletBridge(this);

                // Start Loop
                this.loop();
                
                // Bind UI Events
                this.bindEvents();
            }

            resizeCanvas() {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
                if(this.camera) this.camera.resize(this.canvas.width, this.canvas.height);
            }

            bindEvents() {
                // Start Button
                document.getElementById('btn-enter-game').addEventListener('click', () => {
                    this.startSession();
                });

                // Currency Toggle
                this.ui.optTon.addEventListener('click', () => this.setCurrency('TON'));
                this.ui.optStar.addEventListener('click', () => this.setCurrency('STAR'));

                // Main Action Button (Bet/Cashout)
                this.ui.btnMain.addEventListener('click', () => {
                    this.handleMainAction();
                });

                // Header Buttons
                document.getElementById('btn-wallet-connect').addEventListener('click', () => {
                    this.wallet.toggleConnection();
                });
            }

            startSession() {
                // Audio Context must be resumed by user interaction
                this.audio.resume();

                // Transition UI
                this.ui.landing.classList.add('hidden');
                this.ui.gameInterface.classList.add('visible');

                // Start Game Loop
                this.startRound();
            }

            setCurrency(curr) {
                if (this.state.phase === 'RUNNING' && this.state.hasBet) return; // Lock during active bet
                this.state.currency = curr;
                
                // Update UI toggles
                this.ui.optTon.classList.toggle('active', curr === 'TON');
                this.ui.optStar.classList.toggle('active', curr === 'STAR');

                this.updateBalanceDisplay();
            }

            setBalance(curr, amount) {
                this.state.balances[curr] = amount;
                this.updateBalanceDisplay();
            }

            updateBalanceDisplay() {
                this.ui.balance.innerText = Utils.formatCurrency(this.state.balances[this.state.currency]);
            }

            /* --- GAME LOOP STATES --- */

            startRound() {
                this.state.phase = 'COUNTDOWN';
                this.state.multiplier = 1.00;
                this.state.hasBet = false;
                this.ui.multiplier.innerText = "1.00x";
                this.ui.multiplier.style.color = "white";

                this.updateActionButton('WAITING');

                let timeLeft = 5.0;
                const countdownInterval = setInterval(() => {
                    if (this.state.phase !== 'COUNTDOWN') {
                        clearInterval(countdownInterval);
                        return;
                    }

                    this.ui.timer.innerText = timeLeft.toFixed(1) + "s";
                    this.ui.status.innerText = "NEXT ROUND";
                    this.ui.status.style.color = "white";

                    // Audio Tick
                    if (Math.floor(timeLeft * 10) % 10 === 0) {
                        this.audio.playCountdown();
                    }

                    timeLeft -= 0.1;
                    if (timeLeft <= 0) {
                        clearInterval(countdownInterval);
                        this.runGame();
                    }
                }, 100);
            }

            runGame() {
                this.state.phase = 'RUNNING';
                this.state.startTime = Date.now();

                // Generate Crash Point using standard formula (House Edge ~4%)
                // E = 0.96 / (1 - Random)
                const e = Math.random();
                this.state.crashPoint = Math.max(1.00, 0.96 / (1 - e));
                
                // Cap for gameplay experience in demo (Real casinos don't cap)
                if (this.state.crashPoint > 100) this.state.crashPoint = 100;

                console.log(`[CRASH-LOG] Generated Point: ${this.state.crashPoint.toFixed(4)}x`);

                // UI Updates
                this.updateActionButton(this.state.hasBet ? 'CASHOUT' : 'WAITING');
                this.ui.status.innerText = "LIVE";
                this.ui.status.style.color = "var(--brand-primary)";
                this.ui.timer.innerText = "LIVE";
                this.ui.timer.style.color = "var(--brand-success)";
            }

            handleMainAction() {
                if (this.state.phase === 'COUNTDOWN') {
                    this.placeBet();
                } else if (this.state.phase === 'RUNNING' && this.state.hasBet) {
                    this.cashOut();
                }
            }

            placeBet() {
                const amount = parseFloat(this.ui.betInput.value);
                const currentBalance = this.state.balances[this.state.currency];

                if (isNaN(amount) || amount <= 0) return;

                if (amount > currentBalance) {
                    uiManager.toast("Insufficient Funds", "error");
                    return;
                }

                this.state.bet = amount;
                this.state.hasBet = true;
                
                // Deduct Balance
                this.state.balances[this.state.currency] -= amount;
                this.updateBalanceDisplay();

                uiManager.toast(`Bet Placed: ${amount}`, "success");
                this.updateActionButton('BET_PLACED');
            }

            cashOut() {
                if (!this.state.hasBet) return;

                const winAmount = this.state.bet * this.state.multiplier;
                this.state.balances[this.state.currency] += winAmount;
                
                this.state.hasBet = false;
                this.updateBalanceDisplay();

                this.audio.playWin();
                uiManager.toast(`Cashed Out: ${winAmount.toFixed(2)}`, "success");
                this.updateActionButton('WAITING');
            }

            triggerCrash() {
                this.state.phase = 'CRASHED';
                this.state.multiplier = this.state.crashPoint;

                // Visuals
                this.particles.explode(0, 50, 100, 80); // Explosion at 3D origin
                this.audio.playCrash();

                // UI
                this.ui.multiplier.innerText = this.state.crashPoint.toFixed(2) + "x";
                this.ui.multiplier.style.color = "var(--brand-danger)";
                this.ui.status.innerText = "CRASHED";
                this.ui.status.style.color = "var(--brand-danger)";
                this.ui.timer.style.color = "white";
                this.updateActionButton('CRASHED');

                // Logic
                if (this.state.hasBet) {
                    this.state.hasBet = false;
                    this.state.bet = 0;
                    // User lost money (already deducted)
                    uiManager.toast("Crashed!", "error");
                }

                this.addToHistory(this.state.crashPoint);

                // Reset delay
                setTimeout(() => {
                    this.startRound();
                }, 3000);
            }

            /* --- MAIN RENDER LOOP --- */

            loop() {
                requestAnimationFrame(() => this.loop());

                // 1. Logic Update
                if (this.state.phase === 'RUNNING') {
                    const now = Date.now();
                    const elapsed = (now - this.state.startTime) / 1000;

                    // Exponential Growth Formula
                    // 1 + (time^1.6 * 0.08)
                    this.state.multiplier = 1.00 + Math.pow(elapsed, 1.6) * 0.08;

                    if (this.state.multiplier >= this.state.crashPoint) {
                        this.triggerCrash();
                    } else {
                        // Check Auto-Cashout (Not implemented in UI but logic exists)
                        // Update DOM Text
                        this.ui.multiplier.innerText = this.state.multiplier.toFixed(2) + "x";
                        
                        // Dynamic Color
                        if (this.state.multiplier > 2.0) {
                            this.ui.multiplier.style.color = "var(--brand-accent)";
                        } else {
                            this.ui.multiplier.style.color = "white";
                        }
                    }
                }

                // 2. Physics & Graphics Update
                let renderSpeed = 0;
                if (this.state.phase === 'RUNNING') {
                    renderSpeed = this.state.multiplier;
                }

                // Update Physics
                this.particles.update();
                this.starfield.update(renderSpeed);

                // 3. Draw Frame
                // Clear
                this.ctx.fillStyle = '#050507';
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

                // Draw Stars
                this.starfield.draw(this.ctx, this.camera, this.state.multiplier);

                // Draw Ship (Only if not crashed)
                if (this.state.phase !== 'CRASHED') {
                    this.ship.draw(this.ctx, this.canvas.width, this.canvas.height, Math.sin(Date.now()/500)*0.2, Date.now());
                }

                // Draw Particles
                this.particles.draw(this.ctx, this.camera);
            }

            /* --- UI HELPERS --- */

            updateActionButton(state) {
                const btn = this.ui.btnMain;
                btn.className = 'btn-main-action'; // Reset classes

                if (state === 'WAITING') {
                    btn.classList.add('state-waiting');
                    btn.innerText = "WAITING";
                } else if (state === 'BET_PLACED') {
                    btn.classList.add('state-bet');
                    btn.innerText = "BET PLACED";
                    btn.style.opacity = "0.7";
                } else if (state === 'CASHOUT') {
                    btn.classList.add('state-cashout');
                    btn.innerText = "CASH OUT";
                    btn.style.opacity = "1";
                } else if (state === 'CRASHED') {
                    btn.classList.add('state-crashed');
                    btn.innerText = "CRASHED";
                }
            }

            addToHistory(val) {
                const el = document.createElement('div');
                el.className = 'history-item';
                el.innerText = val.toFixed(2) + 'x';
                
                if (val < 2) el.classList.add('h-low');
                else if (val < 10) el.classList.add('h-med');
                else el.classList.add('h-high');

                this.ui.history.prepend(el);
                if (this.ui.history.children.length > 15) {
                    this.ui.history.lastChild.remove();
                }
            }
        }

        /**
         * ==============================================================================
         * 8. UI MANAGER (Modals & Toasts)
         * Global UI helpers
         * ==============================================================================
         */
        const uiManager = {
            toast: (msg, type = 'success') => {
                const container = document.getElementById('toast-container');
                const el = document.createElement('div');
                el.className = `toast ${type}`;
                el.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-check' : 'fa-triangle-exclamation'}"></i> ${msg}`;
                container.appendChild(el);

                setTimeout(() => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(-20px)';
                    setTimeout(() => el.remove(), 300);
                }, 3000);
            },
            
            closeModal: (id) => {
                document.getElementById(id).classList.remove('open');
            },

            openModal: (id) => {
                document.getElementById(id).classList.add('open');
            }
        };

        /**
         * ==============================================================================
         * INITIALIZATION
         * ==============================================================================
         */
        window.addEventListener('DOMContentLoaded', () => {
            // Initialize Game
            const game = new GameController();

            // Expose Withdraw Logic (Simple frontend simulation)
            window.withdrawSystem = {
                setCurrency: (c) => {
                    const btnTon = document.getElementById('wd-btn-ton');
                    const btnStar = document.getElementById('wd-btn-star');
                    
                    if(c === 'TON') {
                        btnTon.style.background = 'var(--brand-primary)';
                        btnStar.style.background = '#333';
                    } else {
                        btnTon.style.background = '#333';
                        btnStar.style.background = 'var(--brand-accent)';
                    }
                },
                submit: () => {
                    const amt = parseFloat(document.getElementById('wd-input-amount').value);
                    if (amt > game.state.balances['TON']) {
                        uiManager.toast("Insufficient Balance", "error");
                        return;
                    }
                    
                    // Simulate API Call
                    const btn = document.querySelector('#modal-withdraw .btn-modal-action');
                    const originalText = btn.innerText;
                    btn.innerText = "PROCESSING...";
                    
                    setTimeout(() => {
                        game.state.balances['TON'] -= amt;
                        game.updateBalanceDisplay();
                        uiManager.closeModal('modal-withdraw');
                        uiManager.toast("Withdraw Request Sent", "success");
                        btn.innerText = originalText;
                    }, 2000);
                }
            };

            // Modal Triggers
            document.getElementById('btn-deposit-trigger').addEventListener('click', () => uiManager.openModal('modal-deposit'));
            document.getElementById('btn-withdraw-trigger').addEventListener('click', () => uiManager.openModal('modal-withdraw'));
        });

    </script>
</body>
</html>
