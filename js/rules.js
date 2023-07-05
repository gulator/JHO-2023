const referenceLinks = document.querySelectorAll("a.reference");

referenceLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // or 'end', 'center', 'nearest'
        inline: "nearest",
      });
    }
  });
});
