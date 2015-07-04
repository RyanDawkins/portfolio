class AddExpirationDateToSession < ActiveRecord::Migration
  def self.up
    add_column :sessions, :expiration_date, :datetime
  end
  def self.down
    remove_column :sessions, :expiration_date
  end
end
