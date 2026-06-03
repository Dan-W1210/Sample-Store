import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 text-white">
      <div>
        <h3>Sample Storeについて</h3>
        <p>最新のトレンドとテクノロジーを取り入れたアイテムをお届けします。</p>
      </div>

      <div>
        <h3>クイックリンク</h3>
        <ul>
          <li><Link href="/privay">プライバシーポリシー</Link></li>
          <li><Link href="/terms">利用規約</Link></li>
        </ul>
      </div>

      <div>
        <h3>お問い合わせ</h3>
        <p><Link href="/contact">お問い合わせはこちら</Link></p>
          <div>
            <Image 
              src="/icons/facebook-icon.png" 
              alt="Facebook" 
              width={24} 
              height={24} 
            />
            <Image 
              src="/icons/x-icon.svg" 
              alt="X" 
              width={24} 
              height={24} 
            />
            <Image 
              src="/icons/youtube-icon.svg" 
              alt="Youtube" 
              width={24} 
              height={24} 
            />
          </div>
      </div>

      <div>
        <p>&copy; {currentYear} Sample Store. All Rights Reserved.</p>
      </div>
    </footer>
  )
}