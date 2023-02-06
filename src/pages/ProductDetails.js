import { Link,useParams } from "react-router-dom"
function ProductDetails(){
    const Params=useParams()
    return (
        <>
            <h1>Product Details</h1>
            <p>{Params.productId}</p>
            <Link to=".." relative="path">Back</Link>
        </>
    )
}
export default ProductDetails