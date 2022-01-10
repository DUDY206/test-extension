/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("/* popup.js\n *\n * This file initializes its scripts after the popup has loaded.\n *\n * It shows how to access global variables from background.js.\n * Note that getViews could be used instead to access other scripts.\n *\n * A port to the active tab is open to send messages to its content_script.js script.\n *\n */\n\n// Start the popup script, this could be anything from a simple script to a webapp\nconst initPopupScript = () => {\n    // Access the background window object\n    const backgroundWindow = chrome.extension.getBackgroundPage();\n    // Do anything with the exposed variables from background.js\n    console.log(backgroundWindow.sampleBackgroundGlobal);\n\n    // This port enables a long-lived connection to content_script.js\n    let port = null;\n\n    // Send messages to the open port\n    const sendPortMessage = message => port.postMessage(message);\n\n    // Find the current active tab\n    const getTab = () => new Promise(resolve => {\n        chrome.tabs.query({\n            active: true,\n            currentWindow: true\n        }, tabs => resolve(tabs[0]));\n    });\n\n    // Handle port messages\n    const messageHandler = message => {\n        console.log('popup.js - received message:', message);\n    };\n\n    // Find the current active tab, then open a port to it\n    getTab().then(tab => {\n        // Connects to tab port to enable communication with incontent_script.js\n        port = chrome.tabs.connect(tab.id, { name: 'chrome-extension-template' });\n        // Set up the message listener\n        port.onMessage.addListener(messageHandler);\n        // Send a test message to content_script.js\n        sendPortMessage('Message from popup!');\n    });\n};\n\n// Fire scripts after page has loaded\ndocument.addEventListener('DOMContentLoaded', initPopupScript);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvcG9wdXAuanM/MDIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwb3B1cC5qc1xuICpcbiAqIFRoaXMgZmlsZSBpbml0aWFsaXplcyBpdHMgc2NyaXB0cyBhZnRlciB0aGUgcG9wdXAgaGFzIGxvYWRlZC5cbiAqXG4gKiBJdCBzaG93cyBob3cgdG8gYWNjZXNzIGdsb2JhbCB2YXJpYWJsZXMgZnJvbSBiYWNrZ3JvdW5kLmpzLlxuICogTm90ZSB0aGF0IGdldFZpZXdzIGNvdWxkIGJlIHVzZWQgaW5zdGVhZCB0byBhY2Nlc3Mgb3RoZXIgc2NyaXB0cy5cbiAqXG4gKiBBIHBvcnQgdG8gdGhlIGFjdGl2ZSB0YWIgaXMgb3BlbiB0byBzZW5kIG1lc3NhZ2VzIHRvIGl0cyBjb250ZW50X3NjcmlwdC5qcyBzY3JpcHQuXG4gKlxuICovXG5cbi8vIFN0YXJ0IHRoZSBwb3B1cCBzY3JpcHQsIHRoaXMgY291bGQgYmUgYW55dGhpbmcgZnJvbSBhIHNpbXBsZSBzY3JpcHQgdG8gYSB3ZWJhcHBcbmNvbnN0IGluaXRQb3B1cFNjcmlwdCA9ICgpID0+IHtcbiAgICAvLyBBY2Nlc3MgdGhlIGJhY2tncm91bmQgd2luZG93IG9iamVjdFxuICAgIGNvbnN0IGJhY2tncm91bmRXaW5kb3cgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlKCk7XG4gICAgLy8gRG8gYW55dGhpbmcgd2l0aCB0aGUgZXhwb3NlZCB2YXJpYWJsZXMgZnJvbSBiYWNrZ3JvdW5kLmpzXG4gICAgY29uc29sZS5sb2coYmFja2dyb3VuZFdpbmRvdy5zYW1wbGVCYWNrZ3JvdW5kR2xvYmFsKTtcblxuICAgIC8vIFRoaXMgcG9ydCBlbmFibGVzIGEgbG9uZy1saXZlZCBjb25uZWN0aW9uIHRvIGNvbnRlbnRfc2NyaXB0LmpzXG4gICAgbGV0IHBvcnQgPSBudWxsO1xuXG4gICAgLy8gU2VuZCBtZXNzYWdlcyB0byB0aGUgb3BlbiBwb3J0XG4gICAgY29uc3Qgc2VuZFBvcnRNZXNzYWdlID0gbWVzc2FnZSA9PiBwb3J0LnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgLy8gRmluZCB0aGUgY3VycmVudCBhY3RpdmUgdGFiXG4gICAgY29uc3QgZ2V0VGFiID0gKCkgPT5cbiAgICAgICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBjaHJvbWUudGFicy5xdWVyeShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFdpbmRvdzogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFicyA9PiByZXNvbHZlKHRhYnNbMF0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgIC8vIEhhbmRsZSBwb3J0IG1lc3NhZ2VzXG4gICAgY29uc3QgbWVzc2FnZUhhbmRsZXIgPSBtZXNzYWdlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BvcHVwLmpzIC0gcmVjZWl2ZWQgbWVzc2FnZTonLCBtZXNzYWdlKTtcbiAgICB9O1xuXG4gICAgLy8gRmluZCB0aGUgY3VycmVudCBhY3RpdmUgdGFiLCB0aGVuIG9wZW4gYSBwb3J0IHRvIGl0XG4gICAgZ2V0VGFiKCkudGhlbih0YWIgPT4ge1xuICAgICAgICAvLyBDb25uZWN0cyB0byB0YWIgcG9ydCB0byBlbmFibGUgY29tbXVuaWNhdGlvbiB3aXRoIGluY29udGVudF9zY3JpcHQuanNcbiAgICAgICAgcG9ydCA9IGNocm9tZS50YWJzLmNvbm5lY3QodGFiLmlkLCB7IG5hbWU6ICdjaHJvbWUtZXh0ZW5zaW9uLXRlbXBsYXRlJyB9KTtcbiAgICAgICAgLy8gU2V0IHVwIHRoZSBtZXNzYWdlIGxpc3RlbmVyXG4gICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKG1lc3NhZ2VIYW5kbGVyKTtcbiAgICAgICAgLy8gU2VuZCBhIHRlc3QgbWVzc2FnZSB0byBjb250ZW50X3NjcmlwdC5qc1xuICAgICAgICBzZW5kUG9ydE1lc3NhZ2UoJ01lc3NhZ2UgZnJvbSBwb3B1cCEnKTtcbiAgICB9KTtcbn07XG5cbi8vIEZpcmUgc2NyaXB0cyBhZnRlciBwYWdlIGhhcyBsb2FkZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0UG9wdXBTY3JpcHQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9wb3B1cC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);