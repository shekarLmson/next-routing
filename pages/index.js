import Link from 'next/link'

// This is the Homepage
function Home() {
    return (
        <div>
            <h1>This is Home page</h1>

            <Link href="/blog">
                <a>Blog</a>
            </Link>

            <Link href="/about" passHref>
                <h1>About</h1>
            </Link>

            <Link href="/profile" passHref>
                <h1>profile</h1>
            </Link>

            <Link href="/products" passHref>
                <h1>Products</h1>
            </Link>
        </div>
    )
}

export default Home
