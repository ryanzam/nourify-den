type Servings = {
    title: string;
    extraPrice: number;
}

type Food = {
    id: number;
    title: string;
    desc?: string;
    image?: string;
    price: number;
    servings?: Servings[]
};

export const mostPopularFoods: Food[] = [
    {
        id: 1,
        title: "Grilled Chicken",
        desc: "Fresh chicken pieces marinated in spices overnight and grilled. This tasty and delicious appetizer will nourish and statisfy you.",
        image: "https://img.freepik.com/free-photo/stir-fry-chicken-sweet-peppers-green-beans_2829-20110.jpg",
        price: 11.5,
        servings: [
            { title: "Medium", extraPrice: 0 },
            { title: "Large", extraPrice: 3 }
        ]
    },
    {
        id: 2,
        title: "Momos",
        desc: "Momos aka. dumplings, stuffed with veggies or minced lamb or chicken. They are served with various pickles and sauces for delicious snack",
        image: "https://img.freepik.com/free-photo/side-view-traditional-asian-dumplings-with-meat-vegetables-served-with-soy-sauce-plate-rustic_141793-11564.jpg",
        price: 8,
        servings: [
            { title: "Medium", extraPrice: 0 },
            { title: "Medium", extraPrice: 2 },
            { title: "Large", extraPrice: 3 }
        ]
    },
    {
        id: 3,
        title: "Wok",
        desc: "An easy everyday meal made from wok chicken and chicken fillet strips. The quick wok is ready in no time.",
        image: "https://img.freepik.com/free-photo/stir-fry-chicken-sweet-peppers-green-beans_2829-20110.jpg",
        price: 13.5,
        servings: [
            { title: "Medium", extraPrice: 0 },
            { title: "Large", extraPrice: 5 }
        ]
    },
    {
        id: 4,
        title: "Coffee",
        desc: "Freshly roasted and grounded coffee.",
        image: "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg",
        price: 1.5,
        servings: [
            { title: "Small", extraPrice: 0 },
            { title: "Medium", extraPrice: 1 },
            { title: "Large", extraPrice: 2 }
        ]
    }
]

type Menu = {
    id: number;
    category: string;
    title: string;
    desc?: string;
    image?: string;
}

export const menu: Menu[] = [
    {
        id:1,
        category: "Veg",
        title: "Vegetarian/Vegan",
        desc: "",
        image: ""
    },
    {
        id:1,
        category: "Non-Veg",
        title: "Non veg - Chickens, eggs",
        desc: "meat items",
        image: ""
    },
    {
        id:1,
        category: "drinks",
        title: "Tasty drinks",
        desc: "Enjoy tea or coffee",
        image: ""
    }
]