import { useState, useEffect } from "react";
import "./App.css";
import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const records = await pb.collection("categories").getFullList();

      setCategories(records);
    };
    fetchCategories();
  }, []);

  return (
    <div className="container">
      <h1>Categories</h1>(
      <table className="category-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.item}</td>
              <td>{cat.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )
    </div>
  );
}
