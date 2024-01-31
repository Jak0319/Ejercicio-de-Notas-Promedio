 // JavaScript
    // Solicitar el nombre al usuario y mostrarlo dinámicamente
    var nombreUsuario = prompt("Ingrese su nombre");
    var nombreElemento = document.getElementById('nombre');
    if (nombreElemento) {
        nombreElemento.innerText = nombreUsuario || 'Nombre no ingresado';
    }

    // Información sobre la carrera 
    var nombreCarrera = prompt("Ingrese su carrera");
    var carreraElemento = document.getElementById('carrera');
    if (carreraElemento) {
        carreraElemento.innerText = nombreCarrera || 'Carrera no ingresada';
    }


  // Arreglo para almacenar las notas
  var notas = [];

  // Función para agregar una nueva nota a la tabla
  function agregarNota() {

    var nombreRamo = document.getElementById("nombreRamo").value;
    var area = document.getElementById("area").value;
    var nota = parseFloat(document.getElementById("nota").value);

    

    // Verificar si la nota es un número válido
    if (!isNaN(nota)) {
      // Agregar la nota al arreglo
      notas.push({ nombreRamo: nombreRamo, area: area, nota: nota });

      // Actualizar la tabla de notas
      actualizarTabla();

      // Calcular y mostrar el nuevo promedio
      calcularPromedio();
    } else {
      alert("Por favor, ingrese una nota válida.");
    }
  }

  // Función para actualizar la tabla de notas
  function actualizarTabla() {
    var tabla = document.getElementById("tablaNotas");

    // Limpiar la tabla
    tabla.innerHTML = "<tr><th>Nombre o Ramo</th><th>Sección o Módulo</th><th>Nota</tr>";

    // Llenar la tabla con las notas actuales
    for (var i = 0; i < notas.length; i++) {
      var fila = tabla.insertRow(-1); 
 
      var celdaNombreRamo = fila.insertCell(0);
      var celdasecciónoMódulo = fila.insertCell(1);
      var celdaNota = fila.insertCell(2);

      celdaNombreRamo.innerHTML = notas[i].nombreRamo;
      celdasecciónoMódulo.innerHTML = notas[i].area;
      celdaNota.innerHTML = notas[i].nota;

    }
  }

  // Función para calcular y mostrar el promedio
  function calcularPromedio() {
    var total = 0;

    for (var i = 0; i < notas.length; i++) {
      total += notas[i].nota;
    }
    var promedio = total / notas.length;

    // Actualizar el elemento HTML con el promedio
    document.getElementById("promedio").innerHTML = promedio.toFixed(2);

  }
  