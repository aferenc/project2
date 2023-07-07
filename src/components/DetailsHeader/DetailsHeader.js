import './DetailsHeader.css';

function DetailsHeader({ treasure }) {
    if(Object.keys(treasure).length > 0) {
        return(
            <header className="DetailsHeader-header">
                <h1>{treasure.name}</h1>
                <h1>{treasure.number}</h1>
            </header>
        );
    }
    return(
        <header className="DetailsHeader-header">
            <h1>Select a treasure</h1>
        </header>
    );
}

export default DetailsHeader;