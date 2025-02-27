export default function UserCard({ userName, imagesObj, cell }) {
    return (
        <div className="shadow-lg p-2 rounded-md">
            <img className="w-full rounded-full" src={imagesObj.large} alt="" />
            <h2>{userName.title}. {userName.first}{userName.last}</h2>
            <span>{cell}</span>
        </div>
    );
}