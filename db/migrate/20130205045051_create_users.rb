class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :provider
      t.string :uid
      t.string :password
      t.string :token
      t.boolean :signed_in, default: false
      t.boolean :signed_in_fb, default: false
      t.timestamps
    end
  end
end
