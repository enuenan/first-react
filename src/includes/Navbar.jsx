import NavLink from "../components/NavLink"

const Navbar = () => {
    return (
        <div>
            <ul className="flex gap-4 py-2 px-1 bg-zinc-200">
                <li className="">
                    <NavLink link={'/'} name="Home" />
                </li>
                <li className="">
                    <NavLink link={'skills'} name="Skills" />
                </li>
                <li className="">
                    <NavLink link={'portfolio'} name="Portfolio" />
                </li>
                <li className="">CV/Resume</li>
                <li className="">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar