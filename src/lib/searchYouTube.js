window.searchYouTube = (options, callback) => {
  $.ajax({
        dataType: 'json',
    videoEmbeddable: 'true',
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: options,
      // type: 'video',
      maxResults: 5,
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
        },
  }).done(function(ytData) {
    console.log(this, 'searchYT')
    return callback(ytData);
  })
    .fail(() => (console.log('GET request failed')))
  }
window.searchYouTube = searchYouTube;


