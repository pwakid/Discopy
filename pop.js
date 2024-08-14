document.getElementById('testBtn').addEventListener('click', () => {
  navigator.clipboard.readText().then(text => {
    alert('Clipboard content: ' + text);
    chrome.runtime.sendMessage({
      type: "clipboard",
      content: text
    });
  }).catch(err => {
    console.error('Failed to read clipboard contents: ', err);
  });
});
