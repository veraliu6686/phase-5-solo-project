Rails.application.routes.draw do
  resources :todos
scope 'api' do
  resources :diaries
  resources :pets
  resources :users
  resources :follows, only: [:index, :create, :destroy]
  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#delete'
  get '/authorized_user', to: 'users#show'
  delete '/unfollow', to: 'follows#destroy'
end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
