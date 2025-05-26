import './FilterButtons.sass';

export default function FilterButtons(props) {
    let cname = "filter-buttons";

    return (
        <div className={cname}>
            <button className={`${cname}__button`} onClick={() => props.onFilter('all')}>All</button>
            <button className={`${cname}__button`} onClick={() => props.onFilter('small')}>Small</button>
            <button className={`${cname}__button`} onClick={() => props.onFilter('medium')}>Medium</button>
            <button className={`${cname}__button`} onClick={() => props.onFilter('large')}>Large</button>
        </div>
    );
}