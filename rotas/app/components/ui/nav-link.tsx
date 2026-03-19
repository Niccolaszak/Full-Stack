import Link from 'next/link';
import { ReactNode} from 'react';

interface NavLinkProps{
    href: string;
    children: ReactNode;
}

export function NavLink({href, children} : NavLinkProps){
    return (
        <Link href={href} style={{display:'flex', alignItems:'center', gap:'0.5rem', padding:'0.5rem 1rem', borderRadius:'4px', color:'#333', textDecoration:'none'}}>
            {children}
        </Link>
    );
}