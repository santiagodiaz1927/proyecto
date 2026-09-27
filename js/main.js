// ===== main.js =====
// Funciones básicas para la maqueta interactiva

document.addEventListener('DOMContentLoaded', () => {

  // Selecciona TODOS los formularios de cualquier página
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita que la página se recargue o redirija

      // Validación básica: revisa que los campos requeridos no estén vacíos
      const inputs = form.querySelectorAll('input[required]');
      let valido = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          valido = false;
          input.style.border = '2px solid red';
        } else {
          input.style.border = '1px solid #ccc';
        }
      });

      if (!valido) {
        alert('Por favor completa todos los campos obligatorios.');
        return;
      }

      // Validación extra: si es formulario de registro, revisa que las contraseñas coincidan
      const pass1 = form.querySelector('#password');
      const pass2 = form.querySelector('#password2');

      if (pass1 && pass2 && pass1.value !== pass2.value) {
        alert('Las contraseñas no coinciden.');
        return;
      }

      // Si todo está bien, mostramos mensaje simulado de éxito
      alert('¡Listo! (Esto es una maqueta, aquí se conectaría con el backend más adelante)');
      form.reset();
    });
  });

  // Botón "Solicitar este servicio" en servicio.html
  const botonSolicitar = document.querySelector('main button:not([type])');
  if (botonSolicitar && botonSolicitar.textContent.includes('Solicitar')) {
    botonSolicitar.addEventListener('click', () => {
      alert('Solicitud enviada. Podrás ver el estado en tu sección de Notificaciones.');
    });
  }

});