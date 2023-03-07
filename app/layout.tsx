import './globals.css';
import logo from '../public/assets/logo.svg';
import Image from 'next/image';
import Header from './components/Header';
import { FC } from 'react';
import GlobalContextProvider from './context/store';
import Link from 'next/link';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// export default function RootLayout({children,}: {children: React.ReactNode})  {
//   return (
//     <html lang="en">
//       <body className="bg-white">
//         <nav className="flex justify-between p-3">
//           <div>
//             <Image src={logo} alt="logo" />
//           </div>

//           <div className="flex text-center">
//             {/* @ts-expect-error Server Component */}
//             <Header />
//           </div>
//         </nav>
//         {children}
//       </body>
//     </html>
//   );
// }

const RootLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <html lang="en">
      <body className="bg-white">
        <GlobalContextProvider>
          <nav className="flex justify-between items-center ">
            <Link href={'/'} className="bg-transparent ml-6">
              <Image src={logo} alt="logo" width={30} height={30} />
            </Link>
            <div className="flex text-center mr-6">
              <Header />
            </div>
          </nav>

          {children}
          <div className="bg-slate-50 text-center pb-8">
            <h2 className="text-slate-400">
              developed by{' '}
              <a
                href="https://www.linkedin.com/in/luciano-amaya-972504218/"
                target={'_blank'}
                className="m-0 p-0 bg-transparent hover:underline cursor-pointer text-slate-800"
              >
                Luciano Amaya
              </a>
            </h2>
          </div>
        </GlobalContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
