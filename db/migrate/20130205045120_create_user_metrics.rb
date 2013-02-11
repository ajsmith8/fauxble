class CreateUserMetrics < ActiveRecord::Migration
  def change
    create_table :user_metrics do |t|
      t.string :user_name
      t.integer :user_id
      t.integer :challenges_started, default: 0
      t.integer :challenges_finished, default: 0
      t.integer :challenges_created, default: 0
      t.integer :challenges_recieved, default: 0
      t.integer :complete_replies, default: 0
      t.integer :num_users_challenged, default: 0
      t.integer :num_challenged_users, default: 0
      t.integer :time_on_site, default: 0
      t.timestamps
    end
  end
end
