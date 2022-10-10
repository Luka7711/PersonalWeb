import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Nav.module.css';
import uuid from 'react-uuid';
import { Fragment, useState } from 'react';

function NavLinks({links}) {
    const [displayMenu, setDisplayMenu] = useState(false);
    
    const slideMenu = displayMenu ? {right: "0"} : {right: "-100%"} 
    let linkList = links.map(link => <li key={uuid()}>{ link }</li> )

    return (
        <Fragment>
            <div className={styles.verticalNavWrapper}>
                <span onClick={() => setDisplayMenu(!displayMenu) } className={styles.iconBar}>
                    <FontAwesomeIcon icon={faBars} />
                </span>
            </div>
            <ul className={styles.containerLinks} style={slideMenu}>
                {linkList}
            </ul>
        </Fragment>
    )
}

export default function Nav() {

    const links = [
        "About", 
        "Skills",
        "Career", 
        "Projects",
        "Resume",
        "Contact"
    ]

    return (
        <nav className={styles.nav}>
            <div className={styles.logoMenu}><h2>Nusubaliev</h2></div>
            <NavLinks links={links} />
        </nav>
    )
}

