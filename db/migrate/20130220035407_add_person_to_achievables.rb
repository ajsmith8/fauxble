class AddPersonToAchievables < ActiveRecord::Migration
  def change
    add_column :achievables, :person, :string
  end
end
