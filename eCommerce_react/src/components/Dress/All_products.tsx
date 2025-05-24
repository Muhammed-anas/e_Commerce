import dressesData from "../../data/dresses";
import { Link } from "react-router-dom";

type Dress = {
  id: number;
  price: number | string;
  image: string;
  rating: number | string;
};

// called the all dress datas from 'data/dresses' 
const dresses = dressesData as Dress[];

function AllDresses() {
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-100
     to-neutral-200 p-6">
      <h2 className="text-2xl font-bold text-center text-black mb-10">
        Discover Our All Products
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5
       gap-10 max-w-7xl mx-auto">

        {dresses.map((dress) => (

          <Link to=
          {`/dress/${dress.id}`}
           key={dress.id}>

          <div className="rounded-2xl hover:shadow-2xl overflow-hidden transform
           transition duration-300 hover:scale-105 cursor-pointer">

            <img src={dress.image}
              alt={`Dress ${dress.id}`}
        className="w-full h-40 sm:h-48 md:h-60 object-cover bg-white"/>

        
          <div className="p-5">
          <p className="text-pink-600 font-bold mt-2 text-sm">${dress.price}</p>
            <p className="text-gray-600 mt-1 text-sm">
                Rating: {"⭐".repeat(Math.floor(Number(dress.rating)))}
                 ({dress.rating})
         </p>
         </div>
          </div>
        </Link>


        ))}
  </div>
    </div>
  );
}

export default AllDresses;
