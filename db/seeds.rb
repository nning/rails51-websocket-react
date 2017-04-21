ActiveRecord::Base.logger = Logger.new($stdout)
3.times { FactoryGirl.create(:company) }
