import { useFetch } from "../hooks/useFetch"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "../components/common/Card";
import Button from '../components/common/Button'
import { useDispatch } from 'react-redux'
import { addCart } from "../store/ProdutCart/Cart";
export function Products() {
    const productDetail = useFetch('https://dummyjson.com/products', {});
    console.log(productDetail);
    const dispatch = useDispatch();
    function handleAddItems(list) {
        dispatch(addCart(list));
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">

            {
                productDetail?.data?.products?.map((list, index) =>
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
    )
}