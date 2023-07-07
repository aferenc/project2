import './Main.css';
import TreasureMenuContainer from '../TreasureMenuContainer/TreasureMenuContainer.js';
import DetailsContainer from '../DetailsContainer/DetailsContainer.js';
import { useState } from 'react';

function Main() {

    // eslint-disable-next-line
    {/* The currently selected treasure; inits to empty object and is updated by click events in TreasureListItem */}
    const [selectedTreasure, setSelectedTreasure] = useState({});

    return(
        <main className="Main-container">
            <TreasureMenuContainer setSelectedTreasure={setSelectedTreasure}/>
            <DetailsContainer treasure={selectedTreasure}/>
        </main>
    );
}

export default Main;