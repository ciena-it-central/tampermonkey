// ==UserScript==
// @name         Central JIRA Links
// @namespace    https://github.com/ciena-it-central
// @version      0.1
// @description  Replace BPCC-X text in PR bodies with links
// @author       pplummer@ciena.com
// @match        https://github.com/ciena-it-central/*/pull/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const prBody = document.querySelector('.comment-body')
  const nonLinks = prBody.querySelectorAll(':not(a)')
  for (const el of nonLinks) {
    if (el.childNodes.length > 1) {
      continue // only concerned with leaf nodes, which contain only #text node
    }
    el.innerHTML = el.innerHTML.replaceAll(/(BPCC-[0-9]+)/g, '<a href="https://agile-jira.ciena.com/browse/$1">$1</a>')
  }
})();
