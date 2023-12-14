function generateLyrics(event) {
  event.preventDefault();
  new Typewriter("#aiAnswer", {
    strings: "AI Lyrics inserted here",
    autoStart: true,
    cursor: null,
    delay: 50,
  });
}

let lyricFormElement = document.querySelector("#submit-button");
lyricFormElement.addEventListener("click", generateLyrics);
