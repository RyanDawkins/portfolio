class PostController < ApplicationController

  respond_to :json
  before_filter :find, :only => [:show, :delete, :update]

  def create

    # We grab the params to save so we don't call the method again
    data = post_params
    if data
      @post = Post.new data
    else
      @post = error "Invalid parameters"
    end

    render json: @post
  end

  def update

    # Checking if post is nil so we don't call save
    if @post and (data=post_params)
      @post.update(data)
      
      # We check if save fails so we can send a corresponding error message
      unless @post.save
        @post = error "Invalid parameters"
      end
    else
      @post = error "No post with given primary key"
    end

    render json: @post
  end

  def destroy

    if @post
      @post.destroy
    else
      @post = error "No post with given primary key"
    end

    render json: @post
  end

  def show

    if @post.nil?
      @post = error "No post with given primary key"
    end

    render json: @post
  end

  private

  def find
    begin
      @post = Post.find(params[:id])
    rescue
      @post = nil
    end
  end

  def post_params
      begin
          return params.permit(:title, :content)
      rescue
          return nil
      end
  end

end
