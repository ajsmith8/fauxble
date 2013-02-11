class Slider < ActiveRecord::Base
  attr_accessible :issue_id, :question_id, :is_exponential, :min, :correct, :max, :units
end
