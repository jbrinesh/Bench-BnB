Rails.application.routes.draw do
  root to: "static_page#index"

  namespace :api, default: { format: 'json'} do
    resources :bench, only: [:index, :create]
  end
end
