import Carousel from './components/Carousel'
import MostPopular from "./components/MostPopular"

const fetchFood = async () => {
  const response = await fetch(`${process.env.BASE_URI}/api/foods/`)
  const foods = await response.json()
  return foods.slice(0, 3)
}

export default async function Home() {

  const popularFoods = await fetchFood()

  return (
    <main>
      <Carousel />
      <MostPopular popularFoods={popularFoods} />
    </main>
  )
}
