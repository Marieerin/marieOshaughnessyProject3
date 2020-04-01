
$(function() {
    function formSubmitted() {
        console.log('subbb')

        //find out which radio button has been clicked
        //and add together
        const question1 = parseInt($('input[name=question1]:checked').val(), 10);
        const question2 = parseInt($('input[name=question2]:checked').val(), 10);
        const question3 = parseInt($('input[name=question3]:checked').val(), 10);
        //evaluation section
        // my mom doesnt really like anyone less than 44%
        const x =  Math.floor(question1 + question2 + question3);
        finalAnswer =  Math.round(x / 9 * 100);
        console.log(finalAnswer)
        
        // display the percentage that my mom would like you
        function displayFinalAnswer() {
            $('.percentageAnswer').html(`<p>${finalAnswer} %</p>`)
            $('.textAnswer').html('<p> Chance my mom would like you!</p>')
            $('.answerPicture').html('<img src="assets/mom3.png" id="mom3" alt="">')
            $('.result').append('<i class="fas fa-fan bigFan"></i>')
        }

        
        displayFinalAnswer();
    }

    // hover button makes image change
    $('.startQuiz').hover(function () {
        $('#mom2').css("opacity", 1);
        $('.speechBubble').css("opacity", 1);
        $('.speechBubble:after').css("opacity", 1);
    }, function() {
        $('#mom2').css("opacity", 0);
        $('.speechBubble').css("opacity", 0);
        $('.speechBubble:after').css("opacity", 0);
    })

    // focus 
    $('.startQuiz').focus(function () {
        $('#mom2').css("opacity", 1);
        $('.speechBubble').css("opacity", 1);
        $('.speechBubble:after').css("opacity", 1);
    }, function () {
        $('#mom2').css("opacity", 0);
        $('.speechBubble').css("opacity", 0);
        $('.speechBubble:after').css("opacity", 0);
    })

    // Next button scrolls to the next question
    $('a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });

    $('a[type="submit"]').on('click', function(e){
        e.preventDefault();
        formSubmitted();

    });
    // $('form').on('submit', function(e){
    //         formSubmitted();
    // })





});
