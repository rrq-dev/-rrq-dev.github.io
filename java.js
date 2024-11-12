// Event listener untuk tombol
document.getElementById("backButton").addEventListener("click", function () {
  const audio = document.getElementById("backgroundMusic");

  // Mainkan musik
  if (audio.paused) {
    audio.play();
  }

  // Tampilkan pesan cinta bertahap
  displayLoveMessages();

  // Mulai animasi bunga jatuh
  startFlowerAnimation();

  // Pesan cinta yang akan ditampilkan
  const messages = [
    "Ingat ga saat kamu ngechat aku duluan di ml?...",
    "Aku sempet kaget pas di chat ama cewe cantik...",
    "Pertama kali mabar sama kamu itu rasanya seneng banget tau...",
    "Apalagi pas pertama kali denger suara kamu...",
    "Terus lama kelamaan kita sering mabar on mic...",
    "Terus pindah ke tiktok abis itu ke wa kita jadi sering call an...",
    "Lama kelamaan aku jadi sadar kalau aku suka sama kamu...",
    "Pas dikasih pap pertama kali sama kamu itu aku kaget...",
    "Kok ada yaa cewe secantik iniii...",
    "Saat pacaran sama kamu hari-hari ku gapernah ngebosenin lagi...",
    "Aku paling suka saat kamu ngambek sama aku...",
    "Waktu kita berantem...",
    "Cerita sama akuu...",
    "Apalagi pas kita vc pertama kali...",
    "Tanpa kamu aku hampa tauu...",
    "Gaada yang bisa gantiin kamu di kehidupan akuu...",
    "I love youuu...",
    "Aku masih sayang bangett sama kamuu",
    "Semoga kamu bisa maafin kesalahan aku sebelumnya...",
    "Aku harap kita bisa balikann...",
  ];

  function displayLoveMessages() {
    const messageBox = document.getElementById("loveMessages");
    messageBox.classList.remove("hidden");
    let index = 0;

    const messageInterval = setInterval(() => {
      if (index < messages.length) {
        // Tentukan animasi yang digunakan secara bergantian
        const animationClasses = ["fade-in", "slide-in", "zoom-in"];
        const currentAnimation =
          animationClasses[index % animationClasses.length];

        // Set teks pesan
        const messageElement = document.getElementById("message");
        messageElement.innerText = messages[index];

        // Hapus kelas animasi sebelumnya dan tambahkan animasi baru
        messageElement.classList.remove("fade-in", "slide-in", "zoom-in");
        messageElement.classList.add(currentAnimation);

        index++;
      } else {
        clearInterval(messageInterval);
      }
    }, 10000); // Tampilkan pesan setiap 10 detik
  }

  // Fungsi untuk memulai animasi bunga jatuh
  function startFlowerAnimation() {
    setInterval(() => {
      const flower = document.createElement("div");
      flower.classList.add("flower");
      flower.innerHTML = "🌸";
      flower.style.left = `${Math.random() * 100}vw`;
      document.body.appendChild(flower);

      setTimeout(() => flower.remove(), 4000); // Hapus bunga setelah 4 detik
    }, 500); // Tambah bunga setiap 0.5 detik
  }
});
