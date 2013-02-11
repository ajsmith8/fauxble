class Answer < ActiveRecord::Base
  attr_accessible :issue_id, :question_id, :title, :is_correct
end
