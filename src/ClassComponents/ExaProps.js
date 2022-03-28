const ExaProps =(props)=>
{   const {name,heroname} =props
    console.log(props);

    return(
        <>
        <h1>hello world!{name} a.k.a {heroname}</h1>
        {props.children}
        <button>Action</button>
        </>
    )
}
export default ExaProps;