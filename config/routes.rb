Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :todos, only: [:index, :show, :create, :update, :destroy] do
      resources :steps, only: [:index, :create]
  end

    resources :steps, only: [:update, :destroy]
  end
end
