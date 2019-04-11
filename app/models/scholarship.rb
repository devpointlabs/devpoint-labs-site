class Scholarship < ApplicationRecord
  validates :course, presence: true
  validates :comments, presence: true
  validates :comments1, presence: true
  validates :comments2, presence: true
  validates :comments3, presence: true
end
