class AddCategoryToRecipes < ActiveRecord::Migration[6.0]
  def change
    add_column :recipes, :category, :string
  end
end
