import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <header className='bg-[#2b2a33] p-5 min-h-screen'>
            <nav>
                <ul className='navbar'>
                    <li>
                        <Link href={'/'}>Overview</Link>
                    </li>
                    <li>
                        <Link href={'/my-tasks'}>My Tasks</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Profile</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;