import React from "react";
import classNames from 'classnames';
export const Section = ({id, children, className}: {
    children: React.ReactNode;
    id: string;
    className?: string
}) => (
    <section id={id} className={classNames({'my-20 md:my-32': true, [className ?? '']: !!className} )}>
        {children}
    </section>
)


