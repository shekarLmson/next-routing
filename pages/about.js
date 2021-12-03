import {useRouter} from 'next/router'
//example for other routes and Programmatic Navigation.
function About() {

    const router = useRouter()

    const handleClick = () =>{
        router.push("/blog")
        // router.replace("/blog")
    }
    return (
        <div>
            <h1>This is About page</h1>
            <h3>Click this button to go to Blog page</h3>
            <button onClick={()=>handleClick()}>Click</button>
        </div>
    )
}

export default About
