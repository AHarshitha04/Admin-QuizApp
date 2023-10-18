import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LeftSidebar.css";

const LeftSidebar = () => {
  const [menubar, setMenu] = useState();
//   function left_menu_Open() {
    
//     setMenu(true);
//   }

//   function left_menu_close() {
//     setMenu(false);
//   }
  return (
    <div className="left-sidebar-div">
      <div className="menu" onClick={()=>setMenu(!menubar)}>
        menu
      </div>
      <div className="close" >
        X
      </div>
      {/* {menubar && ( */}
        <ul className={menubar?"leftsidebar-contents mobile" :"close"}>
          <li>
            <span class="material-symbols-outlined">home</span>
            <Link> Home</Link>
          </li>
          <li>
            <span class="material-symbols-outlined">grid_view</span>
            <Link>Exams</Link>
          </li>
          <li>
            <span class="material-symbols-outlined">layers</span>
            <Link>Subscriptions</Link>
          </li>
          <li>
            <span class="material-symbols-outlined">forum</span>
            <Link>Ask Doubts</Link>
          </li>
          <li>
            <span class="material-symbols-outlined">description</span>
            <Link>Sample Paper</Link>
          </li>
        </ul>
    {/* //   )} */}
    </div>
  );
};

export default LeftSidebar;
