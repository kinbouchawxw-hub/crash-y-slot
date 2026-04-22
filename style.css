<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>GiftBox — Collect & Trade</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
<script>
tailwind.config={theme:{extend:{colors:{bg:'#0a0e17',surface:'#111827',card:'#1a2035',cardHover:'#222d48',border:'#2a3550',accent:'#f5a623',accentHover:'#ffc940',accentDim:'rgba(245,166,35,0.15)',success:'#10b981',danger:'#ef4444',muted:'#5c6a7e',tp:'#f0f0f0',ts:'#8b95a8',common:'#9ca3af',rare:'#3b9eff',epic:'#a855f7',legendary:'#f59e0b',ultra:'#ef4444'},fontFamily:{sans:['Space Grotesk','sans-serif']}}}}
</script>
<style>
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:#2a3550;border-radius:4px}
body{background:#060911;font-family:'Space Grotesk',sans-serif;overflow:hidden;height:100dvh}
.page{display:none;animation:pageIn .3s ease}.page.active{display:block}
@keyframes pageIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes fadeOut{from{opacity:1}to{opacity:0}}
@keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
@keyframes slideDown{from{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}
@keyframes bounceIn{0%{transform:scale(0);opacity:0}50%{transform:scale(1.1)}70%{transform:scale(0.95)}100%{transform:scale(1);opacity:1}}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
@keyframes glow{0%,100%{box-shadow:0 0 8px var(--glow-color)}50%{box-shadow:0 0 20px var(--glow-color),0 0 40px var(--glow-color)}}
@keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
@keyframes shake{0%,100%{transform:translateX(0)}10%,30%,50%,70%,90%{transform:translateX(-4px)}20%,40%,60%,80%{transform:translateX(4px)}}
@keyframes shakeHard{0%,100%{transform:translate(0)}5%{transform:translate(-8px,4px)}10%{transform:translate(6px,-6px)}15%{transform:translate(-4px,8px)}20%{transform:translate(8px,-4px)}25%{transform:translate(-6px,2px)}30%{transform:translate(4px,-8px)}35%{transform:translate(0)}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes lidOpen{0%{transform:rotate(0) translateY(0);opacity:1}100%{transform:rotate(-60deg) translateY(-60px);opacity:0}}
@keyframes lightBeam{0%{height:0;opacity:0}30%{opacity:1}100%{height:200px;opacity:.6}}
@keyframes riseIn{0%{transform:translateY(40px) scale(.8);opacity:0}100%{transform:translateY(0) scale(1);opacity:1}}
@keyframes confettiFall{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}
@keyframes screenFlash{0%{opacity:.6}100%{opacity:0}}
@keyframes particleBurst{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(var(--px),var(--py)) scale(0);opacity:0}}
@keyframes countPulse{0%{transform:scale(1)}50%{transform:scale(1.2)}100%{transform:scale(1)}}
@keyframes borderGlow{0%,100%{border-color:var(--glow-color)}50%{border-color:transparent}}
@keyframes spinSlow{from{transform:rotate(0)}to{transform:rotate(360deg)}}
.nav-item{transition:all .2s}.nav-item.active{color:#f5a623}
.nav-item.active .nav-dot{transform:scaleX(1)}.nav-dot{transform:scaleX(0);transition:transform .3s}
.btn-tap{transition:transform .1s}.btn-tap:active{transform:scale(.95)}
.rarity-bar{height:3px;border-radius:2px;width:100%}
.glow-card{transition:all .25s ease}.glow-card:hover{transform:translateY(-2px)}
.shimmer-text{background:linear-gradient(90deg,transparent 30%,rgba(255,255,255,.15) 50%,transparent 70%);background-size:200% 100%;animation:shimmer 3s infinite}
.confetti-piece{position:fixed;top:-10px;width:8px;height:12px;border-radius:2px;animation:confettiFall linear forwards;z-index:10001;pointer-events:none}
.particle{position:absolute;width:6px;height:6px;border-radius:50%;animation:particleBurst .8s ease-out forwards;pointer-events:none}
.overlay-bg{background:rgba(4,6,12,.92);backdrop-filter:blur(8px)}
.xp-bar-fill{transition:width .6s cubic-bezier(.4,0,.2,1)}
.toast{animation:slideUp .3s ease,fadeOut .3s ease 2.7s forwards}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}
</style>
</head>
<body>
<div id="app" class="w-full max-w-[430px] h-[100dvh] max-h-[932px] mx-auto bg-bg relative overflow-hidden flex flex-col shadow-2xl shadow-black/50">
<!-- Background Canvas -->
<canvas id="bg-canvas" class="absolute inset-0 z-0 pointer-events-none"></canvas>
<!-- Header -->
<header id="app-header" class="relative z-10 flex items-center justify-between px-4 py-3 border-b border-border/50 bg-surface/80 backdrop-blur-md">
<div class="flex items-center gap-2">
<div id="hdr-avatar" class="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">G</div>
<div><div id="hdr-name" class="text-tp text-sm font-semibold leading-tight">Player</div><div id="hdr-level" class="text-accent text-xs font-medium">Lv. 1</div></div>
</div>
<div class="flex items-center gap-3">
<div class="flex items-center gap-1 bg-card rounded-full px-2.5 py-1"><i data-lucide="coins" class="w-3.5 h-3.5 text-yellow-400"></i><span id="hdr-coins" class="text-tp text-xs font-semibold">0</span></div>
<div class="flex items-center gap-1 bg-card rounded-full px-2.5 py-1"><i data-lucide="gem" class="w-3.5 h-3.5 text-cyan-400"></i><span id="hdr-diamonds" class="text-tp text-xs font-semibold">0</span></div>
</div>
</header>
<!-- Main -->
<main id="app-content" class="flex-1 overflow-y-auto overflow-x-hidden relative z-10">
<!-- LOGIN SCREEN -->
<div id="login-screen" class="page active flex flex-col items-center justify-center min-h-full p-6 text-center">
<div class="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mb-6" style="animation:float 3s ease-in-out infinite"><i data-lucide="gift" class="w-10 h-10 text-accent"></i></div>
<h1 class="text-3xl font-bold text-tp mb-2">GiftBox</h1>
<p class="text-ts text-sm mb-8 max-w-[260px]">Open mystery boxes, collect rare items, trade with the market, and climb the leaderboard.</p>
<div class="w-full max-w-[280px]">
<input id="login-input" type="text" maxlength="16" placeholder="Enter your username" class="w-full bg-card border border-border rounded-xl px-4 py-3 text-tp text-sm placeholder-muted focus:outline-none focus:border-accent/60 transition mb-3" />
<button id="login-btn" onclick="handleLogin()" class="w-full bg-accent hover:bg-accentHover text-bg font-semibold rounded-xl py-3 text-sm btn-tap transition">Start Playing</button>
</div>
<p id="login-error" class="text-danger text-xs mt-2 hidden">Please enter a username</p>
</div>
<!-- HOME PAGE -->
<div id="page-home" class="page p-4 space-y-4 pb-6"></div>
<!-- BOXES PAGE -->
<div id="page-boxes" class="page p-4 space-y-4 pb-6"></div>
<!-- INVENTORY PAGE -->
<div id="page-inventory" class="page p-4 space-y-4 pb-6"></div>
<!-- MARKET PAGE -->
<div id="page-market" class="page p-4 space-y-4 pb-6"></div>
<!-- PROFILE PAGE -->
<div id="page-profile" class="page p-4 space-y-4 pb-6"></div>
</main>
<!-- Bottom Nav -->
<nav id="app-nav" class="relative z-10 flex items-center justify-around border-t border-border/50 bg-surface/90 backdrop-blur-md px-2 py-1.5 hidden">
<button class="nav-item active flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg" data-page="home" onclick="navigateTo('home')"><i data-lucide="home" class="w-5 h-5"></i><span class="text-[10px] font-medium">Home</span><div class="nav-dot w-4 h-0.5 rounded-full bg-accent mt-0.5"></div></button>
<button class="nav-item flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg" data-page="boxes" onclick="navigateTo('boxes')"><i data-lucide="package" class="w-5 h-5"></i><span class="text-[10px] font-medium">Boxes</span><div class="nav-dot w-4 h-0.5 rounded-full bg-accent mt-0.5"></div></button>
<button class="nav-item flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg" data-page="inventory" onclick="navigateTo('inventory')"><i data-lucide="layout-grid" class="w-5 h-5"></i><span class="text-[10px] font-medium">Items</span><div class="nav-dot w-4 h-0.5 rounded-full bg-accent mt-0.5"></div></button>
<button class="nav-item flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg" data-page="market" onclick="navigateTo('market')"><i data-lucide="store" class="w-5 h-5"></i><span class="text-[10px] font-medium">Market</span><div class="nav-dot w-4 h-0.5 rounded-full bg-accent mt-0.5"></div></button>
<button class="nav-item flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg" data-page="profile" onclick="navigateTo('profile')"><i data-lucide="user" class="w-5 h-5"></i><span class="text-[10px] font-medium">Profile</span><div class="nav-dot w-4 h-0.5 rounded-full bg-accent mt-0.5"></div></button>
</nav>
<!-- Box Opening Overlay -->
<div id="box-overlay" class="hidden absolute inset-0 z-50 overlay-bg flex flex-col items-center justify-center"></div>
<!-- Item Detail Modal -->
<div id="item-modal" class="hidden absolute inset-0 z-40 overlay-bg flex items-end justify-center">
<div id="item-modal-content" class="w-full bg-surface border-t border-border rounded-t-2xl p-5 pb-8 max-h-[70%] overflow-y-auto" style="animation:slideUp .3s ease"></div>
</div>
<!-- Leaderboard Modal -->
<div id="lb-modal" class="hidden absolute inset-0 z-40 overlay-bg flex items-center justify-center p-4">
<div class="w-full bg-surface border border-border rounded-2xl p-5 max-h-[80%] overflow-y-auto" style="animation:bounceIn .4s ease"></div>
</div>
<!-- Toast Container -->
<div id="toast-container" class="absolute top-16 left-4 right-4 z-50 flex flex-col gap-2 pointer-events-none"></div>
<!-- Confetti Container -->
<div id="confetti-container" class="absolute inset-0 z-[10000] pointer-events-none overflow-hidden"></div>
</div>

<script>
// ===================== CONFIGURATION =====================
const RARITY = {
    COMMON:    { key:'COMMON',    label:'Common',    color:'#9ca3af', bg:'rgba(156,163,175,0.1)',  border:'rgba(156,163,175,0.25)', glow:'rgba(156,163,175,0.3)',  tier:0, xpMult:1 },
    RARE:      { key:'RARE',      label:'Rare',      color:'#3b9eff', bg:'rgba(59,158,255,0.1)',   border:'rgba(59,158,255,0.3)',   glow:'rgba(59,158,255,0.4)',   tier:1, xpMult:2 },
    EPIC:      { key:'EPIC',      label:'Epic',      color:'#a855f7', bg:'rgba(168,85,247,0.1)',   border:'rgba(168,85,247,0.3)',   glow:'rgba(168,85,247,0.5)',   tier:2, xpMult:4 },
    LEGENDARY: { key:'LEGENDARY', label:'Legendary', color:'#f59e0b', bg:'rgba(245,158,11,0.1)',   border:'rgba(245,158,11,0.35)',  glow:'rgba(245,158,11,0.6)',   tier:3, xpMult:8 },
    ULTRA:     { key:'ULTRA',     label:'Ultra',     color:'#ef4444', bg:'rgba(239,68,68,0.12)',   border:'rgba(239,68,68,0.4)',    glow:'rgba(239,68,68,0.7)',    tier:4, xpMult:16 }
};
const RARITY_ORDER = ['COMMON','RARE','EPIC','LEGENDARY','ULTRA'];

const ITEMS = [
    {id:'c1',name:'Bronze Coin',desc:'A simple bronze coin from old times.',rarity:'COMMON',value:10,icon:'coins',tradable:true},
    {id:'c2',name:'Paper Wrap',desc:'Basic but colorful wrapping paper.',rarity:'COMMON',value:15,icon:'file-text',tradable:true},
    {id:'c3',name:'Wooden Token',desc:'A carved wooden token with symbols.',rarity:'COMMON',value:12,icon:'circle-dot',tradable:true},
    {id:'c4',name:'Ribbon Spool',desc:'A spool of shiny silk ribbon.',rarity:'COMMON',value:18,icon:'bookmark',tradable:true},
    {id:'c5',name:'Glass Marble',desc:'A translucent glass marble.',rarity:'COMMON',value:20,icon:'circle',tradable:true},
    {id:'c6',name:'Copper Bell',desc:'A tiny bell that still rings.',rarity:'COMMON',value:22,icon:'bell',tradable:true},
    {id:'c7',name:'Stamp Collection',desc:'A set of vintage stamps.',rarity:'COMMON',value:14,icon:'stamp',tradable:true},
    {id:'c8',name:'Button Jar',desc:'A jar full of colorful buttons.',rarity:'COMMON',value:16,icon:'grip',tradable:true},
    {id:'r1',name:'Silver Crown',desc:'A delicate silver crown with gems.',rarity:'RARE',value:100,icon:'crown',tradable:true},
    {id:'r2',name:'Crystal Vial',desc:'A vial filled with glowing liquid.',rarity:'RARE',value:120,icon:'flask-conical',tradable:true},
    {id:'r3',name:'Enchanted Scroll',desc:'Ancient text that shimmers.',rarity:'RARE',value:150,icon:'scroll',tradable:true},
    {id:'r4',name:'Moonstone',desc:'A stone that absorbs moonlight.',rarity:'RARE',value:130,icon:'moon',tradable:true},
    {id:'r5',name:'Golden Key',desc:'Unlocks something mysterious.',rarity:'RARE',value:140,icon:'key',tradable:true},
    {id:'r6',name:'Music Box',desc:'Plays an otherworldly melody.',rarity:'RARE',value:110,icon:'music',tradable:true},
    {id:'e1',name:'Dragon Scale',desc:'Shimmering scale from an ancient dragon.',rarity:'EPIC',value:500,icon:'shield',tradable:true},
    {id:'e2',name:'Spirit Lantern',desc:'A lantern that guides lost souls.',rarity:'EPIC',value:600,icon:'lamp',tradable:true},
    {id:'e3',name:'Time Sandglass',desc:'Sand flows backwards inside.',rarity:'EPIC',value:550,icon:'hourglass',tradable:true},
    {id:'e4',name:'Phoenix Quill',desc:'A feather that writes its own stories.',rarity:'EPIC',value:650,icon:'feather',tradable:true},
    {id:'l1',name:'Phoenix Feather',desc:'Eternal feather that never burns.',rarity:'LEGENDARY',value:2000,icon:'flame',tradable:true},
    {id:'l2',name:'Void Crystal',desc:'A crystal from between dimensions.',rarity:'LEGENDARY',value:2500,icon:'diamond',tradable:true},
    {id:'l3',name:'Celestial Map',desc:'Maps the paths of stars and fate.',rarity:'LEGENDARY',value:2200,icon:'map',tradable:true},
    {id:'u1',name:'Cosmic Egg',desc:'Contains an entire universe within.',rarity:'ULTRA',value:10000,icon:'orbit',tradable:true},
    {id:'u2',name:'Eternal Flame',desc:'A fire that has burned since creation.',rarity:'ULTRA',value:12000,icon:'zap',tradable:true},
    {id:'ev1',name:'Frost Orb',desc:'Captured winter essence. Event exclusive.',rarity:'EPIC',value:800,icon:'snowflake',tradable:true,event:true},
    {id:'ev2',name:'Shadow Dagger',desc:'A blade forged in darkness. Event exclusive.',rarity:'LEGENDARY',value:3000,icon:'swords',tradable:true,event:true},
];

const BOXES = [
    {id:'daily',name:'Daily Box',desc:'Free once per day. Basic rewards.',icon:'sun',cost:0,costType:'free',cooldown:86400,
     loot:{COMMON:80,RARE:17,EPIC:3},color:'#10b981',bgColor:'rgba(16,185,129,0.1)'},
    {id:'standard',name:'Standard Box',desc:'Balanced loot for coin cost.',icon:'package',cost:50,costType:'coins',cooldown:0,
     loot:{COMMON:55,RARE:30,EPIC:12,LEGENDARY:3},color:'#3b9eff',bgColor:'rgba(59,158,255,0.1)'},
    {id:'premium',name:'Premium Box',desc:'Higher rare chances. Diamond cost.',icon:'gem',cost:5,costType:'diamonds',cooldown:0,
     loot:{COMMON:30,RARE:32,EPIC:25,LEGENDARY:10,ULTRA:3},color:'#a855f7',bgColor:'rgba(168,85,247,0.1)'},
    {id:'event',name:'Event Box',desc:'Limited time. Exclusive event items.',icon:'sparkles',cost:8,costType:'diamonds',cooldown:0,
     loot:{COMMON:20,RARE:28,EPIC:30,LEGENDARY:17,ULTRA:5},color:'#f59e0b',bgColor:'rgba(245,158,11,0.1)',event:true},
    {id:'mystery',name:'Mystery Box',desc:'Unpredictable odds. Anything can happen.',icon:'help-circle',cost:100,costType:'coins',cooldown:0,
     loot:{COMMON:15,RARE:25,EPIC:30,LEGENDARY:22,ULTRA:8},color:'#ef4444',bgColor:'rgba(239,68,68,0.1)'},
];

const MISSION_POOL = [
    {id:'open3',desc:'Open 3 boxes',target:3,type:'boxes_opened',reward:{coins:50,xp:20}},
    {id:'open5',desc:'Open 5 boxes',target:5,type:'boxes_opened',reward:{coins:120,xp:40}},
    {id:'getRare',desc:'Get a Rare or better item',target:1,type:'rare_plus',reward:{coins:80,xp:30}},
    {id:'getEpic',desc:'Get an Epic or better item',target:1,type:'epic_plus',reward:{coins:200,xp:60}},
    {id:'sell2',desc:'Sell 2 items',target:2,type:'items_sold',reward:{coins:60,xp:25}},
    {id:'earn300',desc:'Earn 300 coins from boxes',target:300,type:'coins_from_boxes',reward:{diamonds:1,xp:30}},
    {id:'collect10',desc:'Have 10+ unique items',target:10,type:'unique_items',reward:{coins:150,xp:35}},
];

const FAKE_PLAYERS = [
    {name:'CryptoKing',level:47,coins:89200,value:45600},{name:'LuckyDraw',level:38,coins:52300,value:32100},
    {name:'BoxAddict',level:52,coins:124000,value:67800},{name:'RareHunter',level:31,coins:28400,value:21500},
    {name:'TradeMaster',level:44,coins:67800,value:51200},{name:'DiamondHands',level:29,coins:15600,value:18900},
    {name:'GiftGuru',level:41,coins:45900,value:38700},{name:'MysteryX',level:55,coins:198000,value:89200},
    {name:'SparkleQueen',level:36,coins:39200,value:29800},{name:'NightOwl',level:33,coins:22100,value:17400},
    {name:'GoldRush',level:49,coins:95400,value:54300},{name:'ShadowFox',level:27,coins:12800,value:14200},
    {name:'NovaStar',level:43,coins:58700,value:42100},{name:'PixelWizard',level:35,coins:31600,value:26300},
    {name:'IronTrader',level:40,coins:42300,value:35600},{name:'CosmicDust',level:51,coins:112000,value:72400},
    {name:'BlazeFury',level:25,coins:9800,value:11600},{name:'IcePhoenix',level:46,coins:78200,value:48900},
    {name:'ZenCollector',level:39,coins:47100,value:33200},{name:'ThunderBolt',level:28,coins:18400,value:15800},
];

// ===================== STATE =====================
let S = null; // game state
const LS_KEY = 'giftbox_save_v2';

function defaultState(username) {
    const now = Date.now();
    return {
        player: { username, created_at: now, level: 1, xp: 0, coins: 200, diamonds: 10, luck: 0, streak: 1, last_login: now, total_boxes: 0 },
        inventory: [],
        pity: { since_epic: 0, since_legendary: 0, since_ultra: 0 },
        missions: { date: new Date().toDateString(), list: [], progress: {} },
        market: { buyListings: [], sellListings: [], lastRefresh: now },
        stats: { boxes_opened: 0, rare_found: 0, epic_found: 0, legendary_found: 0, ultra_found: 0, coins_from_boxes: 0, items_sold: 0, trade_volume: 0 },
        event: { active: true, multiplier: 1.5, endsAt: now + 3*86400000 },
        lastDailyBox: 0,
        banned: false
    };
}

function saveState() { if(S) localStorage.setItem(LS_KEY, JSON.stringify(S)); }
function loadState() { try { const d = JSON.parse(localStorage.getItem(LS_KEY)); if(d && d.player) return d; } catch(e){} return null; }
function resetState() { localStorage.removeItem(LS_KEY); location.reload(); }

// ===================== HELPERS =====================
const $ = id => document.getElementById(id);
const delay = ms => new Promise(r => setTimeout(r, ms));
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function clamp(v,min,max) { return Math.max(min,Math.min(max,v)); }
function pick(arr) { return arr[Math.floor(Math.random()*arr.length)]; }
function getItem(id) { return ITEMS.find(i=>i.id===id); }
function getBox(id) { return BOXES.find(b=>b.id===id); }
function todayStr() { return new Date().toDateString(); }

// ===================== CORE GAME LOGIC =====================

// --- RNG Engine ---
function rollRarity(boxDef) {
    const luckMod = 1 + S.player.luck * 0.02 + (S.event.active ? (S.event.multiplier - 1) * 0.3 : 0);
    const table = boxDef.loot;
    let roll = Math.random() * 100;
    for (const r of RARITY_ORDER) {
        if (!table[r]) continue;
        const chance = table[r] * luckMod;
        roll -= chance;
        if (roll <= 0) return r;
    }
    return 'COMMON';
}

function checkPity(forcedRarity) {
    // Pity: guarantee after thresholds
    if (S.pity.since_ultra >= 50) return 'ULTRA';
    if (S.pity.since_legendary >= 25) return 'LEGENDARY';
    if (S.pity.since_epic >= 10) return 'EPIC';
    return forcedRarity;
}

function selectItem(rarity, boxId) {
    const pool = ITEMS.filter(i => i.rarity === rarity && (!i.event || boxId === 'event'));
    if (!pool.length) pool.push(ITEMS.filter(i=>i.rarity===rarity)[0]); // fallback
    return pick(pool);
}

// --- Open Box ---
function openBox(boxId) {
    const box = getBox(boxId);
    if (!box) return null;
    // Validate cost
    if (box.costType === 'coins' && S.player.coins < box.cost) { showToast('Not enough coins!','danger'); return null; }
    if (box.costType === 'diamonds' && S.player.diamonds < box.cost) { showToast('Not enough diamonds!','danger'); return null; }
    if (box.id === 'daily') {
        const elapsed = Date.now() - S.lastDailyBox;
        if (elapsed < box.cooldown * 1000 && S.lastDailyBox > 0) { showToast('Daily box on cooldown!','danger'); return null; }
    }
    if (box.event && !S.event.active) { showToast('Event has ended!','danger'); return null; }
    // Deduct cost
    if (box.costType === 'coins') S.player.coins -= box.cost;
    if (box.costType === 'diamonds') S.player.diamonds -= box.cost;
    if (box.id === 'daily') S.lastDailyBox = Date.now();
    // Roll
    let rarity = rollRarity(box);
    rarity = checkPity(rarity);
    const item = selectItem(rarity, boxId);
    // Create instance
    const instance = { uid: uid(), item_id: item.id, acquired: Date.now(), locked: false };
    S.inventory.push(instance);
    // Update pity
    S.pity.since_epic++; S.pity.since_legendary++; S.pity.since_ultra++;
    if (RARITY[rarity].tier >= 2) S.pity.since_epic = 0;
    if (RARITY[rarity].tier >= 3) S.pity.since_legendary = 0;
    if (RARITY[rarity].tier >= 4) S.pity.since_ultra = 0;
    // Stats
    S.stats.boxes_opened++;
    S.player.total_boxes++;
    if (rarity === 'RARE') S.stats.rare_found++;
    if (rarity === 'EPIC') S.stats.epic_found++;
    if (rarity === 'LEGENDARY') S.stats.legendary_found++;
    if (rarity === 'ULTRA') S.stats.ultra_found++;
    // Currency rewards from box
    const coinReward = Math.floor((10 + RARITY[rarity].tier * 15) * (S.event.active ? S.event.multiplier : 1));
    S.player.coins += coinReward;
    S.stats.coins_from_boxes += coinReward;
    // XP
    const xpGain = Math.floor((15 + RARITY[rarity].tier * 20) * RARITY[rarity].xpMult);
    addXP(xpGain);
    // Missions
    updateMissionProgress('boxes_opened', 1);
    if (RARITY[rarity].tier >= 1) updateMissionProgress('rare_plus', 1);
    if (RARITY[rarity].tier >= 2) updateMissionProgress('epic_plus', 1);
    saveState();
    return { item, rarity, instance, coinReward, xpGain };
}

// --- Level System ---
function xpForLevel(lv) { return Math.floor(100 * lv * lv); }
function addXP(amount) {
    S.player.xp += amount;
    while (S.player.xp >= xpForLevel(S.player.level)) {
        S.player.xp -= xpForLevel(S.player.level);
        S.player.level++;
        S.player.luck += 0.5;
        S.player.coins += S.player.level * 50;
        showToast(`Level Up! Now Lv.${S.player.level} — Luck +0.5, +${S.player.level*50} coins`, 'success');
    }
}

// --- Inventory ---
function sellItem(instanceUid) {
    const idx = S.inventory.findIndex(i => i.uid === instanceUid);
    if (idx === -1) return;
    const inst = S.inventory[idx];
    const item = getItem(inst.item_id);
    if (!item || !item.tradable || inst.locked) { showToast('Cannot sell this item','danger'); return; }
    const sellPrice = Math.floor(item.value * 0.6);
    S.inventory.splice(idx, 1);
    S.player.coins += sellPrice;
    S.stats.items_sold++;
    S.stats.trade_volume += sellPrice;
    updateMissionProgress('items_sold', 1);
    saveState();
    showToast(`Sold ${item.name} for ${sellPrice} coins`, 'success');
    renderCurrentPage();
}

function getUniqueCount() { return new Set(S.inventory.map(i=>i.item_id)).size; }
function getTotalValue() { return S.inventory.reduce((s,i) => s + (getItem(i.item_id)?.value || 0), 0); }

// --- Missions ---
function generateMissions() {
    if (S.missions.date === todayStr()) return;
    const shuffled = [...MISSION_POOL].sort(() => Math.random() - 0.5);
    S.missions = { date: todayStr(), list: shuffled.slice(0, 3), progress: {}, claimed: [] };
    saveState();
}
function updateMissionProgress(type, amount) {
    S.missions.list.forEach(m => {
        if (m.type === type) {
            S.missions.progress[m.id] = (S.missions.progress[m.id] || 0) + amount;
        }
    });
    if (type === 'unique_items') {
        S.missions.list.forEach(m => {
            if (m.type === 'unique_items') S.missions.progress[m.id] = getUniqueCount();
        });
    }
    // Auto-claim completed
    S.missions.list.forEach(m => {
        const prog = getMissionProgress(m);
        if (prog >= m.target && !S.missions.claimed.includes(m.id)) {
            S.missions.claimed.push(m.id);
            if (m.reward.coins) S.player.coins += m.reward.coins;
            if (m.reward.diamonds) S.player.diamonds += m.reward.diamonds;
            if (m.reward.xp) addXP(m.reward.xp);
            showToast(`Mission done: ${m.desc}!`, 'success');
        }
    });
    saveState();
}
function getMissionProgress(m) {
    if (m.type === 'unique_items') return getUniqueCount();
    return S.missions.progress[m.id] || 0;
}

// --- Market ---
function refreshMarket() {
    const now = Date.now();
    if (now - S.market.lastRefresh < 60000 && S.market.buyListings.length > 0) return;
    S.market.buyListings = [];
    const count = 8 + Math.floor(Math.random() * 5);
    for (let i = 0; i < count; i++) {
        const item = pick(ITEMS.filter(it => !it.event));
        const markup = 1.2 + Math.random() * 0.8;
        S.market.buyListings.push({
            uid: uid(), item_id: item.id,
            price: Math.floor(item.value * markup),
            seller: pick(FAKE_PLAYERS).name,
            listed: now - Math.floor(Math.random() * 3600000)
        });
    }
    S.market.lastRefresh = now;
    // Check player sell listings for NPC buys
    S.market.sellListings = S.market.sellListings.filter(sl => {
        if (Math.random() < 0.3) { // 30% chance NPC buys
            S.player.coins += sl.price;
            S.stats.trade_volume += sl.price;
            showToast(`${sl.item_name} sold on market for ${sl.price} coins!`, 'success');
            return false;
        }
        return true;
    });
    saveState();
}
function buyFromMarket(listingUid) {
    const idx = S.market.buyListings.findIndex(l => l.uid === listingUid);
    if (idx === -1) return;
    const listing = S.market.buyListings[idx];
    if (S.player.coins < listing.price) { showToast('Not enough coins!','danger'); return; }
    S.player.coins -= listing.price;
    S.market.buyListings.splice(idx, 1);
    const item = getItem(listing.item_id);
    S.inventory.push({ uid: uid(), item_id: item.id, acquired: Date.now(), locked: false });
    saveState();
    showToast(`Bought ${item.name} for ${listing.price} coins`, 'success');
    renderCurrentPage();
}
function listOnMarket(instanceUid, price) {
    const inst = S.inventory.find(i => i.uid === instanceUid);
    if (!inst) return;
    const item = getItem(inst.item_id);
    if (!item || !item.tradable || inst.locked) return;
    if (price < 1 || price > 999999) return;
    S.inventory = S.inventory.filter(i => i.uid !== instanceUid);
    S.market.sellListings.push({ uid: uid(), item_id: item.id, item_name: item.name, price, listed: Date.now() });
    saveState();
    showToast(`Listed ${item.name} for ${price} coins`, 'success');
    renderCurrentPage();
}

// --- Login / Streak ---
function handleLogin() {
    const input = $('login-input');
    const name = input.value.trim();
    if (!name || name.length < 2) { $('login-error').classList.remove('hidden'); return; }
    $('login-error').classList.add('hidden');
    const existing = loadState();
    if (existing && existing.player.username === name) {
        S = existing;
        // Streak check
        const lastDay = new Date(S.player.last_login).toDateString();
        const today = new Date().toDateString();
        if (lastDay !== today) {
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            S.player.streak = (lastDay === yesterday) ? S.player.streak + 1 : 1;
            S.player.last_login = Date.now();
            // Streak reward
            if (S.player.streak > 1) {
                const bonus = S.player.streak * 10;
                S.player.coins += bonus;
                showToast(`Day ${S.player.streak} streak! +${bonus} coins`, 'success');
            }
        }
    } else {
        S = defaultState(name);
    }
    generateMissions();
    refreshMarket();
    saveState();
    showApp();
}

function showApp() {
    $('login-screen').classList.remove('active');
    $('app-nav').classList.remove('hidden');
    navigateTo('home');
    updateHeader();
    lucide.createIcons();
}

// ===================== UI RENDERING =====================
let currentPage = 'home';

function navigateTo(page) {
    currentPage = page;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const el = $(`page-${page}`);
    if (el) el.classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => {
        n.classList.toggle('active', n.dataset.page === page);
    });
    renderCurrentPage();
    updateHeader();
    lucide.createIcons();
    $('app-content').scrollTop = 0;
}

function renderCurrentPage() {
    switch(currentPage) {
        case 'home': renderHome(); break;
        case 'boxes': renderBoxes(); break;
        case 'inventory': renderInventory(); break;
        case 'market': renderMarket(); break;
        case 'profile': renderProfile(); break;
    }
    updateHeader();
}

function updateHeader() {
    if (!S) return;
    $('hdr-name').textContent = S.player.username;
    $('hdr-level').textContent = `Lv. ${S.player.level}`;
    $('hdr-avatar').textContent = S.player.username[0].toUpperCase();
    $('hdr-coins').textContent = formatNum(S.player.coins);
    $('hdr-diamonds').textContent = formatNum(S.player.diamonds);
}

function formatNum(n) {
    if (n >= 1000000) return (n/1000000).toFixed(1)+'M';
    if (n >= 1000) return (n/1000).toFixed(1)+'K';
    return n.toString();
}

function rarityHTML(rarity, text) {
    const r = RARITY[rarity];
    return `<span style="color:${r.color};font-weight:600">${text || r.label}</span>`;
}

function itemCardHTML(inst, showSell=false, showList=false) {
    const item = getItem(inst.item_id);
    if (!item) return '';
    const r = RARITY[item.rarity];
    const isLegendary = r.tier >= 3;
    return `<div class="glow-card rounded-xl border overflow-hidden cursor-pointer" style="background:${r.bg};border-color:${r.border};${isLegendary?'--glow-color:'+r.glow+';animation:glow 2s ease-in-out infinite':''}" onclick="showItemDetail('${inst.uid}')">
        <div class="rarity-bar" style="background:${r.color}"></div>
        <div class="p-3 text-center">
            <div class="w-10 h-10 mx-auto mb-2 rounded-lg flex items-center justify-center" style="background:${r.border}"><i data-lucide="${item.icon}" class="w-5 h-5" style="color:${r.color}"></i></div>
            <div class="text-tp text-xs font-semibold truncate mb-0.5">${item.name}</div>
            <div class="text-[10px] font-medium" style="color:${r.color}">${r.label}</div>
            <div class="text-ts text-[10px] mt-1"><i data-lucide="coins" class="w-3 h-3 inline text-yellow-400"></i> ${formatNum(item.value)}</div>
            ${inst.locked ? '<div class="text-[10px] text-muted mt-0.5"><i data-lucide="lock" class="w-3 h-3 inline"></i> Locked</div>' : ''}
            ${showSell && !inst.locked && item.tradable ? `<button onclick="event.stopPropagation();sellItem('${inst.uid}')" class="mt-2 w-full bg-success/20 hover:bg-success/30 text-success text-[10px] font-semibold py-1 rounded-lg btn-tap transition">Sell</button>` : ''}
            ${showList && !inst.locked && item.tradable ? `<button onclick="event.stopPropagation();promptListPrice('${inst.uid}','${item.name}')" class="mt-2 w-full bg-accent/20 hover:bg-accent/30 text-accent text-[10px] font-semibold py-1 rounded-lg btn-tap transition">List</button>` : ''}
        </div>
    </div>`;
}

// --- HOME ---
function renderHome() {
    const dailyAvail = (Date.now() - S.lastDailyBox) >= 86400000 || S.lastDailyBox === 0;
    const dailyCD = dailyAvail ? 0 : Math.max(0, 86400 - Math.floor((Date.now() - S.lastDailyBox) / 1000));
    const xpNeeded = xpForLevel(S.player.level);
    const xpPct = Math.min(100, (S.player.xp / xpNeeded) * 100);
    const uniqueCount = getUniqueCount();

    let missionsHTML = '';
    S.missions.list.forEach(m => {
        const prog = Math.min(getMissionProgress(m), m.target);
        const done = S.missions.claimed.includes(m.id);
        const pct = Math.min(100, (prog / m.target) * 100);
        const rewardStr = [];
        if (m.reward.coins) rewardStr.push(`${m.reward.coins} coins`);
        if (m.reward.diamonds) rewardStr.push(`${m.reward.diamonds} diamonds`);
        missionsHTML += `<div class="flex items-center gap-3 bg-card rounded-xl p-3 border border-border/50">
            <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${done?'bg-success/20':'bg-accent/20'}">
                <i data-lucide="${done?'check':'target'}" class="w-4 h-4 ${done?'text-success':'text-accent'}"></i>
            </div>
            <div class="flex-1 min-w-0">
                <div class="text-tp text-xs font-medium ${done?'line-through text-muted':''}">${m.desc}</div>
                <div class="w-full bg-bg rounded-full h-1.5 mt-1.5"><div class="h-1.5 rounded-full transition-all duration-500 ${done?'bg-success':'bg-accent'}" style="width:${pct}%"></div></div>
                <div class="text-[10px] text-muted mt-0.5">${prog}/${m.target} — ${rewardStr.join(', ')}</div>
            </div>
        </div>`;
    });

    let eventHTML = '';
    if (S.event.active) {
        const remaining = Math.max(0, S.event.endsAt - Date.now());
        const hours = Math.floor(remaining / 3600000);
        const mins = Math.floor((remaining % 3600000) / 60000);
        eventHTML = `<div class="rounded-xl border border-legendary/30 bg-legendary/5 p-4 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-legendary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
            <div class="relative">
                <div class="flex items-center gap-2 mb-1"><i data-lucide="flame" class="w-4 h-4 text-legendary"></i><span class="text-legendary text-sm font-bold">Golden Rush Event</span></div>
                <p class="text-ts text-xs mb-2">Enhanced drop rates! ${S.event.multiplier}x event bonus active.</p>
                <div class="text-[10px] text-muted">Ends in ${hours}h ${mins}m</div>
            </div>
        </div>`;
    }

    $('page-home').innerHTML = `
    <!-- Welcome -->
    <div class="rounded-xl bg-card border border-border/50 p-4 relative overflow-hidden">
        <div class="absolute -top-6 -right-6 w-24 h-24 bg-accent/8 rounded-full blur-2xl"></div>
        <div class="relative">
            <div class="text-ts text-xs mb-0.5">Welcome back,</div>
            <div class="text-tp text-xl font-bold mb-2">${S.player.username}</div>
            <div class="flex items-center gap-2 mb-1">
                <span class="text-accent text-xs font-semibold">Lv. ${S.player.level}</span>
                <div class="flex-1 bg-bg rounded-full h-2"><div class="xp-bar-fill h-2 rounded-full bg-accent" style="width:${xpPct}%"></div></div>
                <span class="text-muted text-[10px]">${S.player.xp}/${xpNeeded} XP</span>
            </div>
            <div class="flex gap-4 text-[10px] text-ts">
                <span>Luck: <span class="text-accent font-semibold">+${S.player.luck.toFixed(1)}%</span></span>
                <span>Streak: <span class="text-success font-semibold">${S.player.streak} days</span></span>
            </div>
        </div>
    </div>

    ${eventHTML}

    <!-- Quick Actions -->
    <div class="grid grid-cols-2 gap-3">
        <button onclick="navigateTo('boxes');setTimeout(()=>tryOpenDaily(),100)" class="btn-tap rounded-xl border border-border/50 bg-card p-4 text-left transition hover:border-success/40 ${dailyAvail?'':'opacity-60'}">
            <div class="w-9 h-9 rounded-lg bg-success/15 flex items-center justify-center mb-2"><i data-lucide="sun" class="w-5 h-5 text-success"></i></div>
            <div class="text-tp text-sm font-semibold">Daily Box</div>
            <div class="text-ts text-[10px]">${dailyAvail ? 'Claim now' : formatTime(dailyCD)}</div>
        </button>
        <button onclick="navigateTo('boxes')" class="btn-tap rounded-xl border border-border/50 bg-card p-4 text-left transition hover:border-accent/40">
            <div class="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center mb-2"><i data-lucide="package" class="w-5 h-5 text-accent"></i></div>
            <div class="text-tp text-sm font-semibold">Open Boxes</div>
            <div class="text-ts text-[10px]">${S.stats.boxes_opened} opened</div>
        </button>
    </div>

    <!-- Stats Row -->
    <div class="grid grid-cols-3 gap-2">
        <div class="bg-card rounded-xl border border-border/50 p-3 text-center">
            <div class="text-tp text-lg font-bold">${S.inventory.length}</div>
            <div class="text-muted text-[10px]">Total Items</div>
        </div>
        <div class="bg-card rounded-xl border border-border/50 p-3 text-center">
            <div class="text-tp text-lg font-bold">${uniqueCount}</div>
            <div class="text-muted text-[10px]">Unique</div>
        </div>
        <div class="bg-card rounded-xl border border-border/50 p-3 text-center">
            <div class="text-tp text-lg font-bold">${formatNum(getTotalValue())}</div>
            <div class="text-muted text-[10px]">Total Value</div>
        </div>
    </div>

    <!-- Missions -->
    <div>
        <div class="flex items-center justify-between mb-2">
            <h2 class="text-tp text-sm font-bold">Daily Missions</h2>
            <span class="text-muted text-[10px]">${S.missions.claimed.length}/${S.missions.list.length} done</span>
        </div>
        <div class="space-y-2">${missionsHTML || '<div class="text-muted text-xs text-center py-4">No missions today</div>'}</div>
    </div>
    `;
}

function formatTime(secs) {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    return `${h}h ${m}m`;
}

// --- BOXES ---
function renderBoxes() {
    let pityHTML = `<div class="flex gap-2 text-[10px]">
        <div class="bg-card rounded-lg px-2.5 py-1.5 border border-border/50 flex-1 text-center">
            <div class="text-ts">Epic Pity</div>
            <div class="text-epic font-bold">${S.pity.since_epic}/10</div>
        </div>
        <div class="bg-card rounded-lg px-2.5 py-1.5 border border-border/50 flex-1 text-center">
            <div class="text-ts">Legend Pity</div>
            <div class="text-legendary font-bold">${S.pity.since_legendary}/25</div>
        </div>
        <div class="bg-card rounded-lg px-2.5 py-1.5 border border-border/50 flex-1 text-center">
            <div class="text-ts">Ultra Pity</div>
            <div class="text-ultra font-bold">${S.pity.since_ultra}/50</div>
        </div>
    </div>`;

    let boxesHTML = '';
    BOXES.forEach(box => {
        if (box.event && !S.event.active) return;
        const canAfford = box.costType === 'free' ? ((Date.now()-S.lastDailyBox)>=86400000||S.lastDailyBox===0) : (box.costType==='coins'?S.player.coins>=box.cost:S.player.diamonds>=box.cost);
        const costLabel = box.costType === 'free' ? 'FREE' : `${box.cost} ${box.costType === 'coins' ? '<i data-lucide="coins" class="w-3 h-3 inline text-yellow-400"></i>' : '<i data-lucide="gem" class="w-3 h-3 inline text-cyan-400"></i>'}`;
        let lootPreview = '';
        for (const r of RARITY_ORDER) {
            if (box.loot[r]) lootPreview += `<span class="text-[9px] font-medium" style="color:${RARITY[r].color}">${RARITY[r].label} ${box.loot[r]}%</span> `;
        }
        boxesHTML += `<div class="glow-card rounded-xl border overflow-hidden ${canAfford?'cursor-pointer':'opacity-50'}" style="background:${box.bgColor};border-color:${box.color}33" ${canAfford?`onclick="tryOpenBox('${box.id}')"`:''}>
            <div class="rarity-bar" style="background:${box.color}"></div>
            <div class="p-4 flex items-center gap-3">
                <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${box.color}20;border:1px solid ${box.color}40">
                    <i data-lucide="${box.icon}" class="w-7 h-7" style="color:${box.color}"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="text-tp text-sm font-bold">${box.name}</div>
                    <div class="text-ts text-[10px] mb-1">${box.desc}</div>
                    <div class="flex flex-wrap gap-x-2 gap-y-0.5">${lootPreview}</div>
                </div>
                <div class="text-right flex-shrink-0">
                    <div class="text-sm font-bold" style="color:${box.color}">${costLabel}</div>
                    ${!canAfford && box.costType!=='free' ? '<div class="text-[10px] text-danger">Need more</div>' : ''}
                </div>
            </div>
        </div>`;
    });

    $('page-boxes').innerHTML = `
    <h2 class="text-tp text-base font-bold">Open Boxes</h2>
    <div>
        <div class="text-ts text-xs mb-2 font-medium">Pity Counters</div>
        ${pityHTML}
    </div>
    <div class="space-y-3">${boxesHTML}</div>
    `;
}

// --- INVENTORY ---
let invFilter = 'ALL';
function renderInventory() {
    const filters = ['ALL','COMMON','RARE','EPIC','LEGENDARY','ULTRA'];
    let filterHTML = filters.map(f => {
        const active = invFilter === f;
        const color = f === 'ALL' ? '#f5a623' : RARITY[f]?.color || '#8b95a8';
        const count = f === 'ALL' ? S.inventory.length : S.inventory.filter(i => getItem(i.item_id)?.rarity === f).length;
        return `<button onclick="invFilter='${f}';renderInventory()" class="px-3 py-1.5 rounded-lg text-[10px] font-semibold btn-tap transition ${active ? '' : 'bg-card border border-border/50 text-ts hover:text-tp'}" ${active ? `style="background:${color}20;color:${color};border:1px solid ${color}40"` : ''}>${f === 'ALL' ? 'All' : RARITY[f]?.label} (${count})</button>`;
    }).join('');

    const filtered = invFilter === 'ALL' ? S.inventory : S.inventory.filter(i => getItem(i.item_id)?.rarity === invFilter);
    const sorted = [...filtered].sort((a,b) => {
        const ra = RARITY[getItem(a.item_id)?.rarity]?.tier || 0;
        const rb = RARITY[getItem(b.item_id)?.rarity]?.tier || 0;
        return rb - ra;
    });

    let gridHTML = '';
    if (sorted.length === 0) {
        gridHTML = '<div class="text-muted text-xs text-center py-8">No items found. Open some boxes!</div>';
    } else {
        gridHTML = '<div class="grid grid-cols-3 gap-2">' + sorted.map(i => itemCardHTML(i, true)).join('') + '</div>';
    }

    $('page-inventory').innerHTML = `
    <div class="flex items-center justify-between">
        <h2 class="text-tp text-base font-bold">Inventory</h2>
        <span class="text-muted text-[10px]">${S.inventory.length} items — ${formatNum(getTotalValue())} value</span>
    </div>
    <div class="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">${filterHTML}</div>
    ${gridHTML}
    `;
}

// --- MARKET ---
let marketTab = 'buy';
function renderMarket() {
    refreshMarket();
    const tabBtns = `<div class="flex gap-2 mb-1">
        <button onclick="marketTab='buy';renderMarket()" class="px-4 py-2 rounded-lg text-xs font-semibold btn-tap transition ${marketTab==='buy'?'bg-accent text-bg':'bg-card border border-border/50 text-ts'}">Buy Items</button>
        <button onclick="marketTab='sell';renderMarket()" class="px-4 py-2 rounded-lg text-xs font-semibold btn-tap transition ${marketTab==='sell'?'bg-success text-bg':'bg-card border border-border/50 text-ts'}">Sell / List</button>
    </div>`;

    let contentHTML = '';
    if (marketTab === 'buy') {
        if (S.market.buyListings.length === 0) {
            contentHTML = '<div class="text-muted text-xs text-center py-8">No listings available. Check back soon!</div>';
        } else {
            contentHTML = '<div class="space-y-2">' + S.market.buyListings.map(l => {
                const item = getItem(l.item_id);
                const r = RARITY[item.rarity];
                const canBuy = S.player.coins >= l.price;
                return `<div class="flex items-center gap-3 bg-card rounded-xl p-3 border border-border/50 ${canBuy?'cursor-pointer hover:border-accent/30':''}" ${canBuy?`onclick="buyFromMarket('${l.uid}')"`:''}>
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:${r.bg};border:1px solid ${r.border}"><i data-lucide="${item.icon}" class="w-5 h-5" style="color:${r.color}"></i></div>
                    <div class="flex-1 min-w-0">
                        <div class="text-tp text-xs font-semibold">${item.name}</div>
                        <div class="text-[10px]" style="color:${r.color}">${r.label} — by ${l.seller}</div>
                    </div>
                    <div class="text-right flex-shrink-0">
                        <div class="text-tp text-xs font-bold">${formatNum(l.price)} <i data-lucide="coins" class="w-3 h-3 inline text-yellow-400"></i></div>
                        ${canBuy ? '<div class="text-[10px] text-accent">Tap to buy</div>' : '<div class="text-[10px] text-danger">Not enough</div>'}
                    </div>
                </div>`;
            }).join('') + '</div>';
        }
    } else {
        // Sell tab - show player's tradeable items + active listings
        let listingsHTML = '';
        if (S.market.sellListings.length > 0) {
            listingsHTML = '<div class="mb-3"><div class="text-ts text-xs font-semibold mb-2">Your Active Listings</div><div class="space-y-2">' + S.market.sellListings.map(sl => {
                const item = getItem(sl.item_id);
                const r = RARITY[item.rarity];
                return `<div class="flex items-center gap-3 bg-card rounded-xl p-3 border border-accent/20">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:${r.bg}"><i data-lucide="${item.icon}" class="w-4 h-4" style="color:${r.color}"></i></div>
                    <div class="flex-1 min-w-0"><div class="text-tp text-xs font-semibold">${item.name}</div><div class="text-[10px] text-ts">Listed: ${formatNum(sl.price)} coins</div></div>
                    <div class="text-[10px] text-muted">Waiting...</div>
                </div>`;
            }).join('') + '</div></div>';
        }
        const tradeable = S.inventory.filter(i => { const it = getItem(i.item_id); return it && it.tradable && !i.locked; });
        let sellGridHTML = '';
        if (tradeable.length === 0) {
            sellGridHTML = '<div class="text-muted text-xs text-center py-4">No tradeable items</div>';
        } else {
            sellGridHTML = '<div class="grid grid-cols-3 gap-2">' + tradeable.map(i => itemCardHTML(i, true, true)).join('') + '</div>';
        }
        contentHTML = listingsHTML + `<div><div class="text-ts text-xs font-semibold mb-2">Quick Sell (60% value) or List on Market</div>${sellGridHTML}</div>`;
    }

    $('page-market').innerHTML = `
    <h2 class="text-tp text-base font-bold">Marketplace</h2>
    ${tabBtns}
    ${contentHTML}
    `;
}

// --- PROFILE ---
function renderProfile() {
    const xpNeeded = xpForLevel(S.player.level);
    const xpPct = Math.min(100, (S.player.xp / xpNeeded) * 100);
    const daysPlayed = Math.max(1, Math.floor((Date.now() - S.player.created_at) / 86400000));

    const statsGrid = [
        {label:'Boxes Opened', value:S.stats.boxes_opened, icon:'package'},
        {label:'Rare Found', value:S.stats.rare_found, icon:'star', color:'#3b9eff'},
        {label:'Epic Found', value:S.stats.epic_found, icon:'sparkles', color:'#a855f7'},
        {label:'Legendary Found', value:S.stats.legendary_found, icon:'flame', color:'#f59e0b'},
        {label:'Ultra Found', value:S.stats.ultra_found, icon:'zap', color:'#ef4444'},
        {label:'Items Sold', value:S.stats.items_sold, icon:'arrow-right-left'},
        {label:'Trade Volume', value:formatNum(S.stats.trade_volume), icon:'trending-up'},
        {label:'Days Played', value:daysPlayed, icon:'calendar'},
    ];

    let statsHTML = statsGrid.map(s => `
        <div class="bg-card rounded-xl border border-border/50 p-3 text-center">
            <i data-lucide="${s.icon}" class="w-4 h-4 mx-auto mb-1 ${s.color?'':'text-muted'}" ${s.color?`style="color:${s.color}"`:''}></i>
            <div class="text-tp text-sm font-bold">${s.value}</div>
            <div class="text-muted text-[10px]">${s.label}</div>
        </div>
    `).join('');

    // Collection progress
    const totalUnique = ITEMS.filter(i => !i.event || S.event.active).length;
    const owned = getUniqueCount();

    $('page-profile').innerHTML = `
    <!-- Profile Card -->
    <div class="rounded-xl bg-card border border-border/50 p-5 text-center relative overflow-hidden">
        <div class="absolute -top-10 -left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
        <div class="relative">
            <div class="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent text-2xl font-bold mx-auto mb-3">${S.player.username[0].toUpperCase()}</div>
            <div class="text-tp text-lg font-bold">${S.player.username}</div>
            <div class="text-accent text-sm font-semibold mb-2">Level ${S.player.level}</div>
            <div class="flex items-center gap-2 max-w-[200px] mx-auto">
                <div class="flex-1 bg-bg rounded-full h-2.5"><div class="xp-bar-fill h-2.5 rounded-full bg-accent" style="width:${xpPct}%"></div></div>
                <span class="text-muted text-[10px]">${S.player.xp}/${xpNeeded}</span>
            </div>
        </div>
    </div>

    <!-- Currency -->
    <div class="grid grid-cols-2 gap-3">
        <div class="bg-card rounded-xl border border-border/50 p-3 flex items-center gap-2">
            <i data-lucide="coins" class="w-5 h-5 text-yellow-400"></i>
            <div><div class="text-muted text-[10px]">Coins</div><div class="text-tp text-sm font-bold">${formatNum(S.player.coins)}</div></div>
        </div>
        <div class="bg-card rounded-xl border border-border/50 p-3 flex items-center gap-2">
            <i data-lucide="gem" class="w-5 h-5 text-cyan-400"></i>
            <div><div class="text-muted text-[10px]">Diamonds</div><div class="text-tp text-sm font-bold">${formatNum(S.player.diamonds)}</div></div>
        </div>
    </div>

    <!-- Collection -->
    <div class="bg-card rounded-xl border border-border/50 p-4">
        <div class="flex items-center justify-between mb-2">
            <span class="text-tp text-xs font-semibold">Collection Progress</span>
            <span class="text-accent text-xs font-bold">${owned}/${totalUnique}</span>
        </div>
        <div class="w-full bg-bg rounded-full h-3"><div class="h-3 rounded-full bg-accent transition-all duration-500" style="width:${(owned/totalUnique*100).toFixed(1)}%"></div></div>
    </div>

    <!-- Stats -->
    <div>
        <h3 class="text-tp text-sm font-bold mb-2">Statistics</h3>
        <div class="grid grid-cols-2 gap-2">${statsHTML}</div>
    </div>

    <!-- Actions -->
    <div class="space-y-2">
        <button onclick="showLeaderboard()" class="w-full bg-card border border-border/50 rounded-xl p-3 flex items-center gap-3 btn-tap hover:border-accent/30 transition">
            <i data-lucide="trophy" class="w-5 h-5 text-accent"></i>
            <span class="text-tp text-sm font-semibold flex-1 text-left">Leaderboard</span>
            <i data-lucide="chevron-right" class="w-4 h-4 text-muted"></i>
        </button>
        <button onclick="resetState()" class="w-full bg-card border border-danger/30 rounded-xl p-3 flex items-center gap-3 btn-tap hover:border-danger/50 transition">
            <i data-lucide="rotate-ccw" class="w-5 h-5 text-danger"></i>
            <span class="text-danger text-sm font-semibold">Reset Game</span>
        </button>
    </div>
    `;
}

// ===================== ITEM DETAIL MODAL =====================
function showItemDetail(instanceUid) {
    const inst = S.inventory.find(i => i.uid === instanceUid);
    if (!inst) return;
    const item = getItem(inst.item_id);
    const r = RARITY[item.rarity];
    const isLegend = r.tier >= 3;
    const acqDate = new Date(inst.acquired).toLocaleDateString();

    $('item-modal-content').innerHTML = `
    <div class="text-center mb-4">
        <div class="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-3 relative" style="background:${r.bg};border:2px solid ${r.border};${isLegend?'--glow-color:'+r.glow+';box-shadow:0 0 20px '+r.glow:''}">
            <i data-lucide="${item.icon}" class="w-10 h-10" style="color:${r.color}"></i>
            ${isLegend?'<div class="absolute inset-0 rounded-2xl shimmer-text"></div>':''}
        </div>
        <h3 class="text-tp text-lg font-bold">${item.name}</h3>
        <div class="text-sm font-semibold mt-0.5" style="color:${r.color}">${r.label}</div>
    </div>
    <div class="space-y-3 mb-5">
        <div class="bg-bg rounded-xl p-3">
            <div class="text-muted text-[10px] uppercase tracking-wider mb-1">Description</div>
            <div class="text-ts text-xs">${item.desc}</div>
        </div>
        <div class="grid grid-cols-2 gap-2">
            <div class="bg-bg rounded-xl p-3">
                <div class="text-muted text-[10px] uppercase tracking-wider mb-0.5">Value</div>
                <div class="text-tp text-sm font-bold"><i data-lucide="coins" class="w-3.5 h-3.5 inline text-yellow-400"></i> ${formatNum(item.value)}</div>
            </div>
            <div class="bg-bg rounded-xl p-3">
                <div class="text-muted text-[10px] uppercase tracking-wider mb-0.5">Tradable</div>
                <div class="text-sm font-bold ${item.tradable?'text-success':'text-danger'}">${item.tradable?'Yes':'No'}</div>
            </div>
            <div class="bg-bg rounded-xl p-3">
                <div class="text-muted text-[10px] uppercase tracking-wider mb-0.5">Acquired</div>
                <div class="text-ts text-xs">${acqDate}</div>
            </div>
            <div class="bg-bg rounded-xl p-3">
                <div class="text-muted text-[10px] uppercase tracking-wider mb-0.5">Status</div>
                <div class="text-xs font-bold ${inst.locked?'text-danger':'text-success'}">${inst.locked?'Locked':'Unlocked'}</div>
            </div>
        </div>
    </div>
    <div class="flex gap-2">
        ${item.tradable && !inst.locked ? `<button onclick="sellItem('${inst.uid}');closeItemModal()" class="flex-1 bg-success/15 hover:bg-success/25 text-success font-semibold text-sm py-2.5 rounded-xl btn-tap transition">Sell (${Math.floor(item.value*0.6)} coins)</button>` : ''}
        <button onclick="toggleLock('${inst.uid}')" class="${item.tradable?'':'flex-1'} bg-card border border-border hover:border-accent/40 text-tp font-semibold text-sm py-2.5 rounded-xl btn-tap transition">${inst.locked ? 'Unlock' : 'Lock'}</button>
        <button onclick="closeItemModal()" class="flex-1 bg-card border border-border hover:border-border text-ts font-semibold text-sm py-2.5 rounded-xl btn-tap transition">Close</button>
    </div>
    `;
    $('item-modal').classList.remove('hidden');
    lucide.createIcons();
}

function closeItemModal() { $('item-modal').classList.add('hidden'); }

function toggleLock(instanceUid) {
    const inst = S.inventory.find(i => i.uid === instanceUid);
    if (inst) { inst.locked = !inst.locked; saveState(); showItemDetail(instanceUid); }
}

// ===================== MARKET LIST PRICE PROMPT =====================
function promptListPrice(instanceUid, itemName) {
    const item = getItem(S.inventory.find(i=>i.uid===instanceUid)?.item_id);
    if (!item) return;
    // Create inline prompt
    const modal = $('item-modal');
    $('item-modal-content').innerHTML = `
    <h3 class="text-tp text-base font-bold mb-1">List ${itemName}</h3>
    <p class="text-ts text-xs mb-4">Set a price for the marketplace. Base value: ${item.value} coins.</p>
    <input id="list-price-input" type="number" min="1" max="999999" value="${item.value}" class="w-full bg-bg border border-border rounded-xl px-4 py-3 text-tp text-sm focus:outline-none focus:border-accent/60 transition mb-3" placeholder="Price in coins" />
    <div class="flex gap-2">
        <button onclick="confirmList('${instanceUid}')" class="flex-1 bg-accent hover:bg-accentHover text-bg font-semibold text-sm py-2.5 rounded-xl btn-tap transition">List Item</button>
        <button onclick="closeItemModal()" class="flex-1 bg-card border border-border text-ts font-semibold text-sm py-2.5 rounded-xl btn-tap transition">Cancel</button>
    </div>
    `;
    modal.classList.remove('hidden');
    setTimeout(() => $('list-price-input')?.focus(), 100);
}

function confirmList(instanceUid) {
    const input = $('list-price-input');
    const price = parseInt(input?.value);
    if (!price || price < 1) { showToast('Enter a valid price','danger'); return; }
    closeItemModal();
    listOnMarket(instanceUid, price);
}

// ===================== LEADERBOARD =====================
function showLeaderboard() {
    const playerValue = getTotalValue();
    const allPlayers = FAKE_PLAYERS.map(p => ({...p})).concat([{name:S.player.username, level:S.player.level, coins:S.player.coins, value:playerValue, isPlayer:true}]);
    allPlayers.sort((a,b) => b.value - a.value);

    let rowsHTML = allPlayers.slice(0,20).map((p, i) => {
        const rank = i + 1;
        const medal = rank === 1 ? 'text-yellow-400' : rank === 2 ? 'text-gray-300' : rank === 3 ? 'text-amber-600' : 'text-muted';
        const isP = p.isPlayer;
        return `<div class="flex items-center gap-3 py-2.5 ${isP?'bg-accent/10 -mx-2 px-2 rounded-lg border border-accent/20':'border-b border-border/30'}">
            <div class="w-7 text-center font-bold text-sm ${medal}">${rank <= 3 ? ['I','II','III'][rank-1] : rank}</div>
            <div class="w-8 h-8 rounded-full ${isP?'bg-accent/20 text-accent':'bg-card text-muted'} flex items-center justify-center text-xs font-bold flex-shrink-0">${p.name[0]}</div>
            <div class="flex-1 min-w-0">
                <div class="text-tp text-xs font-semibold truncate ${isP?'text-accent':''}">${p.name} ${isP?'(You)':''}</div>
                <div class="text-muted text-[10px]">Lv.${p.level}</div>
            </div>
            <div class="text-right flex-shrink-0">
                <div class="text-tp text-xs font-bold">${formatNum(p.value)}</div>
                <div class="text-muted text-[10px]">value</div>
            </div>
        </div>`;
    }).join('');

    $('lb-modal').querySelector('div').innerHTML = `
    <div class="flex items-center justify-between mb-4">
        <h3 class="text-tp text-base font-bold flex items-center gap-2"><i data-lucide="trophy" class="w-5 h-5 text-accent"></i>Leaderboard</h3>
        <button onclick="closeLB()" class="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center btn-tap"><i data-lucide="x" class="w-4 h-4 text-muted"></i></button>
    </div>
    <div>${rowsHTML}</div>
    `;
    $('lb-modal').classList.remove('hidden');
    lucide.createIcons();
}
function closeLB() { $('lb-modal').classList.add('hidden'); }

// ===================== BOX OPENING ANIMATION =====================
let isOpening = false;

async function tryOpenDaily() { if (!isOpening) tryOpenBox('daily'); }

async function tryOpenBox(boxId) {
    if (isOpening) return;
    isOpening = true;
    const result = openBox(boxId);
    if (!result) { isOpening = false; return; }
    await playBoxAnimation(boxId, result);
    isOpening = false;
    renderCurrentPage();
    updateHeader();
}

async function playBoxAnimation(boxId, result) {
    const overlay = $('box-overlay');
    const box = getBox(boxId);
    const r = RARITY[result.rarity];
    const isUltra = result.rarity === 'ULTRA';
    const isLegend = result.rarity === 'LEGENDARY';
    const isHighTier = r.tier >= 2;

    overlay.classList.remove('hidden');
    overlay.innerHTML = `
    <div id="ba-stage" class="flex flex-col items-center justify-center w-full h-full relative">
        <!-- Box -->
        <div id="ba-box" class="relative" style="opacity:0;transform:scale(0)">
            <div class="w-28 h-28 rounded-2xl flex items-center justify-center relative" style="background:${box.bgColor};border:2px solid ${box.color}50">
                <i data-lucide="${box.icon}" class="w-14 h-14" style="color:${box.color}"></i>
                <!-- Lid -->
                <div id="ba-lid" class="absolute -top-1 left-0 right-0 h-6 rounded-t-2xl" style="background:${box.color}30;border:1px solid ${box.color}50;transform-origin:bottom left"></div>
            </div>
        </div>
        <!-- Light beam -->
        <div id="ba-beam" class="absolute" style="bottom:50%;left:50%;transform:translateX(-50%);width:4px;height:0;background:linear-gradient(to top,${r.color},transparent);opacity:0;border-radius:4px"></div>
        <!-- Reward card -->
        <div id="ba-reward" class="mt-6" style="opacity:0;transform:translateY(30px) scale(0.8)">
            <div class="rounded-2xl border-2 p-5 text-center min-w-[220px]" style="background:${r.bg};border-color:${r.border};${isLegend||isUltra?'--glow-color:'+r.glow+';box-shadow:0 0 30px '+r.glow+',0 0 60px '+r.glow+'40':''}">
                <div class="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-3 relative" style="background:${r.border}">
                    <i data-lucide="${result.item.icon}" class="w-8 h-8" style="color:${r.color}"></i>
                    ${isHighTier?'<div class="absolute inset-0 rounded-xl shimmer-text"></div>':''}
                </div>
                <div class="text-tp text-base font-bold mb-0.5">${result.item.name}</div>
                <div class="text-sm font-bold mb-2" style="color:${r.color}">${r.label}!</div>
                <div class="flex justify-center gap-4 text-xs">
                    <span class="text-yellow-400">+${result.coinReward} <i data-lucide="coins" class="w-3 h-3 inline"></i></span>
                    <span class="text-accent">+${result.xpGain} XP</span>
                </div>
            </div>
        </div>
        <!-- Collect button -->
        <button id="ba-collect" class="mt-6 px-8 py-3 rounded-xl font-semibold text-sm btn-tap transition" style="opacity:0;background:${r.color};color:#0a0e17" onclick="closeBoxOverlay()">Collect</button>
    </div>
    <!-- Screen flash for legendary+ -->
    <div id="ba-flash" class="absolute inset-0 pointer-events-none" style="opacity:0;background:${r.color}"></div>
    <!-- Particles container -->
    <div id="ba-particles" class="absolute inset-0 pointer-events-none overflow-hidden"></div>
    `;
    lucide.createIcons();

    // Stage 1: Box bounces in
    await delay(100);
    const baBox = $('ba-box');
    baBox.style.transition = 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)';
    baBox.style.opacity = '1';
    baBox.style.transform = 'scale(1)';
    await delay(600);

    // Stage 2: Box pulses
    baBox.style.transition = 'transform 0.4s ease';
    baBox.style.transform = 'scale(1.05)';
    await delay(400);
    baBox.style.transform = 'scale(1)';
    await delay(300);
    baBox.style.transform = 'scale(1.05)';
    await delay(400);
    baBox.style.transform = 'scale(1)';
    await delay(200);

    // Stage 3: Box shakes
    baBox.style.animation = 'shakeHard 0.6s ease';
    await delay(700);
    baBox.style.animation = '';

    // Stage 4: Lid opens
    const lid = $('ba-lid');
    lid.style.transition = 'all 0.4s ease';
    lid.style.transform = 'rotate(-70deg) translateY(-40px)';
    lid.style.opacity = '0';
    await delay(450);

    // Stage 5: Light beam
    const beam = $('ba-beam');
    beam.style.transition = 'all 0.5s ease';
    beam.style.height = '180px';
    beam.style.opacity = '0.7';
    beam.style.width = '60px';
    await delay(550);

    // Stage 6: Screen flash for legendary+
    if (isLegend || isUltra) {
        const flash = $('ba-flash');
        flash.style.transition = 'opacity 0.15s ease';
        flash.style.opacity = '0.4';
        await delay(150);
        flash.style.transition = 'opacity 0.5s ease';
        flash.style.opacity = '0';
        await delay(300);
    }

    // Stage 7: Reward card rises
    const reward = $('ba-reward');
    reward.style.transition = 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)';
    reward.style.opacity = '1';
    reward.style.transform = 'translateY(0) scale(1)';
    await delay(600);

    // Stage 8: Particles
    burstParticles(r.color, isUltra ? 40 : isLegend ? 25 : 12);

    // Stage 9: Confetti for ultra
    if (isUltra) { playConfetti(); }

    // Stage 10: Collect button
    const collect = $('ba-collect');
    collect.style.transition = 'opacity 0.3s ease';
    collect.style.opacity = '1';

    // Hide beam after a bit
    await delay(1000);
    beam.style.transition = 'opacity 0.5s ease';
    beam.style.opacity = '0';
}

