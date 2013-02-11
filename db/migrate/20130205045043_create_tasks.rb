class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :issue_id
      t.integer :question_id
      t.integer :challenge_id
      t.integer :user_id
      t.integer :answer_id
      t.float :answer
      t.integer :score, default: 0
      t.integer :time, default: 0
      t.timestamps
    end
  end
end
