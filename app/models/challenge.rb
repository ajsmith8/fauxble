class Challenge < ActiveRecord::Base
  attr_accessible :issue_id, :question_ids, :challenger_id, :challenger_score, 
                  :user_id, :user_score, :winner_id, :is_sent, :is_finished 
end
