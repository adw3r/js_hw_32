import '../assets/style/style.scss'
import $ from 'jquery'

$.fn.donutRating = function (options) {
    const defaults = {
        size: 75,
        thickness: 10,
        color: '#4f46e5',
        trackColor: '#e5e7eb',
        rounded: true,
        showText: true,
        textFormatter: (val, max) => `${val}/${max}`,
        animate: true,
        duration: 800
    };
    const cfg = $.extend({}, defaults, options);

    function clamp(n, min, max) {
        return Math.max(min, Math.min(n, max));
    }

    return this.each(function () {
        const el = $(this);

        const scaleAttr = parseFloat(el.attr('data-scale')) || 5;
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
            const eased = 1 - Math.pow(1 - t, 3);
            const current = targetDash * eased;
            $svg.find('.donut-bar').attr('stroke-dasharray', `${current} ${circumference - current}`);
            if (t < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
    });
};

export function initializeDonuts(size = 75) {
    $('.donut').donutRating({
        size: size,
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
}
