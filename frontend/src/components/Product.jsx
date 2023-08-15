/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helper";

function Product({product}) {
    return (
        <Link to={product.linkProduct} className="h-48 relative items-center rounded-lg overflow-hidden bg-white shadow">
            <img className="w-full h-48 object-cover"
                src={product.linkImage}
                alt="product image"
            />
            <div className="bg-green-500 absolute bottom-0 px-2 py-1">
                <h3 className="line-clamp-1 text-xs font-bold tracking-tight text-gray-100">
                    {product.title}
                </h3>
            </div>
            <p className="bg-green-500 text-xs rounded-lg absolute top-0 right-0 px-2 mr-2 mt-3 font-light text-white">
                {formatCurrency(product.price)}
            </p>
        </Link>
    )
}

export default Product;