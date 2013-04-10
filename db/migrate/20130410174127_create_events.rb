class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :kind
      t.integer :model_id
      
      t.timestamps
    end
  end
end
