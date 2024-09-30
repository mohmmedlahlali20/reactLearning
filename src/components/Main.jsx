import React from 'react';
import SideBar from '../components/SideBar'
import CardContainer from './CardContainer';
 import CountryCardContainer from './CountryCardContainer';
 import Header from './Header';
import { Outlet } from 'react-router-dom';

function Main(){
// const [time,setTime]= React.useState(new Date());
// console.log("test");
// React.useEffect(()=>{
// setTimeout(()=>
//         {
    
//             setTime(new Date())
    
//     },1000);
// },[time,setTime]);

    return(
<>
<SideBar/>
<Header/>
<section id='main-section'>
    
<Outlet/>


</section>

</>
       

    )
}



export default Main;