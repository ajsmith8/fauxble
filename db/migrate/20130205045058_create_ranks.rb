class CreateRanks < ActiveRecord::Migration
  def change
    create_table :ranks do |t|
      t.integer :issue_id
      t.integer :user_id
      t.integer :score, default: 0
      t.timestamps
    end
  end
end
