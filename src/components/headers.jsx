import { Link } from "react-router-dom";
import { FaShoppingBag, FaChevronDown } from "react-icons/fa";

export const Headers = ({ cartCount = 0, totalPrice = 0 })=> {
    return(
        <>
        <header className="flex items-center justify-between
         p-4 bg-white shadow-md sticky top-0 z-50">
            {/* left sec logo + drop */}
            <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-green-600">Nanshiv Shoppings</h1>
                 <button className="flex items-center gap-1 
                 bg-gray-100 px-3 py-1 rounded-md text-sm font-medium">
          Grocery <FaChevronDown size={10} /> </button>
            </div>

            {/* centre section navigate */}
            <nav className="hidden md:flex gap-6 text-sm 
            text-gray-600 font-medium">
                <a href="#">Buy</a>
                <a href="#">Discount</a>
                <a href="#">Contact</a>
                <a href="#">Visit</a>
            </nav>

            {/* right sec action  */}
            <div className="flex items-center gap-4">
                <button className="px-4 py-1 border-green-600 text-green-600 rounded-md text-sm"
                >Join</button>
                <button  className="px-4 py-1 bg-green-600 text-white rounded-md text-sm">
                    Seller</button>
            </div>

            {/* cart badge  */}

            <div className="relative">
                <FaShoppingBag size={24} className="text-green-600">
                    {cartCount > 0 && (
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">
                            {cartCount}
                        </div>
                    )}
                    <span className="block text-xs
                     text-right mt-1 text-gray-500">
                         ${totalPrice.toFixed(2)}
                    </span>
                </FaShoppingBag>
            </div>
        </header>
        </>
    )
}