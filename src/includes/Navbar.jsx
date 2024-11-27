import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <ul className="flex gap-4 py-2 px-1 bg-zinc-200">
                <li className="">
                    <Link to={'/'}>Home</Link>
                </li>
                <li className="">
                    <Link to={'skills'}>Skills</Link>
                </li>
                <li className="">Portfolio</li>
                <li className="">CV/Resume</li>
                <li className="">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar