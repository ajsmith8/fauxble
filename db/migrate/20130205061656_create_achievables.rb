class CreateAchievables < ActiveRecord::Migration
  def change
    create_table :achievables do |t|
      t.string :title
      t.string :name
      t.string :image
      t.string :description
      t.integer :count
      t.timestamps
    end
  end
end
