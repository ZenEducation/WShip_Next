import React from "react";
import { Button } from "components/AfterAuth/ui";
import { HiDownload, HiPlusCircle } from "react-icons/hi";
import ProductTableSearch from "./ProductTableSearch";
import ProductFilter from "./ProductFilter";
// import { Link } from "react-router-dom";
import Link from "next/link";
const ProductTableTools = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center">
      <ProductTableSearch />
      <ProductFilter />
      <Link
        className="block lg:inline-block md:mx-2 md:mb-0 mb-4"
        href="/data/product-list.csv"
        target="_blank"
        download
      >
        <Button block size="sm" icon={<HiDownload />}>
          Export
        </Button>
      </Link>
      <Link
        className="block lg:inline-block md:mb-0 mb-4"
        href="/AA/app/sales/product-new"
      >
        <Button block variant="solid" size="sm" icon={<HiPlusCircle />}>
          Add Product
        </Button>
      </Link>
    </div>
  );
};

export default ProductTableTools;
