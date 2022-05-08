import React from "react";
import { useState, useEffect } from "react";
let url = window.location.href;
const lastSegment = url.split("#").pop();
console.log(lastSegment);
function Circle() {
  const [identify, setIdentification] = useState(0);
  const listenScrollEvent = event => {
    if (window.scrollY < 699) {
      setIdentification(1);
      console.log(identify);
      console.log(event.target.value);
      document.getElementById(identify.toString()).style.backgroundColor =
        "green";
      console.log(`page 1`);
    } else if (window.scrollY > 700 && window.scrollY < 1300) {
      setIdentification(2);
      console.log(identify);
      document.getElementById(identify.toString()).style.backgroundColor =
        "green";

      //   console.log(`page 2`);
    } else if (window.scrollY > 1400 && window.scrollY < 1700) {
      document.getElementById("3").style.backgroundColor = "green";

      console.log(`page 3`);
    } else if (window.scrollY > 2100 && window.scrollY < 2400) {
      document.getElementById("4").style.backgroundColor = "green";

      console.log(`page 4`);
    } else if (window.scrollY > 2800 && window.scrollY < 3200) {
      document.getElementById("5").style.backgroundColor = "green";

      console.log(`page 5`);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    // document.getElementById(identify).style.backgroundColor = "green";
    // document.getElementsByClassName("page-circle").style.backgroundColor =
    //   "white";
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [identify]);
  return (
    <div className="circle-trackers">
      <a className="page-circle"></a>
      <div className="page-circle" id="1"></div>
      <div className="page-circle" id="2"></div>
      <div className="page-circle" id="3"></div>
      <div className="page-circle" id="4"></div>
      <div className="page-circle" id="5"></div>
    </div>
  );
}

export default Circle;
