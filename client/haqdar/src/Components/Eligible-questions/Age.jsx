export default function Age({next}) {
    return (
        <div onClick={()=>{next(curr => curr+1)}} >
            Age
        </div>
    )
}