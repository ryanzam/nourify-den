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

export type OrderType = {
    id: string;
    foods: FoodInCartType[];
    status: OrderStatus;
    price: number;
    createdAt: Date;
    intent_id?: String;
    userEmail: string;
};

export type FoodInCartType = {
    id: string,
    title: string,
    price: number,
    image?: string,
    optsTitle?: string,
    quantity: number
}


export enum OrderStatus {
    ORDER_RECEIVED = "Order received",
    OUT_FOR_DELIVERY = "Out of delivery",
    DELIVERED = "Delivered"
}