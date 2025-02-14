import groupImg from './assets/imgs/group.png';

export default function Banner() {
    return (
        <div className='banner'>
            <img className='banner__img' src={groupImg} alt="" />
        </div>
    );
}