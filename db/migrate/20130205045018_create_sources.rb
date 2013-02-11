class CreateSources < ActiveRecord::Migration
  def change
    create_table :sources do |t|
      t.integer :issue_id
      t.integer :question_id
      t.text :url
      t.timestamps
    end
  end
end
