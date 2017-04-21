class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :key
      t.string :name
      t.string :slogan
      t.string :logo_url

      t.timestamps
    end
  end
end
