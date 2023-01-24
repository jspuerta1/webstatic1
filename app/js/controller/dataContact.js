(function () {
    //function para obtener la info de contacto
    this.infoContact = function () {
        //Variable de method
        var method = 'infoContacto';
        //Array de datos de experiencia
        dataForm = { 'method': method };
        //Ajax
        $.ajax({
            type: "POST",
            data: dataForm,
            dataType: "JSON",
            url: "api/controllers/controller.php",
        }).done(function (data) {
            // function de pintar lo datos de la DB
            function printDataContact(data) {
                for (var i = 0; i < data.length; i++) {
                    //variable del div de los iconsTop
                    var iconsTop = document.querySelectorAll('#iconTop');
                    var direccion = document.querySelector('#direccion');
                    var telefono = document.querySelectorAll('#telefono');
                    var correo = document.querySelectorAll('#correo');
                    //metodo para pintar la info de contacto
                    direccion.appendChild(document.createTextNode(data[i].direccion));
                    telefono[0].appendChild(document.createTextNode('+57 ' + data[i].telefono));
                    telefono[1].appendChild(document.createTextNode('+57 ' + data[i].telefono));
                    correo[0].appendChild(document.createTextNode(data[i].email));
                    correo[1].appendChild(document.createTextNode(data[i].email));
                    iconsTop[0].setAttribute('href', data[i].facebook);
                    iconsTop[1].setAttribute('href', data[i].instagram);
                    iconsTop[3].setAttribute('href', data[i].twitter);
                }
            } printDataContact(data);
        })
    }();
})();