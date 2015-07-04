
class UserController < RestController

  def get_class
    User
  end

  def login
    a = User.create_token 'hello'
    render json: a
  end

  def from_params
    params.permit(:username, :password, :email, :first_name, :last_name, :role)
  end

end