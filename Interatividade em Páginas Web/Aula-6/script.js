document.addEventListener('DOMContentLoaded', function() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let currentIndex = 0;
    let isRainbowOn = false;
  
    const boxes = document.querySelectorAll('.box');
    const toggleButton = document.getElementById('toggleButton');
  
    function toggleRainbow() {
      if (!isRainbowOn) {
        isRainbowOn = true;
        toggleButton.textContent = 'Alternar cores';
        for (let i = 0; i < boxes.length; i++) {
          const colorIndex = (currentIndex + i) % colors.length;
          boxes[i].style.backgroundColor = colors[colorIndex];
        }
      } else {
        currentIndex = (currentIndex - 1 + colors.length) % colors.length;
        for (let i = 0; i < boxes.length; i++) {
          const colorIndex = (currentIndex + i) % colors.length;
          boxes[i].style.backgroundColor = colors[colorIndex];
        }
        if (currentIndex === 0) {
          isRainbowOn = false;
          toggleButton.textContent = 'Desligar arco-íris';
        }
      }
    }
  
    toggleButton.addEventListener('click', toggleRainbow);
  });