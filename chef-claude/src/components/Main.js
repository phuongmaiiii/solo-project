import React from 'react';
function Main() {
    const [ingredients, setIngredients] = React.useState([]);

    const ingredientListItems = ingredients.map((ingredient, index) => (
                <li key={index}>
                    {ingredient}
                </li>
            ));

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
        {ingredients.length > 0 && 
        <section>
          <h2>Ingredients on hand: </h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientListItems}
          </ul>
          { ingredients.length > 3 &&
            <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
        </section>}
    </div>
  );
}

export default Main;
