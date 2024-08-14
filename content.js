document.addEventListener('copy', () => {
    navigator.clipboard.readText().then(text => {
      chrome.runtime.sendMessage({
        type: "clipboard",
        content: text
      });
    }).catch(err => {
      console.error('Failed to read clipboard contents: ', err);
    });
  });
  