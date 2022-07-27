class RecipesController < ApplicationController
    before_action :set_recipe, only: [:show, :update, :destory]

    def index
        @recipes = Recipe.all 

        render json: @recipes
     
    end


    def create
        @recipe = Recipe.new(recipe_params)
           
        if @recipe.save 
            render json: @recipe, status: :created, location: @recipes
        else 
            render json: @recipe.errors, status: :unprocessable_entity
        end
    end     



    def destroy
        @recipe.destroy
    end

    def recipe_params
        params.require(:recipe).permit(:title, :ingredients, :prep, :directions)
    end 

end
