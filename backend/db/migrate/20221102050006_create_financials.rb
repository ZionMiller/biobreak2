class CreateFinancials < ActiveRecord::Migration[7.0]
  def change
    create_table :financials do |t|
      t.belongs_to :stocks, null: false, foreign_key: true

      t.timestamps
    end
  end
end
