import './Navbar.css';
import { Language, NotificationsNone, Settings } from '@mui/icons-material';
import profile from '../../../public/profile.jpg';

function Navbar() {
    return (
        <nav>
            <div className="navbar-wrapper">
                <div className="nav-left" title="Koiroadmin">
                    <a href="#" className="logo">
                        Admin Dashboard
                    </a>
                </div>
                <div className="nav-right">
                    <div className="nav-icon-container" title="Notification">
                        <NotificationsNone />
                        <span className="nav-icon-badge">2</span>
                    </div>
                    <div className="nav-icon-container" title="Language">
                        <Language />
                    </div>
                    <div className="nav-icon-container" title="Setting">
                        <Settings />
                    </div>
                    <img src={profile} alt="" className="avatar-icon" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
