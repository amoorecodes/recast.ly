class App extends React.Component {
  constructor() {
    super()
    // this.updateVideos = this.updateVideos.bind(this)
    this.state = {
      videos: window.exampleVideoData,
      playback: window.exampleVideoData[0],
      query: ''  
    }
  }

updateVideos(data) {
    // searchYouTube(this.state.query, this.updateVideos)
    console.log('this in App', this)

    this.setState({
      videos: data.items,
      playback: data.items[0]
    })}

playVideo(e) {
        console.log('a videolist title was just clicked')
    this.setState({
      playback: e
    })
}

search(query) {
  console.log(this.updateVideos, 'does this even exist update')
  searchYouTube(query, this.updateInputValue)
}
updateInputValue(evt) {
    searchYouTube(evt.target.value, ytSearch => {
      this.setState({
        videos: ytSearch.items,
        playback: ytSearch.items[0]
      })
    })
  };
componentDidMount() {
  this.search('hello');
}
  render() {
    return(
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search updateInputValue={this.updateInputValue.bind(this)}/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={this.state.playback}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos} onClick={this.playVideo.bind(this)}/>
      </div>
    </div>
  </div>
    );
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

window.App = App;
