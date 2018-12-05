(function ($) {

  $(document).ready(function () {

    // Initiate Foundation
    (function () {
      $(document).foundation()
    })();

    //___________________/tabs/___________________//
    (function () {
      if ($('body').width() > 991) {
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
      } else if ($('body').width() <= 991) {
        for (i = 0; i < $('.tabs__item').length; i++) {
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

    // Append price history
    (function () {
      var priceHistoryUlWrap = $('.deals__cards-item-price .deals__cards-item-price-history');
      var priceHistoryUl = $('.deals__cards-item-price-history .product__card-price-list');
      var priceHistoryWrap = $('.deals__cards-item-bottom-price .deals__cards-item-bottom-price-wrap');
      var rankingsHistoryUlWrap = $('.rankings-individual__card-price-wrap .rankings-individual__card-price-history');
      var rankingsHistoryUl = $('.rankings-individual__card-price-history .product__card-price-list');
      var rankingsHistoryWrap = $('.rankings-individual__card-price-phone .rankings-individual__card-price-phone-wrap');

      (function () {
        for (var i = 0; i < priceHistoryUl.length; i++) {
          var priceHistoryUlWrapIndex = priceHistoryUlWrap[i];
          var priceHistoryIndex = priceHistoryUl[i];
          var priceHistoryWrapIndex = priceHistoryWrap[i];
          if ($(window).width() <= 768) {
            $(priceHistoryIndex).appendTo(priceHistoryWrapIndex);
          }
        }
        $(window).resize(function () {
          for (var i = 0; i < priceHistoryUl.length; i++) {
            var priceHistoryUlWrapIndex = priceHistoryUlWrap[i];
            var priceHistoryIndex = priceHistoryUl[i];
            var priceHistoryWrapIndex = priceHistoryWrap[i];

            if ($(window).width() <= 751) {
              $(priceHistoryIndex).appendTo(priceHistoryWrapIndex);
            } else if ($(window).width() > 752) {
              $(priceHistoryIndex).appendTo(priceHistoryUlWrapIndex);
            }
          }
        });
      })();

      (function () {
        for (var i = 0; i < rankingsHistoryUl.length; i++) {
          var rankingsHistoryUlWrapIndex = rankingsHistoryUlWrap[i];
          var rankingsHistoryIndex = rankingsHistoryUl[i];
          var rankingsHistoryWrapIndex = rankingsHistoryWrap[i];
          if ($(window).width() <= 991) {
            $(rankingsHistoryIndex).appendTo(rankingsHistoryWrapIndex);
          }
        }
        $(window).resize(function () {
          for (var i = 0; i < rankingsHistoryUl.length; i++) {
            var rankingsHistoryUlWrapIndex = rankingsHistoryUlWrap[i];
            var rankingsHistoryIndex = rankingsHistoryUl[i];
            var rankingsHistoryWrapIndex = rankingsHistoryWrap[i];

            if ($(window).width() <= 991) {
              $(rankingsHistoryIndex).appendTo(rankingsHistoryWrapIndex);
            } else if ($(window).width() >= 991) {
              $(rankingsHistoryIndex).appendTo(rankingsHistoryUlWrapIndex);
            }
          }
        });
      })();

    })();

    // Clear placeholders of inpust on mobile
    (function () {
      if ($(window).width() <= 973) {
        $('.rankings__hero-search-label input, .alerts__hero-form input').removeAttr('placeholder');
      }
    })();

    // Header phone search
    (function () {
      var height = $('.header__search-phone-wrap').height();
      $('.nav__search-mobile-icon').click(function () {
        $('.header__search-phone-wrap').fadeToggle(500);
        $('.header__search-phone-input').focus();
        $('.wrapper').css({
          'height': height,
          'background': '#fff',
          'z-index': '100'
        });
      })
      $('.header__search-phone-cancel').click(function () {
        $('.header__search-phone-wrap').fadeToggle(500);
        $('.wrapper').css({
          'height': 'auto',
          'z-index': '0'
        });
      })
      $('.header__search-phone-icon').click(function () {
        $('.header__search-phone-input').val("");
      })
      $(window).resize(function () {
        var height = $('.header__search-phone-wrap').height();
        $('.nav__search-mobile-icon').click(function () {
          $('.wrapper').css({
            'height': height,
            'background': '#fff',
            'z-index': '100'
          });
        })
        $('.header__search-phone-cancel').click(function () {
          $('.wrapper').css({
            'height': 'auto',
            'z-index': '0'
          });
        })
      })
    })();

    // Menu hamburger
    (function () {
      $('.nav__hamburger-icon').click(function () {
        $('.nav__hamburger-wrap, .phone-menu__background').css('right', 0);
        $('.wrapper').css({
          'height': 0
        });
      });
      $('.nav__hamburger-wrap-icon').on('click', function () {
        $('.nav__hamburger-wrap, .phone-menu__background').css('right', '100%');
        $('.wrapper').css({
          'height': 'auto'
        });
      });

      //drilldown settings
      $('.nav__hamburger-wrap-list .is-drilldown-submenu-parent .is-drilldown-submenu-parent .nav__hamburger-wrap-sub-item_active').on('click', function () {
        var $element = $('.nav__hamburger-wrap-list');
        $($element).foundation('_hideAll');
      });

      (function () {
        var a = $('.nav__hamburger-wrap-list .is-drilldown-submenu-parent .is-drilldown-submenu-parent .nav__hamburger-wrap-sub2-list .js-drilldown-back').parent().prev(),
          i = 0;
        for (i; i < a.length; i++) {
          var backText = $('.nav__hamburger-wrap-list .is-drilldown-submenu-parent .is-drilldown-submenu-parent .nav__hamburger-wrap-sub2-list .js-drilldown-back a')[i],
            aIndex = a[i];
          aText = $(aIndex).text();
          $(backText).text(aText);
        }

      })();
    })();

    // Homepage select
    (function () {
      var categoryOption = $('.search__select-category option'),
        category = $('.search__select-category'),
        seeOption = $('.search__select-see'),
        selectLinks1 = $('.select-links__1 a'),
        selectLinks2 = $('.select-links__2 a'),
        button = $('.search__select-button a'),
        i = 0;

      $(seeOption).change(function () {
        if ($(this).val() == 0) {
          var categoryIndex = $(category).val(),
            linkIndex = $(selectLinks1).eq(categoryIndex).attr('href');
          $(button).attr('href', linkIndex);

          $(category).change(function () {
            var categoryIndex = $(category).val(),
              linkIndex = $(selectLinks1).eq(categoryIndex).attr('href');
            $(button).attr('href', linkIndex);
          });
        } else if ($(this).val() == 1) {
          var categoryIndex = $(category).val(),
            linkIndex = $(selectLinks2).eq(categoryIndex).attr('href');
          $(button).attr('href', linkIndex);

          $(category).change(function () {
            var categoryIndex = $(category).val(),
              linkIndex = $(selectLinks2).eq(categoryIndex).attr('href');
            $(button).attr('href', linkIndex);
          });
        }
      });

      $(category).change(function () {
        if ($(seeOption).val() == 0) {
          var categoryIndex = $(category).val(),
            linkIndex = $(selectLinks1).eq(categoryIndex).attr('href');
          $(button).attr('href', linkIndex);
        } else if ($(seeOption).val() == 1) {
          var categoryIndex = $(category).val(),
            linkIndex = $(selectLinks2).eq(categoryIndex).attr('href');
          $(button).attr('href', linkIndex);
        }
      });
    })();

    // Left scroll for ranking individual page
    (function () {
      if ($('.rankings-individual__navigation-item_active').length) {
        var position = $('.rankings-individual__navigation-item_active').position(),
          positionLeft = position.left;
        $('.container__full').scrollLeft(positionLeft);
      }
    })();

    // Truncate text
    (function(){
      if($(window).width() >= 1200){
        $('.alerts__famous-item-name p').succinct({
          size: 50
        });
        $('.price-individual__product-item-name p').succinct({
          size: 70
        });
      }
      else if($(window).width() <= 1200){
        $('.alerts__famous-item-name p').succinct({
          size: 40
        });
        $('.price-individual__product-item-name p').succinct({
          size: 60
        });
      }
      else if($(window).width() <= 768){
        $('.alerts__famous-item-name p').succinct({
          size: 40
        });
        $('.price-individual__product-item-name p').succinct({
          size: 40
        });
      }

    })();

    //Closing notification bar
    (function(){
      $('.notification-bar__close-icon').on('click', function(){
        $('.notification-bar').css('display', 'none');
      })
    })();


  })
})(jQuery);