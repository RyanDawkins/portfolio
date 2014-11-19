class PostController < RestController

  def get_class
    Post
  end

  def from_params
    params.permit(:title, :content)
  end

end