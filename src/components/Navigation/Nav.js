function NavLinks({links}) {
    let lis = links.map(link => <li>{link}</li>)
    return (
        <ul>{lis}</ul>
    )
}

export default function Nav() {
    const links = [
        "About", 
        "Experience", 
        "Projects",
        "Resume",
        "Contact"
    ]

    return (
        <nav>
            <NavLinks links={links}/>
        </nav>
    )
}