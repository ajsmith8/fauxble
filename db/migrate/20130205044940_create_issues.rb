class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.string :title
      t.text :description
      t.string :image
      t.integer :times_selected, default: 0
      t.timestamps
    end
  end
end
