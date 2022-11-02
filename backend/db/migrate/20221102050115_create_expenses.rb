class CreateExpenses < ActiveRecord::Migration[7.0]
  def change
    create_table :expenses do |t|
      t.belongs_to :financials, null: false, foreign_key: true
      t.integer :net_loss
      t.string :research_and_

      t.timestamps
    end
  end
end
