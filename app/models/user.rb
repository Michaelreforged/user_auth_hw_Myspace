# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_many :posts, dependent: :destroy


  serialize :friend, Array

  def self.friends(ids)
    ids = ids.empty? ? [0] : ids
    User.where("id IN (?)", ids)
  end

  def self.not_friends(ids)
    ids = ids.empty? ? [0] : ids
    User.where("id NOT IN (?)", ids)
   end
   

end
