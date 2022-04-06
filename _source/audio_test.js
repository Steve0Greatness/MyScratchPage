window.onload = () => {
    const audio = document.querySelector("audio#Wii")
    if (!audio.paused) return;
    document.addEventListener("click", () => audio.play())
}