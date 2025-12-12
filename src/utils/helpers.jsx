import { lazy } from "react";
import { CHUNK_SIZE } from "../constants/config";
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};


export const LazyLoader = (path) => {
  return lazy(() => import(path));
}

export const createChunks = (file) => {
  const chunks = [];
  let start = 0;

  while (start < file.size) {
    const end = start + CHUNK_SIZE;
    chunks.push(file.slice(start, end));
    start = end;
  }

  return chunks;
};

export function Pagination(){
  const PAGE_SIZE=10;
  const totalProducts=products.length;
  const noOfPages = MATH.ceil(totalProducts/PAGE_SIZE);
  const start= currentPage*PAGE_SIZE;
  const end = start+PAGE_SIZE;

}