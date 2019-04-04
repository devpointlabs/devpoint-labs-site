class AddCommentsAndComments1AndComments2AndComments3AndCurrentCityToScholarships < ActiveRecord::Migration[5.2]
  def change
    add_column :scholarships, :comments, :string
    add_column :scholarships, :comments1, :string
    add_column :scholarships, :comments2, :string
    add_column :scholarships, :comments3, :string
    add_column :scholarships, :current_city, :string
    remove_column :scholarships, :currenty_city, :string
  end
end
