export default function Card(prompts) {
    const { value } = prompts

    const template = value.map((item, index) => {
        <div key={index}>
            <img src={item.image} alt="" />
            <div>
                <p>. {item.rating} {item.count} {item.country}</p>
                <h3>{item.title}</h3>
                <p>From {item.price}$/ person</p>
            </div>
        </div>
    })

    return (
        <div>
            {template}
        </div>
    )
}