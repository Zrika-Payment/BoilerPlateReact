import { Card, CardTitle, CardHeader, CardFooter, CardDescription, CardContent } from "../common/Card"
import { useSelector } from "react-redux"
import Button from '../common/Button'
import { useDispatch } from "react-redux";
import { removeCart } from "../../store/ProdutCart/Cart";
export function CartDetails() {

    const productDetails = useSelector((store) => store.cart);

    const dispatch = useDispatch();
    function handleDelete(list) {
        console.log(list);
        dispatch(removeCart(list));
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {
                productDetails.map((List, index) =>
                    <Card key={List.id}>

                        <CardHeader className='bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
                            <img className="w-full h-48 object-cover" src={List.images[0]} alt="ProductImg" />
                            <CardTitle>{List?.title}</CardTitle>
                            <CardDescription>{List?.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <label>Price-</label><label>{List.price}</label><br />
                            <label>Rating-</label><label>{List.rating}</label>
                        </CardContent>
                        <Button onClick={() => handleDelete(List)}>Delete</Button>
                    </Card>

                )
            }
        </div>
    )
}




