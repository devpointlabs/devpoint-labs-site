class AddCommentsAndComments1AndComments2AndCourseAndLocationAndGradAndExperienceAndGenderAndSocialToApplications < ActiveRecord::Migration[5.2]
  def change
    add_column :applications, :comments, :string
    add_column :applications, :comments1, :string
    add_column :applications, :comments2, :string
    add_column :applications, :course, :string
    add_column :applications, :location, :string
    add_column :applications, :grad, :string
    add_column :applications, :experience, :string
    add_column :applications, :gender, :string
    add_column :applications, :social, :string
  end
end
