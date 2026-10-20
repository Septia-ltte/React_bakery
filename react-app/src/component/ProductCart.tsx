import ButtonCounter from "./ButtonCounter";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
  isAdded: boolean;
  onToggleCart: () => void;
};

function ProductCard({
  product,
  isAdded,
  onToggleCart,
}: ProductCardProps) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <span className="product-price">
          Rp {product.price.toLocaleString("id-ID")}
        </span>
      </div>
      
      <div className="product-footer">
        <ButtonCounter
          text={isAdded ? "Remove from Cart" : "Add to Cart"}
          eventOnHandle={onToggleCart}
          className={isAdded ? "remove-button" : "add-button"}
        />
      </div>
    </div>
  );
}

export default ProductCard;