function showFullScreen(element) {
  const container = document.getElementById('fullScreenContainer');
  const fullScreenImage = document.getElementById('fullScreenImage');
  fullScreenImage.src = element.src;
  fullScreenImage.style.display = 'block';
  container.style.display = 'flex';
}

function hideFullScreen() {
  const container = document.getElementById('fullScreenContainer');
  container.style.display = 'none';
}
