'use dlient';

import { getDefaultAutoSelectFamilyAttemptTimeout } from "net";
import Image from "next/image";
import Link from "next/link";

//商品カードコンポーネントに渡すデータ型の定義
interface ProductCardProps {
  id: string;
  title: string;
  price: number;

  imageUrl?: string;
  imageSize?: 300 | 400;

  rating?: number;
  reviewCount?: number;

  showCartButton?: boolean;
  className?: string;
}

export default function ProductCard({
  id,
  title,
  price,
  imageUrl,
  imageSize = 300,
  rating,
  reviewCount,
  showCartButton = false,
  className = ''
}: ProductCardProps) {
  //画像がない場合のダミー画像
  const finalImageUrl = imageUrl || '/images/no-image.jpg'

  return (
    <div className="{className}">
      <Link href={`/products/${id}`}>
        <Image 
          src={finalImageUrl} 
          alt="{title}" 
          width={imageSize} 
          height={imageSize}
        />
      </Link>
      <h3>{title}</h3>
      {rating !== undefined && reviewCount !== undefined && (
        <p>☆☆☆☆☆ (-件) </p>
      )}
      <p>¥{price.toLocaleString()}</p>
      {showCartButton && <button>カートへ</button> }
    </div>
  )
}