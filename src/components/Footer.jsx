import React from "react";

const d = new Date();
const curYear = d.getFullYear();

function Footer(){
    return <footer><p>Copyright {curYear}</p></footer>
}

export default Footer;