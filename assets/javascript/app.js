var artists = ['Frida Kahlo', 'Antoni Gaudi', 'Pablo Picasso', 'Salvador Dali', 'Claude Monet', 'Vincent van Gogh'];

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
            var p = $('<p>').text('Rating: ' + results[i].rating);
            var artistImg = $('<img>');
            artistImg.attr('src', results[i].images.fixed_height.url);
            artistImg.attr('data-still', results[i].images.fixed_height_still.url);
            gifsDiv.append(p);
            gifsDiv.append(artistImg);
            $('#artist-gifs').append(gifsDiv);
        }
    
    });

}



$(document).on('click', '.artist', displayGifs);


renderButtons();

       // for (var i = 0; i < results.length; i++) {

            // if (results[i].rating !== 'r' && results[i].rating !== 'pg-13') {
            







