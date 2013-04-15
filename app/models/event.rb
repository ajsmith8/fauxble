class Event < ActiveRecord::Base
  attr_accessible :kind, :model_id, :user_id, :challenger_id, :issue_id, :achievable_id
end
