class RecipesController < ApplicationController
    def index
        @recipes = Recipe.all 

        render json: @recipes
     
    end


    def create
        @recipe = Recipe.new 

        render json: @recipes
    end     
end
