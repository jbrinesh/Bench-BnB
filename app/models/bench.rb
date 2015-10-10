require 'byebug'
class Bench < ActiveRecord::Base
  def self.in_bounds(bounds)

    in_bounds = [];
    all_benches = self.all
    all_benches.each do |bench|

      if bench.lat < bounds["northEast"]["lat"].to_f &&
        bench.lng < bounds["northEast"]["lng"].to_f &&
        bench.lat > bounds["southWest"]["lat"].to_f &&
        bench.lng > bounds["southWest"]["lng"].to_f

          in_bounds << bench
      end
    end
    return in_bounds
  end



end
