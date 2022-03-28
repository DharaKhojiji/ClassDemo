import User from "./User";
import Guest from './Guest';
const Greeting =(props)=>
{
   const isLoggedin =props.isLoggedin;
   if(isLoggedin)
   {
    return <User/>;
   }
   else
   {
    return <Guest/>;
   }
}
export default Greeting;