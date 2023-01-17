(function () {
    this.formContactSend = function () {
        //Variables de los inputs, para obtener los valores 
        var method = 'send';
        var nombres = document.getElementById('names').value;
        var telefono = document.getElementById('telefono').value;
        var email = document.getElementById('email').value;
        var descripcion = document.getElementById('descripcion').value;
        //Variable que almacena los valores del form contact
        dataForm = 'method=' + method + '&nombres=' + nombres + '&telefono=' + telefono + '&email=' + email + '&descripcion=' + descripcion;
        //Ajax
        $.ajax({
            type: "POST",
            url: "api/controllers/formContactCtrl.php",
            data: dataForm,
            dataType: "dataType",
        }).done(function(data){
            console.log(data);
        })
    }
})();