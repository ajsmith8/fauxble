class MoreMetricsForUsers < ActiveRecord::Migration
  def up
    add_column :user_metrics, :answered_yes, :integer, default: 0
    add_column :user_metrics, :answered_no, :integer, default: 0
    add_column :user_metrics, :signed_in, :boolean, default: false
    add_column :user_metrics, :hit_continue, :boolean, default: false
  end

  def down
  end
end
