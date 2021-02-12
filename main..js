// import
    import { menuHamburguer } from "./menu de hamburguesa/js/menu_hamburguesa.js";
    import { digitalClock, alarm } from "./reloj digital/js/reloj_digital.js";
    import { moveBall, shortcuts } from "./eventos del teclado/js/eventos_del_teclado.js";
    import { countdown } from "./cuenta regresiva/js/cuenta_regresiva.js";
    import { scrollTopButton } from "./boton de scroll/js/boton_scroll.js";
    import { darkTheme } from "./tema dark - light/js/dark_theme.js";
    import { responsiveMedia } from "./responsive con javascript/js/responsive.js";
    import { responsiveTester } from "./responsive tester/js/responsive_tester.js";
    import { userDeviceInfo } from "./user agent/js/user_agent.js";
    import { networkStatus } from "./deteccion del estado de red/js/deteccion_red.js";
    import { webCam } from "./deteccion de la camara web/js/deteccion_camara.js";
    import { getGeolocation } from "./deteccion de la geolocalizacion/js/geolocalizacion.js";
    import { searchFilters } from "./flitros de busqueda/js/search_filter.js";
    import { draw } from "./sorteo digital/js/sorteo_digital.js";
    import { slider } from "./responsive slider/js/responsive_slider.js";
    import { scrollSpy } from "./ScrollSpy/js/scroll_spy.js";
    import { smartVideo } from "./video inteligente/js/video_inteligente.js";
    import { contactFormValidations } from "./validacion de formularios/js/validacion_formulario.js";
    import { speechReader } from "./narrador/js/narrador.js";

// variables
    const d = document;

// evento
    d.addEventListener('DOMContentLoaded', () => {

        // menu hamburguesa
            menuHamburguer(
                '.panel-btn', 
                '.panel', 
                '.menu a'
            );

        // reloj digital
            digitalClock(
                "#reloj", 
                "#activar-reloj", 
                "#desactivar-reloj"
            );
            alarm(
                "../assets/audio/alarma.mp3",
                "#activar-alarma",
                "#desactivar-alarma"
            );

        // cuenta regresiva
            countdown(
                "countdown",
                "Mar 02, 2021 10:00:00",
                "Feliz Cumpleaños amigo y docente digital 🤓"
            );

        // boton scroll
            scrollTopButton(
                ".scroll-top-btn"
            );

        // responsive media
            responsiveMedia(
                "gmaps",
                "(min-width: 1024px)",
                `<a href="https://goo.gl/maps/ckvPTUH2tAVbdnqn7" target="_blank">Ver Mapa</a>`,
                `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.499391653518!2d-79.54169689923006!3d-7.520378976268431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904d505b2b1b2acb%3A0xfac69f44b71e19b0!2sPu%C3%A9mape%2013800!5e0!3m2!1ses-419!2spe!4v1612885190273!5m2!1ses-419!2spe" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
            );
            responsiveMedia(
                "youtube",
                "(min-width: 1024px)",
                `<a href="https://youtu.be/6rqT8OP-yn0" target="_blank">Ver Video</a>`,
                `<iframe width="560" height="315" src="https://www.youtube.com/embed/6rqT8OP-yn0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            );

        // responsive tester
            responsiveTester(
                "responsive-tester"
            );

        // user device agent
            userDeviceInfo(
                "user-device"
            );

        // deteccion webcam
            webCam(
                "webcam"
            );

        // deteccion de la geolocalizacion
            getGeolocation(
                "geolocation"
            );

        // search filter
            searchFilters(
                ".card-filter",
                ".card"
            );

        // sortero digital
            draw(
                "#winner-btn",
                ".player"
            );

        // slider responsive
            slider();

        // scroll spy
            scrollSpy();

        // video inteligente
            smartVideo();

        // validacion formulario
            contactFormValidations();

    });
    d.addEventListener('keydown', (e) => {

        // eventos del teclado
            shortcuts(e);
            moveBall(
                e, 
                ".ball", 
                ".stage"
            );

    });

        // dark theme
            darkTheme(
                ".dark-theme-btn",
                "dark-mode"
            );

        // deteccion de red
            networkStatus();

        // narrador
            speechReader();