import './Sidebar.css';
import {
    BarChartOutlined,
    ChatBubbleOutline,
    DynamicFeedOutlined,
    LineStyle,
    MailOutline,
    PersonOutline,
    ReportOutlined,
    ShoppingBagOutlined,
    StorefrontOutlined,
    Timeline,
    TrendingUp,
    WorkOutline,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Sidebar({ pathname }) {
    const activePath = pathname.replace('/', '');
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sidebar-list">
                        <Link to="/home">
                            <li
                                className={
                                    activePath === 'home'
                                        ? 'sidebar-list-item active'
                                        : 'sidebar-list-item'
                                }
                            >
                                <LineStyle className="sidebar-icon" />
                                Home
                            </li>
                        </Link>
                        <Link to="/analytics">
                            <li
                                className={
                                    activePath === 'analytics'
                                        ? 'sidebar-list-item active'
                                        : 'sidebar-list-item'
                                }
                            >
                                <Timeline className="sidebar-icon" />
                                Analytics
                            </li>
                        </Link>
                        <Link to="/sales">
                            <li
                                className={
                                    activePath === 'sales'
                                        ? 'sidebar-list-item active'
                                        : 'sidebar-list-item'
                                }
                            >
                                <TrendingUp className="sidebar-icon" />
                                Sales
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className="sidebar-list">
                        <Link to="/users">
                            <li
                                className={
                                    activePath === 'users'
                                        ? 'sidebar-list-item active'
                                        : 'sidebar-list-item'
                                }
                            >
                                <PersonOutline className="sidebar-icon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/products">
                            <li
                                className={
                                    activePath === 'products'
                                        ? 'sidebar-list-item active'
                                        : 'sidebar-list-item'
                                }
                            >
                                <StorefrontOutlined className="sidebar-icon" />
                                Products
                            </li>
                        </Link>
                        <Link to="/transactions">
                            <li
                                className={
                                    activePath === 'transactions'
                                        ? 'sidebar-list-item active'
                                        : 'sidebar-list-item'
                                }
                            >
                                <ShoppingBagOutlined className="sidebar-icon" />
                                Transactions
                            </li>
                        </Link>
                        <Link to="/reports">
                            <li
                                className={
                                    activePath === 'reports'
                                        ? 'sidebar-list-item active'
                                        : 'sidebar-list-item'
                                }
                            >
                                <BarChartOutlined className="sidebar-icon" />
                                Reports
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Notifications</h3>
                    <ul className="sidebar-list">
                        <Link to="/mail">
                            <li
                                className={
                                    activePath === 'mail'
                                        ? 'sidebar-list-item active'
                                        : 'sidebar-list-item'
                                }
                            >
                                <MailOutline className="sidebar-icon" />
                                Mail
                            </li>
                        </Link>
                        <Link to="/feedback">
                            <li
                                className={
                                    activePath === 'feedback'
                                        ? 'sidebar-list-item active'
                                        : 'sidebar-list-item'
                                }
                            >
                                <DynamicFeedOutlined className="sidebar-icon" />
                                Feedback
                            </li>
                        </Link>
                        <Link to="/messages">
                            <li
                                className={
                                    activePath === 'messages'
                                        ? 'sidebar-list-item active'
                                        : 'sidebar-list-item'
                                }
                            >
                                <ChatBubbleOutline className="sidebar-icon" />
                                Messages
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Staff</h3>
                    <ul className="sidebar-list">
                        <Link to="/staff-manage">
                            <li
                                className={
                                    activePath === 'staff-manage'
                                        ? 'sidebar-list-item active'
                                        : 'sidebar-list-item'
                                }
                            >
                                <WorkOutline className="sidebar-icon" />
                                Manage
                            </li>
                        </Link>
                        <Link to="staff-analytics">
                            <li
                                className={
                                    activePath === 'staff-analytics'
                                        ? 'sidebar-list-item active'
                                        : 'sidebar-list-item'
                                }
                            >
                                <Timeline className="sidebar-icon" />
                                Analytics
                            </li>
                        </Link>
                        <Link to="/staff-reports">
                            <li
                                className={
                                    activePath === 'staff-reports'
                                        ? 'sidebar-list-item active'
                                        : 'sidebar-list-item'
                                }
                            >
                                <ReportOutlined className="sidebar-icon" />
                                Reports
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
