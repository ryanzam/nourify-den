import Food from "./Food"

interface IParams {
    foodId: string
}

const fetchFood = async (id: string) => {
    const response = await fetch(`${process.env.BASE_URI}/api/foods/${id}`)
    return await response.json()
}

const FoodPage = async ({ params }: {params: IParams}) => {

    const food = await fetchFood(params.foodId)

    return (
        <Food food={food} />
    )
}

export default FoodPage