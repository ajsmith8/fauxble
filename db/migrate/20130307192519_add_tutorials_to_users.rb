class AddTutorialsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :tutorials, :string
  end
end
