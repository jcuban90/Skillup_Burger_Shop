// Write all the code here
const Header = ({ isAuthenticated }) => {
    return (<>
        <nav>
            <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="16" cy="12" r="6" fill="#FFD966" stroke="#B8860B" />
                    <path d="M4 28c0-5.33 7.33-8 12-8s12 2.67 12 8" fill="#C1440E" stroke="#8B2500" />
                    <circle cx="16" cy="12" r="6" fill="none" stroke="#B8860B" />
                    <path d="M20 16l4 4-4 4" stroke="#B8860B" strokeWidth="2" fill="none" />
                    <path d="M12 20h12" stroke="#B8860B" strokeWidth="2" fill="none" />
                </svg>
                <a href="http://">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                </a>
            </div>
        </nav>
    </>)
};

export default Header;