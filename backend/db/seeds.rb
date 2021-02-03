recipes = [    
        {
        title: "Ginger Champagne",
        prep: "15m",
        ingredients: %{
        1 (12 ounce) package NESTLE® TOLL HOUSE® Semi-Sweet Chocolate Morsels divided
        1 3/4 cups old-fashioned oats
        1 1/2 cups all-purpose flour
        1/4 cup NESTLE® TOLL HOUSE® Baking Cocoa
        1 teaspoon baking powder
        1/4 teaspoon salt (optional)
        3/4 cup granulated sugar
        2/3 cup butter or margarine, softened
        2 large eggs
        1 teaspoon vanilla extract
        2 (10 ounce) jars maraschino cherries
        },
        directions: %{
        Preheat oven to 350 degrees F (175 degrees C).
        MICROWAVE 1 cup morsels in small, microwave-safe bowl on HIGH (100 percent) power for 1 minute; stir. Microwave at additional 10- to 20-second intervals, stirring until smooth. 
        Combine oats, flour, cocoa, baking powder and salt in medium bowl.
        BEAT sugar, butter, eggs and vanilla extract in large mixer bowl until smooth. 
        Beat in melted chocolate. Stir in oat mixture. Cover; chill dough for 1 hour.
        SHAPE dough into 1-inch balls. Place 2 inches apart on ungreased baking sheet. 
        Press deep centers with thumb. Place maraschino cherry into each center.
        BAKE in preheated 350 degrees F. oven for 10 to 12 minutes or until set.
        Cool on baking sheets for 2 minutes; remove to wire racks to cool completely. 
        Melt remaining morsels; drizzle over cookies 
        },
        thumbnail: "http://img.recipepuppy.com/1.jpg"
        },
        {
        title: "Potato and Cheese Frittata",
        prep: "15min",
        ingredients: %{
        2 tablespoons olive oil
        2 large russet potatoes, peeled and shredded
        1 medium onion, diced salt and pepper to taste
        ½ cup shredded Cheddar cheese
        4 eggs, beaten 
        },
        directions: %{
        Preheat the oven to 400 degrees F (200 degrees C).
        Heat oil in a 12 inch skillet over medium-high heat. When the skillet is hot, add the potatoes, and fry until crispy and golden, about 15 minutes. 
        Reduce heat to medium, and add onions. Cook, stirring, until softened. 
        Season with salt and pepper. 
        Pour eggs over the potatoes and onions. 
        Place the skillet in the oven for about 10 minutes, or until eggs are firm. 
        Remove from the oven, and sprinkle shredded cheese over the top. 
        Return to the oven for about 5 minutes, or until cheese is melted 
        },
        thumbnail: "http://img.recipepuppy.com/2.jpg"
        },
]

recipes.each do |recipe| 
    Recipe.create(title: recipe[:title], prep: recipe[:prep], ingredients: recipe[:ingredients], directions: recipe[:directions], thumbnail: recipe[:thumbnail])
end