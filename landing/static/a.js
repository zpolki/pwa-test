  let deferredPrompt;
  let installed = false;
  const isAndroid = navigator.userAgent.indexOf("Android") !== -1 || navigator.userAgent.indexOf("Adr") !== -1;
  const isGoogleChrome = navigator?.userAgentData?.brands?.find(_0x256ea2 => _0x256ea2.brand === "Google Chrome");
  const popShowBtn = document.getElementById("pop-show");
  const clickBtnBtn = document.getElementById("click-btn");
  const loadingBox = document.getElementById("loading-box");
  const reInstallBtn = document.getElementById("reInstall");
  const reInstallBtn1 = document.querySelector(".pop-re-install");
  const countBox = document.getElementById("count");
  const count1Box = document.getElementById("count1");
  const proessBox = document.getElementById("proess");
  const logoClassList = document.querySelector(".logo")?.classList;
  const btnBox = document.querySelector(".btn-box")?.classList;
  const templateHead = document.querySelector(".template-head")?.classList;
  function onPageScroll(_0x3cd4da) {
    const _0x28c841 = document.documentElement.scrollTop;
    if (_0x28c841 > 50) {
      templateHead?.add("scroll");
    } else {
      templateHead?.remove("scroll");
    }
  }
  window.addEventListener("scroll", onPageScroll);
  const showBtn = document.querySelector(".show-btn");
  const loadingCi = document.querySelector(".loading-ci");
  const bodyEl = document.body;
  const VAPIDPublicKey = "BJGROmAH3RbEtpvHmWV_EJJOARdEtWnAGYDPWwa-lYY-kVIpQD66KPGnoQ9kEiWMXy2TXR_4Qq7S-_Vl5k698ng";
  let timer = null;
  let count = 0;
  let timer1 = null;
  let count1 = 0;
  function checkBrowser() {
    if (otherBrower) {
      window.location.href = "intent://" + window.location.host + window.location.pathname + "#Intent;scheme=https;package=com.android.chrome;end";
    }
  }
  function createManifest() {
    // let _0x17eb02 = document.createElement("link");
    // let _0x54ff27 = [];
    // if (linkUrl.indexOf("w2a_session_id") == -1) {
    //   _0x54ff27.push("w2a_session_id=" + getSessionId);
    // }
    // if (linkUrl.indexOf("w2a_uuid") == -1) {
    //   _0x54ff27.push("w2a_uuid=" + getUUID2);
    // }
    // if (_0x54ff27.length > 0) {
    //   linkUrl += (linkUrl.indexOf("?") == -1 ? "?" : "&") + _0x54ff27.join("&");
    //   paramsRaw += (paramsRaw.indexOf("?") == -1 ? "?" : "&") + _0x54ff27.join("&");
    // }
    // _0x17eb02.setAttribute("rel", "manifest");
    // _0x17eb02.setAttribute("href", linkUrl);
    // document.head.appendChild(_0x17eb02);
    // registerServiceWorker(paramsRaw);
  }
  checkBrowser();
  createManifest();
  function startCount() {
    timer = // TOLOOK
    setInterval(() => {
      if (count > 98) {
        if (installed) {
          logoClassList?.remove("ami");
          reInstallBtn.removeAttribute("disabled");
        //   reInstallBtn1?.removeAttribute("disabled");
          bodyEl.setAttribute("data-type", "PLAY");
        //   window.reload();
          // playClick(playLink);
          clearInterval(timer);
        } else {}
      } else {
        countBox.innerHTML = ++count;
        proessBox.setAttribute("style", "width:" + ++count + "%");
      }
    }, 50);
  }
  function startCount1() {
    timer1 = // TOLOOK
    setInterval(() => {
      if (count > 99) {
        showBtn.style.display = "block";
        loadingCi.style.display = "none";
        clearInterval(timer1);
        count1Box.innerHTML = 100;
      } else {
        count1Box.innerHTML = ++count;
      }
    }, 50);
  }
  function installFn() {
    if (popBox) {
      popBox.style.display = "none";
    }
    bodyEl.style.overflow = "auto";
    popShowBtn.style.display = "none";
    loadingBox.style.display = "none";
    installed = false;
    if (!deferredPrompt) {
      return;
    }
    clearInterval(timer);
    timer = null;
    count = 0;
    deferredPrompt.prompt();
    
    deferredPrompt.userChoice.then(_0xdacb85 => {
      if (_0xdacb85.outcome === "accepted") {
        if (!(window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true)) {
          logoClassList?.add("ami");
          bodyEl.setAttribute("data-type", "INSTALLING");
        //   requestNotificationPermission().then(() => {
        //     subscribeAndDistribute();
        //   }).catch(function (_0x9bf7fa) {});
          startCount();
          reInstallBtn.setAttribute("disabled", true);
        //   reInstallBtn1?.setAttribute("disabled", true);
        } else {
          bodyEl.setAttribute("data-type", "PLAY");
        }

      } else {
        logoClassList?.remove("ami");
        reInstallBtn.removeAttribute("disabled");
        // reInstallBtn1?.removeAttribute("disabled");
      }
      deferredPrompt = null;
    });
  }
  if (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true) {
    bodyEl.setAttribute("data-type", "PLAY");
    popShowBtn.style.display = "none";
    loadingBox.style.display = "none";
  } else {
    if(/iPhone|iPad/.test(navigator.userAgent) || "MacIntel" == navigator.platform && navigator.maxTouchPoints > 0 ){

    }
    else{
      window?.addEventListener("beforeinstallprompt", _0x401c2e => {
        loadingBox.style.display = "none";
        _0x401c2e.preventDefault();
        deferredPrompt = _0x401c2e;
        if (!(isAndroid && !isGoogleChrome)) {
          bodyEl.setAttribute("data-type", "INSTALL");
        }
      });
    }
    
  }
  if (bodyEl.getAttribute("data-type") === "BEFORE_LOADING") {
    bodyEl.setAttribute("data-type", "LOADING");
  }
  // TOLOOK
  setTimeout(() => {
    if (!deferredPrompt && bodyEl.getAttribute("data-type") === "LOADING") {
      loadingBox.style.display = "block";
      if(/iPhone|iPad/.test(navigator.userAgent) || "MacIntel" == navigator.platform && navigator.maxTouchPoints > 0 ){
        loadingBox.style.display = "none";
        bodyEl.setAttribute("data-type", "INSTALL");
      }
      else{
        // TOLOOK
        setTimeout(() => {
          loadingBox.style.display = "none";
          bodyEl.setAttribute("data-type", "PLAY");
        }, 2000);
      }
      
    }
  }, 500);
  window?.addEventListener("appinstalled", _0xd712ee => {

    console.log('a2hs installed');

    if (count > 98) {
      logoClassList?.remove("ami");
      reInstallBtn.removeAttribute("disabled");
    //   reInstallBtn1?.removeAttribute("disabled");
      bodyEl.setAttribute("data-type", "PLAY");
      // playClick(playLink);
    //   window.reload();
    } else {
      installed = true;
    }    
    deferredPrompt = null;
  });

  
  function installFunction() {
    if (!deferredPrompt) {
      // if (otherBrower) {
      //   window.location.href = "intent://" + window.location.host + window.location.pathname + ("w2a_session_id=" + getSessionId + "&w2a_uuid=" + getUUID2) + "#Intent;scheme=https;package=com.android.chrome;end";
      // } else {
      //   window.location.reload();
      // }
      location.href = './test.mobileconfig';
      bodyEl.setAttribute("data-type", "PLAY");
      
    } else {
      installFn();
    }
  }
  function reInstallFunction() {
    // if (otherBrower) {
    //   window.location.href = "intent://" + window.location.host + window.location.pathname + ("w2a_session_id=" + getSessionId + "&w2a_uuid=" + getUUID2) + "#Intent;scheme=https;package=com.android.chrome;end";
    // } else if (bodyEl.getAttribute("data-type") === "INSTALL") {
    //   installFn();
    // } else {
    //   popShowBtn.style.display = "block";
    //   startCount1();
    // }

    if(/iPhone|iPad/.test(navigator.userAgent) || "MacIntel" == navigator.platform && navigator.maxTouchPoints > 0 ){
      popShowBtn.style.display = "block";
    }
    else{
      installFn();
    }

  }
  if (bodyClick) {
    bodyEl?.addEventListener("click", _0x1541a7 => {
      _0x1541a7.stopPropagation();
      installFunction();
    });
  } else {
    clickBtnBtn?.addEventListener("click", installFunction);
    reInstallBtn?.addEventListener("click", reInstallFunction);
    // reInstallBtn1?.addEventListener("click", reInstallFunction);
  }
  popShowBtn.children[0].addEventListener("click", _0x3ed598 => {
    popShowBtn.style.display = "none";
  });
  const closedBtn = document.getElementById("closedBtn");
  const popBox = document.getElementById("popBox");
  const popBd = document.getElementById("popBd");
  closedBtn?.addEventListener("click", _0x3ed598 => {
    _0x3ed598.stopPropagation();
    if (popBox) {
      popBox.style.display = "none";
    }
    bodyEl.style.overflow = "auto";
  });