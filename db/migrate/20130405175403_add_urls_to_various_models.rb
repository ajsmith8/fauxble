class AddUrlsToVariousModels < ActiveRecord::Migration
  def change
    add_column :issues, :url, :string
    add_column :users, :url, :string
    add_column :questions, :url, :string
  end
end
