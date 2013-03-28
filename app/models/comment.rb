class Comment < ActiveRecord::Base
  attr_accessible :issue_id, :user_id, :title, :ancestry
end
