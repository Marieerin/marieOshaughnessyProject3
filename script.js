const momQuiz = {
    question1: 
    {
        answer1: 1,
        answer2: 2,
        answer3: 3,
    },
    question2: {
        answer1: 3,
        answer2: 1,
        answer3: 2,
    },
    question3: {
        answer1: 1,
        answer2: 3,
        answer3: 2,
    },
}

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
    // button resets quiz 
    // $('#resetResults').click(function(){ 

    // })
});
