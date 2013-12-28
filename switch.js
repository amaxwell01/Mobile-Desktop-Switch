var mobileSwitch = {
    checkMobileCookie: function() {
        var desktopView = $.cookie('desktop_view'),
            viewFullSiteButton = $('#view_full_site'),
            myBody = $('body');

        if ( !(jQuery.browser.mobile) && typeof(desktopView) === 'undefined' ||
             desktopView === 'true' ) {
            myBody.removeClass('mobile_friendly');
            viewFullSiteButton.text('[View Mobile Site]');
        } else {
            myBody.addClass('mobile_friendly');
            viewFullSiteButton.text('[View Full Site]');
        }
    },

    checkDevice: function() {
        var myBody = $('body');

        if ( jQuery.browser.mobile ) {
            myBody.addClass('mobile_friendly');
        } else {
            myBody.removeClass('mobile_friendly');
        }
    },

    init: function() {
        var viewOther = $('#view_full_site');

        $('#view_full_site').on('click', function() {
            mobileSwitch.viewFullSite();
        });

        this.checkDevice();
        this.checkMobileCookie();
        this.fancybox();
        this.moveWelcomeContent();
        this.resizeHeader();

        // Check if it is mobile
        if ( jQuery.browser.mobile ) {
            viewOther.css({
                display: 'block'
            });
        } else {
            viewOther.css({
                display: 'none'
            });
        }
    },

    viewFullSite: function() {
        var desktopView = $.cookie('desktop_view');

        if ( desktopView === 'true' ) {
            desktopView = false;
        } else {
            desktopView = true;
        }

        $.cookie('desktop_view', desktopView, {
            path: '/'
        });

        this.checkMobileCookie();
    }
};

$(function() {
    mobileSwitch.init();
});
