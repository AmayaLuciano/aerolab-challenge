import { getAllProducts } from '@/utils/getProducts';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import header from '../public/assets/header.png';
import Products from './components/Products';

const inter = Inter({ subsets: ['latin'] });

interface HomeProps {}

const Home: ({}) => Promise<JSX.Element> = async ({}) => {
  const data = await getAllProducts();

  return (
    <main className="overflow-hidden">
      <header className="h-[280px] bg-slate-50">
        <Image className="h-[250px] object-cover " src={header} alt="banner" />
        <h2 className="absolute top-[250px] ml-14 text-white font-extrabold tracking-wider text-[27px]">
          Electronics
        </h2>
      </header>
      <div className="flex justify-center bg-slate-50">
        <Products data={data} />
      </div>
      <Link href={'/redeem'} className="fixed bottom-5 right-10 bg-cyan-400">
        <button>🛒</button>
      </Link>
    </main>
  );
};

export default Home;
