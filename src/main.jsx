import './style.scss'
import $ from 'jquery'
import fc6_image from './assets/img/far-cry-6.jpg'


document.querySelector('#app').innerHTML = `
  <main>
    <div class="game-info">
        <div class="tabs">
            <ul>
                <li>
                    <span class="icon-info"></span>
                    <span>Information</span>
                </li>
                <li>
                    <span class="icon-info"></span>
                    <span>Information</span>
                </li>
                <li>
                    <span class="icon-info"></span>
                    <span>Information</span>
                </li>
            </ul>
        </div>
        <div class="card">
            <div class="pic-info">
                <div class="img-wrap">
                    <img src="${fc6_image}" alt="FarCry 6">
                </div>
            
            </div>
            <div class="text-info">
                <div class="description">
                    <span class="title">FarCry 6</span>
                    <span class="release">First Released Oct 6, 2021</span>
                    <span class="info">Far Cry 6 is a 2021 action-adventure first-person shooter game developed by Ubisoft Toronto. 
                    It is the sixth main installment in the Far Cry series and the successor Far Cry 5.</span>
                    <div class="score">
                        <div class="donut" data-rating="8.7" data-scale="10"></div>
                    </div>
                </div>
                <div class="to-buy">
                    <button class="buy">
                        Buy it now
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="overlay"></div>
  </main>
`


$('document').ready(function () {
    $.fn.donutRating = function (options) {
        const defaults = {
            size: 75,             // px
            thickness: 10,        // stroke width in px
            color: '#4f46e5',     // progress color
            trackColor: '#e5e7eb',// background ring color
            rounded: true,        // linecap round
            showText: true,       // show center text
            textFormatter: (val, max) => `${val}/${max}`, // center label
            animate: true,        // animate from 0 to value
            duration: 800         // animation ms
        };
        const cfg = $.extend({}, defaults, options);

        function clamp(n, min, max) {
            return Math.max(min, Math.min(n, max));
        }

        return this.each(function () {
            const el = $(this);

            const scaleAttr = parseFloat(el.attr('data-scale')) || 5;  // e.g. 5 or 100
            let valAttr = parseFloat(el.attr('data-rating')) || 0;
            valAttr = clamp(valAttr, 0, scaleAttr);

            const size = cfg.size;
            const stroke = cfg.thickness;
            const radius = (size - stroke) / 2;
            const c = size / 2;
            const circumference = 2 * Math.PI * radius;

            el.empty();
            const $wrap = $('<div class="donut-wrap"></div>').css({width: size, height: size});
            const $svg = $(`
              <svg class="donut-svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">
                  <circle class="donut-track" cx="${c}" cy="${c}" r="${radius}"
                          fill="none" stroke="${cfg.trackColor}" stroke-width="${stroke}" />
                  <circle class="donut-bar" cx="${c}" cy="${c}" r="${radius}"
                          fill="none" stroke="${cfg.color}" stroke-width="${stroke}"
                          stroke-linecap="${cfg.rounded ? 'round' : 'butt'}"
                          stroke-dasharray="0 ${circumference}" />
              </svg>
            `);

            const $text = $('<div class="donut-text"></div>');
            if (cfg.showText) {
                $text.text(valAttr);
            }

            $wrap.append($svg);
            if (cfg.showText) $wrap.append($text);
            el.append($wrap);

            const targetDash = (valAttr / scaleAttr) * circumference;

            if (!cfg.animate || cfg.duration <= 0) {
                $svg.find('.donut-bar').attr('stroke-dasharray', `${targetDash} ${circumference - targetDash}`);
                return;
            }

            const start = performance.now();

            function tick(now) {
                const t = clamp((now - start) / cfg.duration, 0, 1);
                const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
                const current = targetDash * eased;
                $svg.find('.donut-bar').attr('stroke-dasharray', `${current} ${circumference - current}`);
                if (t < 1) requestAnimationFrame(tick);
            }

            requestAnimationFrame(tick);
        });
    };

    $('.donut').donutRating({
        size: 75,
        thickness: 4,
        color: '#10b981',
        trackColor: '#e5e7eb',
        rounded: true,
        showText: true,
        textFormatter: (val, max) => {
            if (max >= 100) return `${Math.round((val / max) * 100)}%`;
            return `${val}/${max}`;
        },
        animate: true,
        duration: 900
    });
})
