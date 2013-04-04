class AddFactLearnedToUsers < ActiveRecord::Migration
  def change
    add_column :users, :facts, :integer, default: 0
  end
end
