class Rank < ActiveRecord::Base
  attr_accessible :issue_id, :user_id, :score
  
  def self.create_from_challenge(challenge)
    rank = Rank.where(user_id: challenge.challenger_id, issue_id: challenge.issue_id)[0]
    
    if !rank
      rank = Rank.create(
        user_id: challenge.challenger_id,
        issue_id: challenge.issue_id
      )
    end
    
    rank.score = rank.score + challenge.challenger_score
    rank.save
  end
  
  def self.update_facts(task)
    tasks = Task.where(question_id: task.question_id, user_id: task.user_id)
    rank = Rank.where(user_id: task.user_id, issue_id: Question.find_by_id(task.question_id).issue_id)[0]
    
    if rank
      if tasks.length == 1
        rank.facts = rank.facts + 1
        rank.save
      end
    else
      Rank.create(issue_id: Question.find_by_id(task.question_id).issue_id, user_id: task.user_id, score: task.score, facts: 1)
    end
  end
end
