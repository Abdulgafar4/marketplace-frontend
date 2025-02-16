"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddProduct from "./addProduct";
import ProductList from "./productList";
import { useProducts} from "@/lib/hooks/useProduct";
import {getCategoryLabel} from "@/lib/utils";

export default function ProductContent() {
  const { data, isLoading, isError } = useProducts();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Products</CardTitle>
          <div className="flex space-x-2">
            <AddProduct
              getCategoryLabel={getCategoryLabel}
            />
          </div>
        </CardHeader>
        <CardContent>
          <ProductList
              products={(data as unknown as BaseListingData[]) ?? []}
              isLoading={isLoading}
              isError={isError}
          />
        </CardContent>
      </Card>
    </div>
  );
}
