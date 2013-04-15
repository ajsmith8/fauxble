class AddColumnsToEvents < ActiveRecord::Migration
  def change
    add_column :events, :user_id, :integer
    add_column :events, :challenger_id, :integer
    add_column :events, :issue_id, :integer
    add_column :events, :achievable_id, :integer
    
    remove_column :users, :facts
    remove_column :ranks, :is_global
  end
end