function closeBoxOverlay() {
    const overlay = $('box-overlay');
    overlay.style.transition = 'opacity 0.3s ease';
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.classList.add('hidden');
        overlay.style.opacity = '1';
        overlay.style.transition = '';
    }, 300);
}

function burstParticles(color, count) {
    const container = $('ba-particles');
    if (!container) return;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight * 0.4;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const dist = 60 + Math.random() * 120;
        const px = Math.cos(angle) * dist;
        const py = Math.sin(angle) * dist;
        p.style.cssText = `left:${cx}px;top:${cy}px;background:${color};--px:${px}px;--py:${py}px;width:${4+Math.random()*6}px;height:${4+Math.random()*6}px;box-shadow:0 0 6px ${color}`;
        container.appendChild(p);
    }
    setTimeout(() => container.innerHTML = '', 1000);
}

function playConfetti() {
    const container = $('confetti-container');
    const colors = ['#f5a623','#ef4444','#10b981','#3b9eff','#a855f7','#ffd166','#f59e0b'];
    for (let i = 0; i < 60; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 0.8 + 's';
        piece.style.animationDuration = (1.5 + Math.random() * 2) + 's';
        piece.style.width = (6 + Math.random() * 6) + 'px';
        piece.style.height = (8 + Math.random() * 8) + 'px';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        container.appendChild(piece);
    }
    setTimeout(() => container.innerHTML = '', 4000);
}

