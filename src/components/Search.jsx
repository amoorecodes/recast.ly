class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  handleClick() {
    let options = this.state.text;
    this.props.updateInputValue(options)
  }
  render() {
    return(
    <div className="search-bar form-inline">
      <input className="form-control" type="text"  />
      <button onClick={this.handleClick.bind(this)}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
    )
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


//onClick={this.props.onClick(document.getElementsByClassName(form-control).val())}