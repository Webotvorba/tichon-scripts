'use strict';

var DataOffsetTop = (function() {
    if ($('[data-offset-top]').length) {
        var $el = $('[data-offset-top]'),
            $offsetEl = $($el.data('offset-top')),
            offset = $offsetEl.height();


        $el.css({'padding-top': offset + 'px'})
    }
})();