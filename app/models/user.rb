require 'bcrypt'
require 'digest/md5'

class User < ActiveRecord::Base

  include BCrypt

  validates :username, presence: true
  validates :password_hash, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
  validates :role, presence: true, :numericality => {
    :only_integer => true,
    :allow_blank => false,
    :greater_than => 0
    }

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

  def self.authenticate email, password
    @user = User.find_by_email(email)
    if @user.password == password
      return true
    end
    false
  end

  def self.create_token email, ip

    session = Session.where("email = ? AND ip = ?", email, ip).take
    if session
      session.expiration_date = Time.now + 1.week
    else
      token = Digest::MD5.hexdigest(email+Date.today().to_s)
      session = Session.new(email: email, token: token, expiration_date: Time.now+1.week, ip: ip)
    end
    session.save()
    session
  end

end
