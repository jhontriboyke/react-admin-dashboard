import './WidgetSm.css';
import profile from '../../../public/profile.jpg';
import { Visibility } from '@mui/icons-material';
import { useState } from 'react';

function WidgetSmItem() {
    const [display, setDisplay] = useState(true);

    return (
        <>
            {display ? (
                <li className="ws-list-item">
                    <img src={profile} alt="profile" className="ws-img" />
                    <div className="ws-user">
                        <span className="ws-username">Jhontri Boyke</span>
                        <span className="ws-user-title">Web Developer</span>
                    </div>
                    <button
                        onClick={() => setDisplay((d) => !d)}
                        className="ws-button"
                    >
                        <Visibility className="ws-icon" />
                        Hide
                    </button>
                </li>
            ) : (
                <li className="ws-list-item">
                    <img
                        src="https://placehold.co/40x40?text=Hidden"
                        alt="profile"
                        className="ws-img"
                    />
                    <div className="ws-user">
                        <span className="ws-username hidden"></span>
                        <span className="ws-user-title hidden"></span>
                    </div>
                    <button
                        onClick={() => setDisplay((d) => !d)}
                        className="ws-button"
                    >
                        <Visibility className="ws-icon" />
                        Display
                    </button>
                </li>
            )}
        </>
    );
}

function WidgetSm() {
    return (
        <div className="widget-sm">
            <span className="ws-title">New Join Members</span>
            <ul className="ws-list">
                <WidgetSmItem />
                <WidgetSmItem />
                <WidgetSmItem />
            </ul>
        </div>
    );
}

export default WidgetSm;
