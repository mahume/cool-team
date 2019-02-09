var location = 'Denver';
var key = '853e93a46a8527ed602b633b52d0c2f8';
var queryURL3 = `https://api.brewerydb.com/v2/breweries/?key=${key}&locality=${location}`;
$.ajax({
    url: queryURL3,
    method: 'GET'
}).then(function (data) {
    console.log(data);
});