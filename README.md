# Rails 5.1, WebSocket, React Prototype

This application demonstrates the integration of Rails 5.1, ActionCable
(WebSocket), and React to accomplish client live updates via server push.

PostgreSQL and redis servers are required. Run `rake db:seed` to generate
sample data and `rails runner 'Company.first.change!'` to change a random
Company.
