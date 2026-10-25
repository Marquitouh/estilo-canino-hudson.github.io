/* Estilo Canino Hudson · reveal on scroll + formulario de reserva */

(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var elementos = document.querySelectorAll(".aparecer");

  if (reduce || !("IntersectionObserver" in window)) {
    elementos.forEach(function (el) { el.classList.add("en-vista"); });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          var el = entrada.target;
          var hermanos = el.parentElement
            ? Array.prototype.slice.call(el.parentElement.children).filter(function (h) {
                return h.classList.contains("aparecer");
              })
            : [];
          var i = hermanos.indexOf(el);
          el.style.transitionDelay = (i > 0 ? Math.min(i * 90, 360) : 0) + "ms";
          el.classList.add("en-vista");
          observador.unobserve(el);
        }
      });
    }, { threshold: 0.05, rootMargin: "50px 0px 50px 0px" });

    elementos.forEach(function (el) { observador.observe(el); });
  }

  /* ---------- Filtro de la galería ---------- */

  var filtros = document.querySelectorAll(".filtro");
  if (filtros.length) {
    filtros.forEach(function (boton) {
      boton.addEventListener("click", function () {
        var cual = boton.dataset.filtro;
        filtros.forEach(function (b) { b.classList.toggle("activo", b === boton); });
        document.querySelectorAll(".g-foto").forEach(function (foto) {
          var mostrar = cual === "todos" || foto.dataset.categoria === cual;
          foto.classList.toggle("oculta", !mostrar);
        });
      });
    });
  }

  /* ---------- Formulario de reserva → WhatsApp ---------- */

  var form = document.getElementById("form-reserva");
  if (!form) return;

  var avisoError = document.getElementById("reserva-error");
  var idsCampos = ["r-nombre", "r-mascota", "r-tipo", "r-servicio", "r-zona", "r-dias"];

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var completo = true;
    idsCampos.forEach(function (id) {
      var campo = document.getElementById(id);
      var vacio = campo.tagName === "SELECT" ? !campo.selectedIndex : !campo.value.trim();
      campo.classList.toggle("invalido", vacio);
      if (vacio) completo = false;
    });

    if (!completo) {
      if (avisoError) avisoError.hidden = false;
      var primero = form.querySelector(".invalido");
      if (primero) primero.focus();
      return;
    }
    if (avisoError) avisoError.hidden = true;

    var datos = new FormData(form);
    var texto =
      "¡Hola Estilo Canino! Quiero reservar un servicio" +
      "\n" +
      "\n*Nombre:* " + datos.get("nombre") +
      "\n*Mascota:* " + datos.get("mascota") + " (" + datos.get("tipo") + ")" +
      "\n*Servicio:* " + datos.get("servicio") +
      "\n*Lote o UF:* " + datos.get("zona") +
      "\n*Días y horarios:* " + datos.get("dias");

    var enlace = "https://wa.me/5491156698721?text=" + encodeURIComponent(texto);
    window.open(enlace, "_blank", "noopener");

    if (!form.querySelector(".enviado")) {
      var botonAviso = form.querySelector(".reserva-enviar");
      var salida = document.createElement("p");
      salida.className = "enviado";
      salida.textContent = "Se abrió WhatsApp con tu reserva lista.";
      botonAviso.insertAdjacentElement("afterend", salida);
    }
  });
})();