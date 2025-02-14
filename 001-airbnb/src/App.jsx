import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Description from './Description.jsx';
import Card from './Card.jsx';

import img1 from "./assets/imgs/image-1.png";
import img2 from "./assets/imgs/image-2.png"
import img3 from "./assets/imgs/image-3.png"

const cardData = [
    {
        title: "Life lessons with Katie Zaferes",
        image: img1,
        rating: 5,
        price: 136,
        count: 6,
        status: "SOLD OUT",
        country: "USA",
    },
    {
        title: "Learn wedding photography",
        image: img2,
        rating: 5,
        price: 125,
        count: 30,
        status: "ONLINE",
        country: "USA",
    },
    {
        title: "Group Mountain Biking",
        image: img3,
        rating: 4.8,
        price: 50,
        count: 2,
        status: "ONLINE",
        country: "USA",
    },
];

export default function App() {
    return (
        <div>
            <Header />
            <Banner />
            <Description />
            <Card value={cardData} />
        </div>
    );
}
