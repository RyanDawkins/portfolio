class AddSessionExpirationDate < ActiveRecord::Migration
  def self.up
    add_column :users, :expiration_date, :datetime
  end
end
