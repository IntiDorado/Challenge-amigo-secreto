// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Objetivo del archivo es crear una lista de mis amigos y que este asigne uno de ellos considerado como mi amigo secreto.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el elemento del campo de texto
    let campoNombre = document.getElementById('amigo');
    // Obtener el valor del campo y eliminar espacios en blanco
    let nombreAmigo = campoNombre.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido');
        return; // Salir de la función si está vacío
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de texto
    campoNombre.value = '';
    
    // Actualizar la visualización de la lista
    mostrarListaAmigos();
    
    // Limpiar cualquier resultado anterior de sorteo
    limpiarResultado();
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = '';
    
    // Recorrer el array de amigos y crear elementos de lista
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento li
        let elementoLista = document.createElement('li');
        // Asignar el nombre del amigo al texto del elemento
        elementoLista.textContent = amigos[i];
        // Agregar el elemento a la lista
        lista.appendChild(elementoLista);
    }
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    // Verificar que haya al menos 3 amigos en la lista
    if (amigos.length <= 2) {
        alert('No hay amigos suficientes en la lista.\nAgrega al menos 3 amigos para poder hacer el sorteo.');
        return; // Salir de la función si no hay amigos
    }
    
    // Generar un número aleatorio entre 0 y la longitud del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo seleccionado usando el índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado del sorteo
    mostrarResultado(amigoSorteado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(nombreSorteado) {
    // Obtener el elemento donde se mostrará el resultado
    let elementoResultado = document.getElementById('resultado');
    
    // Crear el mensaje de resultado
    let mensaje = 'El amigo secreto sorteado es: ' + nombreSorteado;
    
    // Mostrar el mensaje en el elemento
    elementoResultado.innerHTML = '<li>' + mensaje + '</li>';
}

// Función para limpiar el resultado anterior
function limpiarResultado() {
    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = '';
}

// Agregar funcionalidad para presionar Enter en el campo de texto
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el campo de texto
    let campoNombre = document.getElementById('amigo');
    
    // Agregar event listener para la tecla Enter
    campoNombre.addEventListener('keypress', function(evento) {
        // Verificar si se presionó la tecla Enter (código 13)
        if (evento.key === 'Enter') {
            // Llamar a la función agregarAmigo
            agregarAmigo();
        }
    });
});

// Función para reiniciar el juego del AmigoSecreto
function reiniciarJuego() {
    // Limpiar el array de amigos
    amigos = [];

    // Limpiar la lista de nombres que se muestra en el HTML
    mostrarListaAmigos(); 
    
    // Limpiar el resultado del sorteo, llamando a la función existente
    limpiarResultado();

    // Se ubica el cursor en el campo de entrada de texto para empezar  un nuevo juego.
    document.getElementById('amigo').focus();
}



