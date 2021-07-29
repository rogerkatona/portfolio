import NavItem from "./navItem";


const NavBar = props => (
    <>
        {props.navItems.map(item => (
            <NavItem
                key={item.path}
                path={item.path}
                label={item.label}
            />
        ))}
    </>
);

export default NavBar;
