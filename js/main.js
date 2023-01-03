/*=======DARK=======*/
const switchButton = document.getElementById('switch');
const barra__nav = document.getElementById('barra__nav');
const show_menu = document.getElementById('show_menu');
const enlace1 = document.getElementById('enlace1');
const enlace2 = document.getElementById('enlace2');
const enlace3 = document.getElementById('enlace3');
const enlace4 = document.getElementById('enlace4');
const ser_subtitulo = document.getElementById('servicios_subtitulo');
const cua_subtitulo1 = document.getElementById('cuadros_subtitulo1');
const cua_subtitulo2 = document.getElementById('cuadros_subtitulo2');
const cua_subtitulo3 = document.getElementById('cuadros_subtitulo3');
const cua_subtitulo4 = document.getElementById('cuadros_subtitulo4');
const cua_subtitulo5 = document.getElementById('cuadros_subtitulo5');
const cua_subtitulo6 = document.getElementById('cuadros_subtitulo6');
const onda1 = document.getElementById('onda1')
const onda2 = document.getElementById('onda2')
const onda3 = document.getElementById('onda3')
const onda4 = document.getElementById('onda4')
const nos_subtitulo = document.getElementById('nosotros_subtitulo')
const cont_subtitulo = document.getElementById('contactos_subtitulo')
const icon_footer = document.getElementById('icon_redes_footer');
const footer_h3_1 = document.getElementById('footer_h3_1')
const footer_h3_2 = document.getElementById('footer_h3_2')
const footer_h3_3 = document.getElementById('footer_h3_3')
const sun = document.getElementById('sun');
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    barra__nav.classList.toggle('dark');
    show_menu.classList.toggle('dark');
    enlace1.classList.toggle('dark');
    enlace2.classList.toggle('dark');
    enlace3.classList.toggle('dark');
    enlace4.classList.toggle('dark');
    ser_subtitulo.classList.toggle('dark');
    cua_subtitulo1.classList.toggle('dark');
    cua_subtitulo2.classList.toggle('dark');
    cua_subtitulo3.classList.toggle('dark');
    cua_subtitulo4.classList.toggle('dark');
    cua_subtitulo5.classList.toggle('dark');
    cua_subtitulo6.classList.toggle('dark');
    onda1.classList.toggle('dark');
    onda2.classList.toggle('dark');
    onda3.classList.toggle('dark');
    onda4.classList.toggle('dark');
    nos_subtitulo.classList.toggle('dark');
    cont_subtitulo.classList.toggle('dark');
    icon_footer.classList.toggle('dark');
    footer_h3_1.classList.toggle('dark');
    footer_h3_2.classList.toggle('dark');
    footer_h3_3.classList.toggle('dark');
    sun.classList.toggle('bx-sun');
    switchButton.classList.toggle('active')
})


/*=========SCROLL REVEAL ANIMATION===========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.cuadro_texto_inicio, .img_home,
            .cuadro_texto_carta, .cuadros_img_carta,
            .cuadro_texto_servicios, .cuadros_servicios,
            .img_nosotros, .cuadro_texto_nosotros,
            .cuadro_texto_contactos, .boton_contacto,
            .container_cuadros_footer`, {
    interval: 200
})


/*=======SCROLL TOP==========*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*===============CHANGE BACKGROUND HEADER==============*/
function scrollHeader() {
    const nav = document.getElementById('barra__nav')
    if (this.scrollY >= 50) nav.classList.add('scroll-barra_nav');
    else nav.classList.remove('scroll-barra_nav')

    if (this.scrollY >= 480) nav.classList.add('scroll_barra_nav');
    else nav.classList.remove('scroll_barra_nav')

}
window.addEventListener('scroll', scrollHeader)


/*===============CHANGE BACKGROUND HEADER DARK==============*/
function scrollHeader2() {
    const nav = document.getElementById('barra__nav')
    if (this.scrollY >= 480) nav.classList.add('scroll_barra_nav.dark');
    else nav.classList.remove('scroll_barra_nav.dark')

}
window.addEventListener('scroll', scrollHeader2)


/*===============CHANGE COLOR LOGO==============*/
function scrollLogo() {
    const nav = document.getElementById('logo')
    if (this.scrollY >= 480) nav.classList.add('scroll-logo');
    else nav.classList.remove('scroll-logo')

}
window.addEventListener('scroll', scrollLogo)

/*=======SHOW MENU=====*/

jQuery('document').ready(function($) {
    var btn = $('.bx-menu'),
        show_menu = $('.menu_content');

    btn.click(function() {
        if (show_menu.hasClass('show')) {
            show_menu.removeClass('show');
        } else {
            show_menu.addClass('show');


        }

    });

});


/*============== LEER MAS ===============*/

