import React from 'react';
function Main() {
    const [ingredients, setIngredients] = React.useState([]);

    const ingredientListItems = ingredients.map((ingredient, index) => (
                <li key={index}>
                    {ingredient}
                </li>
            ));

    function handleSubmit(formData) {
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
        <form action={handleSubmit} className="ingredient-form">
            <input  aria-label="Add ingredient" 
                    type="text" 
                    placeholder="e.g. pasta carbonara"
                    name="ingredient" 
                    />
            <button type="submit">+ Add ingredient</button>
        </form>
        <h2>Ingredients on hand: </h2>
        <ul>
          {ingredientListItems}
        </ul>
    </div>
  );
}

export default Main;
