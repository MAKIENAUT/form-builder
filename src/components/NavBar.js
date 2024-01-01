"use client"

import React from "react"
import Link from 'next/link';
import styles from "../styles/NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStrikethrough } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
   return (
      <nav>
         <div className="Logo">
            <FontAwesomeIcon icon={faStrikethrough} />
            <p>Logo</p>
         </div>
      </nav>
   )
}