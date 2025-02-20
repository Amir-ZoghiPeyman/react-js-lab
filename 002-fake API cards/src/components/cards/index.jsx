export default function Cards({ title, price, description, image }) {
    return (
        <div className="">
            <img className="" src={image} alt="" />
            <div>
                <h3 className="">
                    {title}
                </h3>
                <p className="">{description}</p>
                <div className="">
                    <span className="">{price}</span>
                    <span>$</span>
                </div>
            </div>
        </div>
    );
}