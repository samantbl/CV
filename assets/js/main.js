document.addEventListener("DOMContentLoaded", function() {
  // Variables
  var toggleDarkModeBtn,
    moonIcon,
    sunIcon,
    toggleLangBtn,
    overlay,
    toggleMenuBtn,
    closeIcon,
    menuIcon,
    btn,
    modals,
    closeBtns;

  toggleDarkModeBtn = document.querySelector("#toggleDarkMode");
  moonIcon = document.querySelector("#moonIcon");
  sunIcon = document.querySelector("#sunIcon");
  toggleLangBtn = document.querySelector("#toggleLang");
  overlay = document.querySelector("#overlay");
  toggleMenuBtn = document.querySelector("#toggleMenu");
  closeIcon = document.querySelector("#closeIcon");
  menuIcon = document.querySelector("#menuIcon");
  btn = document.querySelectorAll(".btn-modal");
  modals = document.querySelectorAll(".modal");
  closeBtns = document.querySelectorAll(".btn-close");

  // Methods
  function toggleDarkMode() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      moonIcon.style.display = "block";
      sunIcon.style.display = "none";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    }
  }

  function toggleLang() {
    alert("بزودی...!");
  }

  function toggleMenu() {
    if (toggleMenuBtn.dataset.toggle == "false") {
      toggleMenuBtn.dataset.toggle = true;
      overlay.style.display = "block";
      menuIcon.style.display = "none";
      closeIcon.style.display = "flex";
      document.documentElement.style.overflow = "hidden";
    } else {
      toggleMenuBtn.dataset.toggle = false;
      overlay.style.display = "none";
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
      document.documentElement.style.overflow = "auto";
    }
  }

  function keyShortcuts(e) {
    switch (e.key.toLowerCase()) {
      case "n":
        toggleDarkMode();
        break;
      case "l":
        // Change the language
        break;
      default:
        break;
    }
  }

  // Initializes & Event Listerner
  if (localStorage.theme === "dark") {
    sunIcon.style.display = "block";
  } else {
    moonIcon.style.display = "block";
  }

  toggleDarkModeBtn.addEventListener("click", toggleDarkMode);
  toggleLangBtn.addEventListener("click", toggleLang);
  toggleMenuBtn.addEventListener("click", toggleMenu);
  window.addEventListener("keydown", keyShortcuts);

  for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function(e) {
      e.preventDefault();
      var modal = document.querySelector(e.target.getAttribute("data-href"));
      modal.style.display = "block";
    };
  }

  for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
      for (var index in modals) {
        if (typeof modals[index].style !== 'undefined')
          modals[index].style.display = "none";
        }
      }
  }

  window.onclick = function(e) {
    if (e.target.classList.contains("modal-area")) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
     }
    }
  }

});
