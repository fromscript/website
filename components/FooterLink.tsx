// components/FooterLink.tsx
import React from 'react';

type FooterLinkProps = {
    text: string;
    href: string;
    className?: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ text, href, className }) => (
    <a href={href} className={`text-sm font-normal ${className}`}>
        {text}
    </a>
);

export default FooterLink;
