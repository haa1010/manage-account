import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={"header-footer-common " + classes['main-footer']}>
            <small>Copyright © 2021 HUST. All rights reserved.</small>
        </footer>
    )
}

export default Footer;