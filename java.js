function showLoveAnimation() {
  const heartsContainer = document.getElementById("hearts");
  const photosContainer = document.getElementById("photos");

  // Generate hearts falling animation
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    heartsContainer.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  // Show photos with animation immediately after button is clicked
  photosContainer.classList.remove("hidden");
  photosContainer.style.animation = "fadeIn 1s ease";
}
