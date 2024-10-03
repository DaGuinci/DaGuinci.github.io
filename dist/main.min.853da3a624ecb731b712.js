/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_swipe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global_swipe.js */ \"./src/scripts/global_swipe.js\");\n/* harmony import */ var _design_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./design.js */ \"./src/scripts/design.js\");\n/* harmony import */ var _skills_carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills_carousel.js */ \"./src/scripts/skills_carousel.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.js */ \"./src/scripts/projects.js\");\n/* harmony import */ var _skills_texts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills_texts.js */ \"./src/scripts/skills_texts.js\");\n\n\n\n\n\n(0,_skills_carousel_js__WEBPACK_IMPORTED_MODULE_2__.skills_carousel)();\n(0,_design_js__WEBPACK_IMPORTED_MODULE_1__.design)(), window.onload = [(0,_projects_js__WEBPACK_IMPORTED_MODULE_3__.project_slide)(), (0,_skills_texts_js__WEBPACK_IMPORTED_MODULE_4__.skills_texts)()];\n(0,_skills_texts_js__WEBPACK_IMPORTED_MODULE_4__.skills_texts)();\n\n//# sourceURL=webpack://daguinci.github.io/./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/design.js":
/*!*******************************!*\
  !*** ./src/scripts/design.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   design: () => (/* binding */ design)\n/* harmony export */ });\n// modifier la heuteur des design en fonction du scroll vertical\nfunction design() {\n  document.addEventListener('DOMContentLoaded', function () {\n    // select all design children\n    const designContainer = document.querySelector('.designContainer');\n    const designs = designContainer.querySelectorAll('div');\n    // get 100vh value\n    const heightLimit = 30;\n    window.addEventListener('scroll', function () {\n      const scroll = window.scrollY;\n      if (scroll >= heightLimit) {\n        for (let i = 0; i < designs.length; i++) {\n          // designs[i].style.height = '10vh';\n          designs[i].classList.add('small');\n        }\n      } else {\n        for (let i = 0; i < designs.length; i++) {\n          // designs[i].style.height = '25vh';\n          designs[i].classList.remove('small');\n        }\n      }\n    });\n  });\n}\n;\n\n//# sourceURL=webpack://daguinci.github.io/./src/scripts/design.js?");

/***/ }),

