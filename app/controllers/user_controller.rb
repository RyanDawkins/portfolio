
class UserController < RestController

  before_filter :authenticate, :only => [:create, :delete, :update]

  def get_class
    User
  end

  def login
    if User.authenticate params[:email], params[:password]
      render json: User.create_token(params[:email], request.remote_ip)
    else
      render json: {
                 message: "Wrong info"
             }
    end
  end

  def from_params
    params.permit(:username, :password, :email, :first_name, :last_name, :role)
  end

end