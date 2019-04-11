class AddCourseToScholarships < ActiveRecord::Migration[5.2]
  def change
    add_column :scholarships, :course, :string
  end
end