jQuery('document').ready(function($) {
    var btn1 = $('#leer_mas1'),
        btn2 = $('#ver_menos1'),
        btn3 = $('#leer_mas2'),
        btn4 = $('#ver_menos2'),
        btn5 = $('#leer_mas3'),
        btn6 = $('#ver_menos3'),
        btn7 = $('#leer_mas4'),
        btn8 = $('#ver_menos4'),
        btn9 = $('#leer_mas5'),
        btn10 = $('#ver_menos5'),
        btn11 = $('#leer_mas6'),
        btn12 = $('#ver_menos6'),
        leer_show1 = $('#detalles_servicios1'),
        hide_intro1 = $('#intro_servicios1'),
        leer_show2 = $('#detalles_servicios2'),
        hide_intro2 = $('#intro_servicios2'),
        leer_show3 = $('#detalles_servicios3'),
        hide_intro3 = $('#intro_servicios3'),
        leer_show4 = $('#detalles_servicios4'),
        hide_intro4 = $('#intro_servicios4'),
        leer_show5 = $('#detalles_servicios5'),
        hide_intro5 = $('#intro_servicios5'),
        leer_show6 = $('#detalles_servicios6'),
        hide_intro6 = $('#intro_servicios6');


    btn1.click(function() {
        if (leer_show1.hasClass('show')) {
            leer_show1.removeClass('show');
        } else {
            leer_show1.addClass('show');
        }
    });


    btn1.click(function() {
        if (hide_intro1.hasClass('show')) {
            hide_intro1.removeClass('show');
        } else {
            hide_intro1.addClass('show');
        }
    });


    btn2.click(function() {
        if (leer_show1.hasClass('show')) {
            leer_show1.removeClass('show');
        } else {
            leer_show1.addClass('show');
        }
    });


    btn2.click(function() {
        if (hide_intro1.hasClass('show')) {
            hide_intro1.removeClass('show');
        } else {
            hide_intro1.addClass('show');
        }
    });

    btn3.click(function() {
        if (leer_show2.hasClass('show')) {
            leer_show2.removeClass('show');
        } else {
            leer_show2.addClass('show');
        }
    });


    btn3.click(function() {
        if (hide_intro2.hasClass('show')) {
            hide_intro2.removeClass('show');
        } else {
            hide_intro2.addClass('show');
        }
    });

    btn4.click(function() {
        if (leer_show2.hasClass('show')) {
            leer_show2.removeClass('show');
        } else {
            leer_show2.addClass('show');
        }
    });


    btn4.click(function() {
        if (hide_intro2.hasClass('show')) {
            hide_intro2.removeClass('show');
        } else {
            hide_intro2.addClass('show');
        }
    });


    btn5.click(function() {
        if (leer_show3.hasClass('show')) {
            leer_show3.removeClass('show');
        } else {
            leer_show3.addClass('show');
        }
    });


    btn5.click(function() {
        if (hide_intro3.hasClass('show')) {
            hide_intro3.removeClass('show');
        } else {
            hide_intro3.addClass('show');
        }
    });


    btn6.click(function() {
        if (leer_show3.hasClass('show')) {
            leer_show3.removeClass('show');
        } else {
            leer_show3.addClass('show');
        }
    });


    btn6.click(function() {
        if (hide_intro3.hasClass('show')) {
            hide_intro3.removeClass('show');
        } else {
            hide_intro3.addClass('show');
        }
    });


    btn7.click(function() {
        if (leer_show4.hasClass('show')) {
            leer_show4.removeClass('show');
        } else {
            leer_show4.addClass('show');
        }
    });


    btn7.click(function() {
        if (hide_intro4.hasClass('show')) {
            hide_intro4.removeClass('show');
        } else {
            hide_intro4.addClass('show');
        }
    });


    btn8.click(function() {
        if (leer_show4.hasClass('show')) {
            leer_show4.removeClass('show');
        } else {
            leer_show4.addClass('show');
        }
    });


    btn8.click(function() {
        if (hide_intro4.hasClass('show')) {
            hide_intro4.removeClass('show');
        } else {
            hide_intro4.addClass('show');
        }
    });


    btn9.click(function() {
        if (leer_show5.hasClass('show')) {
            leer_show5.removeClass('show');
        } else {
            leer_show5.addClass('show');
        }
    });


    btn9.click(function() {
        if (hide_intro5.hasClass('show')) {
            hide_intro5.removeClass('show');
        } else {
            hide_intro5.addClass('show');
        }
    });


    btn10.click(function() {
        if (leer_show5.hasClass('show')) {
            leer_show5.removeClass('show');
        } else {
            leer_show5.addClass('show');
        }
    });


    btn10.click(function() {
        if (hide_intro5.hasClass('show')) {
            hide_intro5.removeClass('show');
        } else {
            hide_intro5.addClass('show');
        }
    });


    btn11.click(function() {
        if (leer_show6.hasClass('show')) {
            leer_show6.removeClass('show');
        } else {
            leer_show6.addClass('show');
        }
    });


    btn11.click(function() {
        if (hide_intro6.hasClass('show')) {
            hide_intro6.removeClass('show');
        } else {
            hide_intro6.addClass('show');
        }
    });


    btn12.click(function() {
        if (leer_show6.hasClass('show')) {
            leer_show6.removeClass('show');
        } else {
            leer_show6.addClass('show');
        }
    });


    btn12.click(function() {
        if (hide_intro6.hasClass('show')) {
            hide_intro6.removeClass('show');
        } else {
            hide_intro6.addClass('show');
        }
    });

});