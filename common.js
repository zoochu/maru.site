
$(function(){
    $('header').load('maru_inc.html header > div, .menu-trigger',head);
    $('footer').load('maru_inc.html footer > fieldset');

    function head(){
        
            const menuTrigger = document.querySelector('.menu-trigger');
            console.log(menuTrigger)

            menuTrigger.addEventListener('click', function(){
                this.classList.add('active-2');
            });
       
    }
});