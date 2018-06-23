$(document).ready(function() {

var artists = ['Frida Kahlo', 'Antoni Gaudi', 'Pablo Picasso', 'Salvador Dali', 'Claude Monet', 'Vincent van Gogh', 'Andy Warhol'];

function renderButtons() {

    $('#buttonDiv').empty();

    for (var i = 0; i < artists.length; i++) {
        var a = $('<button>');
        a.addClass('artist');
        a.addClass('btn btn-info');
        a.attr('data-name', artists[i])
        a.text(artists[i]);
        $('#buttonDiv').append(a);
    }
}   

function addButton() {
$('#run-search').on('click', function() {
    var submitButton = $('#search-input').val().trim();

    var newButton = $('<button>');
    newButton.addClass('btn btn-info');
    newButton.attr('data-name');
    $('#run-search').append(newButton);

});
}

function displayGifs() {
    var art = $(this).attr('data-name');
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + art + '&api_key=YgNhIivygDJBv0kDT1KJZH8PqgY1jn1o&q=art&limit=10&offset=0&rating=G&lang=en';
    
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        console.log(response);

        $('#artist-gifs').empty();

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var gifsDiv = $('<div>');
            gifsDiv.addClass('gifs');
            var p = $('<p>').text('Rating: ' + results[i].rating);
            var artistImg = $('<img>');
            artistImg.addClass('image');
            artistImg.attr('src', results[i].images.fixed_height_still.url);
            artistImg.attr('data-still', results[i].images.fixed_height_still.url);
            artistImg.attr('data-animate', results[i].images.fixed_height.url);
            artistImg.attr('data-state', 'still');
            gifsDiv.append(p);
            gifsDiv.append(artistImg);
            $('#artist-gifs').prepend(gifsDiv);
        }
 });
}

renderButtons();
addButton();
$(document).on('click', '.artist', displayGifs);
$(document).on('click', '.image', function() {
    var state = $(this).attr('data-state');

    if (state === 'still') {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', 'animate');

    } else {
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state', 'still');
    }
});
});

 








       // for (var i = 0; i < results.length; i++) {

            // if (results[i].rating !== 'r' && results[i].rating !== 'pg-13') {
            







