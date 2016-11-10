var searchYouTube = (options, callback) => {
  var query = options.query;
  var max = options.max;
  var key = window.YOUTUBE_API_KEY;

  function findYouTube = () {
    var results = $.ajax({
   //This is the url you should use to communicate with the parse API server.
   url: 'https://www.googleapis.com/youtube/v3/search?&max-results='{max},
   type: 'GET',
   part: 'snippet',
   q: query,
   // data: JSON.stringify(message),
   contentType: 'text/html',
   success: function (data) {
   console.log('Youtube: Message sent');
   },
   error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('Youtube: Failed to send message', data);
  }
 })
  callback(results);
}

findYouTube();

};

window.searchYouTube = searchYouTube;


// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'https://api.parse.com/1/classes/messages',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });
