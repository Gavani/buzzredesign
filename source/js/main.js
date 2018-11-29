(function ($) {

  $(document).ready(function () {
    // Initiate Foundation
    (function(){
      $(document).foundation()
    })();


    //___________________/tabs/___________________//
    (function () {
      if ($(document).width() > 991) {
        flag = true;
        $('.tabs__link').on('click', function (e) {
          e.preventDefault();

          var
            $this = $(this),
            item = $this.closest('.tabs__item'),
            container = $this.closest('.tabs'),
            content = container.find('.tabs__content-item')
          ndx = item.index(),
            reqItem = content.eq(ndx),
            activeItem = content.filter('.tabs__content-item_active'),
            duration = 600;

          if (flag) {
            flag = false
            item.addClass('tabs__item_active')
              .siblings()
              .removeClass('tabs__item_active');

            activeItem.fadeOut(duration, function () {
              reqItem.fadeIn(duration, function () {
                $(this).addClass('tabs__content-item_active')
                  .siblings()
                  .removeClass('tabs__content-item_active');
                flag = true;
              });
            });
          }
        });
      } else if ($(document).width() <= 991) {
        for( i = 0; i < $('.tabs__item').length; i++){
          var tabs = $('.tabs__link-text')[i];
          var content = $('.buzz-ranking__tabs-content-wrap-list')[i];
          $(tabs).append(content);
        }

        $('.tabs__item').removeClass('tabs__item_active');
        var flag = true;
        $('.tabs__link').on('click', function (e) {
          e.preventDefault();

          var
            $this = $(this),
            item = $this.closest('.tabs__item'),
            container = $this.closest('.tabs__list'),
            curentContent = item.find('.tabs__link-text'),
            duration = 600;
          if (flag) {
            flag = false
            if (!item.hasClass('tabs__item_active')) {
              item.addClass('tabs__item_active')
                .siblings()
                .removeClass('tabs__item_active')
                .find('.tabs__link-text')
                .slideUp(duration);

              curentContent.slideDown(duration, function () {
                flag = true;
              });
            } else {
              item.removeClass('tabs__item_active');

              curentContent.slideUp(duration, function () {
                flag = true;
              });
            }
          }
        });
      }
    }());
  })


})(jQuery);