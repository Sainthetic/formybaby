const PASSWORD = "Py0na0919";

const passwordScreen = document.getElementById("passwordScreen");
const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const errorMessage = document.getElementById("errorMessage");

const introScreen = document.getElementById("introScreen");
const enterBtn = document.getElementById("enterBtn");
const birthdayPage = document.getElementById("birthdayPage");
const heartsContainer = document.getElementById("hearts");

function unlock() {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === PASSWORD) {
    errorMessage.textContent = "";
    passwordScreen.classList.add("hidden");
    introScreen.classList.remove("hidden");
  } else {
    errorMessage.textContent = "Hmm... that's not the password 💙";
    passwordInput.classList.remove("shake");
    void passwordInput.offsetWidth;
    passwordInput.classList.add("shake");
    passwordInput.value = "";
    passwordInput.focus();
  }
}

unlockBtn.addEventListener("click", unlock);

passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    unlock();
  }
});

enterBtn.addEventListener("click", () => {
  introScreen.classList.add("hidden");
  birthdayPage.classList.remove("hidden");
  startHearts();
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.35 ? "♥" : "♡";

  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * 24}px`;
  heart.style.animationDuration = `${5 + Math.random() * 6}s`;
  heart.style.animationDelay = `${Math.random() * 2}s`;

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 13000);
}

function startHearts() {
  for (let i = 0; i < 14; i++) {
    setTimeout(createHeart, i * 180);
  }

  setInterval(createHeart, 650);
}

passwordInput.focus();
