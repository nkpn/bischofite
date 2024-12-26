document.addEventListener("DOMContentLoaded", function() {
  const body = document.body;
  // Function for "Scrol to top" button
  const scrollToTopButton = document.querySelector('.scroll-top-btn');
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // function to show Scroll To Top Button only after scroll position 150
  function toggleScrollButton() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        scrollToTopButton.style.display = "block"; // Show the button
    } else {
        scrollToTopButton.style.display = "none"; // Hide thscrollToTopButton
    }
  }

  window.onscroll = function() {
    toggleScrollButton();
  };
 
  scrollToTopButton.addEventListener('click', scrollToTop)

  // Mobile Header Menu Show / Hide function
  const toggleCheckbox = document.getElementById("toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const headerContainer = document.querySelector('.header-container');

  if (mobileMenu && toggleCheckbox) {
    toggleCheckbox.addEventListener("change", function() {
      if (toggleCheckbox.checked) {
        mobileMenu.classList.add('opened')
        document.body.classList.add('no-scroll'); // hide Y scroll
        headerContainer.classList.add('no-scroll'); // hide Y scroll

        setTimeout(() => {
          mobileMenu.style.display = "flex";
        }, 200);
      } else {
        mobileMenu.classList.remove('opened')
        document.body.classList.remove('no-scroll');
        headerContainer.classList.remove('no-scroll');

        setTimeout(() => {
          mobileMenu.style.display = "none";
        }, 300);
      }
    });
  }


  const navigationLinks = document.querySelectorAll('.navigation-link:not(.new-page)');

  navigationLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        console.log('click')
        
        // Get the target section id from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        const headerHeight = headerContainer.offsetHeight;
        
        // Get the top position of the section with offset
        const sectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        // Smooth scroll to the desired position
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });

        mobileMenu.classList.remove('opened')
        document.body.classList.remove('no-scroll');
        headerContainer.classList.remove('no-scroll');
        toggleCheckbox.checked = false;

        setTimeout(() => {
          mobileMenu.style.display = "none";
        }, 300);
    });
});
