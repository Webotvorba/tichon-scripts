'use strict';

let wpxSelect2 = (function() {
    // Do not include # anchor when clicking on image
    $(document).ready(function () {
        let userLang = $('html').attr('lang');

        // Select2 init
        $('.select2').each(function () {
            $(this).select2({
                minimumInputLength: 1,
                placeholder: frontEndLocalization[userLang].search
            });
        });
    });
})();