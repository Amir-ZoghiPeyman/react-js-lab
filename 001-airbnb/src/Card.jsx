export default function Card(input) {
    const { value } = input;

    const template = value.map((item, index) => (
        <div className="container">
            <div className="container__card" key={index}>
                <span className="container__card__status">{item.status}</span>
                <img className="container__card__img" src={item.image} alt="" />
                <div className="container__card__desc">
                    <span>rating: {item.rating} </span>
                    <span className="container__card__desc__count">({item.count}) . {item.country}</span>
                    <h3 className="container__card__desc__title">{item.title}</h3>
                    <span className="container__card__desc__price">From {item.price}$ </span>
                    <span className="container__card__desc__person">/ person</span>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            {template}
        </div>
    );
}