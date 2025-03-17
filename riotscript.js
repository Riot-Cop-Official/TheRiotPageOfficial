document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');
    heading.addEventListener('click', function() {
        heading.style.color = 'blue';
        
    });

    const image = document.querySelector('img');
    image.addEventListener('mouseover', function() {
        image.style.border = '5px solid red';
    });

    image.addEventListener('mouseout', function() {
        image.style.border = 'none';
    });
});