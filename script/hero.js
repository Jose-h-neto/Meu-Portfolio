export function initHeroTyping() {
  const titleEl = document.getElementById("typing-title");
  const subtitleEl = document.getElementById("typing-subtitle");

  if (!titleEl || !subtitleEl) return;

  titleEl.classList.add("typing");
  subtitleEl.classList.add("typing");

  const titleText = "Me chamo José Neto";

  const phrases = [
    "Desenvolvedor | HTML | CSS | JavaScript | PHP |",
    "| Next.js | React.js | Node.js | C# | Python |",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeTitle() {
    if (charIndex < titleText.length) {
      titleEl.textContent += titleText.charAt(charIndex);
      charIndex++;
      setTimeout(typeTitle, 100);
    } else {
      setTimeout(startTypingSubtitle, 800);
    }
  }

  function startTypingSubtitle() {
    charIndex = 0;
    typeSubtitle();
  }

  function typeSubtitle() {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && charIndex < currentPhrase.length) {
      subtitleEl.textContent += currentPhrase.charAt(charIndex);
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      subtitleEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeSubtitle, 1200);
        return;
      } else {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(typeSubtitle, isDeleting ? 40 : 80);
  }

  typeTitle();
}
