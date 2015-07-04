class Session < ActiveRecord::Base
  default_scope -> { where("expiration_date IS NULL OR expiration_date > ?", Time.now) }

  def self.validate_token token
    session = Session.find_by_token(token)
    if session
      return true
    else
      return false
    end
  end

end
