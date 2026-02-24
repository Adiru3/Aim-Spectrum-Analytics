document.addEventListener('DOMContentLoaded', () => {
    // --- Translation Data ---
    const translations = {
        en: {
            title: "Aim Biomechanics: 100% Coverage | Ultimate Research by Adiru",
            meta_desc: "Fundamental deconstruction of aiming biomechanics. Analysis of CS2, Overwatch 2, and Apex Legends for 100% coverage of neuromotor control spectrums. Full research report by Adiru (amazingb01).",
            hero_title: "Aim Biomechanics & Engineering",
            hero_subtitle: "Fundamental analysis of commercial competitive environments for absolute coverage of neuromotor control spectrums. 100% mechanics deconstruction.",
            pillars_title: "The 4 Pillars of Aiming",
            static_title: "Static Clicking",
            static_desc: "Trains \"Stopping Power\" — the ability to instantly dissipate the kinetic energy of the wrist. Critical for CS2 and Valorant.",
            reactive_title: "Reactive Tracking",
            reactive_desc: "Reaction to targets with zero inertia. Instant reading of direction changes. The best school is Overwatch 2.",
            smooth_title: "Smooth Tracking",
            smooth_desc: "Fluid target tracking without hand micro-tremors (jitter). High TTK in Apex Legends requires perfect geometric curves.",
            switching_title: "Target Switching",
            switching_desc: "High-speed fire transfer between multiple targets in chaos. Combines clicking and tracking skills.",
            decomposition_title: "Discipline Decomposition",
            decomposition_subtitle: "Select a game below for a detailed analysis of its role in your training cycle.",
            analytics_title: "Analytics & Deep Data",
            spectral_title: "Spectral Coverage Analysis",
            heatmap_title: "Intensity Matrix (Heatmap)",
            research_phys_title: "Physiology of Neuromotor Control",
            research_phys_p1: "Modern paradigm requires a strict separation of skills. Isolated environments (KovaaK’s) lack key elements: visual noise and psychological pressure. My research proves that three games form a closed system: <strong>Stopping Power (CS2), Zero Inertia (OW2), and Momentum (Apex)</strong>.",
            research_ttk_title: "The TTK Factor (Time To Kill)",
            research_ttk_p1: "In CS2, average headshot percentages reach 84.40%, requiring sub-pixel accuracy. Meanwhile, Apex Legends with its Recoil Smoothing forces the player to reflexively improve movement fluidity. Overwatch 2 kills predictive aiming — here you work on the edge of biological reaction.",
            bar_chart_title: "TTK Comparison (ms)",
            verdict_title: "Final Verdict",
            verdict_stability_title: "For Stability",
            verdict_stability_desc: "Play Valorant. Focus on purity of movement and Stopping Power. Speed will follow.",
            verdict_smoothness_title: "For Smoothness",
            verdict_smoothness_desc: "Apex Legends (R-99). No hand jitter. Only smooth, perfect geometric lines.",
            verdict_reaction_title: "For Reaction",
            verdict_reaction_desc: "Overwatch 2. Chaos, instant angle changes, and zero inertia. The best reaction teacher.",
            coverage_achieved: "100% COVERAGE ACHIEVED",
            about_title: "About Author & Research",
            about_p1: "My name is <strong>Adiru (amazingb01)</strong>. This project is the result of a year of data collection and mechanics deconstruction. Any expansion of this list leads to patterning redundancy, and any exclusion leads to control deficit.",
            about_duration: "Research duration: 1+ Year",
            donate_btn: "Support Research",
            footer_copy: "&copy; 2026 Aim Spectrum Analytics. Research by Adiru.",
            footer_data: "All data derived from Source 2, Apex Momentum, and OW2 Inertia-free system analysis.",
            // Profiles
            profile_val_title: "Valorant / CS2",
            profile_val_subtitle: "Discipline of Statics & Micro-control",
            profile_val_desc: "Extremely low TTK environment where the first shot decides the duel. Ideal for practicing Stopping Power and horizontal micro-adjustments. Source 2 punishes movement, requiring perfect counter-strafing.",
            profile_apex_title: "Apex Legends",
            profile_apex_subtitle: "Discipline of Smooth Tracking",
            profile_apex_desc: "High character mobility and massive health pools require holding the crosshair on target for extended periods. Develops wrist smoothness, trajectory reading, and Recoil Smoothing technique.",
            profile_ow2_title: "Overwatch 2",
            profile_ow2_subtitle: "Discipline of Reaction & Chaos",
            profile_ow2_desc: "Characters with instant acceleration (zero inertia) make prediction impossible. Trains pure Reactive Tracking and fast fire transfer in 5v5 chaos against Tracer and Genji.",
            metrics_header: "Key Metrics",
            metric_click: "Click Timing",
            metric_crosshair: "Crosshair Placement",
            metric_recoil: "Recoil Control",
            metric_smooth: "Smooth Tracking",
            metric_switch: "Target Switching",
            metric_vertical: "Vertical Aim",
            metric_reactive: "Reactive Tracking",
            metric_spatial: "Spatial Awareness"
        },
        ru: {
            title: "Биомеханика Аима: 100% Покрытие | Ультимативное Исследование Adiru",
            meta_desc: "Фундаментальная деконструкция биомеханики прицеливания. Анализ CS2, Overwatch 2 и Apex Legends для 100% покрытия спектров нейромоторного контроля. Полный текст исследования Adiru (amazingb01).",
            hero_title: "Биомеханика и инженерия прицеливания",
            hero_subtitle: "Фундаментальный анализ коммерческих соревновательных сред для абсолютного покрытия спектров нейромоторного контроля. 100% деконструкция механик.",
            pillars_title: "4 Столпа Стрельбы",
            static_title: "Static Clicking",
            static_desc: "Тренирует \"Stopping Power\" — способность мгновенно гасить инерцию кисти. Критично для CS2 и Valorant.",
            reactive_title: "Reactive Tracking",
            reactive_desc: "Реакция на цели с нулевой инерцией. Мгновенное считывание смены направления. Лучшая школа — Overwatch 2.",
            smooth_title: "Smooth Tracking",
            smooth_desc: "Плавное ведение цели без микро-дрожи (jitter). Высокий TTK в Apex Legends требует идеальных парабол.",
            switching_title: "Target Switching",
            switching_desc: "Скоростной перенос огня между множеством целей в хаосе. Объединяет кликинг и трекинг.",
            decomposition_title: "Декомпозиция Дисциплин",
            decomposition_subtitle: "Выберите игру ниже для детального анализа её роли в вашей тренировке.",
            analytics_title: "Аналитика и Данные",
            spectral_title: "Спектральный Анализ Покрытия",
            heatmap_title: "Матрица Интенсивности (Heatmap)",
            research_phys_title: "Физиология Нейромоторного Контроля",
            research_phys_p1: "Современная парадигма требует строгого разделения навыков. Изолированные среды (KovaaK’s) лишены ключевых элементов: визуального шума и психологического давления. Мое исследование доказывает, что три игры образуют замкнутую систему: <strong>Stopping Power (CS2), Zero Inertia (OW2) и Momentum (Apex)</strong>.",
            research_ttk_title: "Фактор TTK (Time To Kill)",
            research_ttk_p1: "В CS2 средний процент хедшотов достигает 84.40%, что требует субпиксельной точности. В это же время, Apex Legends с его Recoil Smoothing заставляет игрока рефлекторно совершенствовать плавность движения. Overwatch 2 убивает предиктивное прицеливание — здесь вы работаете на грани биологической реакции.",
            bar_chart_title: "Сравнение TTK (мс)",
            verdict_title: "Итоговый Вердикт",
            verdict_stability_title: "Для Стабильности",
            verdict_stability_desc: "Играйте в Valorant. Фокус на чистоте движения и Stopping Power. Скорость придет сама.",
            verdict_smoothness_title: "Для Плавности",
            verdict_smoothness_desc: "Apex Legends (R-99). Никакого jitter в руке. Только плавные, идеальные линии.",
            verdict_reaction_title: "Для Реакции",
            verdict_reaction_desc: "Overwatch 2. Хаос, мгновенные смены углов и нулевая инерция. Лучший учитель реакции.",
            coverage_achieved: "100% ПОКРЫТИЕ ДОСТИГНУТО",
            about_title: "Об Авторе и Исследовании",
            about_p1: "Меня зовут <strong>Adiru (amazingb01)</strong>. Этот проект — результат года сбора данных и деконструкции механик на базе личного опыта. Любое расширение списка из трех игр ведет к избыточности паттернов, а исключение одной — к дефициту контроля.",
            about_duration: "Research duration: 1+ Year",
            donate_btn: "Поддержать Исследование",
            footer_copy: "&copy; 2026 Aim Spectrum Analytics. Исследование от Adiru.",
            footer_data: "Все данные основаны на анализе игровых движков Source 2, Apex Momentum и OW2 Inertia-free systems.",
            // Profiles
            profile_val_title: "Valorant / CS2",
            profile_val_subtitle: "Дисциплина Статики и Микро-контроля",
            profile_val_desc: "Среда с экстремально низким TTK, где первый выстрел решает исход дуэли. Идеальна для отработки остановки курсора (Stopping Power) и горизонтальных микро-корректировок. Source 2 наказывает за движение, требуя идеального контр-стрейфа.",
            profile_apex_title: "Apex Legends",
            profile_apex_subtitle: "Дисциплина Плавного Трекинга",
            profile_apex_desc: "Высокая мобильность персонажей и огромный запас здоровья требуют удерживать прицел на цели длительное время. Развивает плавность кисти, чтение траекторий и технику Recoil Smoothing.",
            profile_ow2_title: "Overwatch 2",
            profile_ow2_subtitle: "Дисциплина Реакции и Хаоса",
            profile_ow2_desc: "Персонажи с мгновенным ускорением (нулевая инерция) делают предсказание невозможным. Тренирует чистую реакцию (Reactive Tracking) и быстрый перенос огня в хаосе 5v5 против Трейсер и Гендзи.",
            metrics_header: "Ключевые Метрики",
            metric_click: "Click Timing",
            metric_crosshair: "Crosshair Placement",
            metric_recoil: "Recoil Control",
            metric_smooth: "Smooth Tracking",
            metric_switch: "Target Switching",
            metric_vertical: "Vertical Aim",
            metric_reactive: "Reactive Tracking",
            metric_spatial: "Spatial Awareness"
        },
        uk: {
            title: "Біомеханіка Аїму: 100% Покриття | Ультимативне Дослідження Adiru",
            meta_desc: "Фундаментальна деконструкція біомеханіки прицілювання. Аналіз CS2, Overwatch 2 та Apex Legends для 100% покриття спектрів нейромоторного контролю. Повний звіт дослідження Adiru (amazingb01).",
            hero_title: "Біомеханіка та інженерія прицілювання",
            hero_subtitle: "Фундаментальний аналіз комерційних змагальних середовищ для абсолютного покриття спектрів нейромоторного контролю. 100% деконструкція механік.",
            pillars_title: "4 Стовпи Стрільби",
            static_title: "Static Clicking",
            static_desc: "Тренує \"Stopping Power\" — здатність миттєво гасити інерцію кисті. Критично для CS2 та Valorant.",
            reactive_title: "Reactive Tracking",
            reactive_desc: "Реакція на цілі з нульовою інерцією. Миттєве зчитування зміни напрямку. Найкраща школа — Overwatch 2.",
            smooth_title: "Smooth Tracking",
            smooth_desc: "Плавне ведення цілі без мікро-тремтіння (jitter). Високий TTK в Apex Legends потребує ідеальних парабол.",
            switching_title: "Target Switching",
            switching_desc: "Швидкісне перенесення вогню між безліччю цілей у хаосі. Поєднує клікінг та трекінг.",
            decomposition_title: "Декомпозиція Дисциплин",
            decomposition_subtitle: "Оберіть гру нижче для детального аналізу її ролі у вашому тренувальному циклі.",
            analytics_title: "Аналітика та Дані",
            spectral_title: "Спектральний Аналіз Покриття",
            heatmap_title: "Матриця Інтенсивності (Heatmap)",
            research_phys_title: "Фізіологія Нейромоторного Контролю",
            research_phys_p1: "Сучасна парадигма потребує суворого поділу навичок. Ізольовані середовища (KovaaK’s) позбавлені ключових елементів: візуального шуму та психологічного тиску. Моє дослідження доводить, що три гри утворюють замкнуту систему: <strong>Stopping Power (CS2), Zero Inertia (OW2) та Momentum (Apex)</strong>.",
            research_ttk_title: "Фактор TTK (Time To Kill)",
            research_ttk_p1: "У CS2 середній відсоток хедшотів сягає 84.40%, що вимагає субпіксельної точности. Водночас Apex Legends з його Recoil Smoothing змушує гравця рефлекторно вдосконалювати плавність руху. Overwatch 2 вбиває предиктивне прицілювання — тут ви працюєте на межі біологічної реакції.",
            bar_chart_title: "Порівняння TTK (мс)",
            verdict_title: "Підсумковий Вердикт",
            verdict_stability_title: "Для Стабільності",
            verdict_stability_desc: "Грайте у Valorant. Фокус на чистоті руху та Stopping Power. Швидкість прийде сама.",
            verdict_smoothness_title: "Для Плавності",
            verdict_smoothness_desc: "Apex Legends (R-99). Жодного jitter у руці. Тільки плавні, ідеальні геометричні лінії.",
            verdict_reaction_title: "Для Реакції",
            verdict_reaction_desc: "Overwatch 2. Хаос, миттєві зміни кутів та нульова інерція. Найкращий вчитель реакції.",
            coverage_achieved: "100% ПОКРИТТЯ ДОСЯГНУТО",
            about_title: "Про Автора та Дослідження",
            about_p1: "Мене звати <strong>Adiru (amazingb01)</strong>. Цей проєкт — результат року збору даних та деконструкції механік на базі особистого досвіду. Будь-яке розширення списку з трьох ігор веде до надмірності патернів, а виключення однієї — до дефіциту контролю.",
            about_duration: "Research duration: 1+ Year",
            donate_btn: "Підтримати Дослідження",
            footer_copy: "&copy; 2026 Aim Spectrum Analytics. Дослідження від Adiru.",
            footer_data: "Усі дані базуються на аналізі ігрових рушіїв Source 2, Apex Momentum та OW2 Inertia-free systems.",
            // Profiles
            profile_val_title: "Valorant / CS2",
            profile_val_subtitle: "Дисципліна Статики та Мікро-контролю",
            profile_val_desc: "Середовище з екстремально низьким TTK, де перший постріл вирішує результат дуелі. Ідеальна для відпрацювання зупинки курсору (Stopping Power) та горизонтальних мікро-коригувань. Source 2 карає за рух, вимагаючи ідеального контр-стрейфу.",
            profile_apex_title: "Apex Legends",
            profile_apex_subtitle: "Дисципліна Плавного Трекінгу",
            profile_apex_desc: "Висока мобільність персонажів та величезний запас здоров'я вимагають утримувати приціл на цілі тривалий час. Розвиває плавність кисті, читання траєкторій та техніку Recoil Smoothing.",
            profile_ow2_title: "Overwatch 2",
            profile_ow2_subtitle: "Дисципліна Реакції та Хаосу",
            profile_ow2_desc: "Персонажі з миттєвим прискоренням (нульова інерція) роблять передбачення неможливим. Тренує чисту реакцію (Reactive Tracking) та швидке перенесення вогню в хаосі 5v5 проти Трейсер та Гендзі.",
            metrics_header: "Ключові Метрики",
            metric_click: "Click Timing",
            metric_crosshair: "Crosshair Placement",
            metric_recoil: "Recoil Control",
            metric_smooth: "Smooth Tracking",
            metric_switch: "Target Switching",
            metric_vertical: "Vertical Aim",
            metric_reactive: "Reactive Tracking",
            metric_spatial: "Spatial Awareness"
        }
    };

    let currentLang = localStorage.getItem('aimMasteryLang') || 'en';

    function switchLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('aimMasteryLang', lang);
        const t = translations[lang];

        // Update DOM elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });

        // Update Meta Tags
        document.title = t.title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta_desc);

        // Update JSON-LD
        const schema = document.getElementById('schema-json');
        if (schema) {
            const schemaData = JSON.parse(schema.innerHTML);
            schemaData.headline = t.hero_title;
            schemaData.description = t.meta_desc;
            schema.innerHTML = JSON.stringify(schemaData, null, 2);
        }

        // Update Language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        // Update dynamic content
        updateProfile(currentProfileKey);
    }

    // --- Profile Logic ---
    let currentProfileKey = 'valorant';
    window.updateProfile = function (gameKey) {
        currentProfileKey = gameKey;
        const contentDiv = document.getElementById('profile-content');
        if (!contentDiv) return;

        const lang = currentLang;
        const t = translations[lang];

        document.querySelectorAll('.profile-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`btn-${gameKey}`)?.classList.add('active');

        contentDiv.style.opacity = '0';

        setTimeout(() => {
            const profileData = {
                valorant: {
                    title: t.profile_val_title,
                    subtitle: t.profile_val_subtitle,
                    description: t.profile_val_desc,
                    metrics: [
                        { label: t.metric_click, value: "95%" },
                        { label: t.metric_crosshair, value: "100%" },
                        { label: t.metric_recoil, value: "85%" }
                    ],
                    color: "#ec4899"
                },
                apex: {
                    title: t.profile_apex_title,
                    subtitle: t.profile_apex_subtitle,
                    description: t.profile_apex_desc,
                    metrics: [
                        { label: t.metric_smooth, value: "100%" },
                        { label: t.metric_switch, value: "70%" },
                        { label: t.metric_vertical, value: "90%" }
                    ],
                    color: "#eab308"
                },
                ow2: {
                    title: t.profile_ow2_title,
                    subtitle: t.profile_ow2_subtitle,
                    description: t.profile_ow2_desc,
                    metrics: [
                        { label: t.metric_reactive, value: "100%" },
                        { label: t.metric_switch, value: "95%" },
                        { label: t.metric_spatial, value: "85%" }
                    ],
                    color: "#06b6d4"
                }
            };

            const data = profileData[gameKey];
            let metricsHtml = '';
            data.metrics.forEach(m => {
                metricsHtml += `
                    <div class="metric-item">
                        <div class="metric-info"><span>${m.label}</span><span>${m.value}</span></div>
                        <div class="metric-bar-bg" style="background: rgba(255,255,255,0.05); height: 8px; border-radius: 4px; overflow: hidden; margin-top: 5px;">
                            <div class="metric-bar-fill" style="width: ${m.value}; background: ${data.color}; height: 100%; transition: width 1s ease-out;"></div>
                        </div>
                    </div>
                `;
            });

            contentDiv.innerHTML = `
                <h3 style="color: ${data.color}; font-size: 2rem; margin-bottom: 5px;">${data.title}</h3>
                <p style="font-style: italic; color: var(--text-dim); margin-bottom: 20px;">${data.subtitle}</p>
                <p style="margin-bottom: 30px; line-height: 1.6; color: #f8fafc;">${data.description}</p>
                <div class="metrics-grid" style="display: grid; gap: 15px;">
                    <h4 style="text-transform: uppercase; font-size: 0.7rem; letter-spacing: 2px; color: var(--text-dim); margin-bottom: 5px;">${t.metrics_header}</h4>
                    ${metricsHtml}
                </div>
            `;
            contentDiv.style.opacity = '1';
        }, 300);
    };

    // --- Charts ---
    const ctxRadar = document.getElementById('radarChart')?.getContext('2d');
    if (ctxRadar) {
        new Chart(ctxRadar, {
            type: 'radar',
            data: {
                labels: ['Static Clicking', 'Micro Adjust', 'Smooth Track', 'Reactive Track', 'Target Switch', 'Verticality'],
                datasets: [
                    { label: 'CS2', data: [100, 95, 20, 30, 40, 10], backgroundColor: 'rgba(236, 72, 153, 0.2)', borderColor: '#ec4899', borderWidth: 2 },
                    { label: 'Apex Legends', data: [20, 30, 100, 70, 60, 90], backgroundColor: 'rgba(234, 179, 8, 0.2)', borderColor: '#eab308', borderWidth: 2 },
                    { label: 'Overwatch 2', data: [40, 50, 60, 100, 95, 70], backgroundColor: 'rgba(6, 182, 212, 0.2)', borderColor: '#06b6d4', borderWidth: 2 }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false, scales: { r: { beginAtZero: true, max: 100, grid: { color: 'rgba(255, 255, 255, 0.1)' }, pointLabels: { color: '#94a3b8' }, ticks: { display: false } } }, plugins: { legend: { labels: { color: '#f8fafc' } } } }
        });
    }

    const ctxBar = document.getElementById('barChart')?.getContext('2d');
    if (ctxBar) {
        new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: ['CS2', 'Overwatch 2', 'Apex Legends'],
                datasets: [{ label: 'Avg TTK (ms)', data: [150, 600, 1100], backgroundColor: ['#ec4899', '#06b6d4', '#eab308'], borderRadius: 8 }]
            },
            options: { responsive: true, maintainAspectRatio: false, indexAxis: 'y', scales: { x: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#94a3b8' } }, y: { grid: { display: false }, ticks: { color: '#f8fafc' } } }, plugins: { legend: { display: false } } }
        });
    }

    // --- Heatmap ---
    const heatmapContainer = document.getElementById('heatmapContainer');
    if (heatmapContainer && typeof Plotly !== 'undefined') {
        Plotly.newPlot('heatmapContainer', [{
            z: [[10, 9, 3, 2, 5], [3, 4, 8, 10, 7], [4, 5, 10, 6, 9]],
            x: ['Static', 'Micro', 'Reactive', 'Smooth', 'Switching'],
            y: ['CS2', 'Apex', 'OW2'],
            type: 'heatmap', colorscale: [[0, '#1e293b'], [0.5, '#06b6d4'], [1, '#ec4899']], showscale: false
        }], { paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)', margin: { t: 10, b: 40, l: 60, r: 10 }, xaxis: { color: '#f8fafc' }, yaxis: { color: '#f8fafc' } }, { responsive: true, displayModeBar: false });
    }

    // --- Scroll Reveal ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // --- Initialize ---
    window.setLang = switchLanguage; // Expose to HTML
    switchLanguage(currentLang);
});
