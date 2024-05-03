function animateElement(elementId, startPos, stopPos, speed) {
    const elem = document.getElementById(elementId);
    let pos = startPos;
    let direction = 1; // 1 for moving down, -1 for moving up
    setInterval(frame, speed);
  
    function frame() {
      if (pos >= stopPos) {
        direction = -1; // Reverse direction when reaching or exceeding the stop position
      } else if (pos <= startPos) {
        direction = 1; // Reverse direction when reaching or going below the start position
      }
    
      pos += direction;
      elem.style.top = pos + "px";
    }
  }
  
  // Animate animate1 with specific settings
  animateElement("animate1", 150, 350, 10);
  
  // Animate animate2 with specific settings
  animateElement("animate2", 150, 350, 10);