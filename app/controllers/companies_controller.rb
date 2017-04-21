class CompaniesController < ApplicationController
  def index
    render component: 'CompanyList', props: { companies: Company.all }, prerender: false
  end
end
