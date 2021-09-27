class AddFriendToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :friend, :text
  end
end
