import CineMatch_Logo from "../Utils/CineMatch_Logo.png"
const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="logo">
                    <img src={CineMatch_Logo} alt="logo" />
                </div>
            </div>
        </header>
    )
}
export default Header;