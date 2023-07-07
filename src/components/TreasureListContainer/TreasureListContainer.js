import TreasureListItem from '../TreasureListItem/TreasureListItem.js';
import treasures from '../../treasures.js';
import './TreasureListContainer.css';

function TreasureListContainer({searchInput, seriesFilter, locationFilter, setSelectedTreasure}) {

    const filteredTreasures = treasures.filter((treasure) => {
        return (treasure.series.toLowerCase().includes(seriesFilter)) 
                && (treasure.location.toLowerCase().includes(locationFilter))
                && (treasure.name.toLowerCase().includes(searchInput.toLowerCase()) || treasure.realWorldObject.toLowerCase().includes(searchInput.toLowerCase()));
    });

    return(
        <div className="TreasureListContainer-div">
            {filteredTreasures.map((treasure) => {
                let className = "TreasureListItem-article";
                const bkgColor = (treasure.seriesNumber % 2 === 0) ? "blue" : "green";
                className = className.concat(" ", bkgColor);
                return <TreasureListItem key={treasure.number} treasureObj={treasure} setSelectedTreasure={setSelectedTreasure} className={className}/>
            })}
        </div>
    );
}

export default TreasureListContainer;