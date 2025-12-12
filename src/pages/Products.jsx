import { useFetch } from "../hooks/useFetch"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "../components/common/Card";
import Button from '../components/common/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from "../store/ProdutCart/Cart";
import { useState } from "react";
export function Products() {
    const [currentPage, setCurrentPage] = useState(0);
    const productDetail = useFetch('https://dummyjson.com/products', {});
    const dispatch = useDispatch();
     console.log(productDetail);
    const PAGE_SIZE = 10;
    const totalProducts = productDetail?.data?.products?.length;
   
    const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    function handleAddItems(list) {
        dispatch(addCart(list));
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">

            {
                productDetail?.data?.products?.slice(start, end).map((list, index) =>
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
            {
                //create an empty array with number of pages
                [...Array(noOfPages).keys()].map(n => <span className="flex flex-row">{n}</span>)
            }

        </div>
    )
}