/***/ "./src/scripts/global_swipe.js":
/*!*************************************!*\
  !*** ./src/scripts/global_swipe.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   global_swipe: () => (/* binding */ global_swipe)\n/* harmony export */ });\nfunction global_swipe() {\n  console.log('global_swipe.js is working');\n  const sections = document.querySelectorAll('section');\n  const body = document.querySelector('body');\n  let active = 0;\n  function downSwipe() {\n    if (active < sections.length - 1) {\n      active++;\n      window.scroll({\n        top: sections[active].offsetTop,\n        behavior: 'smooth'\n      });\n\n      // case of broswer change window size\n\n      // setTimeout(() => {\n      //     window.scroll(\n      //         {\n      //             top: sections[active].offsetTop,\n      //             behavior: 'smooth'\n      //         }\n      //     );\n      // }, 250);\n    }\n  }\n  function upSwipe() {\n    if (active > 0) {\n      active--;\n      window.scroll({\n        top: sections[active].offsetTop,\n        behavior: 'smooth'\n      });\n\n      // case of brower change window size\n\n      // setTimeout(() => {\n      //     window.scroll(\n      //         {\n      //             top: sections[active].offsetTop,\n      //             behavior: 'smooth'\n      //         }\n      //     );\n      // }, 250);\n    }\n  }\n  let touchstartX = 0;\n  let touchendX = 0;\n  let touchstartY = 0;\n  let touchendY = 0;\n  function checkDirection() {\n    let changeX = touchendX - touchstartX;\n    let changeY = touchendY - touchstartY;\n    let absoluteChangeX = Math.abs(changeX);\n    let absoluteChangeY = Math.abs(changeY);\n\n    // check if it's a horizontal swipe\n    if (absoluteChangeX > absoluteChangeY) {\n      return 'horizontal';\n    }\n    if (touchendY > touchstartY) {\n      return 'up';\n    } else if (touchendY < touchstartY) {\n      return 'down';\n    } else {\n      return 'click';\n    }\n  }\n  window.addEventListener('touchstart', e => {\n    touchstartX = e.changedTouches[0].screenX;\n    touchstartY = e.changedTouches[0].screenY;\n  });\n  window.addEventListener('touchend', e => {\n    e.preventDefault();\n    touchendX = e.changedTouches[0].screenX;\n    touchendY = e.changedTouches[0].screenY;\n    let direction = checkDirection();\n    if (direction === 'down') {\n      downSwipe();\n    } else if (direction === 'up') {\n      upSwipe();\n    }\n  });\n}\n\n//# sourceURL=webpack://daguinci.github.io/./src/scripts/global_swipe.js?");

/***/ }),

/***/ "./src/scripts/projects.js":
/*!*********************************!*\
  !*** ./src/scripts/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project_slide: () => (/* binding */ project_slide)\n/* harmony export */ });\nfunction project_slide() {\n  const slider = document.querySelector('.projects_slider');\n  const content = slider.querySelector('.projects_content');\n  const contentPadding = parseInt(window.getComputedStyle(content).paddingRight);\n  const slides = slider.querySelectorAll('.project');\n  let active = 0;\n  let translate = 0;\n  function clickSwipe() {\n    if (active === slides.length - 1) {\n      active = 0;\n    } else {\n      active++;\n    }\n    let targetOffset = slides[active].offsetLeft;\n    translate = targetOffset + contentPadding;\n    content.style.transform = 'translate(' + -translate + 'px, 0)';\n  }\n  function rightSwipe() {\n    if (active < slides.length - 1) {\n      active++;\n      let targetOffset = slides[active].offsetLeft;\n      translate = targetOffset + contentPadding;\n      content.style.transform = 'translate(' + -translate + 'px, 0)';\n    }\n  }\n  function leftSwipe() {\n    if (active > 0) {\n      active--;\n      let targetOffset = slides[active].offsetLeft;\n      translate = targetOffset + contentPadding;\n      content.style.transform = 'translate(' + -translate + 'px, 0)';\n    }\n  }\n  let touchstartX = 0;\n  let touchendX = 0;\n  let touchstartY = 0;\n  let touchendY = 0;\n  function checkDirection() {\n    let changeX = touchendX - touchstartX;\n    let changeY = touchendY - touchstartY;\n    let absoluteChangeX = Math.abs(changeX);\n    let absoluteChangeY = Math.abs(changeY);\n\n    // chack if it's a vertical swipe\n    if (absoluteChangeX < absoluteChangeY) {\n      return 'vertical';\n    }\n    if (changeX > 0) {\n      return 'left';\n    } else if (changeX < 0) {\n      return 'right';\n    } else {\n      return 'click';\n    }\n  }\n  slider.addEventListener('touchstart', e => {\n    touchstartX = e.changedTouches[0].screenX;\n    touchstartY = e.changedTouches[0].screenY;\n  });\n  slider.addEventListener('touchend', e => {\n    touchendX = e.changedTouches[0].screenX;\n    touchendY = e.changedTouches[0].screenY;\n    let direction = checkDirection();\n    if (direction === 'right') {\n      rightSwipe();\n    } else if (direction === 'left') {\n      leftSwipe();\n    } else if (direction === 'click') {\n      clickSwipe();\n    }\n  });\n\n  // listen click event\n  slider.addEventListener('click', e => {\n    if (e.pointerType === 'mouse') {\n      clickSwipe();\n    }\n  });\n}\n\n//# sourceURL=webpack://daguinci.github.io/./src/scripts/projects.js?");

/***/ }),

