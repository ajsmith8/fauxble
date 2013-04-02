class Task < ActiveRecord::Base
  attr_accessible :issue_id, :question_id, :challenge_id, :user_id, :answer_id, :answer, :score, :time
  
  def self.million_fact_challenge
    users = User.where(signed_in_fb: true).concat(User.where(signed_in: true))
		facts = 0
	  
	  for u in 0..(users.length - 1)
	    id = users[u].id
	    if Task.where(user_id: id)
	      Question.all.each do |q|
	        if Task.where(user_id: id, question_id: q.id)[0]
	          facts = facts + 1
          end
        end
      end
    end
	  
	  facts
  end
end
