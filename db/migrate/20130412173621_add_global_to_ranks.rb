class AddGlobalToRanks < ActiveRecord::Migration
  def change
    add_column :ranks, :is_global, :boolean, default: false
  end
end
