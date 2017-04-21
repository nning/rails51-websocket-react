class CompanyList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: this.props.companies
    };
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      {
        channel: 'CompanyUpdatesChannel'
      },
      {
        received: (newCompany) => {
          let companies = this.state.companies;

          for (let [i, company] of companies.entries()) {
            if (company.id === newCompany.id) {
              companies[i] = newCompany;
              break;
            }
          }

          this.setState({companies: companies});
        }
      }
    );
  }

  render() {
    const companies = this.state.companies.map((company) => {
      return <Company {...company}/>;
    });

    return <ul id="companies">{companies}</ul>;
  }
}
