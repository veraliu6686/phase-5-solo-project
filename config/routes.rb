Rails.application.routes.draw do
scope 'api' do
  resources :diaries
  resources :pets
  resources :users

  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#delete'
  get '/authorized_user', to: 'users#show'
end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
