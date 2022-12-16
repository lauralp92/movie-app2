var searchInput = $(".search");
var itemWrapper = $("main");

// function that displays movie data after search
function displayMatches(matches) {
  itemWrapper.html("");

  if (!matches) {
    itemWrapper.html('<p class="no-search">No results found!</p>');
    return;
  }

  for (var matchObj of matches) {
    itemWrapper.append(`
   <div class="movie-item" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${matchObj.Poster});">
     <h3>${matchObj.Title}</h3>
     <p>Release Year: ${matchObj.Year}
     </p>
     <a href="https://www.imdb.com/title/${matchObj.imdbID}" target="_blank">View More Details</a>
   </div>
   `);
  }
}

// function that fetches movie data
function getMovieData(event) {
  var keyCode = event.keyCode;
  var searchText = searchInput.val().trim();

  if (keyCode === 13 && searchText) {
    $.get(`https://www.omdbapi.com/?apikey=ffdc8c20&s=${searchText}`).then(
      function (data) {
        displayMatches(data.Search);
      }
    );
  }
}

function init() {
  searchInput.keydown(getMovieData);
}

init();

// Grab HTML elements
// Get the input value on enter key press
// Grab data related to users search
// Inject the movie items into the Dom, based on users search //
