class Session < ActiveRecord::Base
  default_scope -> { where("expiration_date IS NULL OR expiration_date < ?", Time.now) }
end
