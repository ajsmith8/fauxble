class Rank < ActiveRecord::Base
  attr_accessible :issue_id, :user_id, :score
end
