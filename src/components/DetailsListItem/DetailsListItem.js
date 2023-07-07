import './DetailsListItem.css';

function DetailsListItem({ attribute, value }) {
    return(
        <article className="DetailListItem-article">
            <strong>{attribute}:</strong> <span>{value}</span>
        </article>
    );
}

export default DetailsListItem;