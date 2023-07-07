import './DetailsContainer.css';
import DetailsHeader from '../DetailsHeader/DetailsHeader.js';
import DetailsListContainer from '../DetailsListContainer/DetailsListContainer.js';

function DetailsContainer({treasure}) {
    return(
        <section className="DetailsContainer-section">
            <DetailsHeader treasure={treasure}/>
            <DetailsListContainer treasure={treasure}/>
        </section>
    );
}

export default DetailsContainer;