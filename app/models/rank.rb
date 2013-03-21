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
end
