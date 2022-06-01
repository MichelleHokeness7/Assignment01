class Recipe {
    constructor(title, servings) {
        this._title = title;
        this._servings = servings;
        this._ingredients = [
            '1 large ripe hass avocado',
            '3/4 cup parmesan cheese freshly grated or finely shredded',
            '1 tsp lemon juice',
            '1/2 tsp garlic powder',
            '1/4 tsp onion powder',
            '1/8 tsp ground black pepper'
        ]   
    }
    displayRecipeInfo = function() {
        
        console.log(`${this._title}:\nServings: ${this._servings} Chips\nIngredients:\n`);
        for (let i = 0; i < this._ingredients.length; i++) {
            console.log(`${this._ingredients[i]}`)
        }
    }   
}
const recipe1 = new Recipe('Avocado Chips', 6);
recipe1.displayRecipeInfo();   