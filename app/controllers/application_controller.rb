class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
        
        protected

        def configure_permitted_parameters
          added_attrs = [:name, :email, :password]
          devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
          devise_parameter_sanitizer.permit :account_update, keys: added_attrs
        end
end
