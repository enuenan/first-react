import PropTypes from 'prop-types';
import { NavLink as RouterNavLink } from "react-router-dom"

const NavLink = ({ link, name }) => {
    return (
        <RouterNavLink to={link} className={({ isActive }) =>
            isActive ? 'active-link' : 'hover:bg-gray-300 px-2 py-1 rounded'
        }>
            {name}
        </RouterNavLink>
    )
}

// Define prop types
NavLink.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default NavLink