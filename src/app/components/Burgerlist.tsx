const products = [
  {
    id: 1,
    title: "Cheese Burger",
    category: "Special Cheesy",
    price: "320.00",
    imageURL: "/burger4.jpg",
    bgColor: "bg-teal-500",
  },
  {
    id: 2,
    title: "Classic Burger",
    category: "Delight",
    price: "260.00",
    imageURL: "/burger5.jpg",
    bgColor: "bg-orange-400",
  },
  {
    id: 3,
    title: "Loaded Burger",
    category: "Juicy Beef",
    price: "290.00",
    imageURL: "/burger6.jpg",
    bgColor: "bg-teal-500",
  },
];

export default function ProductList() {
  return (
    <section className='bg-gradient-to-r from-gray-900 to-black py-12 sm:py-16'>
      <div className='max-w-6xl mx-auto px-8'>
        <div className='flex flex-wrap justify-evenly gap-8'>
          {products.map((product) => (
            <div
              key={product.id}
              className={`w-[340px] h-[340px] ${product.bgColor} rounded-xl shadow-lg p-5 transform transition duration-500 items-center hover:scale-105 flex flex-col `}
            >
              {/* Image */}
              <img
                src={product.imageURL}
                alt={product.title}
                className='w-60 h-40 object-contain mb-0'
              />

              {/* Text below image */}
              <div className='text-white text-center mb-auto'>
                <p className='text-1xl font-semibold text-white/80 mt-8'>{product.category}</p>
                <h3 className='text-2xl font-bold'>{product.title}</h3>
              </div>

              {/* Price at bottom right */}
              <div className='w-full flex justify-center mt-4'>
                <span className='bg-white  text-orange-500 text-xl font-semibold px-3 py-1 rounded-full'>
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}