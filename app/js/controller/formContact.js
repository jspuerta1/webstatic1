(function () {
    //function send form contact
    this.formContactSend = function () {
        //Variables de los inputs, para obtener los valores 
        var method = 'send';
        var names = document.getElementById('namesGet').value;
        var telefono = document.getElementById('telefonoGet').value;
        var email = document.getElementById('emailGet').value;
        var descripcion = document.getElementById('descripcionGet').value;
        //Array de los datos del form contact
        dataForm = { 'method': method, 'nombres': names, 'telefono': telefono, 'email': email, 'descripcion': descripcion };
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
})();