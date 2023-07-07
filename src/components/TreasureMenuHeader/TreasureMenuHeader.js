import './TreasureMenuHeader.css';
import SearchBar from '../SearchBar/SearchBar';
import FilterSeries from '../FilterSeries/FilterSeries';
import FilterLocation from '../FilterLocation/FilterLocation';

function TreasureMenuHeader({searchInput, setSearchInput, setSeriesFilter, setLocationFilter}) {
    return(
        <header className="TreasureMenuHeader-header">
            <h1>Treasure Hoard</h1>
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>
            <FilterSeries setSeriesFilter={setSeriesFilter}/>
            <FilterLocation setLocationFilter={setLocationFilter}/>
        </header>
    );
}

export default TreasureMenuHeader;