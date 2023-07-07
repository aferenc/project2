import './TreasureListItem.css';

function TreasureListItem( { treasureObj, setSelectedTreasure, className }) {
    return(
        <article className={className} onClick={() => setSelectedTreasure(treasureObj)}>#{treasureObj.number}: {treasureObj.name}</article>
    );
}

export default TreasureListItem;