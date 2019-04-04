class RemoveCurrentyCityFromApplications < ActiveRecord::Migration[5.2]
  def change
    remove_column :applications, :currenty_city, :string
    add_column :applications, :current_city, :string
  end
end
