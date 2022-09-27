import './search.css';

import SearchIcon from '@mui/icons-material/Search';

const Search = ({ big, bgColor }) => {
  return (
    <div className="search" style={{backgroundColor: bgColor ? '#fff' : 'transparent'}}>
    
        <div style={{ width: big ? '100%' : '85%' }}>
          <button>
            <SearchIcon className="icon" />
          </button>
          <input type="text" placeholder="Search Twitter" />
        </div>
      
    </div>
  );
};

export default Search;
