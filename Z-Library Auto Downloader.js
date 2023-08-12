// ==UserScript==
// @name         Z-Library Auto Downloader
// @namespace    your-namespace
// @version      1.0
// @description  Automatically downloads book details from Z-Library and closes the page.
// @author       gpt
// @match        https://zlibrary-africa.se/book/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to load
    window.addEventListener('load', function() {
        // Find the download button by class
        var downloadButton = document.querySelector('.btn.btn-primary.dlButton.addDownloadedBook');
        if (downloadButton) {
            // Get the download link from the button
            var downloadLink = downloadButton.getAttribute('href');

            // Create a hidden iframe
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';

            // Listen for the iframe's load event
            iframe.onload = function() {
                // Close the current page
                window.close();
            };

            // Set the download link as iframe's source
            iframe.src = downloadLink;
            document.body.appendChild(iframe);
        }
    });
})();
