export type FoodType = {
    id: string,
    title: string,
    description: string,
    price: number,
    image: string,
    isFeatured: boolean,
    createdAt?: Date,
    options: []
}

export type CategoryType = {
    id: string,
    title: string,
    description?: string,
    image?: string,
    category: string
}