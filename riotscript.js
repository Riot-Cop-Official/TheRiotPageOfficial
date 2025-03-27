var riotscroll = 0;
var policesiren = document.getElementById('')
document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');
    heading.addEventListener('click', function() {
        if (heading.style.color === 'blue') {
            heading.style.color = 'red';
        } else {
            heading.style.color = 'blue';
        }
        
        
    });
    const sirentext = document.querySelector('h1');
    sirentext.addEventListener('mouseover', function(){
        
    });

    const image = document.querySelector('img');
    image.addEventListener('mouseover', function() {
        image.style.border = '5px solid red';
    });

    image.addEventListener('mouseout', function() {
        image.style.border = 'none';
    });
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        riotscroll = this.window.scrollY
        if (scrollPosition > 100) {
            heading.style.fontSize = '50px';
            
        } else {
            heading.style.fontSize = '80px';
        }
    });
    
   // scrolling shit
});