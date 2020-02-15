'use strict';

let wpxFancyBox = (function() {
    // Do not include # anchor when clicking on image
    $(document).ready(function () {
        $.fancybox.defaults.hash  = false;
        $.fancybox.defaults.touch = false;
    });
})();