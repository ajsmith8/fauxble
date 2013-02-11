class Task < ActiveRecord::Base
  attr_accessible :issue_id, :question_id, :challenge_id, :user_id, :answer_id, :answer, :score, :time
end
