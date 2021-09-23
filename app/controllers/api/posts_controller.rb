class Api::PostsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_user
  before_action :set_post, only: [:update, :show, :destroy]


  def index
    render json: Post.all
  end

  def show
    render json: @post
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
    end
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
    end
  end

  def destroy
    render json: @post.destroy
  end

  private
  def set_post
    @post=Post.find(params[:id])
  end

  def set_user
    @user=User.find(params[:user_id])
  end

  def post_params
    params.require(:post).permit(:title, :body)
  end

end
