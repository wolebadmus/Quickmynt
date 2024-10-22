


const NavBar = ({isScrolled}) => {

    const links = [
        {textUrl: "About Us", url: "/"},
        {textUrl: "FAQs", url: "/"},
        {textUrl: "Contact Us", url: "/"},
    ]

    return (
        <nav className="hidden lg:flex w-full ">

            <ul className="flex justify-center gap-8 w-full">
                {links.map((linkItem, idx) => <li key={idx}><a href={linkItem.url} className={`${isScrolled ? 'text-[#434343]' : 'text-white'} 
                font-graphik font-[500] text-[1.333em]`}>{linkItem.textUrl}</a></li>)}
            </ul>
           
        </nav>
    );

};

export default NavBar;