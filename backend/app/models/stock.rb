class Stock < ApplicationRecord
  validates :ticker, presence: true
  validates :name, presence: true
  validates :country, presence: true
end
