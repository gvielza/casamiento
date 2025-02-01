function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  // Posición aleatoria dentro del contenedor
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px"; // Empieza desde abajo

  // Tamaño aleatorio
  const size = Math.random() * 10 + 20;
  heart.style.fontSize = size + "px";

  // Color aleatorio
  const colors = ["#ff4d4d", "#ff6699", "#ffcc00", "#66ccff", "#99ff99"];
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];

  // Animación
  heart.style.animationDuration = Math.random() * 3 + 5 + "s";

  document.getElementById("heart-container").appendChild(heart);

  setTimeout(() => {
      heart.remove();
  }, 4000);
}

// Generar corazones cada 300ms
setInterval(createHeart, 300);


//counter
(function(d, s, id) {
   var js, pjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return; js = d.createElement(s);
     js.id = id; js.src = "//www.tickcounter.com/static/js/loader.js"; pjs.parentNode.insertBefore(js, pjs); }(document, "script", "tickcounter-sdk"));