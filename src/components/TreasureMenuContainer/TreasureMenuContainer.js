import './TreasureMenuContainer.css';
import TreasureMenuHeader from '../TreasureMenuHeader/TreasureMenuHeader.js';
import TreasureListContainer from '../TreasureListContainer/TreasureListContainer.js';
import { useState } from 'react';

function TreasureMenuContainer({setSelectedTreasure}) {

    const [searchInput, setSearchInput] = useState("");
    const [seriesFilter, setSeriesFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");

    return(
        <section className="TreasureMenuContainer-container">
            <TreasureMenuHeader searchInput={searchInput} setSearchInput={setSearchInput} setSeriesFilter={setSeriesFilter} setLocationFilter={setLocationFilter}/>
            <TreasureListContainer searchInput={searchInput} seriesFilter={seriesFilter} locationFilter={locationFilter} setSelectedTreasure={setSelectedTreasure}/>
        </section>
    );
}

export default TreasureMenuContainer;