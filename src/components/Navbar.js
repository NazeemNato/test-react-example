import React from "react";

import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/"> Home </Link>
                </li>
                <li>
                <Link href="/contact"> Contact </Link>
                </li>
                <li>
                <Link to="/about"> About </Link>
                     </li>
            </ul>
        </nav>
    )
}