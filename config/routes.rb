Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :users do
      resources :posts
    end
    get 'friended', to: "users#friends"
    get 'notFriended', to: "users#not_friended"
    put 'friending', to: "users#update_friends"
  end
end
