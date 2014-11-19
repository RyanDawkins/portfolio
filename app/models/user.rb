class User < ActiveRecord::Base

  validates :username, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
  validates :role, presence: true, :numericality => {
    :only_integer => true,
    :allow_blank => false,
    :greater_than => 0
    }

end
