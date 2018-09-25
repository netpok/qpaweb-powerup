// ==UserScript==
// @name         QpaWeb PowerUp
// @namespace    https://github.com/netpok/qpaweb-powerup
// @version      0.1
// @description  mert legalább annyira szar mint a neptun
// @author       netpok
// @match        https://qpa.sch.bme.hu/*
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

(function () {
    $('body').bind("DOMSubtreeModified",function(e){
        if(/riddles\/[0-9]+/.test(location.href)){
            var input=$('input');
            if(input.length && !$._data(input[0],'events')){
                input.keyup(function(f){
                    if(f.which == 13){
                        $('.btn').click();
                    }
                });
                input.focus();
            }
        }
    });
})();
