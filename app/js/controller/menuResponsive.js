(function () {
    //function show menuResponsive
    this.showMenu = function () {
        //divs de btn y menuResponsive
        var btn = $('#iconMenu');
        var menuResponsive = $('#mainav');
        //condcional para agregar la clase show
            if (menuResponsive.hasClass('show')) {
                btn.removeClass('fixed');
                menuResponsive.removeClass('show');
            } else {
                btn.addClass('fixed');
                menuResponsive.addClass('show');
            }
        //condcional de la tecla esc para quitar la clase show
        document.body.addEventListener("keydown", function (event) {
            if (event.keyCode === 27) {
                btn.removeClass('fixed');
                menuResponsive.removeClass('show');
            }
        });
    }
})();