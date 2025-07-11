document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navUl = document.querySelector('nav ul');
  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const tratamiento = document.getElementById('tratamiento').value.trim();
    const celular = document.getElementById('celular').value.trim();
    if (!nombre || !edad || !tratamiento || !celular) {
      alert("Por favor completa todos los campos.");
      return;
    }
    alert(`Gracias, ${nombre}. Hemos recibido tu registro.`);
    form.reset();
  });
  const testimonios = [
    "“El trato fue excelente y mi sonrisa ahora está perfecta.” – Monica T.",
    "“Nunca pensé que ir al dentista fuera tan agradable. ¡Gracias por todo!” – Renan Ruben.",
    "“Muy profesionales y atentos. Les recomiendo a todos mis amigos y familiares a visitarlos.”"
  ];
  const testimonioEl = document.getElementById('testimonio');
  let index = 0;
  setInterval(() => {
    index = (index + 1) % testimonios.length;
    testimonioEl.textContent = testimonios[index];
  }, 4000);
});