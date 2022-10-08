import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Nav.module.css';
import uuid from 'react-uuid';
import { useState } from 'react';

function NavLinks({links, displayMenu}) {
    const slideMenu = displayMenu ? {right: "0"} : {right: "-100%"} 

    let list = links.map(link => <li key={uuid()}>{link}</li>)
    console.log(slideMenu)
    return (
        <ul className={styles.containerLinks} style={slideMenu}>
            {list}
        </ul>
    )
}

export default function Nav() {
    const [displayMenu, setDisplayMenu] = useState(false);

    const links = [
        "About", 
        "Experience", 
        "Projects",
        "Resume",
        "Contact"
    ]

    function handleDisplayMenu() {
        setDisplayMenu(!displayMenu);
    }

    return (
        <nav className={styles.nav}>
            <span onClick={ () => handleDisplayMenu() } className={styles.iconBar}>
                <FontAwesomeIcon icon={faBars} />
            </span>
            <NavLinks links={links} displayMenu={displayMenu}/>
        </nav>
    )
}