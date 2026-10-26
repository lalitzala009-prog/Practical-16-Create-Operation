import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  function addProduct(e) {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: name,
      price: Number(price),
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  }

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <h1>Product Management</h1>
          <p>Add products and manage your product list</p>
        </header>

        <section className="form-card">
          <h2>Add New Product</h2>

          <form onSubmit={addProduct}>
            <label htmlFor="name">Product Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="price">Product Price (₹)</label>
            <input
              id="price"
              type="number"
              placeholder="Enter product price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="0.01"
              step="0.01"
              required
            />

            <button type="submit">+ Add Product</button>
          </form>
        </section>

        <section className="products-section">
          <div className="section-heading">
            <h2>Product List</h2>
            <span className="count">{products.length} Products</span>
          </div>

          {products.length === 0 ? (
            <div className="empty-state">
              <p>No products added yet.</p>
              <span>Add your first product using the form above.</span>
            </div>
          ) : (
            <div className="product-list">
              {products.map((product, index) => (
                <div className="product-item" key={product.id}>
                  <div className="product-number">{index + 1}</div>

                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>Product #{index + 1}</p>
                  </div>

                  <div className="product-price">
                    ₹{product.price.toLocaleString("en-IN")}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        
      </div>
    </div>
  );
}

export default App;