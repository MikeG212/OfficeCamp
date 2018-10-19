class TodoList < ApplicationRecord
  validates :name, :description, presence: true

  has_many :todos


  def tag_names=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name)
    end
  end
end
