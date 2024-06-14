import {promises as pr } from 'fs';
import Link from 'next/link'

interface RecipeType{
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
}

export default async function Home({ params }: { params: { id: string } }) {
  const data = await getData(params.id)
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-yellow-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-auto" src={data?.image} alt={data?.name} />
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-red-800">{data?.name}</h1>
          <div>
            <h2 className="text-xl font-semibold text-green-800 mt-4">Ingredientes:</h2>
            <ul className="list-disc ml-8">
              {data?.ingredients.map((ingredient, index) => (
                <li key={index} className="text-blue-800 italic">{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-800 mt-4">Instruções:</h2>
            <ol className="list-decimal ml-8">
              {data?.instructions.map((instruction, index) => (
                <li key={index} className="text-blue-800 italic">{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <br></br>
      <Link href="/recipes">
        <p className='inline-block px-4 py-2 rounded bg-[#ff5e1e] font-bold text-[#ffffff] cursor-pointer'>Voltar</p>
      </Link>
    </div>
    
  );
}

async function getData(id: string): Promise<RecipeType | null> {
  const path = process.cwd() + "/app/data/recipes.json";
  const file = await pr.readFile(path, "utf8");
  const data: RecipeType[] = JSON.parse(file);
  const recipe = data.find(recipe => recipe.id === id);
  return recipe || null;
}

//abrir array e mostrar td