class AddActiveAndNotesToSubscribers < ActiveRecord::Migration[5.2]
  def change
    add_column :subscribers, :active, :boolean
    add_column :subscribers, :notes, :text
  end
end
