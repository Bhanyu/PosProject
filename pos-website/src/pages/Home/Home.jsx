
import React from "react"
import Advantages from "./Advantages"
import Customers from "./Customers"


import Nrspay from "./Nrspay"

import Results from "./Results"
import Sectors from "./Sectors"
import Services from "./Services"
import Sponsors from "./Sponsors";

const Home = ()=>{
    return(
       <>
       <Nrspay/>
       <Services/>
       <Sectors/>
       <Results/>
       <Advantages/>
       <Customers/>
       <Sponsors/>
      
       </>
    )
}
export default Home

