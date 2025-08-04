// Handle browser action click
chrome.browserAction.onClicked.addListener(function(tab) {
  openInPureMd(tab.url);
});

// Handle keyboard shortcut
chrome.commands.onCommand.addListener(function(command) {
  if (command === "open-pure-md") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0]) {
        openInPureMd(tabs[0].url);
      }
    });
  }
});

// Function to open URL in pure.md
function openInPureMd(url) {
  if (url) {
    const pureMdUrl = `https://pure.md/${url}`;
    chrome.tabs.create({url: pureMdUrl});
  }
}
