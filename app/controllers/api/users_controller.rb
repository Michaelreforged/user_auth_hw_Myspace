class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:show,:update,:destroy]

  def index
    render json: User.all
  end
  
  def not_friended
    render json: User.not_friends(current_user.friend)
  end

  def friends
    render json: User.friends(current_user.friend)
  end

  def show
    render json: @user
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: {errors: user.errors}, status: 422
    end
  end

  def update_friends
    current_user.friend << params[:id].to_i
    current_user.save
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: {errors: @user.errors}, status: 422
    end
  end

  def destroy
    @user.destroy
    render json: @user
  end

  private
  
  def set_user
    @user= User.find(params[:user_id])
  end 

  def user_params
    params.require(:user).permit(:name)
  end 
end
