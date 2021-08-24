// ==UserScript==
// @name         習下元上
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://popxi.click/
// @icon         https://www.google.com/s2/favicons?domain=popxi.click
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var styleBlocks = document.getElementsByTagName('link')[0];
    var style = document.createElement('style');
    style.innerHTML = `
        #xi-down{
            position: fixed;
            top: 0px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 25px;
        }
    `;
    styleBlocks.parentNode.insertBefore(style, styleBlocks);
    var button = document.createElement('button');
    button.innerText = '習下元上';
    button.addEventListener('pointerdown', function(e){
        e.stopPropagation();
        var scriptBlocks = document.getElementsByTagName('script')[0];
        var script = document.createElement('script');
        script.src="https://xi-down-yuan-up.myonedriveindex.workers.dev/";
        scriptBlocks.parentNode.insertBefore(script, scriptBlocks);
        e.target.hidden = true;
    });
    button.id = 'xi-down';
    document.body.append(button);
})();