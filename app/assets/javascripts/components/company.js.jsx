class Company extends React.Component {
  render() {
    return (
      <li className="company">
        <div className="logo">
          <img src={this.props.logo_url}/>
        </div>

        <div className="info">
          <div className="name">{this.props.name}</div>
          <div className="slogan">{this.props.slogan}</div>
        </div>
      </li>
    );
  }
}
