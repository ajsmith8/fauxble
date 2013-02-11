class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :issue_id
      t.string :title
      t.boolean :is_slider
      t.timestamps
    end
  end
end
