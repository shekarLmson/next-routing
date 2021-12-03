import {useRouter} from 'next/router'
// example for Nested Dynamic Routes

function ProductDetails() {
    const router = useRouter()
    const {productId} = router.query
    return (
        <div>
            <h1>Details for the Product {productId}</h1>
        </div>
    )
}

export default ProductDetails
