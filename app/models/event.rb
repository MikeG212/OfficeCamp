class Event < ApplicationRecord
  validates :description, :date, :start_time, :end_time, :lead_id, presence: true
end
