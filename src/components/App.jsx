class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.VideoList
    }
  }

  playVideo (property) {
    this.setState({currentVideo: property});
  }


render() {
return (
<div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer  vidthing = {this.state.currentVideo}/>
    </div>
    <div className="col-md-5">
      <VideoList onClickFunction = {this.playVideo.bind(this)}  videos = {window.exampleVideoData}/>
    </div>
  </div>
 )
}

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
