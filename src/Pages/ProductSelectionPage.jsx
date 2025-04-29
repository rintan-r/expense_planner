import { useNavigate  } from "react-router-dom";

const ProductSelectionPage = () => {
    const navigate = useNavigate();

    const products = [
        { id: 1, name: "Paket A" },
        { id: 2, name: "Paket B" },
        { id: 3, name: "Paket C" },
    ];

    return (
        <div className="p-10 space-y-5">
            <h1 className="text-4xl mb-6">Pilih Produk</h1>
            {products.map((product) => (
                <div key = {product.id}>
                    <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/product/${product.id}`)}
                    >
                    {product.name}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProductSelectionPage;