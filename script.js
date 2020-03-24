const momQuiz = [
    [1,2,3,],
    [3, 1, 2,],
    [1, 3, 2],
]


$(function() {
    function formSubmitted() {
        // console.log('subbb')

        //find out which radio button has been clicked
        //add together
        
        //evaluation section
        // display the percentage that my mom would like you
    }

    // Next button scrolls to the next question
    $('a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });
    $('a[type="submit"]').on('click', function(e){
        e.preventDefault();
        formSubmitted();
    });


    $('button.questionButton').on('click', function(e){
        e.preventDefault();
    });
});
