class CreatePipelines < ActiveRecord::Migration[7.0]
  def change
    create_table :pipelines do |t|
      t.belongs_to :stock, null: false, foreign_key: true

      t.timestamps
    end
  end
end
