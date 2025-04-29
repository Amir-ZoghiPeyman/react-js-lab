import { useParams, useSearchParams } from "react-router-dom";

export default function Products() {
    const { id } = useParams();
    const { search, setSearch } = useSearchParams();

    const productSearch = search.get('search') || 'all';
    const handleProduct = (pro) => (
        setSearch({ productSearch: pro })
    )


    return (
        <>
            <button onClick={() => handleProduct('all')}>All</button>
            <h1>product {id}</h1>
        </>
    )
}