type ProductSearchProps = {
  searchText: string;
  onSearchChange: (value: string) => void;
};

export default function ProductsSearch ({searchText, onSearchChange}: ProductSearchProps) {
    return (
        <div className="">
            <input type="text"
             className=""
             value={searchText}
             onChange={(e)=> onSearchChange(e.target.value)}
             placeholder="Search products....."
             />
        </div>
    )
};

