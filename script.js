      // ==================== INTERNACIONALIZAÇÃO ====================
        const i18n = {
            pt: {
                window_title: "Explorador de Arquivos UGS",
                instruction: "🎮 É só pesquisar o jogo (ex: subway surfers) e clicar em qualquer resultado para jogar.",
                search_placeholder: "Procurar um título...",
                clicker_title: "🍪 Fábrica de Biscoitos",
                cookies: "biscoitos",
                cps: "Biscoitos por segundo",
                click_power: "Poder do Clique",
                golden_prob: "Probabilidade de Biscoito Dourado (x5)",
                play_time: "Tempo de Jogo",
                click_btn: "🍪 Clica e ganha 1 cookie",
                ver_mais: "Ver mais",
                scratch_simple: "Scratch Simples",
                scratch_unlocked: "Abrir Scratch",
                shop_btn: "Loja",
                shop_title: "Loja de Moedas",
                shop_item_name: "Passe Scratch",
                shop_item_desc: "Desbloqueia o editor Scratch para sempre.",
                shop_buy: "Comprar",
                shop_bought: "Usar",
                up_click_name: "Biscoito Reforçado",
                up_click_desc: "+1 cookie por clique",
                up_w1_name: "Cursor",
                up_w1_desc: "Produz 0,5 cookies por segundo",
                up_w2_name: "Avó",
                up_w2_desc: "Produz 2 cookies por segundo",
                up_w3_name: "Quinta",
                up_w3_desc: "Produz 8 cookies por segundo",
                up_w4_name: "Mina",
                up_w4_desc: "Produz 20 cookies por segundo",
                up_w5_name: "Fábrica",
                up_w5_desc: "Produz 100 cookies por segundo",
                up_w6_name: "Banco",
                up_w6_desc: "Produz 500 cookies por segundo",
                up_w7_name: "Templo",
                up_w7_desc: "Produz 2.000 cookies por segundo",
                scratch_title: "Scratch UGS",
                add_move: "Mover 10 passos",
                add_turn: "Girar 15°",
                add_wait: "Esperar 1s",
                add_color: "Mudar cor",
                add_sound: "Tocar som",
                add_penDown: "Baixar caneta",
                add_penUp: "Levantar caneta",
                add_setPenColor: "Cor da caneta",
                add_stamp: "Carimbar",
                add_clear: "Limpar tudo",
                add_goTo: "Ir para x y",
                add_changeX: "Mudar x",
                add_changeY: "Mudar y",
                add_setSize: "Tamanho %",
                add_changeSize: "Mudar tamanho",
                add_say: "Dizer texto",
                add_repeat: "Repetir N vezes",
                run_script: "Executar",
                clear_script: "Limpar",
                dev_prompt: "Senha de Desenvolvedor:",
                access_denied: "Acesso negado."
            },
            en: {
                window_title: "UGS File Explorer",
                instruction: "🎮 Just search for a game (e.g. subway surfers) and click any result to play.",
                search_placeholder: "Search for a title...",
                clicker_title: "🍪 Cookie Factory",
                cookies: "cookies",
                cps: "Cookies per second",
                click_power: "Click Power",
                golden_prob: "Golden Cookie Probability (x5)",
                play_time: "Play Time",
                click_btn: "🍪 Click to earn 1 cookie",
                ver_mais: "Show more",
                scratch_simple: "Simple Scratch",
                scratch_unlocked: "Open Scratch",
                shop_btn: "Shop",
                shop_title: "Coin Shop",
                shop_item_name: "Scratch Pass",
                shop_item_desc: "Unlocks the Scratch editor permanently.",
                shop_buy: "Buy",
                shop_bought: "Use",
                up_click_name: "Reinforced Cookie",
                up_click_desc: "+1 cookie per click",
                up_w1_name: "Cursor",
                up_w1_desc: "Produces 0.5 cookies per second",
                up_w2_name: "Grandma",
                up_w2_desc: "Produces 2 cookies per second",
                up_w3_name: "Farm",
                up_w3_desc: "Produces 8 cookies per second",
                up_w4_name: "Mine",
                up_w4_desc: "Produces 20 cookies per second",
                up_w5_name: "Factory",
                up_w5_desc: "Produces 100 cookies per second",
                up_w6_name: "Bank",
                up_w6_desc: "Produces 500 cookies per second",
                up_w7_name: "Temple",
                up_w7_desc: "Produces 2,000 cookies per second",
                scratch_title: "Scratch UGS",
                add_move: "Move 10 steps",
                add_turn: "Turn 15°",
                add_wait: "Wait 1s",
                add_color: "Change color",
                add_sound: "Play sound",
                add_penDown: "Pen down",
                add_penUp: "Pen up",
                add_setPenColor: "Set pen color",
                add_stamp: "Stamp",
                add_clear: "Clear all",
                add_goTo: "Go to x y",
                add_changeX: "Change x",
                add_changeY: "Change y",
                add_setSize: "Size %",
                add_changeSize: "Change size",
                add_say: "Say text",
                add_repeat: "Repeat N times",
                run_script: "Run",
                clear_script: "Clear",
                dev_prompt: "Developer Password:",
                access_denied: "Access denied."
            }
        };

        let currentLang = 'pt';

        function setLanguage(lang) {
            currentLang = lang;
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (i18n[lang] && i18n[lang][key]) el.placeholder = i18n[lang][key];
            });
            const verMaisBtn = document.getElementById('ver-mais-btn');
            if (verMaisBtn) verMaisBtn.textContent = i18n[lang].ver_mais;
            updateScratchButton();
            updateShopButton();
        }

        // ==================== SISTEMA DE MOEDAS E LOJA ====================
        let coins = parseInt(localStorage.getItem('ugs_coins')) || 0;
        let scratchUnlocked = localStorage.getItem('ugs_scratch_unlocked') === 'true';

        function saveCoins() { localStorage.setItem('ugs_coins', coins); }
        function updateCoinDisplay() { document.getElementById('coin-count').textContent = coins; }
        function addCoin(amount = 1) {
            coins += amount;
            saveCoins();
            updateCoinDisplay();
            updateShopButton();
        }

        function updateShopButton() {
            const buyBtn = document.getElementById('buy-scratch-pass');
            if (!buyBtn) return;
            if (scratchUnlocked) {
                buyBtn.textContent = i18n[currentLang].shop_bought;
                buyBtn.disabled = false;
                buyBtn.onclick = openScratch;
            } else {
                buyBtn.textContent = i18n[currentLang].shop_buy;
                buyBtn.disabled = coins < 20;
                buyBtn.onclick = buyScratchPass;
            }
        }

        function updateScratchButton() {
            const btn = document.getElementById('scratch-main-btn');
            if (!btn) return;
            if (scratchUnlocked) {
                btn.textContent = i18n[currentLang].scratch_unlocked;
                btn.classList.add('unlocked');
                btn.onclick = openScratch;
            } else {
                btn.textContent = i18n[currentLang].scratch_simple;
                btn.classList.remove('unlocked');
                btn.onclick = promptScratchPassword;
            }
        }

        function buyScratchPass() {
            if (coins < 20 || scratchUnlocked) return;
            coins -= 20;
            scratchUnlocked = true;
            localStorage.setItem('ugs_scratch_unlocked', 'true');
            saveCoins();
            updateCoinDisplay();
            updateShopButton();
            updateScratchButton();
            alert(currentLang === 'pt' ? 'Passe Scratch comprado! Agora podes abrir o editor no botão "Abrir Scratch".' : 'Scratch Pass bought! You can now open the editor with the "Open Scratch" button.');
        }

        function openScratch() {
            document.getElementById('shop-modal').style.display = 'none';
            document.getElementById('scratch-modal').style.display = 'block';
            if (typeof initCanvas === 'function') initCanvas();
        }

        function promptScratchPassword() {
            const promptText = i18n[currentLang].dev_prompt;
            const deniedText = i18n[currentLang].access_denied;
            const p = prompt(promptText);
            if (p !== null && _djb2(p) === _HASH) {
                openScratch();
            } else if (p !== null) {
                alert(deniedText);
            }
        }

        setInterval(() => addCoin(1), 20000);

        document.getElementById('open-shop-btn').addEventListener('click', () => {
            document.getElementById('shop-modal').style.display = 'block';
            updateShopButton();
        });
        document.getElementById('close-shop-modal').addEventListener('click', () => {
            document.getElementById('shop-modal').style.display = 'none';
        });
        document.querySelector('.shop-modal-overlay')?.addEventListener('click', function(e) {
            if (e.target === this) document.getElementById('shop-modal').style.display = 'none';
        });

        updateCoinDisplay();
        updateShopButton();
        updateScratchButton();

        // ==================== ANTI-CHEAT ====================
        const _HASH = 2088325516;
        function _djb2(s) { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h) + s.charCodeAt(i); return h >>> 0; }

        // ==================== CLICKER ENGINE ====================
        (function() {
            let activeSeconds = 0;
            setInterval(() => { activeSeconds++; let m=Math.floor(activeSeconds/60).toString().padStart(2,'0'); let s=(activeSeconds%60).toString().padStart(2,'0'); document.getElementById('timer').innerText = `${m}:${s}`; }, 1000);

            let gameState = {
                points: 0, clickPower: 1, pps: 0,
                upgrades: {
                    click: { cost: 50, power: 1 },
                    w1: { cost: 15, count: 0, pps: 0.5 },
                    w2: { cost: 100, count: 0, pps: 2 },
                    w3: { cost: 500, count: 0, pps: 8 },
                    w4: { cost: 2000, count: 0, pps: 20 },
                    w5: { cost: 7000, count: 0, pps: 100 },
                    w6: { cost: 50000, count: 0, pps: 500 },
                    w7: { cost: 200000, count: 0, pps: 2000 }
                }
            };

            const uiPts = document.getElementById('pts'); const uiPps = document.getElementById('pps'); const uiPck = document.getElementById('pck');

            function formatNumber(num) {
                if(num>=1e12) return (num/1e12).toFixed(2)+"T";
                if(num>=1e9) return (num/1e9).toFixed(2)+"B";
                if(num>=1e6) return (num/1e6).toFixed(2)+"M";
                if(num>=1e4) return (num/1e3).toFixed(1)+"k";
                return Math.floor(num).toString();
            }

            function recalcPPS() {
                gameState.pps = (gameState.upgrades.w1.count*gameState.upgrades.w1.pps)+(gameState.upgrades.w2.count*gameState.upgrades.w2.pps)+(gameState.upgrades.w3.count*gameState.upgrades.w3.pps)+(gameState.upgrades.w4.count*gameState.upgrades.w4.pps)+(gameState.upgrades.w5.count*gameState.upgrades.w5.pps)+(gameState.upgrades.w6.count*gameState.upgrades.w6.pps)+(gameState.upgrades.w7.count*gameState.upgrades.w7.pps);
            }

            function updateUI() {
                uiPts.innerText = formatNumber(gameState.points);
                uiPps.innerText = formatNumber(gameState.pps) + " /s";
                uiPck.innerText = formatNumber(gameState.clickPower);
                for(let key in gameState.upgrades){
                    let up = gameState.upgrades[key];
                    let btn = document.getElementById(`up-${key}`);
                    if(btn){ btn.innerText = formatNumber(up.cost); btn.disabled = gameState.points < up.cost; }
                    if(key !== 'click') document.getElementById(`num-${key}`).innerText = "x"+up.count;
                }
            }

            document.getElementById('master-click-btn').addEventListener('click', function(e){
                let isCrit = Math.random() < 0.1;
                let clickValue = isCrit ? gameState.clickPower * 5 : gameState.clickPower;
                gameState.points += clickValue;
                let ripple = document.createElement("div"); ripple.className = 'click-ripple';
                ripple.style.color = isCrit ? "var(--accent-pink)" : "var(--text-main)";
                ripple.style.fontSize = isCrit ? "clamp(16px,2.5vw,22px)" : "clamp(12px,1.8vw,15px)";
                ripple.style.left = (e.clientX-15)+"px"; ripple.style.top = (e.clientY-25)+"px";
                ripple.innerText = (isCrit ? "BISCOITO DOURADO! +" : "+") + formatNumber(clickValue);
                document.body.appendChild(ripple);
                requestAnimationFrame(()=>{ ripple.style.transform = "translateY(-50px) scale(1.15)"; ripple.style.opacity = "0"; });
                setTimeout(()=>{ if(ripple.parentNode) ripple.remove(); }, 800);
                updateUI();
            });

            window.buyUpgrade = function(type) {
                let up = gameState.upgrades[type];
                if(!up || gameState.points < up.cost) return;
                gameState.points -= up.cost;
                if(type === 'click'){ gameState.clickPower += 1; up.cost = Math.round(up.cost * 1.6); }
                else { up.count += 1; up.cost = Math.round(up.cost * 1.3); }
                recalcPPS(); updateUI();
                addCoin(1);
            };

            setInterval(()=>{ if(gameState.pps>0){ gameState.points += gameState.pps; updateUI(); } }, 1000);
            updateUI();
        })();

        // ==================== SCRATCH ENGINE (MELHORADO) ====================
        (function() {
            const STORAGE_KEY = 'ugs_scratch_script';
            let scriptCommands = [];
            try {
                const saved = localStorage.getItem(STORAGE_KEY);
                if (saved) scriptCommands = JSON.parse(saved);
            } catch(e) { scriptCommands = []; }

            function saveScript() { localStorage.setItem(STORAGE_KEY, JSON.stringify(scriptCommands)); }

            const defaultValues = {
                move: 10, turn: 15, wait: 1, color: 0, sound: 0,
                penDown: 0, penUp: 0, setPenColor: '#ff0000', stamp: 0, clear: 0,
                goTo: { x: 0, y: 0 }, changeX: 10, changeY: 10,
                setSize: 100, changeSize: 10, say: '', repeat: 2
            };

            function renderScript() {
                const list = document.getElementById('script-list');
                list.innerHTML = '';
                scriptCommands.forEach((cmd, index) => {
                    const div = document.createElement('div');
                    div.className = 'script-cmd';
                    const span = document.createElement('span');
                    span.textContent = getCommandLabel(cmd.type);
                    div.appendChild(span);

                    if (['move','turn','wait','changeX','changeY','setSize','changeSize','repeat'].includes(cmd.type)) {
                        const input = document.createElement('input');
                        input.type = 'number';
                        input.value = cmd.value;
                        input.step = (cmd.type === 'setSize' || cmd.type === 'changeSize' || cmd.type === 'repeat') ? 1 : 1;
                        if (cmd.type === 'wait') input.step = 0.5;
                        input.min = (cmd.type === 'repeat') ? 1 : -999;
                        input.addEventListener('input', (e) => {
                            scriptCommands[index].value = parseFloat(e.target.value) || defaultValues[cmd.type];
                            saveScript();
                        });
                        div.appendChild(input);
                    } else if (cmd.type === 'goTo') {
                        const inputX = document.createElement('input');
                        inputX.type = 'number'; inputX.value = cmd.value.x; inputX.placeholder = 'x';
                        inputX.style.width = '45px';
                        inputX.addEventListener('input', (e) => { scriptCommands[index].value.x = parseInt(e.target.value) || 0; saveScript(); });
                        const inputY = document.createElement('input');
                        inputY.type = 'number'; inputY.value = cmd.value.y; inputY.placeholder = 'y';
                        inputY.style.width = '45px';
                        inputY.addEventListener('input', (e) => { scriptCommands[index].value.y = parseInt(e.target.value) || 0; saveScript(); });
                        div.appendChild(inputX); div.appendChild(inputY);
                    } else if (cmd.type === 'setPenColor') {
                        const input = document.createElement('input');
                        input.type = 'color'; input.value = cmd.value;
                        input.addEventListener('input', (e) => { scriptCommands[index].value = e.target.value; saveScript(); });
                        div.appendChild(input);
                    } else if (cmd.type === 'say') {
                        const input = document.createElement('input');
                        input.type = 'text'; input.value = cmd.value; input.style.width = '80px';
                        input.placeholder = 'texto';
                        input.addEventListener('input', (e) => { scriptCommands[index].value = e.target.value; saveScript(); });
                        div.appendChild(input);
                    }

                    const removeBtn = document.createElement('button');
                    removeBtn.className = 'remove-cmd';
                    removeBtn.textContent = '✕';
                    removeBtn.addEventListener('click', () => {
                        scriptCommands.splice(index, 1);
                        saveScript();
                        renderScript();
                    });
                    div.appendChild(removeBtn);
                    list.appendChild(div);
                });
            }

            function getCommandLabel(type) {
                const map = {
                    move: 'Mover', turn: 'Girar', wait: 'Esperar', color: 'Mudar cor', sound: 'Tocar som',
                    penDown: 'Baixar caneta', penUp: 'Levantar caneta', setPenColor: 'Cor da caneta',
                    stamp: 'Carimbar', clear: 'Limpar', goTo: 'Ir para', changeX: 'Mudar x',
                    changeY: 'Mudar y', setSize: 'Tamanho', changeSize: 'Mudar tamanho', say: 'Dizer', repeat: 'Repetir'
                };
                return map[type] || type;
            }

            function addCommand(type) {
                let initialVal;
                if (type === 'goTo') initialVal = { x: 0, y: 0 };
                else if (type === 'setPenColor') initialVal = '#ff0000';
                else if (type === 'say') initialVal = '';
                else initialVal = defaultValues[type] || 0;
                scriptCommands.push({ type, value: initialVal });
                saveScript();
                renderScript();
            }

            // Canvas e estado
            let penDown = false;
            let penColor = '#000000';
            let spriteColor = '#ffaa00';
            let spriteSize = 1;
            let spriteX, spriteY, spriteAngle;

            function drawGrid(ctx) {
                const w = ctx.canvas.width, h = ctx.canvas.height;
                ctx.strokeStyle = '#e0e0e0';
                ctx.lineWidth = 0.5;
                for (let i = 0; i <= w; i += 30) {
                    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, h); ctx.stroke();
                }
                for (let i = 0; i <= h; i += 30) {
                    ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(w, i); ctx.stroke();
                }
            }

            function drawCat(ctx, x, y, angle, size, color) {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(angle * Math.PI / 180);
                ctx.scale(size, size);
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.ellipse(0, 2, 10, 12, 0, 0, Math.PI*2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(0, -14, 9, 0, Math.PI*2);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(-7, -20); ctx.lineTo(-3, -25); ctx.lineTo(1, -18); ctx.fill();
                ctx.beginPath();
                ctx.moveTo(7, -20); ctx.lineTo(3, -25); ctx.lineTo(-1, -18); ctx.fill();
                ctx.fillStyle = '#fff';
                ctx.beginPath(); ctx.arc(-4, -16, 2.5, 0, Math.PI*2); ctx.fill();
                ctx.beginPath(); ctx.arc(4, -16, 2.5, 0, Math.PI*2); ctx.fill();
                ctx.fillStyle = '#000';
                ctx.beginPath(); ctx.arc(-4, -16, 1.2, 0, Math.PI*2); ctx.fill();
                ctx.beginPath(); ctx.arc(4, -16, 1.2, 0, Math.PI*2); ctx.fill();
                ctx.fillStyle = '#ff9999';
                ctx.beginPath(); ctx.ellipse(0, -11, 1.5, 1, 0, 0, Math.PI*2); ctx.fill();
                ctx.restore();
            }

            function fullRedraw(ctx) {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                drawGrid(ctx);
                drawCat(ctx, spriteX, spriteY, spriteAngle, spriteSize, spriteColor);
            }

            function updatePenIndicator() {
                const dot = document.getElementById('pen-dot');
                const text = document.getElementById('pen-state-text');
                if (!dot || !text) return;
                if (penDown) {
                    dot.classList.add('active');
                    dot.style.background = penColor;
                    text.textContent = currentLang === 'pt' ? 'Baixada' : 'Down';
                } else {
                    dot.classList.remove('active');
                    dot.style.background = '#ccc';
                    text.textContent = currentLang === 'pt' ? 'Levantada' : 'Up';
                }
            }

            function initCanvas() {
                const canvas = document.getElementById('scratch-canvas');
                const ctx = canvas.getContext('2d');
                spriteX = canvas.width / 2;
                spriteY = canvas.height / 2;
                spriteAngle = 0;
                spriteSize = 1;
                spriteColor = '#ffaa00';
                penDown = false;
                penColor = '#000000';
                fullRedraw(ctx);
                updatePenIndicator();
            }

            async function executeScript() {
                const canvas = document.getElementById('scratch-canvas');
                const ctx = canvas.getContext('2d');
                spriteX = canvas.width / 2;
                spriteY = canvas.height / 2;
                spriteAngle = 0;
                spriteSize = 1;
                spriteColor = '#ffaa00';
                penDown = false;
                penColor = '#000000';
                fullRedraw(ctx);
                updatePenIndicator();

                async function executeBlock(cmd) {
                    let needFullRedraw = false;
                    switch (cmd.type) {
                        case 'move': {
                            const rad = spriteAngle * Math.PI / 180;
                            const newX = spriteX + Math.cos(rad) * cmd.value;
                            const newY = spriteY + Math.sin(rad) * cmd.value;
                            if (penDown) {
                                ctx.beginPath();
                                ctx.strokeStyle = penColor;
                                ctx.lineWidth = 2;
                                ctx.moveTo(spriteX, spriteY);
                                ctx.lineTo(newX, newY);
                                ctx.stroke();
                            }
                            spriteX = newX;
                            spriteY = newY;
                            needFullRedraw = true;
                            break;
                        }
                        case 'turn':
                            spriteAngle += cmd.value;
                            needFullRedraw = true;
                            break;
                        case 'goTo': {
                            const toX = cmd.value.x, toY = cmd.value.y;
                            if (penDown) {
                                ctx.beginPath();
                                ctx.strokeStyle = penColor;
                                ctx.lineWidth = 2;
                                ctx.moveTo(spriteX, spriteY);
                                ctx.lineTo(toX, toY);
                                ctx.stroke();
                            }
                            spriteX = toX;
                            spriteY = toY;
                            needFullRedraw = true;
                            break;
                        }
                        case 'changeX': {
                            const newX = spriteX + cmd.value;
                            if (penDown) {
                                ctx.beginPath();
                                ctx.strokeStyle = penColor;
                                ctx.lineWidth = 2;
                                ctx.moveTo(spriteX, spriteY);
                                ctx.lineTo(newX, spriteY);
                                ctx.stroke();
                            }
                            spriteX = newX;
                            needFullRedraw = true;
                            break;
                        }
                        case 'changeY': {
                            const newY = spriteY + cmd.value;
                            if (penDown) {
                                ctx.beginPath();
                                ctx.strokeStyle = penColor;
                                ctx.lineWidth = 2;
                                ctx.moveTo(spriteX, spriteY);
                                ctx.lineTo(spriteX, newY);
                                ctx.stroke();
                            }
                            spriteY = newY;
                            needFullRedraw = true;
                            break;
                        }
                        case 'color':
                            spriteColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
                            needFullRedraw = true;
                            break;
                        case 'setSize':
                            spriteSize = cmd.value / 100;
                            needFullRedraw = true;
                            break;
                        case 'changeSize':
                            spriteSize = Math.max(0.1, spriteSize + cmd.value / 100);
                            needFullRedraw = true;
                            break;
                        case 'stamp':
                            drawCat(ctx, spriteX, spriteY, spriteAngle, spriteSize, spriteColor);
                            break;
                        case 'penDown':
                            penDown = true;
                            updatePenIndicator();
                            break;
                        case 'penUp':
                            penDown = false;
                            updatePenIndicator();
                            break;
                        case 'setPenColor':
                            penColor = cmd.value;
                            updatePenIndicator();
                            break;
                        case 'clear':
                            spriteX = canvas.width / 2;
                            spriteY = canvas.height / 2;
                            spriteAngle = 0;
                            spriteSize = 1;
                            spriteColor = '#ffaa00';
                            penDown = false;
                            penColor = '#000000';
                            needFullRedraw = true;
                            updatePenIndicator();
                            break;
                        case 'say':
                            ctx.save();
                            ctx.font = 'bold 14px "Inter", sans-serif';
                            ctx.fillStyle = '#000';
                            ctx.fillText(cmd.value, spriteX + 15, spriteY - 15);
                            ctx.restore();
                            await new Promise(r => setTimeout(r, 1200));
                            needFullRedraw = true;
                            break;
                        case 'sound':
                            try {
                                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                                const osc = audioCtx.createOscillator();
                                osc.type = 'square';
                                osc.frequency.value = 440;
                                osc.connect(audioCtx.destination);
                                osc.start();
                                osc.stop(audioCtx.currentTime + 0.1);
                            } catch(e) {}
                            break;
                        case 'wait':
                            await new Promise(r => setTimeout(r, cmd.value * 1000));
                            break;
                    }
                    if (needFullRedraw) fullRedraw(ctx);
                }

                let i = 0;
                while (i < scriptCommands.length) {
                    const cmd = scriptCommands[i];
                    if (cmd.type === 'repeat') {
                        const count = parseInt(cmd.value) || 1;
                        const block = scriptCommands.slice(i + 1);
                        for (let r = 0; r < count; r++) {
                            for (const subCmd of block) {
                                await executeBlock(subCmd);
                            }
                        }
                        break;
                    } else {
                        await executeBlock(cmd);
                        i++;
                    }
                }
            }

            document.querySelectorAll('.block-btn[data-cmd]').forEach(btn => {
                btn.addEventListener('click', () => addCommand(btn.getAttribute('data-cmd')));
            });

            document.getElementById('clear-script').addEventListener('click', () => {
                scriptCommands.length = 0;
                saveScript();
                renderScript();
            });

            document.getElementById('run-script').addEventListener('click', () => {
                executeScript().catch(e => console.error(e));
            });

            renderScript();
            initCanvas();
            window.initCanvas = initCanvas;
        })();

        document.getElementById('close-scratch').addEventListener('click', () => {
            document.getElementById('scratch-modal').style.display = 'none';
        });
        document.querySelector('.scratch-overlay').addEventListener('click', function(e) {
            if (e.target === this) document.getElementById('scratch-modal').style.display = 'none';
        });

        // ==================== UGS "VER MAIS" ====================
        (function() {
            const container = document.getElementById('sections-container');
            if(!container) return;
            const MAX_VISIBLE = 20;
            let verMaisBtn = null, hiddenElements = [];

            function getVerMaisText() {
                return i18n[currentLang] ? i18n[currentLang].ver_mais : 'Ver mais';
            }

            function aplicarLimite() {
                const allButtons = container.querySelectorAll('input[type="button"]');
                if(allButtons.length===0 || verMaisBtn) return;
                let escondido = false;
                allButtons.forEach((btn,i)=>{ if(i>=MAX_VISIBLE){ btn.style.display='none'; escondido=true; } });
                if(!escondido) return;
                container.querySelectorAll('.buttons-container').forEach(sec=>{
                    if(sec.querySelectorAll('input[type="button"]:not([style*="display: none"])').length===0){
                        sec.style.display='none'; hiddenElements.push(sec);
                        let h = sec.previousElementSibling;
                        if(h && h.classList.contains('letter-header')){ h.style.display='none'; hiddenElements.push(h); }
                    }
                });
                verMaisBtn = document.createElement('button'); verMaisBtn.id='ver-mais-btn'; verMaisBtn.textContent = getVerMaisText();
                verMaisBtn.addEventListener('click',()=>{
                    allButtons.forEach(b=>b.style.display='');
                    hiddenElements.forEach(e=>e.style.display='');
                    hiddenElements=[]; verMaisBtn.remove(); verMaisBtn=null;
                });
                container.appendChild(verMaisBtn);
            }

            new MutationObserver((muts,obs)=>{
                if(container.querySelectorAll('input[type="button"]').length>0){ aplicarLimite(); obs.disconnect(); }
            }).observe(container, {childList:true, subtree:true});

            window.addEventListener('load', ()=> setTimeout(aplicarLimite, 1200));
            setTimeout(()=>{ if(container.querySelectorAll('input[type="button"]').length>0 && !verMaisBtn) aplicarLimite(); }, 3000);
        })();

        setLanguage('pt');