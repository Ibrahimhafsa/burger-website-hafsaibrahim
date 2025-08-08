export default function handler(req, res){
    const products = [
        {
            id: 1,
            name:"Cheese Burger",
            price: 280.00,
            image:"/menu1.jpg"
        },

        {
            id: 2,
            name:"Classic Beef Burger",
            price: 390.00,
            image:"/menuu2.jpg"
        },

        {
            id: 3,
            name:"Double Beef Burger",
            price: 350.00,
            image:"/menu3.jpg"
        },

        {
            id: 4,
            name:"Bouncy Bun Burger",
            price: 450.00,
            image:"/menu4.jpg"
        },

        {
            id: 5,
            name:"BBQ Burger",
            price: 520.00,
            image:"/menu5.jpg"
        },

        {
            id: 6,
            name:"Bacon Cheese Burger",
            price: 650.00,
            image:"/menu6.jpg"
        },

    ];
    res.status(200).json(products);
}