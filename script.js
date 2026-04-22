<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>GemSpin Casino</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        display: ['Orbitron', 'monospace'],
                        body: ['Outfit', 'sans-serif'],
                    }
                }
            }
        }
    </script>

    <!-- ========== PARTE 1: ESTILOS BASE Y VARIABLES ========== -->
    <style>
        :root {
            --bg-primary: #0B0E17;
            --bg-secondary: #12162A;
            --bg-tertiary: #1A1F38;
            --bg-card: #151A30;
            --accent-gold: #F5A623;
            --accent-gold-light: #FFD56B;
            --accent-gold-dim: rgba(245, 166, 35, 0.12);
            --accent-emerald: #00E676;
            --accent-emerald-dim: rgba(0, 230, 118, 0.12);
            --accent-cyan: #00E5FF;
            --text-primary: #FFFFFF;
            --text-secondary: #8B92A5;
            --text-muted: #4A5170;
            --border-color: rgba(255, 255, 255, 0.06);
            --border-hover: rgba(255, 255, 255, 0.15);
            --danger: #FF4757;
            --success: #00E676;
            --font-display: 'Orbitron', monospace;
            --font-body: 'Outfit', sans-serif;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        html, body {
            font-family: var(--font-body);
            background: var(--bg-primary);
            color: var(--text-primary);
            overflow-x: hidden;
            min-height: 100vh;
            scroll-behavior: smooth;
        }
        body { padding-bottom: 80px; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg-primary); }
        ::-webkit-scrollbar-thumb { background: var(--bg-tertiary); border-radius: 4px; }

        /* ========== PARTE 2: FONDO ANIMADO ========== */
        .bg-glow {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 0; overflow: hidden;
        }
        .bg-glow .blob {
            position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.3;
        }
        .blob-1 {
            width: 400px; height: 400px; background: #F5A623;
            top: -100px; right: -100px;
            animation: blobFloat1 18s ease-in-out infinite;
        }
        .blob-2 {
            width: 350px; height: 350px; background: #00E676;
            bottom: -80px; left: -80px;
            animation: blobFloat2 22s ease-in-out infinite;
        }
        .blob-3 {
            width: 250px; height: 250px; background: #00E5FF;
            top: 50%; left: 50%; transform: translate(-50%, -50%);
            animation: blobFloat3 15s ease-in-out infinite;
        }
        @keyframes blobFloat1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-60px, 80px) scale(1.1); }
            66% { transform: translate(40px, -30px) scale(0.9); }
        }
        @keyframes blobFloat2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(70px, -60px) scale(1.15); }
            66% { transform: translate(-40px, 40px) scale(0.85); }
        }
        @keyframes blobFloat3 {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.15; }
            50% { transform: translate(-40%, -60%) scale(1.2); opacity: 0.25; }
        }

        /* ========== PARTE 3: HEADER Y NAVEGACION ========== */
        .app-header {
            position: sticky; top: 0; z-index: 50;
            background: rgba(11, 14, 23, 0.85);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-color);
            padding: 12px 16px;
        }
        .logo-text {
            font-family: var(--font-display);
            font-weight: 900; font-size: 1.3rem;
            background: linear-gradient(135deg, var(--accent-gold), var(--accent-gold-light));
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .balance-chip {
            display: flex; align-items: center; gap: 6px;
            background: var(--bg-tertiary); border: 1px solid var(--border-color);
            border-radius: 20px; padding: 6px 12px; font-size: 0.8rem; font-weight: 600;
            cursor: pointer; transition: all 0.2s;
        }
        .balance-chip:hover { border-color: var(--border-hover); }
        .balance-chip .ton-icon { color: #0098EA; font-size: 0.75rem; }
        .balance-chip .star-icon { color: var(--accent-gold); font-size: 0.75rem; }

        .bottom-nav {
            position: fixed; bottom: 0; left: 0; right: 0; z-index: 50;
            background: rgba(11, 14, 23, 0.92);
            backdrop-filter: blur(20px);
            border-top: 1px solid var(--border-color);
            display: flex; justify-content: space-around; padding: 8px 0 12px;
        }
        .nav-item {
            display: flex; flex-direction: column; align-items: center; gap: 3px;
            font-size: 0.65rem; color: var(--text-muted); cursor: pointer;
            transition: color 0.2s; padding: 4px 12px;
        }
        .nav-item.active { color: var(--accent-gold); }
        .nav-item i { font-size: 1.1rem; }

        /* ========== PARTE 4: TARJETAS DE JUEGOS ========== */
        .game-card {
            position: relative; overflow: hidden;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px; padding: 20px;
            cursor: pointer; transition: all 0.3s;
        }
        .game-card:hover {
            border-color: var(--border-hover);
            transform: translateY(-4px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }
        .game-card::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
            background: linear-gradient(90deg, var(--accent-gold), var(--accent-emerald));
            opacity: 0; transition: opacity 0.3s;
        }
        .game-card:hover::before { opacity: 1; }
        .game-card-icon {
            width: 56px; height: 56px; border-radius: 14px;
            display: flex; align-items: center; justify-content: center;
            font-size: 1.5rem; margin-bottom: 12px;
        }
        .game-card h3 {
            font-family: var(--font-display); font-size: 0.85rem;
            font-weight: 700; margin-bottom: 4px;
        }
        .game-card p { font-size: 0.72rem; color: var(--text-secondary); line-height: 1.4; }

        /* ========== PARTE 5: MODALES ========== */
        .modal-overlay {
            position: fixed; inset: 0; z-index: 100;
            background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(8px);
            display: none; align-items: flex-end; justify-content: center;
            opacity: 0; transition: opacity 0.3s;
        }
        .modal-overlay.active { display: flex; opacity: 1; }
        .modal-content {
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 24px 24px 0 0;
            width: 100%; max-width: 500px; max-height: 92vh;
            overflow-y: auto; transform: translateY(100%);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .modal-overlay.active .modal-content { transform: translateY(0); }
        .modal-header {
            display: flex; align-items: center; justify-content: space-between;
            padding: 20px 20px 12px; position: sticky; top: 0;
            background: var(--bg-secondary); z-index: 2;
            border-bottom: 1px solid var(--border-color);
        }
        .modal-header h2 {
            font-family: var(--font-display); font-size: 1rem; font-weight: 700;
        }
        .modal-close {
            width: 32px; height: 32px; border-radius: 50%;
            background: var(--bg-tertiary); border: 1px solid var(--border-color);
            color: var(--text-secondary); display: flex; align-items: center;
            justify-content: center; cursor: pointer; transition: all 0.2s;
            font-size: 0.8rem;
        }
        .modal-close:hover { background: var(--danger); color: #fff; border-color: var(--danger); }
        .modal-body { padding: 20px; }

        /* ========== PARTE 6: COMPONENTES DE JUEGO ========== */
        .bet-section {
            background: var(--bg-tertiary); border-radius: 12px;
            padding: 16px; margin-bottom: 16px;
            border: 1px solid var(--border-color);
        }
        .bet-label {
            font-size: 0.7rem; color: var(--text-secondary);
            text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;
        }
        .bet-input-row {
            display: flex; gap: 8px; align-items: center;
        }
        .bet-input {
            flex: 1; background: var(--bg-primary); border: 1px solid var(--border-color);
            border-radius: 10px; padding: 10px 14px; color: var(--text-primary);
            font-family: var(--font-display); font-size: 0.9rem; font-weight: 700;
            outline: none; transition: border-color 0.2s;
        }
        .bet-input:focus { border-color: var(--accent-gold); }
        .bet-quick-btn {
            padding: 8px 12px; border-radius: 8px; font-size: 0.7rem;
            font-weight: 600; background: var(--bg-primary);
            border: 1px solid var(--border-color); color: var(--text-secondary);
            cursor: pointer; transition: all 0.2s; white-space: nowrap;
        }
        .bet-quick-btn:hover { border-color: var(--accent-gold); color: var(--accent-gold); }

        .currency-toggle {
            display: flex; background: var(--bg-primary);
            border-radius: 10px; padding: 3px; margin-bottom: 16px;
            border: 1px solid var(--border-color);
        }
        .currency-btn {
            flex: 1; padding: 8px; text-align: center; border-radius: 8px;
            font-size: 0.75rem; font-weight: 600; cursor: pointer;
            transition: all 0.2s; color: var(--text-secondary);
            display: flex; align-items: center; justify-content: center; gap: 6px;
        }
        .currency-btn.active {
            background: var(--accent-gold-dim); color: var(--accent-gold);
        }

        .play-btn {
            width: 100%; padding: 14px; border: none; border-radius: 12px;
            font-family: var(--font-display); font-size: 0.9rem; font-weight: 700;
            cursor: pointer; transition: all 0.2s;
            background: linear-gradient(135deg, var(--accent-gold), #E8961E);
            color: #000; text-transform: uppercase; letter-spacing: 1px;
        }
        .play-btn:hover { transform: scale(1.02); box-shadow: 0 4px 20px rgba(245, 166, 35, 0.3); }
        .play-btn:active { transform: scale(0.98); }
        .play-btn:disabled {
            opacity: 0.4; cursor: not-allowed; transform: none;
            box-shadow: none;
        }

        .cashout-btn {
            width: 100%; padding: 14px; border: none; border-radius: 12px;
            font-family: var(--font-display); font-size: 0.9rem; font-weight: 700;
            cursor: pointer; transition: all 0.2s;
            background: linear-gradient(135deg, var(--accent-emerald), #00C853);
            color: #000; text-transform: uppercase; letter-spacing: 1px;
            animation: pulseGlow 1.5s ease-in-out infinite;
        }
        @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 10px rgba(0, 230, 118, 0.3); }
            50% { box-shadow: 0 0 25px rgba(0, 230, 118, 0.5); }
        }

        .result-display {
            text-align: center; padding: 20px;
            border-radius: 12px; margin: 16px 0;
        }
        .result-display.win {
            background: var(--accent-emerald-dim);
            border: 1px solid rgba(0, 230, 118, 0.2);
        }
        .result-display.lose {
            background: rgba(255, 71, 87, 0.1);
            border: 1px solid rgba(255, 71, 87, 0.2);
        }
        .result-amount {
            font-family: var(--font-display); font-size: 1.8rem; font-weight: 900;
        }
        .result-label { font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px; }

        /* ========== PARTE 7: ESTILOS ESPECIFICOS DE JUEGOS ========== */
        /* Dice */
        .dice-display {
            width: 120px; height: 120px; margin: 0 auto 16px;
            background: var(--bg-tertiary); border: 2px solid var(--accent-gold);
            border-radius: 20px; display: flex; align-items: center; justify-content: center;
            font-family: var(--font-display); font-size: 2.5rem; font-weight: 900;
            color: var(--accent-gold); position: relative; overflow: hidden;
        }
        .dice-display.rolling { animation: diceShake 0.1s infinite; }
        @keyframes diceShake {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            75% { transform: rotate(5deg); }
        }
        .dice-slider-container { margin: 12px 0; }
        .dice-slider {
            -webkit-appearance: none; width: 100%; height: 6px;
            border-radius: 3px; outline: none;
            background: linear-gradient(90deg, var(--accent-emerald) 0%, var(--accent-emerald) var(--pct, 50%), var(--bg-primary) var(--pct, 50%));
        }
        .dice-slider::-webkit-slider-thumb {
            -webkit-appearance: none; width: 22px; height: 22px;
            border-radius: 50%; background: var(--accent-gold); cursor: pointer;
            box-shadow: 0 0 10px rgba(245, 166, 35, 0.4);
        }
        .over-under-toggle {
            display: flex; gap: 8px; margin: 12px 0;
        }
        .ou-btn {
            flex: 1; padding: 10px; text-align: center; border-radius: 10px;
            font-family: var(--font-display); font-size: 0.75rem; font-weight: 700;
            cursor: pointer; transition: all 0.2s;
            background: var(--bg-primary); border: 1px solid var(--border-color);
            color: var(--text-secondary);
        }
        .ou-btn.active {
            background: var(--accent-gold-dim); border-color: var(--accent-gold);
            color: var(--accent-gold);
        }
        .dice-info {
            display: flex; justify-content: space-between;
            font-size: 0.72rem; color: var(--text-secondary); margin-top: 8px;
        }
        .dice-info span { color: var(--accent-gold); font-weight: 600; }

        /* Coin Flip */
        .coin-container {
            perspective: 800px; width: 120px; height: 120px;
            margin: 20px auto;
        }
        .coin {
            width: 100%; height: 100%; position: relative;
            transform-style: preserve-3d; transition: transform 0.1s;
        }
        .coin.flipping { animation: coinFlip 1.5s ease-out forwards; }
        .coin.flipping-tails { animation: coinFlipTails 1.5s ease-out forwards; }
        .coin-face {
            position: absolute; inset: 0; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-family: var(--font-display); font-weight: 900; font-size: 1.2rem;
            backface-visibility: hidden; border: 3px solid;
        }
        .coin-heads {
            background: linear-gradient(135deg, #F5A623, #FFD56B);
            color: #000; border-color: #E8961E;
        }
        .coin-tails {
            background: linear-gradient(135deg, #A0A0A0, #D0D0D0);
            color: #000; border-color: #888;
            transform: rotateY(180deg);
        }
        @keyframes coinFlip {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(1800deg); }
        }
        @keyframes coinFlipTails {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(1980deg); }
        }
        .coin-choice {
            display: flex; gap: 10px; margin: 16px 0;
        }
        .coin-choice-btn {
            flex: 1; padding: 14px; text-align: center; border-radius: 12px;
            cursor: pointer; transition: all 0.2s;
            background: var(--bg-tertiary); border: 2px solid var(--border-color);
            font-family: var(--font-display); font-weight: 700; font-size: 0.8rem;
        }
        .coin-choice-btn.selected {
            border-color: var(--accent-gold);
            background: var(--accent-gold-dim);
        }

        /* Wheel */
        .wheel-wrapper {
            position: relative; width: 260px; height: 260px;
            margin: 20px auto;
        }
        .wheel-canvas { width: 100%; height: 100%; }
        .wheel-pointer {
            position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
            width: 0; height: 0; border-left: 12px solid transparent;
            border-right: 12px solid transparent; border-top: 24px solid var(--accent-gold);
            filter: drop-shadow(0 2px 6px rgba(245, 166, 35, 0.5));
            z-index: 2;
        }
        .wheel-center {
            position: absolute; top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 40px; height: 40px; border-radius: 50%;
            background: var(--bg-primary); border: 3px solid var(--accent-gold);
            z-index: 2; display: flex; align-items: center; justify-content: center;
        }
        .wheel-center i { color: var(--accent-gold); font-size: 0.8rem; }

        /* Mines */
        .mines-grid {
            display: grid; grid-template-columns: repeat(5, 1fr);
            gap: 8px; margin: 16px 0; max-width: 320px; margin-left: auto; margin-right: auto;
        }
        .mine-tile {
            aspect-ratio: 1; border-radius: 10px; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            font-size: 1.2rem; transition: all 0.2s;
            background: var(--bg-tertiary); border: 1px solid var(--border-color);
        }
        .mine-tile:hover:not(.revealed) {
            border-color: var(--accent-gold); background: var(--accent-gold-dim);
        }
        .mine-tile.revealed.gem {
            background: var(--accent-emerald-dim); border-color: var(--accent-emerald);
            color: var(--accent-emerald);
        }
        .mine-tile.revealed.mine {
            background: rgba(255, 71, 87, 0.15); border-color: var(--danger);
            color: var(--danger);
        }
        .mine-tile.revealed { cursor: default; animation: tileReveal 0.3s ease; }
        @keyframes tileReveal {
            0% { transform: scale(0.8); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
        }
        .mines-count-selector {
            display: flex; gap: 6px; flex-wrap: wrap; margin: 12px 0;
        }
        .mines-count-btn {
            padding: 6px 14px; border-radius: 8px; font-size: 0.75rem;
            font-weight: 600; cursor: pointer; transition: all 0.2s;
            background: var(--bg-primary); border: 1px solid var(--border-color);
            color: var(--text-secondary);
        }
        .mines-count-btn.active {
            background: var(--accent-gold-dim); border-color: var(--accent-gold);
            color: var(--accent-gold);
        }

        /* Crash */
        .crash-canvas-wrapper {
            position: relative; width: 100%; height: 240px;
            background: var(--bg-tertiary); border-radius: 12px;
            overflow: hidden; margin: 16px 0;
            border: 1px solid var(--border-color);
        }
        .crash-multiplier-overlay {
            position: absolute; top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            font-family: var(--font-display); font-size: 2.5rem; font-weight: 900;
            pointer-events: none; z-index: 2;
        }
        .crash-multiplier-overlay.crashed { color: var(--danger); }
        .crash-multiplier-overlay.running { color: var(--accent-emerald); }
        .crash-multiplier-overlay.waiting { color: var(--text-muted); font-size: 1rem; }

        /* ========== PARTE 8: WALLET MODAL ========== */
        .wallet-option {
            display: flex; align-items: center; gap: 14px; padding: 14px;
            background: var(--bg-tertiary); border: 1px solid var(--border-color);
            border-radius: 12px; cursor: pointer; transition: all 0.2s;
            margin-bottom: 10px;
        }
        .wallet-option:hover {
            border-color: var(--border-hover); transform: translateX(4px);
        }
        .wallet-option-icon {
            width: 44px; height: 44px; border-radius: 10px;
            display: flex; align-items: center; justify-content: center;
            font-size: 1.2rem;
        }
        .wallet-option-name { font-weight: 600; font-size: 0.9rem; }
        .wallet-option-desc { font-size: 0.7rem; color: var(--text-secondary); }
        .connected-info {
            text-align: center; padding: 20px;
        }
        .wallet-address {
            font-family: monospace; font-size: 0.8rem; color: var(--accent-cyan);
            background: var(--bg-primary); padding: 8px 14px; border-radius: 8px;
            margin: 12px 0; word-break: break-all;
        }
        .disconnect-btn {
            padding: 10px 20px; border-radius: 10px; border: 1px solid var(--danger);
            background: rgba(255, 71, 87, 0.1); color: var(--danger);
            font-weight: 600; font-size: 0.8rem; cursor: pointer; transition: all 0.2s;
        }
        .disconnect-btn:hover { background: var(--danger); color: #fff; }

        /* ========== PARTE 9: TOAST Y ANIMACIONES ========== */
        .toast-container {
            position: fixed; top: 80px; right: 16px; z-index: 200;
            display: flex; flex-direction: column; gap: 8px;
        }
        .toast {
            padding: 12px 18px; border-radius: 10px; font-size: 0.8rem;
            font-weight: 500; animation: toastIn 0.3s ease, toastOut 0.3s ease 2.7s forwards;
            max-width: 300px; backdrop-filter: blur(10px);
        }
        .toast.success {
            background: rgba(0, 230, 118, 0.15); border: 1px solid rgba(0, 230, 118, 0.3);
            color: var(--accent-emerald);
        }
        .toast.error {
            background: rgba(255, 71, 87, 0.15); border: 1px solid rgba(255, 71, 87, 0.3);
            color: var(--danger);
        }
        .toast.info {
            background: rgba(0, 229, 255, 0.15); border: 1px solid rgba(0, 229, 255, 0.3);
            color: var(--accent-cyan);
        }
        @keyframes toastIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes toastOut { from { opacity: 1; } to { opacity: 0; transform: translateY(-10px); } }

        /* Winner ticker */
        .winner-ticker {
            overflow: hidden; white-space: nowrap;
            background: var(--bg-secondary); border: 1px solid var(--border-color);
            border-radius: 10px; padding: 8px 0; margin-bottom: 20px;
        }
        .ticker-inner {
            display: inline-block; animation: ticker 25s linear infinite;
        }
        .ticker-item {
            display: inline-flex; align-items: center; gap: 6px;
            margin-right: 30px; font-size: 0.72rem; color: var(--text-secondary);
        }
        .ticker-item .amount { color: var(--accent-emerald); font-weight: 600; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* Stats cards */
        .stat-card {
            background: var(--bg-card); border: 1px solid var(--border-color);
            border-radius: 12px; padding: 14px; text-align: center;
        }
        .stat-value {
            font-family: var(--font-display); font-weight: 700; font-size: 1.1rem;
        }
        .stat-label { font-size: 0.65rem; color: var(--text-secondary); margin-top: 4px; }

        /* Responsive */
        @media (max-width: 480px) {
            .logo-text { font-size: 1rem; }
            .balance-chip { padding: 4px 8px; font-size: 0.7rem; }
            .game-card { padding: 14px; }
            .game-card h3 { font-size: 0.75rem; }
            .modal-content { max-height: 95vh; }
        }

        /* Daily bonus */
        .bonus-banner {
            background: linear-gradient(135deg, rgba(245, 166, 35, 0.1), rgba(0, 230, 118, 0.1));
            border: 1px solid rgba(245, 166, 35, 0.2);
            border-radius: 14px; padding: 16px; margin-bottom: 20px;
            display: flex; align-items: center; gap: 14px; cursor: pointer;
            transition: all 0.3s;
        }
        .bonus-banner:hover { transform: scale(1.01); border-color: var(--accent-gold); }
        .bonus-icon {
            width: 48px; height: 48px; border-radius: 50%;
            background: var(--accent-gold-dim); display: flex;
            align-items: center; justify-content: center;
            font-size: 1.3rem; color: var(--accent-gold);
            animation: bounce 2s infinite;
        }
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }
        .bonus-text h4 { font-size: 0.85rem; font-weight: 600; }
        .bonus-text p { font-size: 0.7rem; color: var(--text-secondary); }

        /* History list */
        .history-item {
            display: flex; justify-content: space-between; align-items: center;
            padding: 10px 0; border-bottom: 1px solid var(--border-color);
            font-size: 0.78rem;
        }
        .history-item:last-child { border-bottom: none; }

        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                transition-duration: 0.01ms !important;
            }
        }
    </style>
</head>
<body>

    <!-- ========== PARTE 10: FONDO ANIMADO ========== -->
    <div class="bg-glow" aria-hidden="true">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
    </div>

    <!-- ========== PARTE 11: HEADER ========== -->
    <header class="app-header">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#F5A623,#FFD56B);display:flex;align-items:center;justify-content:center;">
                    <i class="fas fa-gem" style="color:#000;font-size:1rem;"></i>
                </div>
                <span class="logo-text">GEMSPIN</span>
            </div>
            <div class="flex items-center gap-2">
                <div class="balance-chip" id="tonBalanceChip" onclick="openModal('walletModal')">
                    <i class="fas fa-circle ton-icon"></i>
                    <span id="tonBalanceDisplay">0.00</span>
                </div>
                <div class="balance-chip" id="starsBalanceChip" onclick="openModal('walletModal')">
                    <i class="fas fa-star star-icon"></i>
                    <span id="starsBalanceDisplay">0</span>
                </div>
                <div style="width:34px;height:34px;border-radius:50%;background:var(--bg-tertiary);border:1px solid var(--border-color);display:flex;align-items:center;justify-content:center;cursor:pointer;" onclick="openModal('walletModal')" id="walletIconBtn">
                    <i class="fas fa-wallet" style="font-size:0.8rem;color:var(--text-secondary);"></i>
                </div>
            </div>
        </div>
    </header>

    <!-- ========== PARTE 12: CONTENIDO PRINCIPAL ========== -->
    <main class="relative z-10 px-4 pt-4 pb-4" style="max-width:500px;margin:0 auto;">

        <!-- Bonus Banner -->
        <div class="bonus-banner" id="bonusBanner" onclick="claimBonus()">
            <div class="bonus-icon"><i class="fas fa-gift"></i></div>
            <div class="bonus-text">
                <h4>Recompensa Diaria</h4>
                <p id="bonusText">Reclama tu bono de 0.50 TON y 100 estrellas</p>
            </div>
        </div>

        <!-- Winner Ticker -->
        <div class="winner-ticker">
            <div class="ticker-inner" id="tickerInner"></div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-3 mb-5">
            <div class="stat-card">
                <div class="stat-value" style="color:var(--accent-gold);" id="statTotalPlayed">0</div>
                <div class="stat-label">Partidas</div>
            </div>
            <div class="stat-card">
                <div class="stat-value" style="color:var(--accent-emerald);" id="statTotalWon">0.00</div>
                <div class="stat-label">Ganado</div>
            </div>
            <div class="stat-card">
                <div class="stat-value" style="color:var(--accent-cyan);" id="statWinRate">0%</div>
                <div class="stat-label">Win Rate</div>
            </div>
        </div>

        <!-- Game Grid -->
        <h2 style="font-family:var(--font-display);font-size:0.85rem;font-weight:700;margin-bottom:14px;color:var(--text-secondary);">JUEGOS</h2>
        <div class="grid grid-cols-2 gap-3 mb-5">
            <div class="game-card" onclick="openModal('diceModal')">
                <div class="game-card-icon" style="background:var(--accent-gold-dim);color:var(--accent-gold);">
                    <i class="fas fa-dice"></i>
                </div>
                <h3>Dice</h3>
                <p>Predice el resultado y gana</p>
            </div>
            <div class="game-card" onclick="openModal('coinflipModal')">
                <div class="game-card-icon" style="background:var(--accent-emerald-dim);color:var(--accent-emerald);">
                    <i class="fas fa-coins"></i>
                </div>
                <h3>Coin Flip</h3>
                <p>Cara o cruz, 2x de payout</p>
            </div>
            <div class="game-card" onclick="openModal('wheelModal')">
                <div class="game-card-icon" style="background:rgba(0,229,255,0.12);color:var(--accent-cyan);">
                    <i class="fas fa-circle-notch"></i>
                </div>
                <h3>Wheel</h3>
                <p>Gira la rueda de la fortuna</p>
            </div>
            <div class="game-card" onclick="openModal('minesModal')">
                <div class="game-card-icon" style="background:rgba(255,71,87,0.12);color:var(--danger);">
                    <i class="fas fa-bomb"></i>
                </div>
                <h3>Mines</h3>
                <p>Evita las minas, cobra a tiempo</p>
            </div>
            <div class="game-card col-span-2" onclick="openModal('crashModal')" style="background:linear-gradient(135deg,var(--bg-card),rgba(245,166,35,0.05));">
                <div class="flex items-center gap-4">
                    <div class="game-card-icon" style="background:var(--accent-gold-dim);color:var(--accent-gold);">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div>
                        <h3>Crash</h3>
                        <p>Cobra antes de que explote el multiplicador</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Recent History -->
        <h2 style="font-family:var(--font-display);font-size:0.85rem;font-weight:700;margin-bottom:14px;color:var(--text-secondary);">HISTORIAL RECIENTE</h2>
        <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:12px;padding:12px;" id="historyList">
            <div style="text-align:center;padding:20px;color:var(--text-muted);font-size:0.8rem;">
                Aun no has jugado ninguna partida
            </div>
        </div>
    </main>

    <!-- ========== PARTE 13: BOTTOM NAV ========== -->
    <nav class="bottom-nav" aria-label="Navegacion principal">
        <div class="nav-item active" onclick="switchTab('home')"><i class="fas fa-home"></i><span>Inicio</span></div>
        <div class="nav-item" onclick="switchTab('games')"><i class="fas fa-gamepad"></i><span>Juegos</span></div>
        <div class="nav-item" onclick="openModal('walletModal')"><i class="fas fa-wallet"></i><span>Wallet</span></div>
        <div class="nav-item" onclick="switchTab('profile')"><i class="fas fa-user"></i><span>Perfil</span></div>
    </nav>

    <!-- ========== PARTE 14: MODALES DE JUEGOS ========== -->

    <!-- DICE MODAL -->
    <div class="modal-overlay" id="diceModal" onclick="closeModalOverlay(event, 'diceModal')">
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h2><i class="fas fa-dice" style="color:var(--accent-gold);margin-right:8px;"></i>Dice</h2>
                <button class="modal-close" onclick="closeModal('diceModal')"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body">
                <div class="dice-display" id="diceResult">50</div>
                <div class="over-under-toggle">
                    <div class="ou-btn active" id="underBtn" onclick="setDiceMode('under')">MENOR DE <span id="diceTargetDisplay">50</span></div>
                    <div class="ou-btn" id="overBtn" onclick="setDiceMode('over')">MAYOR DE <span id="diceTargetDisplay2">50</span></div>
                </div>
                <div class="dice-slider-container">
                    <input type="range" min="2" max="98" value="50" class="dice-slider" id="diceSlider" oninput="updateDiceSlider()">
                </div>
                <div class="dice-info">
                    <div>Chance: <span id="diceWinChance">49.00%</span></div>
                    <div>Payout: <span id="dicePayout">2.00x</span></div>
                </div>
                <div class="currency-toggle">
                    <div class="currency-btn active" onclick="setCurrency('ton','dice')" id="diceTonBtn"><i class="fas fa-circle ton-icon"></i> TON</div>
                    <div class="currency-btn" onclick="setCurrency('stars','dice')" id="diceStarsBtn"><i class="fas fa-star star-icon"></i> Stars</div>
                </div>
                <div class="bet-section">
                    <div class="bet-label">Apuesta</div>
                    <div class="bet-input-row">
                        <input type="number" class="bet-input" id="diceBet" value="0.10" min="0.01" step="0.01">
                        <button class="bet-quick-btn" onclick="quickBet('dice',0.5)">0.5x</button>
                        <button class="bet-quick-btn" onclick="quickBet('dice',2)">2x</button>
                        <button class="bet-quick-btn" onclick="quickBet('dice','max')">MAX</button>
                    </div>
                </div>
                <button class="play-btn" id="dicePlayBtn" onclick="playDice()">GIRAR DADO</button>
                <div class="result-display" id="diceResultDisplay" style="display:none;"></div>
            </div>
        </div>
    </div>

    <!-- COIN FLIP MODAL -->
    <div class="modal-overlay" id="coinflipModal" onclick="closeModalOverlay(event, 'coinflipModal')">
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h2><i class="fas fa-coins" style="color:var(--accent-emerald);margin-right:8px;"></i>Coin Flip</h2>
                <button class="modal-close" onclick="closeModal('coinflipModal')"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body">
                <div class="coin-container">
                    <div class="coin" id="coin">
                        <div class="coin-face coin-heads">H</div>
                        <div class="coin-face coin-tails">T</div>
                    </div>
                </div>
                <div class="coin-choice">
                    <div class="coin-choice-btn selected" id="headsBtn" onclick="setCoinChoice('heads')">
                        <div style="font-size:1.5rem;margin-bottom:4px;">🪙</div>
                        CARA
                    </div>
                    <div class="coin-choice-btn" id="tailsBtn" onclick="setCoinChoice('tails')">
                        <div style="font-size:1.5rem;margin-bottom:4px;">🔄</div>
                        CRUZ
                    </div>
                </div>
                <div style="text-align:center;font-size:0.75rem;color:var(--text-secondary);margin-bottom:12px;">Payout: <span style="color:var(--accent-emerald);font-weight:700;">1.95x</span></div>
                <div class="currency-toggle">
                    <div class="currency-btn active" onclick="setCurrency('ton','coinflip')" id="coinflipTonBtn"><i class="fas fa-circle ton-icon"></i> TON</div>
                    <div class="currency-btn" onclick="setCurrency('stars','coinflip')" id="coinflipStarsBtn"><i class="fas fa-star star-icon"></i> Stars</div>
                </div>
                <div class="bet-section">
                    <div class="bet-label">Apuesta</div>
                    <div class="bet-input-row">
                        <input type="number" class="bet-input" id="coinflipBet" value="0.10" min="0.01" step="0.01">
                        <button class="bet-quick-btn" onclick="quickBet('coinflip',0.5)">0.5x</button>
                        <button class="bet-quick-btn" onclick="quickBet('coinflip',2)">2x</button>
                        <button class="bet-quick-btn" onclick="quickBet('coinflip','max')">MAX</button>
                    </div>
                </div>
                <button class="play-btn" id="coinflipPlayBtn" onclick="playCoinFlip()">LANZAR MONEDA</button>
                <div class="result-display" id="coinflipResultDisplay" style="display:none;"></div>
            </div>
        </div>
    </div>

    <!-- WHEEL MODAL -->
    <div class="modal-overlay" id="wheelModal" onclick="closeModalOverlay(event, 'wheelModal')">
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h2><i class="fas fa-circle-notch" style="color:var(--accent-cyan);margin-right:8px;"></i>Wheel</h2>
                <button class="modal-close" onclick="closeModal('wheelModal')"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body">
                <div class="wheel-wrapper">
                    <div class="wheel-pointer"></div>
                    <canvas id="wheelCanvas" class="wheel-canvas" width="520" height="520"></canvas>
                    <div class="wheel-center"><i class="fas fa-gem"></i></div>
                </div>
                <div class="currency-toggle">
                    <div class="currency-btn active" onclick="setCurrency('ton','wheel')" id="wheelTonBtn"><i class="fas fa-circle ton-icon"></i> TON</div>
                    <div class="currency-btn" onclick="setCurrency('stars','wheel')" id="wheelStarsBtn"><i class="fas fa-star star-icon"></i> Stars</div>
                </div>
                <div class="bet-section">
                    <div class="bet-label">Apuesta</div>
                    <div class="bet-input-row">
                        <input type="number" class="bet-input" id="wheelBet" value="0.10" min="0.01" step="0.01">
                        <button class="bet-quick-btn" onclick="quickBet('wheel',0.5)">0.5x</button>
                        <button class="bet-quick-btn" onclick="quickBet('wheel',2)">2x</button>
                        <button class="bet-quick-btn" onclick="quickBet('wheel','max')">MAX</button>
                    </div>
                </div>
                <button class="play-btn" id="wheelPlayBtn" onclick="playWheel()">GIRAR RUEDA</button>
                <div class="result-display" id="wheelResultDisplay" style="display:none;"></div>
            </div>
        </div>
    </div>

    <!-- MINES MODAL -->
    <div class="modal-overlay" id="minesModal" onclick="closeModalOverlay(event, 'minesModal')">
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h2><i class="fas fa-bomb" style="color:var(--danger);margin-right:8px;"></i>Mines</h2>
                <button class="modal-close" onclick="closeModal('minesModal')"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body">
                <div class="mines-count-selector" id="minesCountSelector">
                    <div class="mines-count-btn active" onclick="setMineCount(3)">3</div>
                    <div class="mines-count-btn" onclick="setMineCount(5)">5</div>
                    <div class="mines-count-btn" onclick="setMineCount(10)">10</div>
                    <div class="mines-count-btn" onclick="setMineCount(15)">15</div>
                    <div class="mines-count-btn" onclick="setMineCount(20)">20</div>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                    <div style="font-size:0.75rem;color:var(--text-secondary);">Multiplicador actual: <span style="color:var(--accent-emerald);font-weight:700;" id="minesCurrentMultiplier">1.00x</span></div>
                    <div style="font-size:0.75rem;color:var(--text-secondary);">Gemas: <span style="color:var(--accent-emerald);" id="minesGemsFound">0</span></div>
                </div>
                <div class="mines-grid" id="minesGrid"></div>
                <div class="currency-toggle">
                    <div class="currency-btn active" onclick="setCurrency('ton','mines')" id="minesTonBtn"><i class="fas fa-circle ton-icon"></i> TON</div>
                    <div class="currency-btn" onclick="setCurrency('stars','mines')" id="minesStarsBtn"><i class="fas fa-star star-icon"></i> Stars</div>
                </div>
                <div class="bet-section">
                    <div class="bet-label">Apuesta</div>
                    <div class="bet-input-row">
                        <input type="number" class="bet-input" id="minesBet" value="0.10" min="0.01" step="0.01">
                        <button class="bet-quick-btn" onclick="quickBet('mines',0.5)">0.5x</button>
                        <button class="bet-quick-btn" onclick="quickBet('mines',2)">2x</button>
                        <button class="bet-quick-btn" onclick="quickBet('mines','max')">MAX</button>
                    </div>
                </div>
                <button class="play-btn" id="minesPlayBtn" onclick="startMines()">JUGAR</button>
                <button class="cashout-btn" id="minesCashoutBtn" onclick="cashoutMines()" style="display:none;">COBRAR</button>
                <div class="result-display" id="minesResultDisplay" style="display:none;"></div>
            </div>
        </div>
    </div>

    <!-- CRASH MODAL -->
    <div class="modal-overlay" id="crashModal" onclick="closeModalOverlay(event, 'crashModal')">
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h2><i class="fas fa-chart-line" style="color:var(--accent-gold);margin-right:8px;"></i>Crash</h2>
                <button class="modal-close" onclick="closeModal('crashModal')"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body">
                <div class="crash-canvas-wrapper">
                    <canvas id="crashCanvas"></canvas>
                    <div class="crash-multiplier-overlay waiting" id="crashMultiplierText">Esperando...</div>
                </div>
                <div class="currency-toggle">
                    <div class="currency-btn active" onclick="setCurrency('ton','crash')" id="crashTonBtn"><i class="fas fa-circle ton-icon"></i> TON</div>
                    <div class="currency-btn" onclick="setCurrency('stars','crash')" id="crashStarsBtn"><i class="fas fa-star star-icon"></i> Stars</div>
                </div>
                <div class="bet-section">
                    <div class="bet-label">Apuesta</div>
                    <div class="bet-input-row">
                        <input type="number" class="bet-input" id="crashBet" value="0.10" min="0.01" step="0.01">
                        <button class="bet-quick-btn" onclick="quickBet('crash',0.5)">0.5x</button>
                        <button class="bet-quick-btn" onclick="quickBet('crash',2)">2x</button>
                        <button class="bet-quick-btn" onclick="quickBet('crash','max')">MAX</button>
                    </div>
                </div>
                <div class="bet-section" style="margin-bottom:12px;">
                    <div class="bet-label">Auto Cash Out</div>
                    <div class="bet-input-row">
                        <input type="number" class="bet-input" id="crashAutoCashout" value="2.00" min="1.01" step="0.01">
                    </div>
                </div>
                <button class="play-btn" id="crashPlayBtn" onclick="playCrash()">APOSTAR</button>
                <button class="cashout-btn" id="crashCashoutBtn" onclick="cashoutCrash()" style="display:none;">COBRAR</button>
                <div class="result-display" id="crashResultDisplay" style="display:none;"></div>
            </div>
        </div>
    </div>

    <!-- WALLET MODAL -->
    <div class="modal-overlay" id="walletModal" onclick="closeModalOverlay(event, 'walletModal')">
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h2><i class="fas fa-wallet" style="color:var(--accent-cyan);margin-right:8px;"></i>Wallet</h2>
                <button class="modal-close" onclick="closeModal('walletModal')"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body" id="walletModalBody">
                <!-- Contenido generado por JS -->
            </div>
        </div>
    </div>

    <!-- Toast Container -->
    <div class="toast-container" id="toastContainer"></div>

    <!-- ========== PARTE 15: JAVASCRIPT - LOGICA COMPLETA ========== -->
    <script>
    /* ===== ESTADO GLOBAL DE LA APLICACION ===== */
    const APP = {
        wallet: {
            connected: false,
            address: '',
            tonBalance: 0,
            starsBalance: 0
        },
        currency: {
            dice: 'ton',
            coinflip: 'ton',
            wheel: 'ton',
            mines: 'ton',
            crash: 'ton'
        },
        dice: {
            target: 50,
            mode: 'under', // 'under' o 'over'
            playing: false
        },
        coinflip: {
            choice: 'heads',
            playing: false
        },
        wheel: {
            spinning: false,
            currentRotation: 0
        },
        mines: {
            count: 3,
            playing: false,
            grid: [],
            revealed: 0,
            gemsFound: 0,
            multiplier: 1.0
        },
        crash: {
            playing: false,
            crashed: false,
            crashPoint: 0,
            currentMultiplier: 1.0,
            startTime: 0,
            animFrame: null,
            betPlaced: false
        },
        stats: {
            totalPlayed: 0,
            totalWon: 0,
            totalLost: 0,
            wins: 0
        },
        history: [],
        bonusClaimed: false
    };

    /* ===== UTILIDADES ===== */
    function formatTon(amount) {
        return parseFloat(amount).toFixed(2);
    }
    function formatStars(amount) {
        return Math.round(amount);
    }
    function getBalance(currency) {
        return currency === 'ton' ? APP.wallet.tonBalance : APP.wallet.starsBalance;
    }
    function addBalance(currency, amount) {
        if (currency === 'ton') APP.wallet.tonBalance += amount;
        else APP.wallet.starsBalance += amount;
        updateBalanceDisplay();
    }
    function subtractBalance(currency, amount) {
        if (currency === 'ton') APP.wallet.tonBalance = Math.max(0, APP.wallet.tonBalance - amount);
        else APP.wallet.starsBalance = Math.max(0, APP.wallet.starsBalance - amount);
        updateBalanceDisplay();
    }
    function hasEnoughBalance(currency, amount) {
        return getBalance(currency) >= amount;
    }
    function getBetInput(game) {
        return parseFloat(document.getElementById(game + 'Bet').value) || 0;
    }
    function generateSeed() {
        return Math.random().toString(36).substring(2, 15);
    }

    /* ===== TOAST NOTIFICATIONS ===== */
    function showToast(message, type) {
        type = type || 'info';
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast ' + type;
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(function() {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 3000);
    }

    /* ===== ACTUALIZAR DISPLAY DE BALANCE ===== */
    function updateBalanceDisplay() {
        document.getElementById('tonBalanceDisplay').textContent = formatTon(APP.wallet.tonBalance);
        document.getElementById('starsBalanceDisplay').textContent = formatStars(APP.wallet.starsBalance);
    }

    /* ===== ACTUALIZAR ESTADISTICAS ===== */
    function updateStats() {
        document.getElementById('statTotalPlayed').textContent = APP.stats.totalPlayed;
        document.getElementById('statTotalWon').textContent = formatTon(APP.stats.totalWon);
        const wr = APP.stats.totalPlayed > 0 ? Math.round((APP.stats.wins / APP.stats.totalPlayed) * 100) : 0;
        document.getElementById('statWinRate').textContent = wr + '%';
    }

    /* ===== REGISTRAR PARTIDA ===== */
    function recordGame(game, bet, currency, won, amount) {
        APP.stats.totalPlayed++;
        if (won) {
            APP.stats.wins++;
            APP.stats.totalWon += amount;
        } else {
            APP.stats.totalLost += bet;
        }
        const entry = {
            game: game,
            bet: bet,
            currency: currency,
            won: won,
            amount: amount,
            time: new Date().toLocaleTimeString()
        };
        APP.history.unshift(entry);
        if (APP.history.length > 50) APP.history.pop();
        updateStats();
        updateHistoryDisplay();
    }

    function updateHistoryDisplay() {
        const container = document.getElementById('historyList');
        if (APP.history.length === 0) {
            container.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted);font-size:0.8rem;">Aun no has jugado ninguna partida</div>';
            return;
        }
        let html = '';
        const show = APP.history.slice(0, 10);
        for (let i = 0; i < show.length; i++) {
            const h = show[i];
            const gameNames = { dice: 'Dice', coinflip: 'Coin Flip', wheel: 'Wheel', mines: 'Mines', crash: 'Crash' };
            const icon = h.won ? '<i class="fas fa-arrow-up" style="color:var(--accent-emerald);"></i>' : '<i class="fas fa-arrow-down" style="color:var(--danger);"></i>';
            const amtColor = h.won ? 'var(--accent-emerald)' : 'var(--danger)';
            const currSymbol = h.currency === 'ton' ? 'TON' : 'Stars';
            html += '<div class="history-item">' +
                '<div>' + icon + ' <span style="margin-left:6px;font-weight:600;">' + gameNames[h.game] + '</span></div>' +
                '<div style="color:' + amtColor + ';font-weight:600;">' + (h.won ? '+' : '-') + parseFloat(h.amount).toFixed(2) + ' ' + currSymbol + '</div>' +
                '</div>';
        }
        container.innerHTML = html;
    }

    /* ===== SISTEMA DE MODALES ===== */
    function openModal(id) {
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Inicializar contenido específico
        if (id === 'walletModal') renderWalletModal();
        if (id === 'wheelModal') drawWheel();
        if (id === 'minesModal') renderMinesGrid();
    }
    function closeModal(id) {
        const modal = document.getElementById(id);
        if (!modal) return;
        // Cancelar juegos en progreso
        if (id === 'crashModal' && APP.crash.playing) {
            cancelCrash();
        }
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    function closeModalOverlay(event, id) {
        if (event.target === event.currentTarget) closeModal(id);
    }

    /* ===== NAV TABS ===== */
    function switchTab(tab) {
        const items = document.querySelectorAll('.nav-item');
        items.forEach(function(item) { item.classList.remove('active'); });
        if (tab === 'home') items[0].classList.add('active');
        else if (tab === 'games') items[1].classList.add('active');
        else if (tab === 'profile') items[3].classList.add('active');
        // Por ahora solo cambiamos visual
        if (tab === 'games') showToast('Selecciona un juego de la lista', 'info');
        if (tab === 'profile') showToast('Perfil - Próximamente', 'info');
    }

    /* ===== SELECCION DE MONEDA ===== */
    function setCurrency(currency, game) {
        APP.currency[game] = currency;
        const tonBtn = document.getElementById(game + 'TonBtn');
        const starsBtn = document.getElementById(game + 'StarsBtn');
        if (tonBtn && starsBtn) {
            tonBtn.classList.toggle('active', currency === 'ton');
            starsBtn.classList.toggle('active', currency === 'stars');
        }
    }

    /* ===== BOTONES RAPIDOS DE APUESTA ===== */
    function quickBet(game, multiplier) {
        const input = document.getElementById(game + 'Bet');
        const currency = APP.currency[game];
        let currentVal = parseFloat(input.value) || 0;
        let balance = getBalance(currency);
        if (multiplier === 'max') {
            if (currency === 'ton') input.value = Math.min(balance, 100).toFixed(2);
            else input.value = Math.min(Math.round(balance), 10000);
        } else {
            let newVal = currentVal * multiplier;
            if (currency === 'ton') input.value = Math.min(newVal, balance).toFixed(2);
            else input.value = Math.min(Math.round(newVal), Math.round(balance));
        }
    }

    /* ===== WALLET - CONEXION Y RENDERIZADO ===== */
    function renderWalletModal() {
        const body = document.getElementById('walletModalBody');
        if (APP.wallet.connected) {
            body.innerHTML =
                '<div class="connected-info">' +
                    '<div style="width:60px;height:60px;border-radius:50%;background:var(--accent-emerald-dim);margin:0 auto 12px;display:flex;align-items:center;justify-content:center;">' +
                        '<i class="fas fa-check" style="color:var(--accent-emerald);font-size:1.5rem;"></i>' +
                    '</div>' +
                    '<h3 style="font-size:1.1rem;font-weight:700;margin-bottom:4px;">Wallet Conectada</h3>' +
                    '<div class="wallet-address">' + APP.wallet.address + '</div>' +
                    '<div style="display:flex;gap:12px;justify-content:center;margin:16px 0;">' +
                        '<div class="stat-card" style="flex:1;">' +
                            '<div class="stat-value" style="color:#0098EA;">' + formatTon(APP.wallet.tonBalance) + '</div>' +
                            '<div class="stat-label">TON</div>' +
                        '</div>' +
                        '<div class="stat-card" style="flex:1;">' +
                            '<div class="stat-value" style="color:var(--accent-gold);">' + formatStars(APP.wallet.starsBalance) + '</div>' +
                            '<div class="stat-label">Stars</div>' +
                        '</div>' +
                    '</div>' +
                    '<div style="display:flex;gap:10px;justify-content:center;margin-top:12px;">' +
                        '<button onclick="depositFunds()" style="padding:10px 20px;border-radius:10px;background:var(--accent-gold-dim);border:1px solid var(--accent-gold);color:var(--accent-gold);font-weight:600;cursor:pointer;font-size:0.8rem;">Depositar</button>' +
                        '<button onclick="withdrawFunds()" style="padding:10px 20px;border-radius:10px;background:var(--bg-tertiary);border:1px solid var(--border-color);color:var(--text-secondary);font-weight:600;cursor:pointer;font-size:0.8rem;">Retirar</button>' +
                    '</div>' +
                    '<div style="margin-top:16px;">' +
                        '<button class="disconnect-btn" onclick="disconnectWallet()">Desconectar Wallet</button>' +
                    '</div>' +
                '</div>';
        } else {
            body.innerHTML =
                '<div style="text-align:center;margin-bottom:20px;">' +
                    '<div style="width:70px;height:70px;border-radius:50%;background:var(--accent-gold-dim);margin:0 auto 12px;display:flex;align-items:center;justify-content:center;">' +
                        '<i class="fas fa-wallet" style="color:var(--accent-gold);font-size:1.8rem;"></i>' +
                    '</div>' +
                    '<h3 style="font-size:1.1rem;font-weight:700;">Conecta tu Wallet</h3>' +
                    '<p style="font-size:0.78rem;color:var(--text-secondary);margin-top:6px;">Conecta tu wallet de TON para empezar a jugar</p>' +
                '</div>' +
                '<div class="wallet-option" onclick="connectWallet(\'tonkeeper\')">' +
                    '<div class="wallet-option-icon" style="background:rgba(0,152,234,0.15);color:#0098EA;"><i class="fas fa-shield-halved"></i></div>' +
                    '<div><div class="wallet-option-name">Tonkeeper</div><div class="wallet-option-desc">Wallet mas popular de TON</div></div>' +
                '</div>' +
                '<div class="wallet-option" onclick="connectWallet(\'tonhub\')">' +
                    '<div class="wallet-option-icon" style="background:rgba(245,166,35,0.15);color:var(--accent-gold);"><i class="fas fa-cube"></i></div>' +
                    '<div><div class="wallet-option-name">TON Hub</div><div class="wallet-option-desc">Wallet rapida y segura</div></div>' +
                '</div>' +
                '<div class="wallet-option" onclick="connectWallet(\'mytonwallet\')">' +
                    '<div class="wallet-option-icon" style="background:rgba(0,230,118,0.15);color:var(--accent-emerald);"><i class="fas fa-globe"></i></div>' +
                    '<div><div class="wallet-option-name">MyTonWallet</div><div class="wallet-option-desc">Extension de navegador</div></div>' +
                '</div>' +
                '<div class="wallet-option" onclick="connectWallet(\'openmask\')">' +
                    '<div class="wallet-option-icon" style="background:rgba(0,229,255,0.15);color:var(--accent-cyan);"><i class="fas fa-mask"></i></div>' +
                    '<div><div class="wallet-option-name">OpenMask</div><div class="wallet-option-desc">Wallet basada en Chrome</div></div>' +
                '</div>' +
                '<div class="wallet-option" onclick="connectWallet(\'qr\')">' +
                    '<div class="wallet-option-icon" style="background:rgba(255,255,255,0.05);color:var(--text-secondary);"><i class="fas fa-qrcode"></i></div>' +
                    '<div><div class="wallet-option-name">Codigo QR</div><div class="wallet-option-desc">Escanear con app movil</div></div>' +
                '</div>';
        }
    }

    function connectWallet(type) {
        showToast('Conectando wallet...', 'info');
        // Simular conexion con delay
        setTimeout(function() {
            // Generar direccion TON aleatoria para demo
            const chars = '0123456789ABCDEF';
            let addr = 'EQ';
            for (let i = 0; i < 46; i++) {
                addr += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            APP.wallet.connected = true;
            APP.wallet.address = addr;
            // Balance demo
            APP.wallet.tonBalance = 5.00;
            APP.wallet.starsBalance = 500;
            updateBalanceDisplay();
            renderWalletModal();
            showToast('Wallet conectada exitosamente', 'success');
            // Actualizar icono del header
            document.getElementById('walletIconBtn').style.borderColor = 'var(--accent-emerald)';
            document.getElementById('walletIconBtn').querySelector('i').style.color = 'var(--accent-emerald)';
        }, 1500);
    }

    function disconnectWallet() {
        APP.wallet.connected = false;
        APP.wallet.address = '';
        APP.wallet.tonBalance = 0;
        APP.wallet.starsBalance = 0;
        updateBalanceDisplay();
        renderWalletModal();
        showToast('Wallet desconectada', 'info');
        document.getElementById('walletIconBtn').style.borderColor = 'var(--border-color)';
        document.getElementById('walletIconBtn').querySelector('i').style.color = 'var(--text-secondary)';
    }

    function depositFunds() {
        // Agregar fondos demo
        APP.wallet.tonBalance += 2.00;
        APP.wallet.starsBalance += 200;
        updateBalanceDisplay();
        renderWalletModal();
        showToast('+2.00 TON y +200 Stars depositados (demo)', 'success');
    }

    function withdrawFunds() {
        if (APP.wallet.tonBalance > 0 || APP.wallet.starsBalance > 0) {
            showToast('Retiro procesado (demo) - Los fondos se enviaran a tu wallet', 'success');
        } else {
            showToast('No hay fondos para retirar', 'error');
        }
    }

    /* ===== BONO DIARIO ===== */
    function claimBonus() {
        if (APP.bonusClaimed) {
            showToast('Ya reclamaste tu bono de hoy', 'error');
            return;
        }
        if (!APP.wallet.connected) {
            showToast('Conecta tu wallet primero', 'error');
            openModal('walletModal');
            return;
        }
        APP.wallet.tonBalance += 0.50;
        APP.wallet.starsBalance += 100;
        APP.bonusClaimed = true;
        updateBalanceDisplay();
        document.getElementById('bonusText').textContent = 'Bono reclamado. Vuelve manana';
        document.getElementById('bonusBanner').style.opacity = '0.5';
        showToast('+0.50 TON y +100 Stars reclamados', 'success');
    }

    /* ===== DICE GAME ===== */
    function setDiceMode(mode) {
        APP.dice.mode = mode;
        document.getElementById('underBtn').classList.toggle('active', mode === 'under');
        document.getElementById('overBtn').classList.toggle('active', mode === 'over');
        updateDiceSlider();
    }

    function updateDiceSlider() {
        const slider = document.getElementById('diceSlider');
        const val = parseInt(slider.value);
        APP.dice.target = val;
        const pct = ((val - 2) / 96) * 100;
        slider.style.setProperty('--pct', pct + '%');
        document.getElementById('diceTargetDisplay').textContent = val;
        document.getElementById('diceTargetDisplay2').textContent = val;
        // Calcular probabilidad y payout
        let winChance;
        if (APP.dice.mode === 'under') {
            winChance = (val - 1) / 100;
        } else {
            winChance = (100 - val) / 100;
        }
        winChance = Math.max(0.01, winChance);
        const payout = (0.97 / winChance); // 3% house edge
        document.getElementById('diceWinChance').textContent = (winChance * 100).toFixed(2) + '%';
        document.getElementById('dicePayout').textContent = payout.toFixed(2) + 'x';
    }

    function playDice() {
        if (APP.dice.playing) return;
        if (!APP.wallet.connected) { showToast('Conecta tu wallet primero', 'error'); openModal('walletModal'); return; }
        const currency = APP.currency.dice;
        const bet = getBetInput('dice');
        if (bet <= 0) { showToast('Ingresa una apuesta valida', 'error'); return; }
        if (!hasEnoughBalance(currency, bet)) { showToast('Saldo insuficiente', 'error'); return; }

        APP.dice.playing = true;
        subtractBalance(currency, bet);
        document.getElementById('dicePlayBtn').disabled = true;
        document.getElementById('diceResultDisplay').style.display = 'none';

        const diceDisplay = document.getElementById('diceResult');
        diceDisplay.classList.add('rolling');

        // Animacion de roll
        let rollCount = 0;
        const rollInterval = setInterval(function() {
            diceDisplay.textContent = Math.floor(Math.random() * 100) + 1;
            rollCount++;
            if (rollCount > 20) {
                clearInterval(rollInterval);
                // Resultado final
                const result = Math.floor(Math.random() * 100) + 1;
                diceDisplay.textContent = result;
                diceDisplay.classList.remove('rolling');

                const won = APP.dice.mode === 'under' ? result < APP.dice.target : result > APP.dice.target;
                let winChance = APP.dice.mode === 'under' ? (APP.dice.target - 1) / 100 : (100 - APP.dice.target) / 100;
                winChance = Math.max(0.01, winChance);
                const payout = 0.97 / winChance;

                const resultDisplay = document.getElementById('diceResultDisplay');
                resultDisplay.style.display = 'block';
                if (won) {
                    const winAmount = bet * payout;
                    addBalance(currency, winAmount);
                    resultDisplay.className = 'result-display win';
                    resultDisplay.innerHTML = '<div class="result-amount" style="color:var(--accent-emerald);">+' + formatTon(winAmount) + ' ' + currency.toUpperCase() + '</div><div class="result-label">Resultado: ' + result + ' - Ganaste!</div>';
                    recordGame('dice', bet, currency, true, winAmount);
                    showToast('Ganaste +' + formatTon(winAmount) + ' ' + currency.toUpperCase(), 'success');
                } else {
                    resultDisplay.className = 'result-display lose';
                    resultDisplay.innerHTML = '<div class="result-amount" style="color:var(--danger);">-' + formatTon(bet) + ' ' + currency.toUpperCase() + '</div><div class="result-label">Resultado: ' + result + ' - Perdiste</div>';
                    recordGame('dice', bet, currency, false, bet);
                }
                APP.dice.playing = false;
                document.getElementById('dicePlayBtn').disabled = false;
            }
        }, 50);
    }

    /* ===== COIN FLIP GAME ===== */
    function setCoinChoice(choice) {
        APP.coinflip.choice = choice;
        document.getElementById('headsBtn').classList.toggle('selected', choice === 'heads');
        document.getElementById('tailsBtn').classList.toggle('selected', choice === 'tails');
    }

    function playCoinFlip() {
        if (APP.coinflip.playing) return;
        if (!APP.wallet.connected) { showToast('Conecta tu wallet primero', 'error'); openModal('walletModal'); return; }
        const currency = APP.currency.coinflip;
        const bet = getBetInput('coinflip');
        if (bet <= 0) { showToast('Ingresa una apuesta valida', 'error'); return; }
        if (!hasEnoughBalance(currency, bet)) { showToast('Saldo insuficiente', 'error'); return; }

        APP.coinflip.playing = true;
        subtractBalance(currency, bet);
        document.getElementById('coinflipPlayBtn').disabled = true;
        document.getElementById('coinflipResultDisplay').style.display = 'none';

        const coin = document.getElementById('coin');
        const result = Math.random() < 0.5 ? 'heads' : 'tails';

        // Resetear animacion
        coin.style.transition = 'none';
        coin.style.transform = 'rotateY(0deg)';
        coin.offsetHeight; // Force reflow

        // Aplicar animacion
        coin.style.transition = 'transform 1.5s ease-out';
        if (result === 'heads') {
            coin.style.transform = 'rotateY(1800deg)';
        } else {
            coin.style.transform = 'rotateY(1980deg)';
        }

        setTimeout(function() {
            const won = APP.coinflip.choice === result;
            const payout = 1.95;
            const resultDisplay = document.getElementById('coinflipResultDisplay');
            resultDisplay.style.display = 'block';
            const resultText = result === 'heads' ? 'CARA' : 'CRUZ';
            if (won) {
                const winAmount = bet * payout;
                addBalance(currency, winAmount);
                resultDisplay.className = 'result-display win';
                resultDisplay.innerHTML = '<div class="result-amount" style="color:var(--accent-emerald);">+' + formatTon(winAmount) + ' ' + currency.toUpperCase() + '</div><div class="result-label">Salio ' + resultText + ' - Ganaste!</div>';
                recordGame('coinflip', bet, currency, true, winAmount);
                showToast('Ganaste +' + formatTon(winAmount) + ' ' + currency.toUpperCase(), 'success');
            } else {
                resultDisplay.className = 'result-display lose';
                resultDisplay.innerHTML = '<div class="result-amount" style="color:var(--danger);">-' + formatTon(bet) + ' ' + currency.toUpperCase() + '</div><div class="result-label">Salio ' + resultText + ' - Perdiste</div>';
                recordGame('coinflip', bet, currency, false, bet);
            }
            APP.coinflip.playing = false;
            document.getElementById('coinflipPlayBtn').disabled = false;
        }, 1600);
    }

    /* ===== WHEEL GAME ===== */
    const WHEEL_SEGMENTS = [
        { label: '0.5x', value: 0.5, color: '#FF4757' },
        { label: '1.2x', value: 1.2, color: '#1A1F38' },
        { label: '1.5x', value: 1.5, color: '#F5A623' },
        { label: '0.5x', value: 0.5, color: '#FF4757' },
        { label: '2x', value: 2, color: '#1A1F38' },
        { label: '0x', value: 0, color: '#2D1B1B' },
        { label: '1.5x', value: 1.5, color: '#F5A623' },
        { label: '3x', value: 3, color: '#00E676' },
        { label: '0.5x', value: 0.5, color: '#FF4757' },
        { label: '1.2x', value: 1.2, color: '#1A1F38' },
        { label: '5x', value: 5, color: '#00E5FF' },
        { label: '1x', value: 1, color: '#2A2D3E' }
    ];

    function drawWheel(rotation) {
        rotation = rotation || 0;
        const canvas = document.getElementById('wheelCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        const cx = w / 2;
        const cy = h / 2;
        const r = Math.max(1, Math.min(cx, cy) - 20);
        const segments = WHEEL_SEGMENTS;
        const segAngle = (2 * Math.PI) / segments.length;

        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rotation * Math.PI / 180);

        for (let i = 0; i < segments.length; i++) {
            const startAngle = i * segAngle - Math.PI / 2;
            const endAngle = startAngle + segAngle;

            // Segmento
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, r, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = segments[i].color;
            ctx.fill();
            ctx.strokeStyle = 'rgba(255,255,255,0.1)';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Texto
            ctx.save();
            ctx.rotate(startAngle + segAngle / 2);
            ctx.textAlign = 'center';
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 18px Orbitron';
            ctx.fillText(segments[i].label, r * 0.65, 6);
            ctx.restore();
        }

        // Borde exterior
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, 2 * Math.PI);
        ctx.strokeStyle = 'rgba(245, 166, 35, 0.5)';
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.restore();
    }

    function playWheel() {
        if (APP.wheel.spinning) return;
        if (!APP.wallet.connected) { showToast('Conecta tu wallet primero', 'error'); openModal('walletModal'); return; }
        const currency = APP.currency.wheel;
        const bet = getBetInput('wheel');
        if (bet <= 0) { showToast('Ingresa una apuesta valida', 'error'); return; }
        if (!hasEnoughBalance(currency, bet)) { showToast('Saldo insuficiente', 'error'); return; }

        APP.wheel.spinning = true;
        subtractBalance(currency, bet);
        document.getElementById('wheelPlayBtn').disabled = true;
        document.getElementById('wheelResultDisplay').style.display = 'none';

        // Determinar resultado
        const segIndex = Math.floor(Math.random() * WHEEL_SEGMENTS.length);
        const segAngle = 360 / WHEEL_SEGMENTS.length;
        // Calcular rotacion para aterrizar en el segmento elegido
        // El puntero esta arriba (0 grados), el segmento 0 empieza arriba
        const targetAngle = 360 - (segIndex * segAngle + segAngle / 2);
        const extraSpins = 5 + Math.floor(Math.random() * 3); // 5-7 vueltas extra
        const totalRotation = APP.wheel.currentRotation + extraSpins * 360 + targetAngle - (APP.wheel.currentRotation % 360);

        const startRotation = APP.wheel.currentRotation;
        const rotationDelta = totalRotation - startRotation;
        const duration = 4000; // 4 segundos
        const startTime = Date.now();

        function animateWheel() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Easing: desacelerar al final
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentRot = startRotation + rotationDelta * eased;
            APP.wheel.currentRotation = currentRot;
            drawWheel(currentRot);

            if (progress < 1) {
                requestAnimationFrame(animateWheel);
            } else {
                // Resultado
                const segment = WHEEL_SEGMENTS[segIndex];
                const resultDisplay = document.getElementById('wheelResultDisplay');
                resultDisplay.style.display = 'block';
                if (segment.value > 0) {
                    const winAmount = bet * segment.value;
                    addBalance(currency, winAmount);
                    resultDisplay.className = 'result-display ' + (segment.value >= 1 ? 'win' : 'lose');
                    const amtColor = segment.value >= 1 ? 'var(--accent-emerald)' : 'var(--danger)';
                    resultDisplay.innerHTML = '<div class="result-amount" style="color:' + amtColor + ';">' + (segment.value >= 1 ? '+' : '') + formatTon(winAmount) + ' ' + currency.toUpperCase() + '</div><div class="result-label">Segmento: ' + segment.label + '</div>';
                    recordGame('wheel', bet, currency, segment.value >= 1, segment.value >= 1 ? winAmount : bet);
                    if (segment.value >= 1) showToast('Ganaste +' + formatTon(winAmount) + ' ' + currency.toUpperCase(), 'success');
                    else showToast('Multiplicador ' + segment.label + ' - Perdiste', 'error');
                } else {
                    resultDisplay.className = 'result-display lose';
                    resultDisplay.innerHTML = '<div class="result-amount" style="color:var(--danger);">-' + formatTon(bet) + ' ' + currency.toUpperCase() + '</div><div class="result-label">Segmento: 0x - Perdiste</div>';
                    recordGame('wheel', bet, currency, false, bet);
                    showToast('0x - Perdiste', 'error');
                }
                APP.wheel.spinning = false;
                document.getElementById('wheelPlayBtn').disabled = false;
            }
        }
        animateWheel();
    }

    /* ===== MINES GAME ===== */
    function setMineCount(count) {
        if (APP.mines.playing) return;
        APP.mines.count = count;
        const btns = document.querySelectorAll('#minesCountSelector .mines-count-btn');
        btns.forEach(function(btn) {
            btn.classList.toggle('active', parseInt(btn.textContent) === count);
        });
        renderMinesGrid();
    }

    function renderMinesGrid() {
        const grid = document.getElementById('minesGrid');
        if (!grid) return;
        let html = '';
        for (let i = 0; i < 25; i++) {
            html += '<div class="mine-tile" data-index="' + i + '" onclick="revealMine(' + i + ')"><i class="fas fa-question" style="color:var(--text-muted);font-size:0.8rem;"></i></div>';
        }
        grid.innerHTML = html;
        document.getElementById('minesCurrentMultiplier').textContent = '1.00x';
        document.getElementById('minesGemsFound').textContent = '0';
    }

    function startMines() {
        if (APP.mines.playing) return;
        if (!APP.wallet.connected) { showToast('Conecta tu wallet primero', 'error'); openModal('walletModal'); return; }
        const currency = APP.currency.mines;
        const bet = getBetInput('mines');
        if (bet <= 0) { showToast('Ingresa una apuesta valida', 'error'); return; }
        if (!hasEnoughBalance(currency, bet)) { showToast('Saldo insuficiente', 'error'); return; }

        APP.mines.playing = true;
        APP.mines.revealed = 0;
        APP.mines.gemsFound = 0;
        APP.mines.multiplier = 1.0;
        subtractBalance(currency, bet);

        // Generar grid con minas
        APP.mines.grid = [];
        for (let i = 0; i < 25; i++) APP.mines.grid.push('safe');
        let minesPlaced = 0;
        while (minesPlaced < APP.mines.count) {
            const idx = Math.floor(Math.random() * 25);
            if (APP.mines.grid[idx] === 'safe') {
                APP.mines.grid[idx] = 'mine';
                minesPlaced++;
            }
        }

        // Reset UI
        renderMinesGrid();
        document.getElementById('minesPlayBtn').style.display = 'none';
        document.getElementById('minesCashoutBtn').style.display = 'block';
        document.getElementById('minesCashoutBtn').textContent = 'COBRAR 1.00x';
        document.getElementById('minesResultDisplay').style.display = 'none';
        document.getElementById('minesBet').disabled = true;

        // Deshabilitar selector de minas
        document.querySelectorAll('#minesCountSelector .mines-count-btn').forEach(function(b) {
            b.style.pointerEvents = 'none'; b.style.opacity = '0.5';
        });
    }

    function calculateMinesMultiplier(mines, revealed) {
        if (revealed === 0) return 1.0;
        const totalTiles = 25;
        const safeTiles = totalTiles - mines;
        let prob = 1;
        for (let i = 0; i < revealed; i++) {
            prob *= (safeTiles - i) / (totalTiles - i);
        }
        return Math.max(1.0, 0.97 / prob);
    }

    function revealMine(index) {
        if (!APP.mines.playing) return;
        const tile = document.querySelector('.mine-tile[data-index="' + index + '"]');
        if (!tile || tile.classList.contains('revealed')) return;

        tile.classList.add('revealed');
        APP.mines.revealed++;

        if (APP.mines.grid[index] === 'mine') {
            // Perdio
            tile.classList.add('mine');
            tile.innerHTML = '<i class="fas fa-bomb"></i>';
            // Revelar todas las minas y gemas
            for (let i = 0; i < 25; i++) {
                const t = document.querySelector('.mine-tile[data-index="' + i + '"]');
                if (t && !t.classList.contains('revealed')) {
                    t.classList.add('revealed');
                    if (APP.mines.grid[i] === 'mine') {
                        t.classList.add('mine');
                        t.innerHTML = '<i class="fas fa-bomb"></i>';
                    } else {
                        t.classList.add('gem');
                        t.innerHTML = '<i class="fas fa-gem"></i>';
                    }
                }
            }
            endMinesGame(false);
        } else {
            // Gema encontrada
            tile.classList.add('gem');
            tile.innerHTML = '<i class="fas fa-gem"></i>';
            APP.mines.gemsFound++;
            APP.mines.multiplier = calculateMinesMultiplier(APP.mines.count, APP.mines.revealed);
            document.getElementById('minesCurrentMultiplier').textContent = APP.mines.multiplier.toFixed(2) + 'x';
            document.getElementById('minesGemsFound').textContent = APP.mines.gemsFound;
            document.getElementById('minesCashoutBtn').textContent = 'COBRAR ' + APP.mines.multiplier.toFixed(2) + 'x';
        }
    }

    function cashoutMines() {
        if (!APP.mines.playing) return;
        endMinesGame(true);
    }

    function endMinesGame(cashout) {
        APP.mines.playing = false;
        const currency = APP.currency.mines;
        const bet = getBetInput('mines');
        const resultDisplay = document.getElementById('minesResultDisplay');
        resultDisplay.style.display = 'block';

        if (cashout) {
            const winAmount = bet * APP.mines.multiplier;
            addBalance(currency, winAmount);
            resultDisplay.className = 'result-display win';
            resultDisplay.innerHTML = '<div class="result-amount" style="color:var(--accent-emerald);">+' + formatTon(winAmount) + ' ' + currency.toUpperCase() + '</div><div class="result-label">Cobraste a ' + APP.mines.multiplier.toFixed(2) + 'x</div>';
            recordGame('mines', bet, currency, true, winAmount);
            showToast('Cobraste +' + formatTon(winAmount) + ' ' + currency.toUpperCase(), 'success');
        } else {
            resultDisplay.className = 'result-display lose';
            resultDisplay.innerHTML = '<div class="result-amount" style="color:var(--danger);">-' + formatTon(bet) + ' ' + currency.toUpperCase() + '</div><div class="result-label">Encontraste una mina!</div>';
            recordGame('mines', bet, currency, false, bet);
        }

        document.getElementById('minesPlayBtn').style.display = 'block';
        document.getElementById('minesCashoutBtn').style.display = 'none';
        document.getElementById('minesBet').disabled = false;
        document.querySelectorAll('#minesCountSelector .mines-count-btn').forEach(function(b) {
            b.style.pointerEvents = ''; b.style.opacity = '';
        });
    }

    /* ===== CRASH GAME ===== */
    function generateCrashPoint() {
        const houseEdge = 0.03;
        const r = Math.random();
        if (r < houseEdge) return 1.00;
        return Math.max(1.01, parseFloat((0.97 / (1 - r)).toFixed(2)));
    }

    function playCrash() {
        if (APP.crash.playing || APP.crash.betPlaced) return;
        if (!APP.wallet.connected) { showToast('Conecta tu wallet primero', 'error'); openModal('walletModal'); return; }
        const currency = APP.currency.crash;
        const bet = getBetInput('crash');
        if (bet <= 0) { showToast('Ingresa una apuesta valida', 'error'); return; }
        if (!hasEnoughBalance(currency, bet)) { showToast('Saldo insuficiente', 'error'); return; }

        subtractBalance(currency, bet);
        APP.crash.betPlaced = true;
        APP.crash.crashed = false;
        APP.crash.crashPoint = generateCrashPoint();
        APP.crash.currentMultiplier = 1.00;

        document.getElementById('crashPlayBtn').style.display = 'none';
        document.getElementById('crashCashoutBtn').style.display = 'block';
        document.getElementById('crashResultDisplay').style.display = 'none';
        document.getElementById('crashBet').disabled = true;

        // Iniciar crash game con delay
        const multiplierText = document.getElementById('crashMultiplierText');
        multiplierText.className = 'crash-multiplier-overlay running';
        multiplierText.textContent = '1.00x';

        setTimeout(function() {
            APP.crash.playing = true;
            APP.crash.startTime = Date.now();
            APP.crash.animFrame = requestAnimationFrame(updateCrash);
        }, 1000);
    }

    function updateCrash() {
        if (!APP.crash.playing) return;

        const elapsed = (Date.now() - APP.crash.startTime) / 1000;
        // Curva exponencial: multiplicador sube mas rapido con el tiempo
        APP.crash.currentMultiplier = parseFloat(Math.pow(Math.E, 0.06 * elapsed).toFixed(2));

        const multiplierText = document.getElementById('crashMultiplierText');

        // Auto cash out
        const autoCashout = parseFloat(document.getElementById('crashAutoCashout').value) || 999;
        if (APP.crash.currentMultiplier >= autoCashout) {
            cashoutCrash();
            return;
        }

        if (APP.crash.currentMultiplier >= APP.crash.crashPoint) {
            // CRASH!
            APP.crash.crashed = true;
            APP.crash.playing = false;
            multiplierText.className = 'crash-multiplier-overlay crashed';
            multiplierText.textContent = APP.crash.crashPoint.toFixed(2) + 'x';

            drawCrashChart(APP.crash.crashPoint, true);

            const bet = getBetInput('crash');
            const currency = APP.currency.crash;
            const resultDisplay = document.getElementById('crashResultDisplay');
            resultDisplay.style.display = 'block';
            resultDisplay.className = 'result-display lose';
            resultDisplay.innerHTML = '<div class="result-amount" style="color:var(--danger);">-' + formatTon(bet) + ' ' + currency.toUpperCase() + '</div><div class="result-label">Crash en ' + APP.crash.crashPoint.toFixed(2) + 'x</div>';
            recordGame('crash', bet, currency, false, bet);

            document.getElementById('crashCashoutBtn').style.display = 'none';
            document.getElementById('crashPlayBtn').style.display = 'block';
            document.getElementById('crashPlayBtn').textContent = 'JUGAR DE NUEVO';
            document.getElementById('crashBet').disabled = false;
            APP.crash.betPlaced = false;
            return;
        }

        multiplierText.textContent = APP.crash.currentMultiplier.toFixed(2) + 'x';
        drawCrashChart(APP.crash.currentMultiplier, false);

        APP.crash.animFrame = requestAnimationFrame(updateCrash);
    }

    function drawCrashChart(multiplier, crashed) {
        const canvas = document.getElementById('crashCanvas');
        if (!canvas) return;
        const wrapper = canvas.parentElement;
        canvas.width = wrapper.offsetWidth * 2;
        canvas.height = wrapper.offsetHeight * 2;
        canvas.style.width = wrapper.offsetWidth + 'px';
        canvas.style.height = wrapper.offsetHeight + 'px';

        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        const padding = 40;

        ctx.clearRect(0, 0, w, h);

        // Grid
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
            const y = padding + (h - 2 * padding) * (i / 4);
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(w - padding, y);
            ctx.stroke();
        }

        // Curva
        const maxMultiplier = Math.max(multiplier, 2);
        const points = [];
        const steps = 60;
        for (let i = 0; i <= steps; i++) {
            const t = (i / steps) * Math.log(multiplier) / 0.06;
            const m = Math.pow(Math.E, 0.06 * t * (i / steps));
            const x = padding + (w - 2 * padding) * (i / steps);
            const y = h - padding - ((Math.min(m, multiplier) - 1) / (maxMultiplier - 1)) * (h - 2 * padding);
            points.push({ x: x, y: y });
        }

        // Linea
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.strokeStyle = crashed ? '#FF4757' : '#00E676';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Gradiente bajo la curva
        ctx.lineTo(points[points.length - 1].x, h - padding);
        ctx.lineTo(points[0].x, h - padding);
        ctx.closePath();
        const gradient = ctx.createLinearGradient(0, 0, 0, h);
        if (crashed) {
            gradient.addColorStop(0, 'rgba(255, 71, 87, 0.2)');
            gradient.addColorStop(1, 'rgba(255, 71, 87, 0)');
        } else {
            gradient.addColorStop(0, 'rgba(0, 230, 118, 0.2)');
            gradient.addColorStop(1, 'rgba(0, 230, 118, 0)');
        }
        ctx.fillStyle = gradient;
        ctx.fill();

        // Punto final
        if (points.length > 0) {
            const lastPoint = points[points.length - 1];
            ctx.beginPath();
            ctx.arc(lastPoint.x, lastPoint.y, 8, 0, Math.PI * 2);
            ctx.fillStyle = crashed ? '#FF4757' : '#00E676';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(lastPoint.x, lastPoint.y, 16, 0, Math.PI * 2);
            ctx.fillStyle = crashed ? 'rgba(255, 71, 87, 0.2)' : 'rgba(0, 230, 118, 0.2)';
            ctx.fill();
        }
    }

    function cashoutCrash() {
        if (!APP.crash.playing) return;
        APP.crash.playing = false;
        if (APP.crash.animFrame) cancelAnimationFrame(APP.crash.animFrame);

        const currency = APP.currency.crash;
        const bet = getBetInput('crash');
        const winAmount = bet * APP.crash.currentMultiplier;

        addBalance(currency, winAmount);

        const multiplierText = document.getElementById('crashMultiplierText');
        multiplierText.className = 'crash-multiplier-overlay running';
        multiplierText.textContent = APP.crash.currentMultiplier.toFixed(2) + 'x';

        const resultDisplay = document.getElementById('crashResultDisplay');
        resultDisplay.style.display = 'block';
        resultDisplay.className = 'result-display win';
        resultDisplay.innerHTML = '<div class="result-amount" style="color:var(--accent-emerald);">+' + formatTon(winAmount) + ' ' + currency.toUpperCase() + '</div><div class="result-label">Cobraste a ' + APP.crash.currentMultiplier.toFixed(2) + 'x</div>';
        recordGame('crash', bet, currency, true, winAmount);
        showToast('Cobraste +' + formatTon(winAmount) + ' ' + currency.toUpperCase(), 'success');

        document.getElementById('crashCashoutBtn').style.display = 'none';
        document.getElementById('crashPlayBtn').style.display = 'block';
        document.getElementById('crashPlayBtn').textContent = 'JUGAR DE NUEVO';
        document.getElementById('crashBet').disabled = false;
        APP.crash.betPlaced = false;
    }

    function cancelCrash() {
        if (APP.crash.playing) {
            APP.crash.playing = false;
            if (APP.crash.animFrame) cancelAnimationFrame(APP.crash.animFrame);
            // Devolver apuesta
            const bet = getBetInput('crash');
            const currency = APP.currency.crash;
            if (APP.crash.betPlaced) addBalance(currency, bet);
        }
        APP.crash.betPlaced = false;
        document.getElementById('crashCashoutBtn').style.display = 'none';
        document.getElementById('crashPlayBtn').style.display = 'block';
        document.getElementById('crashPlayBtn').disabled = false;
        document.getElementById('crashBet').disabled = false;
    }

    /* ===== TICKER DE GANADORES ===== */
    function generateTickerData() {
        const names = ['CryptoKing', 'DiamondH', 'LuckyAce', 'MoonShot', 'StarPlay', 'GemMaster', 'WhaleBet', 'NightOwl', 'GoldRush', 'SilverFox', 'BetBoss', 'TopPlayer', 'WinStreak', 'CoinHero', 'RiskTaker'];
        const games = ['Dice', 'Coin Flip', 'Wheel', 'Mines', 'Crash'];
        const items = [];
        for (let i = 0; i < 20; i++) {
            const name = names[Math.floor(Math.random() * names.length)];
            const game = games[Math.floor(Math.random() * games.length)];
            const amount = (Math.random() * 50 + 0.5).toFixed(2);
            items.push({ name: name, game: game, amount: amount });
        }
        return items;
    }

    function initTicker() {
        const data = generateTickerData();
        const inner = document.getElementById('tickerInner');
        let html = '';
        // Duplicar para loop continuo
        for (let r = 0; r < 2; r++) {
            for (let i = 0; i < data.length; i++) {
                html += '<span class="ticker-item"><i class="fas fa-gem" style="color:var(--accent-gold);font-size:0.6rem;"></i> ' +
                    data[i].name + ' <span class="amount">+' + data[i].amount + ' TON</span> en ' + data[i].game + '</span>';
            }
        }
        inner.innerHTML = html;
    }

    /* ===== INICIALIZACION ===== */
    function init() {
        updateBalanceDisplay();
        updateStats();
        initTicker();
        updateDiceSlider();

        // Dibujar crash canvas vacio
        setTimeout(function() {
            const crashCanvas = document.getElementById('crashCanvas');
            if (crashCanvas) {
                const wrapper = crashCanvas.parentElement;
                crashCanvas.width = wrapper.offsetWidth * 2;
                crashCanvas.height = wrapper.offsetHeight * 2;
                crashCanvas.style.width = wrapper.offsetWidth + 'px';
                crashCanvas.style.height = wrapper.offsetHeight + 'px';
                const ctx = crashCanvas.getContext('2d');
                ctx.clearRect(0, 0, crashCanvas.width, crashCanvas.height);
            }
        }, 500);

        // Teclado ESC para cerrar modales
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const modals = document.querySelectorAll('.modal-overlay.active');
                modals.forEach(function(m) {
                    closeModal(m.id);
                });
            }
        });
    }

    // Ejecutar al cargar
    document.addEventListener('DOMContentLoaded', init);
    </script>
</body>
</html>
