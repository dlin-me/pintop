(function(props) {
  Core.utils.renderBootstrap({elId:'bs-12',componentName:'ActionText',props:props,contextKey:'context-bs-12'});
})({"id":"n-21664-membership-sign-out-mobile","text":"SIGN OUT","style":{"cursor":"pointer","fontColor":"highContrast"},"dataAid":"MEMBERSHIP_SIGNOUT_LINK","script":"(function () {\n    window.onMembershipLogout = function () {\n      window.location.assign('/m/logout');\n    };\n    var onClickApplication = setInterval(function () {\n      var membershipSignOut = document.querySelector('#n-21664-membership-sign-out-mobile');\n      if (membershipSignOut && !membershipSignOut.onclick) {\n        membershipSignOut.onclick = window.onMembershipLogout;\n      }\n    }, 500);\n    setTimeout(function () {\n      return clearInterval(onClickApplication);\n    }, 1000);\n    \n  var cookieValue = void 0;\n  var cookie = \"info_c2=\";\n  var parsedCookies = document.cookie.split(\";\");\n  for (var i = 0; i \u003C parsedCookies.length; i++) {\n    var targetCookie = parsedCookies[i];\n    while (targetCookie.charAt(0) === \" \") {\n      targetCookie = targetCookie.substring(1, targetCookie.length);\n    }\n    if (targetCookie.indexOf(cookie) === 0) {\n      var rawCookie = targetCookie.substring(cookie.length, targetCookie.length);\n      cookieValue = rawCookie && JSON.parse(rawCookie);\n    }\n  }\n    var membershipEmail = cookieValue && cookieValue.contactEmail;\n    \n    var membershipIcon = document.querySelector('#n-21664-membership-mobile-footer');\n    if (membershipIcon && !cookieValue) {\n      membershipIcon.style.display = 'none';\n      var dropdownElement = document.querySelector('#n-21664-mobile-dropdown');\n      if (dropdownElement) {\n        dropdownElement.style['padding-bottom'] = '20px';\n      }\n    } else {\n      var membershipEmailField = document.querySelector('#n-21664-membership-mobile-email');\n      if (membershipEmailField) {\n        membershipEmailField.innerText = membershipEmail;\n      }\n      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {\n        var desktopMembershipIcon = document.querySelector('[data-aid=\"MEMBERSHIP_ICON_DESKTOP_RENDERED\"]');\n        if (desktopMembershipIcon) {\n          desktopMembershipIcon.style.display = 'none';\n        }\n      }\n    }\n    \n  })()","widgetId":"53910f21-9609-4ce8-8018-647557c63ed2","section":"default","category":"accent","locale":"en-AU","renderMode":"PUBLISH","viewDevice":"TABLET_RENDER_DEVICE"});