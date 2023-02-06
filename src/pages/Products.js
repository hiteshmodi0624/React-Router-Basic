import { Link, useNavigate } from "react-router-dom"
function ProductsPage(){
    const navigate=useNavigate();
    const onClick=()=>{
        navigate('/')
    }
    const PRODUCTS=[
        {id:'p1',title:'Product 1'}, 
        {id:'p2',title:'Product 2'},
        {id:'p3',title:'Product 3'}
    ]
    return (
        <>
            <h1>Products Page</h1>
            <button onClick={onClick}>Navigate</button>
            {PRODUCTS.map((item)=>{return <li><Link to={`/products/${item.id}`}>{item.title}</Link></li>})}
        </>
        
    )
}
export default ProductsPage