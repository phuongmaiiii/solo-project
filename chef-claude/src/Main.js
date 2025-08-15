import React from 'react';
import ClaudeRecipe from './components/ClaudeRecipe';
import IngredientsList
 from './components/IngredientsList';
function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipeShown, setRecipeShown] = React.useState(false);
    function handleRecipeButtonClick() {
        setRecipeShown(true);
    }
    
    function addIngredient(formData) {
        /*event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        event.currentTarget.reset(); // Clear the input field after submission
        // Note: In a real application, you would update the state here to re-render the component
        setIngredients(preIngredients => [...preIngredients, newIngredient]); // Update state to trigger re-render
        */
       const newIngredient = formData.get("ingredient");
       setIngredients (prevIngredients => [...prevIngredients, newIngredient]);

    }
  return (
    <div className="main-container">
        <form action={addIngredient} className="ingredient-form">
            <input  aria-label="Add ingredient" 
                    type="text" 
                    placeholder="e.g. pasta carbonara"
                    name="ingredient" 
                    />
            <button type="submit">+ Add ingredient</button>
        </form>
        <section>
        {ingredients.length > 0 && <IngredientsList handleRecipeButtonClick={handleRecipeButtonClick} ingredients={ingredients} />}
        {recipeShown && <ClaudeRecipe ingredients={ingredients} />}
        </section>
    </div>
    
  );
}

export default Main;
