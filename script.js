// Smooth scrolling with navbar offset
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                document.querySelector('.nav-links').classList.remove('active');
            });
        });
        
        



        // Navigation bar background change on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                document.querySelector('.nav-bar').style.background = 'rgba(10, 10, 46, 0.95)';
            } else {
                document.querySelector('.nav-bar').style.background = 'rgba(10, 10, 46, 0.8)';
            }
        });



        // Mobile menu toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });



        // Close menu when clicking outside on mobile
        document.addEventListener('click', function(event) {
            const navLinks = document.querySelector('.nav-links');
            const menuToggle = document.querySelector('.menu-toggle');
            
            if (navLinks.classList.contains('active') && 
                !event.target.closest('.nav-links') && 
                !event.target.closest('.menu-toggle')) {
                navLinks.classList.remove('active');
            }
        });



        // Adjust hero padding based on navbar height
        function adjustHeroPadding() {
            const navbar = document.querySelector('.nav-bar');
            const hero = document.querySelector('.hero');
            if (navbar && hero) {
                hero.style.paddingTop = `${navbar.offsetHeight + 50}px`;
            }
        }




        // Run on load and resize
        window.addEventListener('load', adjustHeroPadding);
        window.addEventListener('resize', adjustHeroPadding);
    
    
     window.addEventListener("load", function () {
      const preloader = document.getElementById("preloader");
      const content = document.getElementById("main-content");

      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
      setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "block";
    }, 500);
    });

    


//for results download
    document.addEventListener('DOMContentLoaded', function () {
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function () {
            const fileName = this.getAttribute('data-file');
            downloadResult(fileName);
        });
    });

    function downloadResult(fileName) {
        // Use the path directly from the data-file attribute
        const filePath = fileName;

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = filePath;
        link.download = fileName.split('/').pop(); // This ensures only the file name is used for download

        // Trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});







