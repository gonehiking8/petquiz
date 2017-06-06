$(document).ready(function() {

  $("form#animaltype").submit(function(event) {
    var gender = $("select#gender").val();
    var favecolor = $("select#favecolor").val();

    if (gender === 'female' && favecolor === 'reed') {
    $("#dog").show();
    }

    if (gender === 'female' && favecolor === 'bluue') {
    $("#duck").show();
    }

    if (gender === 'male' && favecolor === 'reed') {
    $("#dog").show();
    }

    if (gender === 'male' && favecolor === 'bluue') {
    $("#duck").show();
    }




    event.preventDefault();

  });
});
