// Floating Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const floatingMenu = document.querySelector('.floating-menu');
  const toggleButton = document.querySelector('.floating-menu-toggle');
  
  toggleButton.addEventListener('click', function() {
    floatingMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!floatingMenu.contains(event.target)) {
      floatingMenu.classList.remove('active');
    }
  });
}); 