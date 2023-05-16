// Definimos un arreglo vacío para almacenar los contactos
let contactos = [];

// Obtenemos referencias a los elementos del formulario
const formulario = document.querySelector('#formulario');
const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputRut = document.querySelector('#rut');
const inputCorreo = document.querySelector('#correo');
const inputTelefono = document.querySelector('#telefono');
const btnGuardar = document.querySelector('#btnGuardar');
const btnEditar = document.querySelector('#btnEditar');
const btnMostrar = document.querySelector('#btnMostrar');
const btnBorrar = document.querySelector('#btnBorrar');

// Agregamos un evento al botón "Guardar"
btnGuardar.addEventListener('click', () => {
	// Creamos un objeto con los datos del contacto
	const contacto = {
		nombre: inputNombre.value,
		apellido: inputApellido.value,
		rut: inputRut.value,
		correo: inputCorreo.value,
		telefono: inputTelefono.value
	};

	// Agregamos el objeto al arreglo de contactos
	contactos.push(contacto);

	// Limpiamos los campos del formulario
	formulario.reset();
});

// Agregamos un evento al botón "Editar"
btnEditar.addEventListener('click', () => {
	// Obtenemos el índice del contacto a editar
	const indice = prompt('Ingrese el índice del contacto a editar:');

	// Obtenemos el contacto a editar
	const contacto = contactos[indice];

	// Si se encontró el contacto, llenamos el formulario con sus datos
	if (contacto) {
		inputNombre.value = contacto.nombre;
		inputApellido.value = contacto.apellido;
		inputRut.value = contacto.rut;
		inputCorreo.value = contacto.correo;
		inputTelefono.value = contacto.telefono;

		// Eliminamos el contacto del arreglo
		contactos.splice(indice, 1);
	}
});

// Agregamos un evento al botón "Mostrar"
btnMostrar.addEventListener('click', () => {
	// Creamos una variable para almacenar los datos de los contactos
	let datos = '';

	// Recorremos el arreglo de contactos y agregamos sus datos a la variable
	contactos.forEach((contacto, indice) => {
		datos += `Contacto ${indice}:\n`;
		datos += `Nombre: ${contacto.nombre}\n`;
		datos += `Apellido: ${contacto.apellido}\n`;
		datos += `RUT: ${contacto.rut}\n`;
		datos += `Correo electrónico: ${contacto.correo}\n`;
		datos += `Teléfono: ${contacto.telefono}\n\n`;
	});

	// Mostramos los datos de los contactos en una ventana de alerta
	alert(datos);
});

// Agregamos un evento al botón "Borrar"
btnBorrar.addEventListener('click', () => {
	// Obtenemos el índice del contacto a borrar
	const indice = prompt('Ingrese el índice del contacto a borrar:');

	// Eliminamos el contacto del arreglo
	contactos.splice(indice, 1);
});
