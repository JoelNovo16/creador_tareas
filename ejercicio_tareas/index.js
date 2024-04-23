$(function(){
    $("#crear_tarea").click(function(){
        $("#container").slideUp(1000);
    });
}); 

$(document).ready(function() {
    // Agrega un evento de clic al botón "Crear Tarea"
    $('#crear_tarea').click(function(event) {

        // Obtén los valores de los campos de entrada del formulario
        var nombreTarea = $('#nombre_tarea').val();
        var descripcionTarea = $('#descripcion').val();
        var fechaLimite = $('#fecha').val();

        // Crea un elemento para mostrar la tarea
        var nuevaTarea = $('<div class="tarea"><h2>' + nombreTarea + '</h2><p>' + descripcionTarea + '</p><p><strong>Fecha límite:</strong> ' + fechaLimite + '</p></div>');

        // Agrega la nueva tarea al contenedor de tareas
        $('#tareas_container').append(nuevaTarea);

        // Agregar botones de estado
        var botonHecho = $('<button class="estado_tarea">Hecho</button>');
        var botonNoHecho = $('<button class="estado_tarea">No Hecho</button>');
        var botonBorrar = $('<button class="borrar_tarea">Borrar</button>');

        // Agregar eventos a los botones
        botonHecho.click(function() {
            // Cambiar el estilo de la tarea para indicar que está hecha
            nuevaTarea.addClass('hecho');
            nuevaTarea.removeClass('no-hecho'); // Asegúrate de quitar la clase "no-hecho" si está presente
        });

        botonNoHecho.click(function() {
            // Cambiar el estilo de la tarea para indicar que no está hecha
            nuevaTarea.addClass('no-hecho');
            nuevaTarea.removeClass('hecho'); // Asegúrate de quitar la clase "hecho" si está presente
        });

        botonBorrar.click(function() {
            // Eliminar la tarea del contenedor
            nuevaTarea.remove();
        });

        // Agregar botones al contenedor de la tarea
        var contenedorBotones = $('<div class="botones-tarea"></div>'); 
        contenedorBotones.append(botonHecho, botonNoHecho, botonBorrar); 
        nuevaTarea.append(contenedorBotones); 

        // Agregar la nueva tarea al contenedor de tareas
        $('#tareas_container').append(nuevaTarea);
    });
});
