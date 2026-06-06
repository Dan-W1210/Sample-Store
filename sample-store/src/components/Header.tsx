import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="shrink-0">
            <Link href="/">
              <Image
              src="/images/sample-store-logo.png"
              alt="sample-store"
              width={910} height={200}
              className="w-62.5 h-13.75 object-contain"
              priority
              />
            </Link>
          </div>
            
          <nav className="grow text-center mt-8">
            <ul className="flex justify-center space-x-8 list-none">
              <li className="border-r border-gray-300 pr-8"><Link href="/">ホーム</Link></li>
              <li className="border-r border-gray-300 pr-8"><Link href="/products">商品一覧</Link></li>
              <li><Link href="/contact"></Link>お問い合わせ</li>
            </ul>
          </nav>
            
          <div className="flex items-center space-x-6 shrink-0">
            <input type="text" placeholder="検索..." className="border border-gray-300 rounded-md py-1 px-3 text-sm focus:ring-2 focus:ring-indigo-500 hidden sm:block"/>
            <Link href="/account/favorites">
              <Image src="/icons/heart-icon.svg" alt="Favorites" width={24} height={24} className="w-6 h-6"/>
            </Link>
            <Link href="/cart">
              <Image src="/icons/cart-icon.svg" alt="Favorites" width={24} height={24} className="w-6 h-6"/>
            </Link>
            <Link href="/account">
              <Image src="icons/account-icon.svg" alt="Account" width={24} height={24} className="w-6 h-6"/>
            </Link>
          </div>
      </div>
    </header>
  );
}