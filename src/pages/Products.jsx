import { useFetch } from "../hooks/useFetch"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "../components/common/Card";
import Button from '../components/common/Button'
import { useDispatch } from 'react-redux'
import { addCart } from "../store/ProdutCart/Cart";
import { useEffect, useState } from "react";

export function Products() {

    const productDetail = useFetch('https://dummyjson.com/products', {});
    const [currentPage, setCurrentPage] = useState(0);
    const dispatch = useDispatch();
    const PAGE_SIZE = 10;
    const totalProducts = productDetail?.data?.products?.length || 0;
    console.log(totalProducts);
    const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [currentPage]);

    function handleAddItems(list) {
        dispatch(addCart(list));
    }

    function handlePageChange(list) {
        setCurrentPage(list);

    }

    function handleNextpage() {
        setCurrentPage(prev => prev + 1);


    }

    function handlePrePage() {
        setCurrentPage(prev => prev - 1)

    }


    return productDetail?.length ? (<h1>No Products Found</h1>) : (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">

                {
                    productDetail?.data?.products?.slice(start, end)?.map((list, index) =>
                        <Card key={index} >
                            <CardHeader className='bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden' key={index}>

                                <img className="w-full h-48 object-cover" src={list.images[0]} alt="ProductImg" />
                                <CardTitle>{list?.title}</CardTitle>
                                <CardDescription>{list?.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <label>Price-</label><label>{list.price}</label><br />
                                <label>Rating-</label><label>{list.rating}</label>

                            </CardContent>
                            <Button onClick={() => handleAddItems(list)}>Add</Button>
                        </Card>

                    )

                }


            </div>
            {
                //create an empty array with number of pages

                <div className="flex items-center justify-center gap-2 mt-6">
                    <button disabled={currentPage === 0} className="cursor-pointer px-4 py-2 rounded-md text-sm font-medium" onClick={() => handlePrePage()}>⬅️</button>
                    {[...Array(noOfPages).keys()].map(n => <span className={`cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${currentPage === n ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"}`} onClick={() => handlePageChange(n)}>{n + 1}</span>)}
                    <button disabled={currentPage === noOfPages - 1} className="cursor-pointer px-4 py-2 rounded-md text-sm font-medium" onClick={() => handleNextpage()}>➡️</button>
                </div >

            }
        </>

    )
}
