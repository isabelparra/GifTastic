$(document).ready(function() {

    var groceries = ['vegetables', 'fruits', 'grains', 'protein', 'condiments', 'legumes', 'spices', 'Frozen Goods'];

    var button;

    var newTopic = "";

    function renderButtons() {

    $('#buttonDiv').empty();
    for (var i = 0; i < groceries.length; i++) {
         var a = $('<button class="btn btn-info">' 
         a.attr('id', 'show');
         a.attr('data-search', groceries[i]);
         a.text(groceries[i]);
         $('#buttonDiv').append(a);
     }
    
}


$('#buttonDiv').on('click', function() {
    var topics = $(this).attr('data-name');

    

$.ajax( {
    url: queryURL,
    method: "GET"
})

.then(function(response) {
    
   {
        
});

})
