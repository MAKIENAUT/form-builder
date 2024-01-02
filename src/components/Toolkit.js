'use client'

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Toolkit() {
   const [openNotification, setOpenNotification] = useState(false);
   const [openProfileDropdown, setOpenProfileDropdown] = useState(false);

   // function for notification click
   useEffect(() => {
      function handleOutsideClick(event) {
         if (!event.target.closest(".notification-wrapper")) {
            setOpenNotification(false);
         }
      };
      document.addEventListener("click", handleOutsideClick);
      return () => {
         document.removeEventListener("click", handleOutsideClick);
      };
   });

   function handleNotificationClick() {
      setOpenNotification(prevOpenNotification => !prevOpenNotification);
      setOpenProfileDropdown(false);
   };

   // function for profile dropdown click
   useEffect(() => {
      function handleOutsideClick(event) {
         if (!event.target.closest(".profile-dropdown-wrapper")) {
            setOpenProfileDropdown(false);
         }
      };
      document.addEventListener("click", handleOutsideClick);
      return () => {
         document.removeEventListener("click", handleOutsideClick);
      };
   });

   function handleProfileDropdownClick() {
      setOpenProfileDropdown(prevOpenProfileDropdown => !prevOpenProfileDropdown);
      setOpenNotification(false);
   };

   return (
      <section className="Toolkit_Container">
         <div className="profile-wrapper">
            <div className="notification-wrapper">
               <button className="notification-button" onClick={handleNotificationClick}>
                  <FontAwesomeIcon icon={faBell} />
               </button>
               {openNotification && (
                  <div className="notification-container">
                     <p>Notifications</p>
                  </div>
               )}
            </div>
            <div className="Profile_Partition">
               <div className="Profile_Button">
                  <FontAwesomeIcon icon={faUser} />
               </div>
               <div className="Username">
                  User Name
               </div>
               <div className="profile-dropdown-wrapper">
                  <button className="profile-button" onClick={handleProfileDropdownClick}>
                     <FontAwesomeIcon icon={faCaretDown} />
                  </button>
                  {openProfileDropdown && (
                     <div className="profile-dropdown-container">
                        <p>Profile</p>
                        <Link href="/UserProfile" className="edit-profile">
                           <p>Edit Profile</p>
                        </Link>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
}
