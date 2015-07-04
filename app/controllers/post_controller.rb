class PostController < RestController

  before_filter :authenticate, :only => [:create, :delete, :update]

  def get_class
    Post
  end

  def needs_login
    true
  end

  def from_params
    params.permit(:title, :content)
  end

end