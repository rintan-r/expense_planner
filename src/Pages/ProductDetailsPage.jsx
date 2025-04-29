import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
    const { productId } = useParams();

    return (
        <div className="p-10">
            <h1 className="text-4xl">Ini halaman Product ID : {productId} </h1>
            <p> Ini halaman untuk produk dengan ID : {productId} </p>
        </div>
    );
}

export default ProductDetailsPage;