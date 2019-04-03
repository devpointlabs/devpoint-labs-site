class AddCourseAndLocationToContacts < ActiveRecord::Migration[5.2]
  def change
    add_column :contacts, :course, :string
    add_column :contacts, :location, :string
  end
end
