import React from 'react';
import Image from 'next/image';
import parrot from "../images/parrot.png";

function Anywhere() {
  return (
    <div>
        <div>
            <Image src={parrot} alt="" />
        </div>
    </div>
  )
}

export default Anywhere;