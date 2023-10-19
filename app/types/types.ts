export type FoodType = {
    id: string,
    title: string,
    description: string,
    price: number,
    image: string,
    isFeatured: boolean,
    createdAt?: Date,
    options: OptionsType[]
}

export type OptionsType = {
    title: string,
    extraPrice: number
}

export type CategoryType = {
    id: string,
    title: string,
    description?: string,
    image?: string,
    category: string
}