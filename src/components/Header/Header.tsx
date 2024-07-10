import {Fragment} from "react";
import Link from "@/components/Link";
import MobileNav from "@/components/MobileNav/MobileNav";
import {headerNavLinks} from '@/data/headerNavLinks'
import './headerStyles.css';

const Header = () => {
    return (
        <div>
            <header className="header-container">
                <nav className="nav">
                    {headerNavLinks
                        .map((link, index) => (
                            <Fragment key={link.title}>
                                <Link
                                    href={link.href}
                                    className={'menu-item'}
                                >
                                    {link.title}
                                </Link>
                                {index !== headerNavLinks.length - 1 && <div className={'menu-item-dot'}/>}
                            </Fragment>
                        ))}
                </nav>
                <MobileNav/>
            </header>
        </div>
    )
}

export default Header
