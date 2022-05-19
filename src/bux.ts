console.log("bux.js loaded");

onReady(() => {
    let inputs = document.querySelectorAll("input");
    console.log("inputs", inputs);
});

function onReady(fn: EventListener) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
        return;
    }
    document.addEventListener("DOMContentLoaded", fn);
}