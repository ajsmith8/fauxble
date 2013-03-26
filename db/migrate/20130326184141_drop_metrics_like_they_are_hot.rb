class DropMetricsLikeTheyAreHot < ActiveRecord::Migration
  def up
    drop_table :user_metrics
    drop_table :page_metrics
  end

  def down
  end
end
