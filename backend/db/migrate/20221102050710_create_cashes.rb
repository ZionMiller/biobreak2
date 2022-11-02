class CreateCashes < ActiveRecord::Migration[7.0]
  def change
    create_table :cashes do |t|
      t.belongs_to :finacials, null: false, foreign_key: true
      t.integer :total_assets
      t.integer :cash_and_equivelants
      t.integer :revenue

      t.timestamps
    end
  end
end
