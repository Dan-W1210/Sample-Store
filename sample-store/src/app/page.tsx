'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";

//商品データの型定義
type Product = {
  id: number
  name: string
  price: number
  imageUrl?: string
};

export default function Home() {
  //商品データを保持するための状態
  const [products, setProducts] = useState<Product[]>([]);

  //コンポーネントの表示直後に一度だけ実行される処理
  useEffect(() => {
    //商品APIからデータを取得
    fetch('/api/products')
    .then(res => res.json())//
    .then(data => setProducts(data))
    .catch(err => console.error('商品データの取得に失敗しました。', err));
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       <section>
        <h2>
          <span>Pick Up</span>
          <span>|</span>
          <span> おすすめ</span>
        </h2>
        <div>
          {products
            .slice(0, 3)
            .map(item => (
              <ProductCard
                key={`pickup-${item.id}`}
                id={item.id.toString()}
                title={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                imageSize={400}
              />
          ))}
        </div>
       </section>

       <section>
        <h2>
          <span>New Arrival</span>
          <span>|</span>
          <span>新着商品</span>
        </h2>
        <div>
          {products
            .slice(0, 4)
            .map(item => (
              <ProductCard
                key={`new-${item.id}`}
                id={item.id.toString()}
                title={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                showCartButton
              />
            ))}
        </div>
       </section>

        <section>
        <h2>
          <span>Hot Item</span>
          <span>|</span>
          <span>注目商品</span>
        </h2>
        <div>
          {products
            .slice(0, 4)
            .map(item => (
              <ProductCard
                key={`featured-${item.id}`}
                id={item.id.toString()}
                title={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                showCartButton
              />
            ))}
        </div>
       </section>
      </main>
    </div>
  );
}
