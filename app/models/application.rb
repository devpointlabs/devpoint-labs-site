class Application < ApplicationRecord
  validates :comments, presence: true
  validates :comments1, presence: true
  validates :comments2, presence: true
  validates :course, presence: true
  validates :location, presence: true
  validates :grad, presence: true
  validates :experience, presence: true
  validates :gender, presence: true
  validates :social, presence: true
end


