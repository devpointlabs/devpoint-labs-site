class AddNotesToContacts < ActiveRecord::Migration[5.2]
  def change
    add_column :contacts, :notes, :text
  end
end
