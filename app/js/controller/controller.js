(function () {
    //function send form contact
    this.formContactSend = function () {
        //Variables de los inputs, para obtener los valores 
        var method = 'send';
        var nombres = document.getElementById('names').value;
        var telefono = document.getElementById('telefono').value;
        var email = document.getElementById('email').value;
        var descripcion = document.getElementById('descripcion').value;
        //Array de los datos del form contact
        dataForm = { 'method': method, 'nombres': nombres, 'telefono': telefono, 'email': email, 'descripcion': descripcion };
        //Ajax
        $.ajax({
            type: "POST",
            data: dataForm,
            dataType: "JSON",
            url: "api/controllers/controller.php",
        }).done(function (data) {
            console.log(data);
        })
    }
    //function contador de experiencies
    this.contador = function () {
        //Variables para imprimir los valores de experiencia
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
            // function de animación createTextNode
            function animateContador(data) {
                for (var i = 0; i < data.length; i++) {
                    //Variables con los div
                    var value1 = document.getElementById('value_experiences1');
                    var value2 = document.getElementById('value_experiences2');
                    var value3 = document.getElementById('value_experiences3');
                    //Variables con los valores de experiencia
                    var x1 = 0;
                    var x2 = 0;
                    var x3 = 0;
                    years_experiences = data[i].years_experiences;
                    clientes_atendidos = data[i].clientes_atendidos;
                    casos_ganados = data[i].casos_ganados;
                    //tempo animation years_experiences
                    var tempo1 = setInterval(() => {
                        value1.textContent = x1 += 1;
                        if (x1 == years_experiences) {
                            clearInterval(tempo1);
                        }
                    }, 100);
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
                    }, 5);
                }
            } animateContador(data);
        })
    }();
})();