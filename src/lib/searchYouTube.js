var searchYouTube = (options, callback) => {
  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    q: options,
    type: 'video',
    maxResults: 5,
    part: 'snippet',
    key: window.YOUTUBE_API_KEY,
    videoEmbeddable: true,
    success: callback(data),
    error: console.log('GET failed')

  })
  };

window.searchYouTube = searchYouTube;
