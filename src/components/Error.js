import { useRouteError } from "react-router-dom";
import React from "react";

const Error =()=> {
    const err = useRouteError();
    console.log(err)
    return <div>
        <h1>OOPS Error found</h1>
        <h3>{err.status} : {err.statusText}</h3>
    </div>
}

export default Error;