/***/ "./src/scripts/skills_carousel.js":
/*!****************************************!*\
  !*** ./src/scripts/skills_carousel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   skills_carousel: () => (/* binding */ skills_carousel)\n/* harmony export */ });\n// Faire défiler les skills\n\nfunction skills_carousel() {\n  const containers = document.querySelectorAll('.skills .scroll_box');\n  function scroll_skills() {\n    containers.forEach(container => {\n      let skills = container.querySelectorAll('.skill');\n\n      // si les skills sont plus larges que le container, les faire défiler\n      let totalWidth = 0;\n      // get container gap\n      let gap = window.getComputedStyle(container).gap;\n      gap = parseInt(gap);\n      for (let i = 0; i < skills.length; i++) {\n        if (i < skills.length - 1) {\n          totalWidth += skills[i].offsetWidth + gap;\n        } else {\n          totalWidth += skills[i].offsetWidth;\n        }\n      }\n      let containerWidth = container.offsetWidth;\n      if (totalWidth > containerWidth) {\n        // faire défiler les skills de gauche à droite\n        let offset = 0;\n        let scroll = 0;\n        function scrollRight() {\n          offset += 2;\n          container.scrollTo(offset, 0, 'smooth');\n          scroll = window.requestAnimationFrame(scrollRight);\n          if (offset >= totalWidth) {\n            window.cancelAnimationFrame(scroll);\n            scrollLeft();\n          }\n        }\n        function scrollLeft() {\n          offset -= 2;\n          container.scrollTo(offset, 0);\n          scroll = window.requestAnimationFrame(scrollLeft);\n          if (offset <= 0) {\n            window.cancelAnimationFrame(scroll);\n            // wait 1 second before scrolling right again\n            setTimeout(() => {\n              scrollRight();\n            }, 1000);\n          }\n        }\n        scrollRight();\n      }\n    });\n  }\n  setTimeout(() => {\n    scroll_skills();\n  }, 1000);\n}\n\n//# sourceURL=webpack://daguinci.github.io/./src/scripts/skills_carousel.js?");

/***/ }),

