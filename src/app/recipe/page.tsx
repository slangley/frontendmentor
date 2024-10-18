
import { Card, CardContent } from "~/components/ui/card"
import Image from 'next/image';
import { Table, TableRow, TableBody, TableCell } from "~/components/ui/table";

import { Young_Serif, Outfit } from "next/font/google";

const serif = Young_Serif({ subsets: ['latin'], weight:"400" });
const sans = Outfit({ subsets: ['latin'] });


const instructions = [
    { title: 'Beat the eggs:', content: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.' },
    { title: 'Heat the pan:', content: 'Place a non-stick frying pan over medium heat and add butter or oil.' },
    { title: 'Cook the omelette:', content: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.' },
    { title: 'Add fillings (optional):', content: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.' },
    { title: 'Fold and serve:', content: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.' },
    { title: 'Enjoy:', content: 'Serve hot, with additional salt and pepper if needed.' },
]

const ingredients = [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs'
]

const nutrition = [
    { name: 'Calories', value: '277kcal' },
    { name: 'Carbs', value: '0g' },
    { name: 'Protein', value: '20g' },
    { name: 'Fat', value: '22g' },
]

const preparationTime = [
    { name: 'Total: ', value: 'Approximately 10 minutes' },
    { name: 'Preparation: ', value: '5 minutes' },
    { name: 'Cooking: ', value: '5 minutes' },
]

function RecipeContents() {
    return <div>
        <Image className="rounded-xl w-full h-auto" src="/assets/images/recipe/image-omelette.jpeg" alt="Omelette" width={660} height={300} />
        <div className="px-6">
            <h1 className={`${serif.className} font-medium text-5xl py-4 text-stone-700`}>Simple Omelette Recipe</h1>
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
            to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            <div className="py-4">
                <Card className="bg-purple-50 p-5">
                    <h2 className={`${sans.className} font-medium text-xl text-purple-800 pb-4 mx-4`}>Preparation time</h2>
                    <ul className="mx-4 list-disc pl-0">
                        {preparationTime.map((item, index) => (
                            <li key={index} className="mb-4 flex items-start list-none">
                                <span className="text-purple-800 mr-2 text-2xl leading-none w-4 flex-shrink-0">&bull;</span>
                                <span className="font-semibold mr-1">{item.name}</span>
                                <span>{item.value}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
            <h2 className={`${serif.className} font-bold text-3xl py-4 text-amber-700`} >Ingredients</h2>
            <ul className="list-none pl-0">
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start mb-2">
                        <span className="text-stone-700 mr-2 text-xl leading-none w-4 flex-shrink-0">&bull;</span>
                        <span className="text-stone-800">{ingredient}</span>
                    </li>
                ))}
            </ul>
            <hr />
            <h2 className={`${serif.className}  font-bold text-3xl py-4 text-amber-700`}>Instructions</h2>
            <div className="max-w-2xl">
                <ol className="list-none p-0">
                    {instructions.map((instruction, index) => (
                        <li key={index} className="flex mb-4">
                            <span className="text-amber-700 font-bold mr-2  w-4 flex-shrink-0">{index + 1}.</span>
                            <div>
                                <span className="font-bold text-stone-900">{instruction.title}</span>{' '}
                                <span className="text-stone-800">{instruction.content}</span>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <h2 className={`${serif.className}  font-bold text-3xl py-4 text-amber-700`}>Nutrition</h2>
            The table below shows nutritional values per serving without the additional fillings.
            <Table>
                <TableBody>
                    {nutrition.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="px-8">{item.name}</TableCell>
                            <TableCell className="font-extrabold text-amber-700">{item.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </div>
}


function RecipeCard({ children }: { children: React.ReactNode }) {
    return <div className="">
        <Card className="max-w-2xl  mx-auto">
            <CardContent className="flex flex-col py-5 items-left justify-center">
                {children}
            </CardContent>
        </Card>
    </div>

}

export default function page() {
    return (
        <div className={` bg-orange-100 ${sans.className}`}>
            <div className="hidden sm:block py-10">
                <RecipeCard>
                    <RecipeContents />
                </RecipeCard>
            </div>
            <div className="block sm:hidden bg-white">
                    <RecipeContents />
            </div>
        </div>


    )
}