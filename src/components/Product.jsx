import React from "react";

// DYNAMIC ROUTING ->
// Jo url me id hai usko fetch krle
import { useParams } from "react-router-dom";
const Product = () => {
  const params = useParams();
  return (
    <div>
      <h1>#PRODUCT ID - {params.id}</h1>
      {/* Exactly same Id miljaegi */}
    </div>
  );
};

export default Product;
