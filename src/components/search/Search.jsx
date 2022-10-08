import './search.css';

import SearchIcon from '@mui/icons-material/Search';

const Search = ({ big, bgColor }) => {
  return (
    <div className={ bgColor ? 'search' : 'search searchColor'}>
    
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
