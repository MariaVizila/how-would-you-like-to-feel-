/* =========================
   ELEMENTS
========================= */

const mainScreen = document.getElementById("mainScreen");


/* =========================
   CALM RESPONSES
========================= */

const calmResponses = {

  Sad: {
    title: "You're feeling sad.",
    message:
      "Give yourself a moment. It's okay to feel sad. Take a few slow breaths, relax your shoulders, and focus on getting through one moment at a time."
  },

  Depressed: {
    title: "You're feeling depressed.",
    message:
      "You don't have to fix everything at once. Try focusing on one small thing you can do right now, such as getting some water, sitting somewhere comfortable, or talking to someone you trust."
  },

  Mad: {
    title: "You're feeling mad.",
    message:
      "Pause before reacting. Take a few slow breaths and give yourself some space from whatever is making you angry. You can decide what to do after you've had a moment to cool down."
  },

  Annoyed: {
    title: "You're feeling annoyed.",
    message:
      "Take a step back from the situation if you can. A short pause can make it easier to decide whether something is worth your attention."
  }

};


/* =========================
   NONCHALANT TIPS
========================= */

const nonchalantTips = [

  "Take a moment before responding.",

  "You don't have to react to everything.",

  "Keep your responses simple.",

  "Stay focused on what you're doing.",

  "Don't rush to explain yourself.",

  "Listen before you respond.",

  "Keep your tone relaxed.",

  "Let small things go when they aren't worth your energy.",

  "You don't always need the last word.",

  "Pause instead of immediately reacting.",

  "Stay comfortable with silence.",

  "Don't let someone else's reaction control yours.",

  "Think first, then respond.",

  "Keep your attention on what actually matters.",

  "Not every situation needs a big response.",

  "Stay relaxed when plans change.",

  "Avoid turning a small issue into a bigger one.",

  "Be confident without needing to prove yourself.",

  "If something isn't important, don't give it unnecessary attention.",

  "Keep doing what you were already doing."

];


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

      <button class="choice-button emotion-button" data-emotion="Sad">
        Sad
      </button>

      <button class="choice-button emotion-button" data-emotion="Depressed">
        Depressed
      </button>

      <button class="choice-button emotion-button" data-emotion="Mad">
        Mad
      </button>

      <button class="choice-button emotion-button" data-emotion="Annoyed">
        Annoyed
      </button>

    </div>

    <button class="back-button" id="backButton">
      ← Back
    </button>
  `;

  document.querySelectorAll(".emotion-button").forEach(button => {

    button.addEventListener("click", () => {

      const emotion = button.dataset.emotion;

      showCalmResponse(emotion);

    });

  });

  document
    .getElementById("backButton")
    .addEventListener("click", showMainScreen);
}


/* =========================
   CALM RESPONSE
========================= */

function showCalmResponse(emotion) {

  const response = calmResponses[emotion];

  mainScreen.innerHTML = `
    <h1>${response.title}</h1>

    <div class="response-container">

      <p class="response-text">
        ${response.message}
      </p>

    </div>

    <button class="back-button" id="emotionBackButton">
      ← Choose another emotion
    </button>

    <button class="back-button" id="homeButton">
      ← Start over
    </button>
  `;

  document
    .getElementById("emotionBackButton")
    .addEventListener("click", showCalm);

  document
    .getElementById("homeButton")
    .addEventListener("click", showMainScreen);
}


/* =========================
   NONCHALANT SCREEN
========================= */

function showNonchalant() {

  mainScreen.innerHTML = `
    <h1>Nonchalant</h1>

    <p class="subtitle">
      Here are 5 tips for staying relaxed.
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
   RANDOMIZE TIPS
========================= */

function shuffleArray(array) {

  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {

    const randomIndex =
      Math.floor(Math.random() * (i + 1));

    [
      shuffled[i],
      shuffled[randomIndex]
    ] =
    [
      shuffled[randomIndex],
      shuffled[i]
    ];
  }

  return shuffled;
}


/* =========================
   SHOW 5 DIFFERENT TIPS
========================= */

function startNonchalantTips() {

  const tipText =
    document.getElementById("tipText");

  /*
   * Pick 5 unique tips for this session.
   */

  const selectedTips =
    shuffleArray(nonchalantTips).slice(0, 5);

  let tipIndex = 0;


  function showTip() {

    tipText.classList.remove("tip-visible");

    setTimeout(() => {

      tipText.textContent =
        selectedTips[tipIndex];

      tipText.classList.add("tip-visible");

      tipIndex++;

    }, 250);

  }


  showTip();


  /*
   * Change the tip every 4 seconds.
   */

  const tipInterval =
    setInterval(() => {

      if (tipIndex >= selectedTips.length) {

        clearInterval(tipInterval);

        return;

      }

      showTip();

    }, 4000);
}


/* =========================
   START APP
========================= */

showMainScreen();