/***/ "./src/scripts/skills_texts.js":
/*!*************************************!*\
  !*** ./src/scripts/skills_texts.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   skills_texts: () => (/* binding */ skills_texts)\n/* harmony export */ });\nfunction skills_texts() {\n  const skillsSection = document.querySelector('.skills');\n  const skills = skillsSection.querySelectorAll('.text > .skill');\n  const heightLimitTop = skillsSection.offsetTop - window.innerHeight * 0.1;\n  const heightLimitBottom = heightLimitTop + skillsSection.offsetHeight;\n  function showSkillsTexts() {\n    setTimeout(() => {\n      let delay = 0;\n      skills.forEach(skill => {\n        // set transition property\n        skill.style.transition = `all .5s ${delay}s ease-in-out`;\n        skill.style.opacity = 1;\n        // change skill letter spacing property\n        skill.style.letterSpacing = '0.1em';\n        delay += 0.2;\n      });\n    }, 500);\n  }\n  window.addEventListener('scroll', function () {\n    const scroll = window.scrollY;\n    if (heightLimitTop < scroll && scroll < heightLimitBottom) {\n      showSkillsTexts();\n    } else {\n      skills.forEach(skill => {\n        skill.style.transition = `all 0s ease-in-out`;\n        skill.style.opacity = 0;\n        skill.style.letterSpacing = '-0.5em';\n      });\n    }\n  });\n}\n\n//# sourceURL=webpack://daguinci.github.io/./src/scripts/skills_texts.js?");

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nexpected \\\"{\\\".\\n\\u001b[34m   ╷\\u001b[0m\\n\\u001b[34m41 │\\u001b[0m                 &::\\u001b[31m\\u001b[0m\\n\\u001b[34m   │\\u001b[0m \\u001b[31m                   ^\\u001b[0m\\n\\u001b[34m   ╵\\u001b[0m\\n  src/styles/partials/_skills.scss 41:20  @import\\n  src/styles/app.scss 5:9                 root stylesheet\\n    at tryRunOrWebpackError (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/HookWebpackError.js:86:9)\\n    at __webpack_require_module__ (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5276:12)\\n    at __webpack_require__ (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5233:18)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5305:20\\n    at symbolIterator (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3485:9)\\n    at done (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3527:9)\\n    at Hook.eval [as callAsync] (eval at create (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/tapable/lib/Hook.js:18:14)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5211:43\\n    at symbolIterator (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3482:9)\\n    at timesSync (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3463:5)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5173:16\\n    at symbolIterator (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3485:9)\\n    at timesSync (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3463:5)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5141:15\\n    at symbolIterator (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3485:9)\\n    at done (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3527:9)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5087:8\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:3518:6\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/HookWebpackError.js:67:2\\n    at Hook.eval [as callAsync] (eval at create (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Cache.store (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Cache.js:111:20)\\n    at ItemCacheFacade.store (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/CacheFacade.js:141:15)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:3517:11\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Cache.js:97:5\\n    at Hook.eval [as callAsync] (eval at create (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\\n    at Cache.get (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Cache.js:79:18)\\n    at ItemCacheFacade.get (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/CacheFacade.js:115:15)\\n    at Compilation._codeGenerationModule (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:3485:9)\\n    at codeGen (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5075:11)\\n    at symbolIterator (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3482:9)\\n    at timesSync (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3463:5)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5105:14\\n    at processQueue (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\\n    at processTicksAndRejections (node:internal/process/task_queues:78:11)\\n-- inner error --\\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nexpected \\\"{\\\".\\n\\u001b[34m   ╷\\u001b[0m\\n\\u001b[34m41 │\\u001b[0m                 &::\\u001b[31m\\u001b[0m\\n\\u001b[34m   │\\u001b[0m \\u001b[31m                   ^\\u001b[0m\\n\\u001b[34m   ╵\\u001b[0m\\n  src/styles/partials/_skills.scss 41:20  @import\\n  src/styles/app.scss 5:9                 root stylesheet\\n    at Object.<anonymous> (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/css-loader/dist/cjs.js!/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/sass-loader/dist/cjs.js!/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/src/styles/app.scss:1:7)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:453:10\\n    at Hook.eval [as call] (eval at create (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\\n    at Hook.CALL_DELEGATE [as _call] (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/tapable/lib/Hook.js:14:14)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5278:39\\n    at tryRunOrWebpackError (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/HookWebpackError.js:81:7)\\n    at __webpack_require_module__ (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5276:12)\\n    at __webpack_require__ (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5233:18)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5305:20\\n    at symbolIterator (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3485:9)\\n    at done (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3527:9)\\n    at Hook.eval [as callAsync] (eval at create (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/tapable/lib/Hook.js:18:14)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5211:43\\n    at symbolIterator (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3482:9)\\n    at timesSync (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3463:5)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5173:16\\n    at symbolIterator (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3485:9)\\n    at timesSync (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3463:5)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5141:15\\n    at symbolIterator (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3485:9)\\n    at done (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3527:9)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5087:8\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:3518:6\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/HookWebpackError.js:67:2\\n    at Hook.eval [as callAsync] (eval at create (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Cache.store (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Cache.js:111:20)\\n    at ItemCacheFacade.store (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/CacheFacade.js:141:15)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:3517:11\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Cache.js:97:5\\n    at Hook.eval [as callAsync] (eval at create (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\\n    at Cache.get (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Cache.js:79:18)\\n    at ItemCacheFacade.get (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/CacheFacade.js:115:15)\\n    at Compilation._codeGenerationModule (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:3485:9)\\n    at codeGen (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5075:11)\\n    at symbolIterator (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3482:9)\\n    at timesSync (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/neo-async/async.js:3463:5)\\n    at /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/Compilation.js:5105:14\\n    at processQueue (/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\\n    at processTicksAndRejections (node:internal/process/task_queues:78:11)\\n\\nGenerated code for /home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/css-loader/dist/cjs.js!/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/node_modules/sass-loader/dist/cjs.js!/home/sensei/Documents/Dev/python/projects/Atelier portfolio/daguinci.github.io/src/styles/app.scss\\n1 | throw new Error(\\\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\\\nexpected \\\\\\\"{\\\\\\\".\\\\n\\\\u001b[34m   ╷\\\\u001b[0m\\\\n\\\\u001b[34m41 │\\\\u001b[0m                 &::\\\\u001b[31m\\\\u001b[0m\\\\n\\\\u001b[34m   │\\\\u001b[0m \\\\u001b[31m                   ^\\\\u001b[0m\\\\n\\\\u001b[34m   ╵\\\\u001b[0m\\\\n  src/styles/partials/_skills.scss 41:20  @import\\\\n  src/styles/app.scss 5:9                 root stylesheet\\\");\");\n\n//# sourceURL=webpack://daguinci.github.io/./src/styles/app.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/scripts/app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/app.scss");
/******/ 	
/******/ })()
;