class CreatePageMetrics < ActiveRecord::Migration
  def change
    create_table :page_metrics do |t|
      t.string :user_name
      t.integer :user_id
      t.string :page_name
      t.integer :time, default: 0
      t.timestamps
    end
  end
end
