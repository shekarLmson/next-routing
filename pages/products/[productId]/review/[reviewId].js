import {useRouter} from 'next/router'
// example for Nested Nested Dynamic Routes

function ReviewDetails() {
    const router = useRouter()
    const {productId, reviewId} = router.query
    return (
        <div>
            <h1>Review {reviewId} for product {productId}</h1>
        </div>
    )
}

export default ReviewDetails
