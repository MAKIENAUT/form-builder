import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Toolkit() {
   return (
      <section className="Toolkit_Container">
         <div class="profile-wrapper">
            <div className="Notification_Icon">
               <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="Profile_Partition">
               <div className="Profile_Button">
                  <FontAwesomeIcon icon={faUser} />
               </div>
               <Link href="/UserProfile">
               <div className="Username">
                  User Name
               </div>
               </Link>
               <div className="Profile_Options">
                  <FontAwesomeIcon icon={faCaretDown} />
               </div>
            </div>
         </div>
      </section>
   );
}
