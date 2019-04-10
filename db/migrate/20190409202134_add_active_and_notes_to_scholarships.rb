class AddActiveAndNotesToScholarships < ActiveRecord::Migration[5.2]
  def change
    add_column :scholarships, :active, :boolean
    add_column :scholarships, :notes, :text
  end
end
