source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.1.0.0'

# gem 'therubyracer', platforms: :ruby
gem 'factory_girl_rails', '>= 4.8.0'
gem 'faker'
gem 'pg'
gem 'puma', '~> 3.7'
gem 'react-rails', '>= 2.1.0'
gem 'redis'
gem 'sass-rails', '~> 5.0', '>= 5.0.6'
gem 'sqlite3'
gem 'uglifier', '>= 1.3.0'

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
