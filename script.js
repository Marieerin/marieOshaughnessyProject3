const momQuiz = {
    question1: {
        answer1: 3,
        answer2: 2,
        answer3: 1
    },
    question2: {
        answer1: 3,
        answer2: 2,
        answer3: 1
    },
    question3: {
        answer1: 3,
        answer2: 2,
        answer3: 1
    },
}

$(function() {
    $('input[type="radio"').on('click', function(e){

    })
    $('a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });
});
