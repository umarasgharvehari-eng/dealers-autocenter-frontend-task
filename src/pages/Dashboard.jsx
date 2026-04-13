import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import SortSelect from "../components/SortSelect";
import { getProducts } from "../services/api";
import "../styles/dashboard.css";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProducts();
        setProducts(data);
            } catch {
        setError("Unable to fetch products at the moment. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = [...filteredProducts];

    switch (sortOption) {
      case "name-asc":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return sortedProducts;
  }, [products, searchTerm, sortOption]);

  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Product Listing Dashboard</h2>
        <p className="dashboard-subtitle">
          Browse products, search by name, and sort results easily.
        </p>
      </div>

      <div className="dashboard-controls">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <SortSelect
          sortOption={sortOption}
          onSortChange={setSortOption}
        />
      </div>

      {loading && (
  <p className="status-message">Loading products from the API...</p>
)}

{error && <p className="status-message error-message">{error}</p>}

{!loading && !error && filteredAndSortedProducts.length === 0 && (
  <p className="status-message">
    No matching products found. Try a different search term.
  </p>
)}

      {!loading && !error && filteredAndSortedProducts.length > 0 && (
        <div className="product-grid">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Dashboard;