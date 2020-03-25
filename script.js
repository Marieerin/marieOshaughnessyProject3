const momQuiz = [
    [1, 2, 3,],
    [3, 1, 2,],
    [1, 3, 2],
]


$(function() {
    function formSubmitted() {
        console.log('subbb')

        //find out which radio button has been clicked
        //add together
        // loop through see which is selected and grab that value then pass it onto the final equation 
        //Could be a for-loop, but if you're feeling adventurous, there are some specialty array methods we didn't get to in class yet but are super awesome:
        // https://github.com/HackerYou/bootcamp-notes/blob/master/applied-javascript/advanced-array-methods.md
        
        //evaluation section
        // display the percentage that my mom would like you
        const question1 = $('input[name=question1]:checked').val();
        const question2 = $('input[name=question2]:checked').val();
        const question3 = $('input[name=question3]:checked').val();
        console.log(question1)
        console.log(question2)
        console.log(question3)
        
        const x =  Math.floor(question1 + question2);
        const y = Math.floor(x + question3);
        const z = Math.floor(y / 9)

        // const x = Math.round(finalAnswer / 9)
        // console.log(finalAnswer)
        console.log(x, y, z)


        // momQuiz.forEach(momQuiz => {
        //     console.log(momQuiz)
        // });
    }

    // Next button scrolls to the next question
    $('a').on('click', function (e) {
        // e.preventDefault();
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
