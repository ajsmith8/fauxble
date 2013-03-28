class FuckedUpIssueIdNameComments < ActiveRecord::Migration
  def up
    rename_column :comments, :issued_id, :issue_id
  end

  def down
  end
end
