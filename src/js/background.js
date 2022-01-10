const callbackName = details => {
    console.log('onCompleted', details.type);
    if (details.type == 'image') chrome.webRequest.onCompleted.removeListener(callbackName);
};

chrome.webRequest.onCompleted.addListener(callbackName, {
    urls: ['<all_urls>']
});