// ===================== TOASTS =====================
function showToast(msg, type='info') {
    const container = $('toast-container');
    const colors = { success:'border-success/40 bg-success/10 text-success', danger:'border-danger/40 bg-danger/10 text-danger', info:'border-accent/40 bg-accent/10 text-accent' };
    const icons = { success:'check-circle', danger:'alert-circle', info:'info' };
    const toast = document.createElement('div');
    toast.className = `toast rounded-xl border ${colors[type]||colors.info} px-4 py-2.5 flex items-center gap-2 text-xs font-medium shadow-lg`;
    toast.innerHTML = `<i data-lucide="${icons[type]||icons.info}" class="w-4 h-4 flex-shrink-0"></i><span>${msg}</span>`;
    container.appendChild(toast);
    lucide.createIcons();
    setTimeout(() => toast.remove(), 3200);
}

// ===================== BACKGROUND PARTICLES =====================
function initBgCanvas() {
    const canvas = $('bg-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const COUNT = 35;

    function resize() {
        canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
        canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < COUNT; i++) {
        particles.push({
            x: Math.random() * canvas.offsetWidth,
            y: Math.random() * canvas.offsetHeight,
            r: 0.5 + Math.random() * 1.5,
            vx: (Math.random() - 0.5) * 0.15,
            vy: -0.1 - Math.random() * 0.2,
            alpha: 0.1 + Math.random() * 0.25,
            color: Math.random() > 0.7 ? '#f5a623' : '#3a4a6a'
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        const w = canvas.offsetWidth;
        const h = canvas.offsetHeight;
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
            if (p.x < -10) p.x = w + 10;
            if (p.x > w + 10) p.x = -10;
            ctx.beginPath();
            ctx.arc(p.x, p.y, Math.max(0.1, p.r), 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.fill();
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }
    animate();
}

// ===================== MODAL CLOSE ON BACKDROP =====================
 $('item-modal').addEventListener('click', e => { if (e.target === $('item-modal')) closeItemModal(); });
 $('lb-modal').addEventListener('click', e => { if (e.target === $('lb-modal')) closeLB(); });

// ===================== DAILY BOX TIMER UPDATE =====================
setInterval(() => {
    if (currentPage === 'home' || currentPage === 'boxes') renderCurrentPage();
    // Check event expiry
    if (S && S.event.active && Date.now() > S.event.endsAt) {
        S.event.active = false;
        saveState();
    }
}, 30000);

// ===================== INIT =====================
function init() {
    initBgCanvas();
    lucide.createIcons();
    const saved = loadState();
    if (saved && saved.player) {
        S = saved;
        // Streak check
        const lastDay = new Date(S.player.last_login).toDateString();
        const today = new Date().toDateString();
        if (lastDay !== today) {
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            S.player.streak = (lastDay === yesterday) ? S.player.streak + 1 : 1;
            S.player.last_login = Date.now();
            if (S.player.streak > 1) {
                const bonus = S.player.streak * 10;
                S.player.coins += bonus;
                setTimeout(() => showToast(`Day ${S.player.streak} streak! +${bonus} coins`, 'success'), 500);
            }
        }
        generateMissions();
        refreshMarket();
        saveState();
        showApp();
    }
    // If no saved state, show login
}

// Enter key for login
 $('login-input').addEventListener('keydown', e => { if (e.key === 'Enter') handleLogin(); });

init();
</script>
</body>
</html>