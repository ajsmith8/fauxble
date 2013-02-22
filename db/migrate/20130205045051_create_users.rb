class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :provider
      t.string :uid
      t.string :encrypted_token
      t.string :encrypted_email
      t.string :encrypted_password
      t.string :password_salt
      t.boolean :signed_in, default: false
      t.boolean :signed_in_fb, default: false
      t.timestamps
    end
  end
end
