Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :applications
    resources :scholarships
    resources :contacts
    resources :instagrams, only: :index
    resources :subscribers
    resources :users, only: :update
    resources :cohorts
    resources :abouts
  end

  get '*other', to: 'static#index'
    
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
