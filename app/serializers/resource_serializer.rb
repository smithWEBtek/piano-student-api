class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :description, :format, :location, :url
  has_many :lesson_resources
  has_many :lessons, through: :lesson_resources
  has_many :students, through: :lessons
  has_many :teachers, through: :lessons
end