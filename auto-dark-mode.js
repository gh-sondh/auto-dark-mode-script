// ==UserScript==
// @name        Auto Dark Mode
// @namespace   sondh/auto-dark-script
// @author      sondh
// @description Script auto change dark mode for Tinhte and Facebook
// @description:vi Script tự động bật chế độ tối cho Tinhte và Facebook
// @grant       none
// @match       *://tinhte.vn/*
// @match       *://*.facebook.com/*
// @version     1.0.1
// @homepage    https://github.com/gh-sondh/auto-dark-mode-script
// @supportURL  https://github.com/gh-sondh/auto-dark-mode-script/issues
// @run-at      document-idle
// ==/UserScript==

console.log('Auto Dark Mode init...');

const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

const switchMode = (darkMode) => {
    let darkClassName = '',
        lightClassName = '';
    const rootHtml = document.documentElement,
        currentHost = window.location.host;

    switch (currentHost) {
        case "tinhte.vn":
            darkClassName = "dark";
            lightClassName = "light";
            rootHtml.style.cssText = darkMode ? "--text-dark:#ffffff;--text-grey:#92abc8;--text-since:#8f9bb3;--text-light-2:#bab9b9;--button-light-text:#ffffff;--button-light:#31455f;--button-light-3:#213243;--border-light-2:#223243;--page-background:#0e161e;--light-grey-background:#0e161e;--gradient-background-1:linear-gradient(0deg, #223243 6.39%, #0f161e 72.37%, #0f161e 99.99%);--new-thread-header:#0e161e;--new-thread-body:#0e161e;--new-thread-footer:#0e161e;--thread-report-background:#0f171f;--thread-delete-background:#0f171f;--thread-event-background:#0f171f;--color-light-1:#213243;--color-light-0:#213243;--light-background:#213243;--light-background-2:#4b6e95;--light-background-3:#213243;--light-background-4:rgba(7,104,234,0.08);--light-background-5:rgba(7,104,234,0.08);--light-background-6:#213243;--light-background-7:#111c2e;--fact-slider-background:transparent;--border-light:#213243;--border-light-1:#213243;--border-thread-thumbnail:#0e161e;--color-accent-dark:#20c6bf;--hover-background:#0e161e;--box-shadow:transparent;--trending-threads-background:#070a0f;--post-background:#272D34;--thread-background:#0f1e2f;--dark-icon:#FFFFFF;--second-featured-threads-background:linear-gradient(180deg, #131629 35.46%, #0F161E 78.74%, #0F161E 96.86%);--footer-background:#0f161e;--footer-background-dark:#213243;--editor-control-background:#0f1e2f;--editor-control-text:#ffffff;--dropdown-control-background:#0f1e2f;--dropdown-control-background-hover:#213243;--dropdown-control-text:#ffffff;--dropdown-control-border:#0f1e2f;--scrollbar-track-bg:#192f46;--scrollbar-thumb-bg:#2c4865;--primary-text:#FFFFFF;--hover-primary-text:#3986EE;--secondary-text:#B7B9BC;--hover-secondary-text:#A0A1A6;--content-text:#B7B9BC;--content-bubble-text:#FFFFFF;--light-text:#E5E6ED;--trending-index-text:#F5F5F8;--primary-background:#0F161E;--grey-background:#272D34;--grey-darker-background:#272D34;--tinhte-creator-widget-background:#272D34;--white-background:#272D34;--context-menu-background:#272D34;--progress-bar-background:#3F454B;--widget-label-background:#3F454B;--header-menu-button:#3F454B;--hover-header-menu-button:#E6F0FD;--burger-button:#FFFFFF;--hover-burger-button:#0768EA;--secondary-button:#3F454B;--light-button:#043E8C;--text-on-light-button:#E6F0FD;--text-on-gradient-button:#FFFFFF;--primary-border:#3F454B;--secondary-border:#3F454B;--secondary-button-border:#3F454B;--blue-border:#0768EA;--primary-color:#3986EE;--text-on-primary-color:#FFFFFF;--tinhte-xe-color:#F5222D;--tinhte-audio-color:#EB2F96;--yt-background:#112A45;--yt-active-selection:#15395B;--input-background:#3F454B;" : "";
            break;

        default:
            darkClassName = "__fb-dark-mode";
            lightClassName = "__fb-light-mode";
            break;
    }

    rootHtml.classList.toggle(darkClassName, darkMode);
    rootHtml.classList.toggle(lightClassName, !darkMode);

    // Listener event System change style Dark mode
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        switchMode(e.matches);
    });
};

// init
setTimeout(() => {
    switchMode(isDarkMode);
}, 1000);