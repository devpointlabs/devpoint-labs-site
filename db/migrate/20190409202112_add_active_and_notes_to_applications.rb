class AddActiveAndNotesToApplications < ActiveRecord::Migration[5.2]
  def change
    add_column :applications, :active, :boolean
    add_column :applications, :notes, :text
  end
end
