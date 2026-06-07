'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

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
    <div className="min-h-screen font-(family-name:--font-geist-sans)">
      
      <section className="relative w-full h-[60vh] sm:h-[70vh] overflow-hidden">
        <Image 
          src="/images/main-visual.jpg" 
          alt="最新コレクションを発見" 
          fill 
          className="object-cover object-center" 
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-base sm:text-lg md:texr-xl mb-8 drop-shadow-md">
            最新コレクションを発見
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 drop-shadow-md">
            あなたのスタイルをアップグレードするアイテムを見つけよう
          </p>
          <Link href="/products">
            <button className="px-6 py-3 bgwhite text-blue-800 font-semibold rounded-full shadow-md hover:bh-gray-200 transition-colors text-sm sm:text-base">
              今すぐ見る
            </button>
          </Link>
        </div>
      </section>
      <main className="container mx-auto px-8 pt-8 pb-12 flex flex-col gap-4  max-width: var(--breakpoint-xl)">
       <section>
        <h2>
          <span>Pick Up</span>
          <span className="mx-2 font-light text-gray-400"> | </span>
          <span className="text-base"> おすすめ</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
          <span className="mx-2 font-light text-gray-400"> | </span>
          <span className="text-base">新着商品</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
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
          <span className="mx-2 font-light text-gray-400"> | </span>
          <span className="text-base">注目商品</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
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
