class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :prep
      t.string :ingredients
      t.string :directions
      t.string :thumbnail
    end
  end
end
