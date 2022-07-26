class RecipesController < ApplicationController
    def index
        recipes = Recipe.all 

        render json: recipes
     
    end


    def create
        recipe = Recipe.new
            if recipe.save 
        render json: recipe, status: :created
        end
    end     

    
end
