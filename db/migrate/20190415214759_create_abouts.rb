class CreateAbouts < ActiveRecord::Migration[5.2]
  def change
    create_table :abouts do |t|
      t.text :abBody1
      t.text :abBody2
      t.text :abBody3

      t.timestamps
    end
  end
end
