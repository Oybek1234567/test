const toggle = document.querySelector('#toggle');
const background = document.querySelector('.background');

// Add an event listener to the toggle button
toggle.addEventListener('change', () => {
  // Check if the toggle button is checked
  if (toggle.checked) {
    // Switch to dark mode
    document.documentElement.classList.add('dark-mode');

    // Animate the background color change
    background.style.backgroundColor = '#000';
    background.classList.add('fade-in');

    // Wait for the animation to finish before removing the fade-in class
    setTimeout(() => {
      background.classList.remove('fade-in');
    }, 500);
  } else {
    // Switch to light mode
    document.documentElement.classList.remove('dark-mode');

    // Animate the background color change
    background.style.backgroundColor = '#fff';
    background.classList.add('fade-out');

    // Wait for the animation to finish before removing the fade-out class
    setTimeout(() => {
      background.classList.remove('fade-out');
    }, 500);
  }
});