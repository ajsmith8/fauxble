class Feedback < ActiveRecord::Base
  attr_accessible :content, :user_id
end
