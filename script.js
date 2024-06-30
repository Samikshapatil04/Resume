$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle')
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle')
    });

});


const languages = [
    { id: 'html-fill', percentage: 91 },
    { id: 'css-fill', percentage: 84 },
    { id: 'js-fill', percentage: 70 }
];

function animateProgressBars() {
    languages.forEach(lang => {
        const fill = document.getElementById(lang.id);
        const percentLabel = document.getElementById(lang.id.replace('-fill', '-percent'));
        let progress = 0;
        
        const interval = setInterval(() => {
            if (progress >= lang.percentage) {
                clearInterval(interval);
            } else {
                progress++;
                fill.style.width = `${progress}%`;
                percentLabel.textContent = `${progress}%`;
            }
        }, 2);
    });
}

// Start animation when the page loads
window.onload = animateProgressBars;