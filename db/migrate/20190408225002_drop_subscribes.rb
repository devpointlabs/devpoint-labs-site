class DropSubscribes < ActiveRecord::Migration[5.2]
  def change
    drop_table :subscribes
  end
end
