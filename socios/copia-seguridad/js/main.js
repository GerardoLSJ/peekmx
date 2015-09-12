$(function() {
    "use strict";

    /* ==========================================================================
   Sub Form   
   ========================================================================== */



    $('#mc-form').ajaxChimp({
        language: 'cm',
        url: 'http://peek.us11.list-manage.com/subscribe/post?u=5c256015241853bcf1ccb4a86&amp;id=eac5de8537'
        
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx

           

    });


    $.ajaxChimp.translations.cm = {
        'submit': 'Registrandote en Socios Peek...',
        0: '<i class="fa fa-envelope"></i> Increible! Te acabamos de enviar un correo de confirmación.',
        1: '<i class="fa fa-exclamation-triangle"></i> Por favor ingresa un valor',
        2: '<i class="fa fa-exclamation-triangle"></i> Un correo electronico debe de contener por lo menos un @',
        3: '<i class="fa fa-exclamation-triangle"></i> El dominio de tu correo es invalido (la parte después de @: )',
        4: '<i class="fa fa-exclamation-triangle"></i> El usuario de tu correo es invalido (la parte antes de @: )',
        5: '<i class="fa fa-exclamation-triangle"></i> Este correo electronico luce falso o no funciona. Ingresa un correo diferente'
    };



    /* ==========================================================================
   sticky nav
   ========================================================================== */

    $('.navbar-default').waypoint('sticky', {
        offset: 30
    });

    /* ==========================================================================
   litebox
   ========================================================================== */

    $('.litebox-hero, .litebox-tour').magnificPopup({
        type: 'iframe'
    });


    /* ==========================================================================
       Number animation
       ========================================================================== */


    $('.welcome-message').waypoint(function() {

        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

        $('.total-number-1').animateNumber({
            number: 50, //change value here
            numberStep: comma_separator_number_step
        }, 6000);

    }, {
        offset: '80%'

    });




    /* ==========================================================================
   Feature image absolute position height fix
   ========================================================================== */

    $(window).load(function() {
        var featureImg = function() {
            $(".features div[class='row'] .col-md-7").each(function() {
                var newHeight = 0,
                    $this = $(this);
                $.each($this.children(), function() {
                    newHeight += $(this).height();
                });
                $this.height(newHeight);
            });
        };


        featureImg();


        $(window).on("resize", function() {
            featureImg();
        });


    });




    /* ==========================================================================
   Smooth scroll
   ========================================================================== */

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({

                    scrollTop: (target.offset().top - 40)
                }, 1000);
                return false;
            }
        }
    });




});