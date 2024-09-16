// When the button is clicked, send a message to the content script
document.getElementById("toggle-background").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: toggleBackground,
    });
  });
});

// This function will be executed in the context of the webpage
function toggleBackground() {
  document.body.classList.toggle("toggle-styles");
}
