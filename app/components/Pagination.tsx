'use client';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <div>
      <button className="px-8 bg-slate-400">1</button>
      <button className="px-8 bg-slate-400 mx-4">2</button>
    </div>
  );
};

export default Pagination;
