class Company < ApplicationRecord
  before_save :update_key

  after_save    -> { broadcast :save }
  after_destroy -> { broadcast :destroy }

  default_scope { order :id }

  def change
    change!
  end

  def change!
    self.name     = Faker::Company.name
    self.slogan   = Faker::Company.catch_phrase
    self.logo_url = Faker::Company.logo

    save!
  end

  private

  def update_key
    self.key = SecureRandom.uuid
  end

  def broadcast(action)
    ActionCable.server.broadcast(:company_updates, [action, self])
  end
end
