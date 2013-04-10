class AddFactsToIssues < ActiveRecord::Migration
  def change
    add_column :issues, :facts, :integer, default: 0
  end
end
