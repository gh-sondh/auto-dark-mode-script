// ==UserScript==
// @name        Auto Dark Mode
// @namespace   sondh/auto-dark-script
// @author      sondh
// @description Script auto change dark mode for Tinhte and Facebook
// @description:vi Script tự động bật chế độ tối cho Tinhte và Facebook
// @grant       none
// @match       *://tinhte.vn/*
// @match       *://*.facebook.com/*
// @version     1.0
// @homepage    https://github.com/gh-sondh/auto-dark-mode-script
// @supportURL  https://github.com/gh-sondh/auto-dark-mode-script/issues
// @run-at      document-end
// ==/UserScript==

console.log('Auto Dark Mode init...');

const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

const switchMode = (mode) => {
    let className = '';
    const rootHtml = document.documentElement;
    const currentHost = window.location.host;

    switch (currentHost) {
        case "tinhte.vn":
            className = "dark";
            break;

        default:
            className = "__fb-dark-mode";
            break;
    }

    rootHtml.classList.toggle(className, mode);

    // Listener event System change style Dark mode
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        switchMode(e.matches);
    });
};

// init
switchMode(isDarkMode);