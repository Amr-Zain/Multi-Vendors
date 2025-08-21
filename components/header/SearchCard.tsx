function SearchCard({image, name, price}:{image: string; name: string; price: string}) {
  return (
    <div
      className={`flex items-center gap-2 py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer`}
    >
      <img
        src={image}
        alt={name}
        width={50}
        height={50}
        className="w-12 h-12 rounded-lg object-cover"
      />
      <div className={`flex flex-col flex-1 text-foreground hover:text-primary`}>
        <span className="font-medium text-sm">
          {name}
        </span>
        <span className="text-sm font-semibold">
          {price}
        </span>
      </div>
    </div>
  );
}

export default SearchCard;
