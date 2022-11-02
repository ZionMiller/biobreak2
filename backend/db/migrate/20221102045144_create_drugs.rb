class CreateDrugs < ActiveRecord::Migration[7.0]
  def change
    create_table :drugs do |t|
      t.belongs_to :pipeline, null: false, foreign_key: true
      t.string :drug_name
      t.string :indication
      t.string :stage
      t.string :catalyst

      t.timestamps
    end
  end
end
