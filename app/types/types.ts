export interface Product {
    img: Img;
    _id: string;
    name: string;
    cost: number;
    category: string;
    createDate?: string

  }

  export interface User {
    _id: string;
    name: string
    points: number
    createDate: string
    redeemHistory: Product[]
    __v: number
  }
  
  export interface Img {
    url: string;
    hdUrl: string;
  }

  export interface Filter {
    page : number
  }

  export type ProductComponent = {
    lastPostIndex: number;
    firstPostIndex: number;

  }
  // export interface FilterContextType {
  //   currentPage: <Filter>;
  //   setCurrentPage: (value: <Filter>) => void
  // }

