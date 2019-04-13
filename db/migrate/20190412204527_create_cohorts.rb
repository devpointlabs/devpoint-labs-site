class CreateCohorts < ActiveRecord::Migration[5.2]
  def change
    create_table :cohorts do |t|
      t.string :image_url
      t.string :season
      t.string :description
      t.string :start_date
      t.string :schedule
      t.string :cost
      t.string :location

      t.timestamps
    end
  end
end
