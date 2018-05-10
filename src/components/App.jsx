class App extends React.Component {
  constructor() {
    super();
    this.updateVideos = (data) => {this.setState({videos: data})}
    this.state = {
      videos: [],
      query: 'input',
      playback: window.exampleVideoData[0]
    }
  }
  playVideo(e) {
        console.log('a videolist title was just clicked')
    this.setState({
      playback: e
    })
}
  updateInputValue(evt) {
    this.setState({
      query: evt.target.value,
      {console.log(query, 'this should be query')}
    });
  }
  // search(input) {
  //   searchYouTube(input, this.updateVideos)
  //   this.setState({
  //     query: input
  //   })

  // }
  render() {
    return(
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search onTyping={this.updateInputValue.bind(this)}/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={this.state.playback || window.exampleVideoData[0]}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={window.exampleVideoData} onClick={this.playVideo.bind(this)}/>
      </div>
    </div>
  </div>
    );
  }
  };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

window.App = App;
