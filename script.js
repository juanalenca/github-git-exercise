document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");
    const originalText = h1.textContent;
    let excitementLevel = 10;

    setInterval(() => {
        excitementLevel = excitementLevel > 15 ? 5 : excitementLevel + 1;
        h1.textContent = originalText + "!".repeat(excitementLevel);

        if (Math.random() > 0.9) {
            alert("Too much excitement! Take a break.");
        }
    }, 1000);
});