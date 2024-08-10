import { render } from "@testing-library/react";
import Header from "../Header";

test("Logo should load on rendering screen",()=>{
    //logo header
    const header=render(<Header/>);
    
    //check if logo is loaded
    console.log(header);
})