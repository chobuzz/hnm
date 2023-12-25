import React from "react";
import { useParams, Redirect } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return <div>상품 상세 페이지 {id}</div>;
};

export default ProductDetail;
