

const Menu = [
    {
        id:1,
        name: "Home",
        link: "/"
    },
    {
        id:2,
        name: "Top rated",
        link: "/top_rated"
    },
    {
        id:3,
        name: "Mens Wear",
        link: "/#"
    },
    {
        id:4,
        name: "kids Wear",
        link: "/#"
    },
    {
        id:5,
        name: "Ladies",
        link: "/#"
    },
]


//  create a function ProductsNavbar 
function ProductsNavbar(){
    return(
    <div className="flex justify-center">
            <ul className="sm:flex hidden items-center 
            gap-4">
            {Menu.map((data) => (
            <li key={data.id}>
                    <a href={data.link}
                className="inline-block px-4
                         hover:text-primary duration-200">
                    {data.name}
                    </a>
                    </li> ))}    
        </ul>
            </div>
    )
}

export default ProductsNavbar