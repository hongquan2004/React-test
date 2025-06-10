import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Tìm kiếm sản phẩm..."
    value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}
    className="search-input"
    style={{margin:'24px auto', display:'block', width:'100%', maxWidth:'420px', borderRadius:'18px', border:'2px solid #e0c3fc', padding:'14px 20px', fontSize:'1.13rem', background:'#fff', color:'#a685e2', boxShadow:'0 2px 12px #e0c3fc22'}}
  />
);

export default SearchBar;
