export default function Cards({ image, title, description, price }) {
    return (
        <div
            className="w-full h-full p-6 bg-white border cursor-pointer border-gray-200 rounded-3xl shadow-2xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all"
        >
            <div className="flex items-center">
                <img
                    className="aspect-square object-cover bg-gray-200 text-5xl rounded-4xl shadow-xl mr-6 p-4" src={image}
                ></img>
            </div>
            <div className="mt-2">
                <h2
                    className="flex text-start lg:line-clamp-1 md:line-clamp-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                    {title}
                </h2>
                <p
                    className="flex text-start lg:line-clamp-3 md:line-clamp-4 text-gray-700 dark:text-gray-400"
                >
                    {description}
                </p>
                <p
                    className="flex mt-4 font-bold text-start text-white dark:text-white"
                >
                    {price}$
                </p>
            </div>
        </div>
    );
}