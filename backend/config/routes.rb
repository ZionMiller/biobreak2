Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  get '/me', to: 'users#current_user'
  get '/users/:id', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
  get '/auth', to: 'sessions#logged_in?'
end
