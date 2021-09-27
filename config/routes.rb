Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
<<<<<<< HEAD
    resources :users
    resources :posts
=======
    resources :users do
      resources :posts
    end
>>>>>>> a66023f7ffbe4b979996e6c7e124d6bbf493b328
  end
end
