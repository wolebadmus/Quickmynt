


const FooterNavBar = () => {

    const links = [
        {textUrl: "About Us", url: "/"},
        {textUrl: "FAQs", url: "/"},
        {textUrl: "Contact Us", url: "/"},
    ]

    return (
        <nav className="flex w-full flex-col justify-center lg:items-center">

            <ul className="flex  flex-col gap-8">
                {links.map((linkItem, idx) => <li key={idx}><a href={linkItem.url} className="text-[#434343] font-graphik font-[500] text-[16px] lg:text-[21.33px] leading-[17.6px] lg:leading-[23.46px]">{linkItem.textUrl}</a></li>)}
            </ul>
           
        </nav>
    );

};

export default FooterNavBar;