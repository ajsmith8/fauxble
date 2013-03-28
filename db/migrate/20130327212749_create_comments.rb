class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :issued_id
      t.integer :user_id
      t.string :title
      t.string :ancestry
      
      t.timestamps
    end
  end
end
