import recipesData from './../data/recipes.json';

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Lista de Receitas</h1>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipesData.map(recipe => (
          <li key={recipe.id} className="border rounded-md overflow-hidden shadow-lg">
            <a href={`/recipes/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.name} className="w-full h-auto" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{recipe.name}</h2>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}