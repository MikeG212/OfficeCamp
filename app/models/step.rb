class Step < ApplicationRecord
  validates :title, presence: true
  validates :done, inclusion: { in: [true, false] }

  after_initialize { self.done = false if self.done.nil? }

  belongs_to :todo

  has_one :user,
    through: :todo,
    source: :user
end
