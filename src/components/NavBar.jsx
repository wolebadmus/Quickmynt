


const NavBar = () => {

    const links = [
        {textUrl: "About Us", url: "/"},
        {textUrl: "FAQs", url: "/"},
        {textUrl: "Contact Us", url: "/"},
    ]

    return (
        <nav className="hidden lg:flex w-full ">

            <ul className="flex justify-center gap-8 w-full">
                {links.map((linkItem, idx) => <li key={idx}><a href={linkItem.url} className="text-[#434343] font-[500] text-[21.33px]">{linkItem.textUrl}</a></li>)}
            </ul>
           
        </nav>
    );

};

export default NavBar;