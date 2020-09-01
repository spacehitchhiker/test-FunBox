$(document).ready(function () {


    $('.card').on( 'click', function (event){
        $(this).toggleClass('added');
        // if(event.type === 'click'){
        //     $(this).one('mouseleave', function(){
        //         $(this).toggleClass('added');
        //     })
        // }
    });

    $('.card-btn').click(function (){
        console.log(1111);
        $(this).parents('.card-caption').siblings('.card').toggleClass('added');
    })


	
});

    /*const card = document.querySelectorAll('.card');


    card.addEventListener('click', function (){
        card.classList.toggle('added');
    })
*/
		















































