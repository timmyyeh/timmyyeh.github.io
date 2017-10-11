$(function () {
    var word;
    var newWord;
    $('#btn_1').click(function(){

        $('h4').text("Here's the  word");
        $('#btn_1').hide();
        $('#game').show();
        $('#word').addClass('word');
        getNewWord();
        $('#word').append(`<h1>${newWord}</h1>`);


        $(`.button`).click(function(e){
            e.preventDefault();
            var input = $(`#guess`).val();
            if(input.toUpperCase() == word.toUpperCase()){
                $(`#guess`).val('');

                $(`h1`).text("Correct!");
                setTimeout(function(){
                    getNewWord();
                }, 1000);

            }
            else{
                $(`h1`).text("Wrong!");
                $(`#guess`).val('');

            }
        });


    });
    function randomWord(word){
        var a = word.split("");
        for(var i = 0; i < word.length; i++){
            var index = Math.floor(Math.random() * word.length);
            var temp = a[i];
            a[i] = a[index];
            a[index] =  temp;
        }
        return a.join('');


    }
    function getNewWord(){
        $.ajax({
            url: 'words.json',
            type: 'GET',
            async: false,
            success: function(data){

                var index = Math.floor(Math.random() * 4);
                word = data.words[index];
                console.log(word);
                newWord = randomWord(word);


            }
        });
        $(`h1`).text(`${newWord}`);



    }

});