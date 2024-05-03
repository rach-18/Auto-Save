const textArea = document.querySelector("textarea");

textArea.addEventListener("input", () => {
    localStorage.setItem("textVal", textArea.value);
})

window.addEventListener("load", () => {
    textArea.value = localStorage.getItem("textVal");
})