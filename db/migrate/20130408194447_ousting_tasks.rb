class OustingTasks < ActiveRecord::Migration
  def up
    add_column :ranks, :facts, :integer, default: 0
  end

  def down
  end
end
