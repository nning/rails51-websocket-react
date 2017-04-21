class Company < ApplicationRecord
  before_save :update_key
  after_save :broadcast

  default_scope { order :id }

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

  def broadcast
    ActionCable.server.broadcast :company_updates, self
  end
end
