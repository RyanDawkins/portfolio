class AddIpToSession < ActiveRecord::Migration
  def self.up
    add_column :sessions, :ip, :string
  end
  def self.down
    remove_column :sessions, :ip
  end
end
