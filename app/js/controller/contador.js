(function () {
    //function contador de experiencies
    this.contador = function () {
        //Variable de method
        var method = 'contador';
        //Array de datos de experiencia
        dataForm = { 'method': method };
        //Ajax
        $.ajax({
            type: "POST",
            data: dataForm,
            dataType: "JSON",
            url: "api/controllers/controller.php",
        }).done(function (data) {
            //Function de animación createTextNode
            function animationContador(data) {
                function scrollValues() {
                    //booleano para activar la animación del scrollValues
                    var validAnimation = false;
                    if (this.scrollY >= 1650 && this.scrollY <= 1680 && validAnimation === false) {
                        //booleano para desactivar la animación del scrollValues
                        validAnimation = true;
                        for (var i = 0; i < data.length; i++) {
                            //Variables con los div
                            var value1 = document.getElementById('value_experiences1');
                            var value2 = document.getElementById('value_experiences2');
                            var value3 = document.getElementById('value_experiences3');
                            var value4 = document.getElementById('value_experiences4');
                            //Variables con los valores de experiencia
                            var x1 = 0;
                            var x2 = 0;
                            var x3 = 0;
                            var x4 = 0;
                            years_experiences = data[i].years_experiences;
                            clientes_atendidos = data[i].clientes_atendidos;
                            casos_ganados = data[i].casos_ganados;
                            casos_litigados = data[i].casos_litigados;
                            //tempo animation years_experiences
                            var tempo1 = setInterval(() => {
                                value1.textContent = x1 += 1;
                                if (x1 == years_experiences) {
                                    clearInterval(tempo1);
                                }
                            }, 120);
                            //tempo animation clientes_atendidos
                            var tempo2 = setInterval(() => {
                                value2.textContent = x2 += 1;
                                if (x2 == clientes_atendidos) {
                                    clearInterval(tempo2);
                                }
                            }, 5);
                            //tempo animation casos_ganados
                            var tempo3 = setInterval(() => {
                                value3.textContent = x3 += 1;
                                if (x3 == casos_ganados) {
                                    clearInterval(tempo3);
                                }
                            }, 7);
                            //tempo animation casos_litigados
                            var tempo4 = setInterval(() => {
                                value4.textContent = x4 += 1;
                                if (x4 == casos_litigados) {
                                    clearInterval(tempo4);
                                }
                            }, 7);
                        }
                    }
                } window.addEventListener('scroll', scrollValues);
            } animationContador(data);
        })
    }();
})();