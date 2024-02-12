document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var fadeSections = document.querySelectorAll('.fade-in-section');
        
        fadeSections.forEach(function(section) {
            var sectionPosition = section.getBoundingClientRect().top;
            var screenPosition = window.innerHeight / 1.4; // Adjust this value as needed
            
            if (sectionPosition < screenPosition) {
                section.classList.add('fade-in');
            }
        });
    });
});