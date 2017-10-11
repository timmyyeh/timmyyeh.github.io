'use strict';

$(function () {
    var newArray = getArray();

    $('.display').text(newArray);

    $('#submit_btn').click(function () {
        var number = $('#text1').val();
        if (Number.isInteger(parseInt(number))) {
            var afterArray = newArray.map(function (x) {
                return x * ('' + number);
            });
            $('#ta_result').text(afterArray);
        } else {
            alert("Please enter number only");
        }
    });

    function getArray() {
        var myArray = [];
        $.ajax({
            url: 'integerArray.json',
            type: 'GET',
            async: false,
            success: function success(data) {
                myArray = data;
            }
        });
        return myArray;
    }
});
//# sourceMappingURL=grid_json.js.map