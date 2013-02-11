class CreateUserAchievables < ActiveRecord::Migration
  def change
    create_table :user_achievables do |t|
      t.integer :achievable_id
      t.integer :user_id
      t.timestamps
    end
  end
end
