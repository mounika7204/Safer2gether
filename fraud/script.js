// Add event listeners to the buttons to toggle the panel visibility
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".accordion");
  
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  });
  