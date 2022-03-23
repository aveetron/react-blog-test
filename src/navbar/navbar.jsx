import './navbar.css';

const navbar = () => {
    const title = "Avee's Blog";

    return (
        <div className="navbar">
            <div className="title">
                <h1>{ title }</h1>
            </div>
            <div className="links">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
        </div>
    );
};

export default navbar;