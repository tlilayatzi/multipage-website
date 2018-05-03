var menu = document.querySelector(".navbar__wrapper"),
    toggle = document.querySelector(".toggle"),
    hero = document.querySelector(".hero"),
    navbar = document.querySelector(".navbar");

    toggle.addEventListener("click", function() {
      menu.classList.toggle("is--active");
    });

    window.addEventListener("scroll", function() {
      if(window.scrollY > hero.scrollHeight) {
        navbar.classList.add("is--fixed");
      } else {
        navbar.classList.remove("is--fixed");
      }
    });

    var masonry = document.querySelector(".masonry");
    for(var i = 0; i <= masonry.length; i++ ) {
      console.log(masonry[i]);
    }
