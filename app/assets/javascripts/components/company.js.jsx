class Company extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status || 'default'
    }

    setTimeout(() => {
      this.setState({status: 'default'});
    }, 1000);
  }

  render() {
    return (
      <li className={"company " + this.state.status}>
        <div className="company__inner">
          <div className="logo">
            <img src={this.props.logo_url}/>
          </div>

          <div className="info">
            <div className="name">{this.props.name}</div>
            <div className="slogan">{this.props.slogan}</div>
          </div>
        </div>
      </li>
    );
  }
}
