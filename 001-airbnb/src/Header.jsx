import airbnb from './assets/imgs/airbnb.png';

export default function Header() {
    return (
        <div className='header'>
            <img src={airbnb} alt="" />
        </div>
    );
}