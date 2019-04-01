class CreateScholarships < ActiveRecord::Migration[5.2]
  def change
    create_table :scholarships do |t|
      t.boolean :part
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone_number
      t.string :currenty_city

      t.timestamps
    end
  end
end
