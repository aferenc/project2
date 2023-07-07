import './DetailsListContainer.css';
import DetailsListItem from '../DetailsListItem/DetailsListItem.js';

function DetailsListContainer({treasure}) {

    // eslint-disable-next-line
    {/* Combine location and inEnemy/buried attribute into one entity */}
    let location = treasure.location;
    if(Object.hasOwn(treasure, 'inEnemy')) {
        location = location.concat(' (inside ', treasure.inEnemy, ')');
    }
    if(Object.hasOwn(treasure, 'buried')) {
        location = location.concat(' (', treasure.buried, ' buried)');
    }

    // eslint-disable-next-line
    {/* Not sure about possibility of using map() here; need customized attribute names */}
    return(
        <section className="DetailsListContainer-section">
            <DetailsListItem attribute="Series" value={treasure.series}/>
            <DetailsListItem attribute="Real World Object" value={treasure.realWorldObject}/>
            <DetailsListItem attribute="Location" value={location}/>
            <DetailsListItem attribute="Value" value={treasure.value}/>
            <DetailsListItem attribute="Weight" value={treasure.weight}/>
            <DetailsListItem attribute="Max Carriers" value={treasure.maxCarriers}/>
            <DetailsListItem attribute="Olimar's Notes" value={treasure.olimarNotes}/>
            <DetailsListItem attribute="Sales Pitch" value={treasure.salesPitch}/>
        </section>
    );
}

export default DetailsListContainer;