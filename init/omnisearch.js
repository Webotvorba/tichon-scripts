'use strict';

let wpxOmnisearch = (function() {
    // Do not include # anchor when clicking on image
    $(document).ready(function () {
        let $body       = $("body");
        let $searchOpen = $('[data-action="search-open"]')
        
        $body.on("click", "[data-action]", function(e) {

            e.preventDefault();

            var $this = $(this);
            var action = $this.data('action');
            var target = $this.data('target');

            switch (action) {
                case 'omnisearch-open':
                    target = $this.data('target');
                    $(target).addClass('show');
                    $(target).find('.form-control').focus();
                    $body.addClass('omnisearch-open').append('<div class="mask-body mask-body-dark" data-action="omnisearch-close" data-target="'+target+'" />');
                    break;

                case 'omnisearch-close':
                    target = $this.data('target');
                    $searchOpen.removeClass('active');
                    $(target).removeClass('show');
                    $('body').removeClass('omnisearch-open').find('.mask-body').remove();
                    break;

                case 'search-open':
                    target = $this.data('target');
                    $this.addClass('active');
                    $(target).addClass('show');
                    $(target).find('.form-control').focus();
                    break;

                case 'search-close':
                    target = $this.data('target');
                    $searchOpen.removeClass('active');
                    $(target).removeClass('show');
                    break;
            }
        })
    });
})();