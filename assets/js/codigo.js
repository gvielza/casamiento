function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Posición aleatoria
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px"; 

    // Tamaño aleatorio
    const size = Math.random() * 10 + 20;
    heart.style.fontSize = size + "px";

    // Color aleatorio
    const colors = ["#ff4d4d", "#ff6699", "#ffcc00", "#66ccff", "#99ff99"];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    // Duración de animación aleatoria
    heart.style.animationDuration = Math.random() * 3 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }

  setInterval(createHeart, 300);