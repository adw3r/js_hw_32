import $ from 'jquery'

export function initializeStars(root = document) {
    $(root).find('.stars').each(function () {
        const $el = $(this);
        const max = parseInt($el.attr('data-max') || '5', 10);
        const value = parseFloat($el.attr('data-value') || '0');
        const size = parseInt($el.attr('data-size') || '18', 10);

        if ($el.data('inited')) return;
        $el.data('inited', true);

        const $wrap = $('<div class="stars-wrap"></div>').css({display: 'inline-flex', gap: '4px'});

        function starSvg(filled) {
            const fill = filled ? '#fbbf24' : 'none';
            const stroke = '#f59e0b';
            return $(`
                <svg width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="${fill}" stroke="${stroke}" stroke-width="2" stroke-linejoin="round"
                        d="M12 3.5l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17.9 6.6 20.3l1-6.1L3.2 9.9l6.1-.9z"/>
                </svg>
            `);
        }

        const full = Math.floor(value);
        const hasHalf = value - full >= 0.5;
        for (let i = 0; i < max; i++) {
            if (i < full) {
                $wrap.append(starSvg(true));
            } else if (i === full && hasHalf) {
                const $half = starSvg(false);
                $half.find('path').attr('fill', 'url(#half)');
                // Simple half: overlay a filled rect
                const $overlay = $(`
                  <svg width="${size}" height="${size}" viewBox="0 0 24 24" style="position:absolute; clip-path: inset(0 50% 0 0);">
                    <path fill="#fbbf24" stroke="transparent" d="M12 3.5l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17.9 6.6 20.3l1-6.1L3.2 9.9l6.1-.9z"/>
                  </svg>
                `).css({position: 'absolute'});
                const $stack = $('<span class="star-half" style="position:relative; display:inline-block"></span>');
                $stack.append($half).append($overlay);
                $wrap.append($stack);
            } else {
                $wrap.append(starSvg(false));
            }
        }

        $el.empty().append($wrap);
    });
}


