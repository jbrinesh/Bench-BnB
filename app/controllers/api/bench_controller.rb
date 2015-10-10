class Api::BenchController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    render json: @benches
  end

  def create

  end
end
