import Link from 'next/link'
//example for other routes and user navigation
function Profile() {
    return (
        <div>
            <h1>This is Profile page</h1>
            <Link href="/" passHref><h2>Homepage</h2></Link>
        </div>
    )
}

export default Profile
