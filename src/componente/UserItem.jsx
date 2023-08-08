function UserItem(props) {
    const { name, email, marketValueTrend, isNew } = props;

    let marketToBeShown;
    
    if (marketValueTrend === 'up') {
        marketToBeShown = 'Cota in crestere'
    }
    if (marketValueTrend === 'down') {
        marketToBeShown = 'Cota in descrestere'
    }
    if (marketValueTrend === 'same') {
        marketToBeShown = 'La fel'
    }

    return(
        <>
            <h2>{name}</h2>
            <p>{email}</p>
            {(isNew === true) && <div>Jucator nou</div>}
            {(isNew === true) ? <div>Nou</div> : <div>vechi</div>}
            <p>{marketToBeShown}</p>
        </>
    )
}

export default UserItem;