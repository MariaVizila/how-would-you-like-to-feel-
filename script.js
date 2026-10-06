/* =========================
   ELEMENTS
========================= */

const mainScreen = document.getElementById("mainScreen");

const calmButton = document.getElementById("calmButton");
const nonchalantButton = document.getElementById("nonchalantButton");


/* =========================
   CALM
========================= */

calmButton.addEventListener("click", () => {

  mainScreen.innerHTML = `
    <h1>What emotion are you feeling?</h1>

    <p class="subtitle">
      Choose the option that best describes how you feel.
    </p>

    <div class="buttons">

      <button class="choice-button emotion-button">
        Sad
      </button>

      <button class="choice-button emotion-button">
        Depressed
      </button>

      <button class="choice-button emotion-button">
        Mad
      </button>

      <button class="choice-button emotion-button">
        Annoyed
      </button>

    </div>

    <button class="back-button" id="backButton">
      ← Back
    </button>
  `;

  document
    .getElementById("backButton")
    .addEventListener("click", showMainScreen);

});


/* =========================
   NONCHALANT
========================= */

nonchalantButton.addEventListener("click", () => {

  mainScreen.innerHTML = `
    <h1>Nonchalant</h1>

    <p class="subtitle">
      Stay relaxed. Don't overreact.
    </p>

    <div class="tip-container">

      <p id="tipText">
        Loading tip...
      </p>

    </div>

    <button class="back-button" id="backButton">
      ← Back
    </button>
  `;

  startNonchalantTips();

  document
    .getElementById("backButton")
    .addEventListener("click", showMainScreen);

});


/* =========================
   MAIN SCREEN
========================= */

function showMainScreen() {

  mainScreen.innerHTML = `
    <h1>How would you like to feel?</h1>

    <p class="subtitle">
      Choose an option below.
    </p>

    <div class="buttons">

      <button
        class="choice-button calm-button"
        id="calmButton">
        Calm
      </button>

      <button
        class="choice-button nonchalant-button"
        id="nonchalantButton">
        Nonchalant
      </button>

    </div>
  `;

  document
    .getElementById("calmButton")
    .addEventListener("click", showCalm);

  document
    .getElementById("nonchalantButton")
    .addEventListener("click", showNonchalant);
}


/* =========================
   CALM SCREEN
========================= */

function showCalm() {

  mainScreen.innerHTML = `
    <h1>What emotion are you feeling?</h1>

    <p class="subtitle">
      Choose the option that best describes how you feel.
    </p>

    <div class="buttons">

      <button class="choice-button emotion-button">
        Sad
      </button>

      <button class="choice-button emotion-button">
        Depressed
      </button>

      <button class="choice-button emotion-button">
        Mad
      </button>

      <button class="choice-button emotion-button">
        Annoyed
      </button>

    </div>

    <button class="back-button" id="backButton">
      ← Back
    </button>
  `;

  document
    .getElementById("backButton")
    .addEventListener("click", showMainScreen);
}


/* =========================
   NONCHALANT SCREEN
========================= */

function showNonchalant() {

  mainScreen.innerHTML = `
    <h1>Nonchalant</h1>

    <p class="subtitle">
      Stay relaxed. Don't overreact.
    </p>

    <div class="tip-container">

      <p id="tipText">
        Loading tip...
      </p>

    </div>

    <button class="back-button" id="backButton">
      ← Back
    </button>
  `;

  startNonchalantTips();

  document
    .getElementById("backButton")
    .addEventListener("click", showMainScreen);
}


/* =========================
   NONCHALANT TIPS
========================= */

function startNonchalantTips() {

  const tips = [
    "Take a moment before responding.",
    "You don't have to react to everything.",
    "Keep your responses simple.",
    "Stay focused on what you're doing.",
    "Don't rush to explain yourself.",
    "Listen before you respond.",
    "Keep your tone relaxed.",
    "It's okay to let small things go."
  ];

  let tipIndex = Math.floor(Math.random() * tips.length);

  const tipText = document.getElementById("tipText");

  function showTip() {

    tipText.classList.remove("tip-visible");

    setTimeout(() => {

      tipText.textContent = tips[tipIndex];

      tipText.classList.add("tip-visible");

      tipIndex++;

      if (tipIndex >= tips.length) {
        tipIndex = 0;
      }

    }, 250);

  }

  showTip();

  setInterval(showTip, 4000);
}
