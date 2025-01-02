
document.addEventListener("DOMContentLoaded", function () {
    const typerElement = document.getElementById("main");
    const cursor = document.getElementById("cursor");
  
    const words = typerElement.getAttribute("data-words").split(",");
    const delay = parseInt(typerElement.getAttribute("data-delay"));
    const deleteDelay = parseInt(typerElement.getAttribute("data-deleteDelay"));
    const colors = typerElement.getAttribute("data-colors").split(",");
  
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
  
    function type() {
      const currentWord = words[wordIndex];
      const currentColor = colors[wordIndex % colors.length];
      typerElement.style.color = currentColor;
  
      if (!deleting) {
        typerElement.textContent = currentWord.slice(0, charIndex++);
        if (charIndex > currentWord.length) {
          deleting = true;
          setTimeout(type, deleteDelay); // Задержка удал  текста
          return;
        }
      } else {
        typerElement.textContent = currentWord.slice(0, charIndex--);
        if (charIndex < 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length; // Переход
        }
      }
  
      setTimeout(type, delay);
    }
  
    type();
  });
  
  function toggleMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.menu');
    navToggle.classList.toggle('active');
    menu.classList.toggle('active');
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const notification = document.getElementById('notification');
  notification.classList.add('show');
  setTimeout(() => {
      notification.classList.remove('show');
      this.submit();
  }, 3000);
});
