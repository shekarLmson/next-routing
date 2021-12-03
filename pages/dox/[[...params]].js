import {useRouter} from  'next/router'
// This is example for catch routes
function Dox() {
    const router = useRouter();
    const {params=[]} = router.query
    console.log(params)

    if(params.length==2){
        return <h1>Viewing docs of {params[0]} of {params[1]}</h1>
    }else if(params.length==3){
        return <h1>Viewing docs of {params[0]} of {params[1]} and {params[2]}</h1>
    }else if(params.length==1){
        return <h1>Viewing docs of {params[0]}</h1>
    }
    return (
        <div>
            <h1>This is the Dox page {params}</h1>
        </div>
    )
}

export default Dox
