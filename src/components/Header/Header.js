import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.wrapperHeader}>
            <section>
                <div>
                    <img alt="avatar" src="../../images/avatar.jpg"/>
                    <h1>Ulukbek Nusubaliev</h1>
                    <span>Fullstack developer</span>
                    <span>Chicago, IL</span>
                </div>
            </section>
            <section className="">
                <h1>about me</h1>
            </section>
        </header>
    )
}