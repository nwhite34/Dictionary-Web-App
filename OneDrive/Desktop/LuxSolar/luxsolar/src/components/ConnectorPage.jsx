import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./Navbar";

function ConnectorPage(){ 


    return(
<>

<Navbar/>
<div className="h-screen flex flex-col"> {/* Full screen height */}

      <HomePage />
    </div>
</>
    )

}



export default ConnectorPage