class CreateChallenges < ActiveRecord::Migration
  def change
    create_table :challenges do |t|
      t.integer :issue_id
      t.string :question_ids
      t.integer :challenger_id
      t.integer :challenger_score, default: 0
      t.integer :user_id
      t.integer :user_score, default: 0
      t.integer :winner_id
      t.boolean :is_sent, default: false
      t.boolean :is_finished, default: false
      t.timestamps
    end
  end
end
