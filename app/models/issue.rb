class Issue < ActiveRecord::Base
  attr_accessible :title, :description, :image, :times_selected, :url, :facts
end
