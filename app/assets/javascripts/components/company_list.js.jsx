class CompanyList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: this.props.companies
    };
  }

  getIndex(companies, updatedCompany) {
    for (let [i, company] of companies.entries()) {
      if (company.id === updatedCompany.id) return i;
    }

    return null;
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      {
        channel: 'CompanyUpdatesChannel'
      },
      {
        received: (update) => {
          let [action, updatedCompany] = update;
          let companies = this.state.companies;

          if (!updatedCompany) return;

          let i = this.getIndex(companies, updatedCompany);

          switch(action) {
            case 'save':
              if (i == null) {
                companies.push(updatedCompany);
              } else {
                companies[i] = updatedCompany;
              }
              break;

            case 'destroy':
              companies.splice(i, 1);
              break;
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
