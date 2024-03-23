import {Fragment} from "react";
import Link from "@/components/Link";
import MobileNav from "@/components/MobileNav/MobileNav";
import {headerNavLinks} from '@/data/headerNavLinks'
import './headerStyles.css';

const Header = () => {
    return (
        <header className="container flex items-center justify-center py-3">
            <nav className="w-full flex items-center justify-between h-9">
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
    )
}

export default Header
