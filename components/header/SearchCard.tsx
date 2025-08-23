import { Product } from "@/types/products";

function SearchCard({ product }: { product: Product }) {
  return (
    <div
      className={`flex items-center gap-2 py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer`}
    >
      <img
        src={product.main[0]}
        alt={product.name}
        width={50}
        height={50}
        className="w-12 h-12 rounded-lg object-cover"
      />
      <div
        className={`flex flex-col flex-1 text-foreground hover:text-primary`}
      >
        <span className="font-medium text-sm">{product.name}</span>
        <div className="flex gap-2">
          {product?.discount_type === "percentage" ? (
            <>
              <span className="text-sm font-semibold">
                {product.price_after_discount}
              </span>
              <span className="text-sm line-through text-muted-foreground">
                {product.price}
              </span>
            </>
          ) : (
            <span className="text-sm font-semibold">
              {product.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
