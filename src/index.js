function displayLyrics(response) {
  new Typewriter("#aiAnswer", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 30,
  });
}

function generateLyrics(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#lyric-search");
  let apiKey = "66b4t441aodafc3797bfd80f9495a36b";
  let prompt = `Generate ONLY 4 lines of music lyrics for the theme: ${userInstructions.value}`;
  let context = `You are a musical lyric writer. Do NOT include a title. Format with basic HTML. Add '- SheCodes AI' wrapped in a <strong> element AFTER the lyrics.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayLyrics);

  let answerElement = document.querySelector("#aiAnswer");
  answerElement.classList.remove("hidden");

  new Typewriter("#aiAnswer", {
    strings: "⏳ Generating Music Lyrics...",
    autoStart: true,
    cursor: null,
    delay: 30,
    loop: true,
  });
}

let lyricFormElement = document.querySelector("#submit-button");
lyricFormElement.addEventListener("click", generateLyrics);
