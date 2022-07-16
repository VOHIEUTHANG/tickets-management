import React from 'react';
import './SearchBar.scss';

const SearchBar = ({
  width,
  height,
  placeholder,
}: {
  width?: string;
  height?: string;
  placeholder?: string;
}) => {
  return (
    <div className="search" style={{ width, height }}>
      <input type="text" placeholder={placeholder ? placeholder : 'input something ...'} />
      <div className="search-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.7067 22.2937L16.8818 15.4688C18.2038 13.8358 18.9998 11.7608 18.9998 9.50089C18.9998 4.26295 14.7378 0.000976562 9.49986 0.000976562C4.26192 0.000976562 0 4.2629 0 9.50084C0 14.7388 4.26197 19.0008 9.49991 19.0008C11.7599 19.0008 13.8349 18.2048 15.4678 16.8828L22.2928 23.7077C22.4878 23.9027 22.7437 24.0007 22.9998 24.0007C23.2558 24.0007 23.5118 23.9027 23.7068 23.7077C24.0978 23.3167 24.0978 22.6847 23.7067 22.2937ZM9.49991 17.0008C5.36394 17.0008 1.99999 13.6368 1.99999 9.50084C1.99999 5.36487 5.36394 2.00092 9.49991 2.00092C13.6359 2.00092 16.9998 5.36487 16.9998 9.50084C16.9998 13.6368 13.6358 17.0008 9.49991 17.0008Z"
            fill="#1E0D03"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
