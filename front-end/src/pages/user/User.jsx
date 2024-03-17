import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './User.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function User() {
    const location = useLocation();
    const userID = location.pathname.split('/')[2];
    const navigate = useNavigate();

    const [image, setImage] = useState(null);
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(
                    'http://localhost:8801/users/' + userID
                );
                setUser(res.data[0]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, []);

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        try {
            axios.put('http://localhost:8801/users/' + userID, user);
            navigate('/users');
        } catch (error) {
            console.log(error);
        }
    }

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    console.log(user);

    return (
        <section className="user">
            <div className="user-title-container">
                <h1 className="user-title">Edit User</h1>
            </div>
            <div className="user-container">
                <div className="user-show">
                    {user ? (
                        <>
                            <div className="us-top">
                                <img
                                    src={
                                        image
                                            ? image
                                            : 'https://placehold.co/600x400/orange/white?text=IMG'
                                    }
                                    alt=""
                                    className="us-img"
                                />
                                <div className="us-top-title">
                                    <span className="us-username">
                                        {user.name}
                                    </span>
                                    <span className="us-user-title">
                                        {user.title}
                                    </span>
                                </div>
                            </div>
                            <div className="us-bottom">
                                <span className="us-title">
                                    Account Details
                                </span>
                                <div className="us-info">
                                    <PermIdentity className="us-icon" />
                                    <span className="us-info-title">
                                        {user.username || <i>-</i>}
                                    </span>
                                </div>
                                <div className="us-info">
                                    <CalendarToday className="us-icon" />
                                    <span className="us-info-title">-</span>
                                </div>
                                <span className="us-title">
                                    Contact Details
                                </span>
                                <div className="us-info">
                                    <PhoneAndroid className="us-icon" />
                                    <span className="us-info-title">
                                        {user.phone || '-'}
                                    </span>
                                </div>
                                <div className="us-info">
                                    <MailOutline className="us-icon" />
                                    <span className="us-info-title">
                                        {user.email}
                                    </span>
                                </div>
                                <div className="us-info">
                                    <LocationSearching className="us-icon" />
                                    <span className="us-info-title">
                                        {user.address || '-'}
                                    </span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="user-update">
                    <span className="uu-title">Edit</span>
                    {user ? (
                        <form className="uu-form" onSubmit={handleSubmit}>
                            <div className="uu-left">
                                <div className="uu-item">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        className="uu-input"
                                        value={user.username}
                                        name="username"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="uu-item">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        value={user.name}
                                        className="uu-input"
                                        name="name"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="uu-item">
                                    <label>Job Title</label>
                                    <input
                                        type="text"
                                        value={user.title}
                                        className="uu-input"
                                        name="title"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="uu-item">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        value={user.email}
                                        className="uu-input"
                                        name="email"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="uu-item">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        value={user.phone}
                                        className="uu-input"
                                        name="phone"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="uu-item">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        value={user.address}
                                        className="uu-input"
                                        name="address"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                            </div>
                            <div className="uu-right">
                                <div className="uu-upload">
                                    <img
                                        src={
                                            image
                                                ? image
                                                : 'https://placehold.co/600x400/orange/white?text=IMG'
                                        }
                                        alt=""
                                        className="uu-update-img"
                                    />
                                    <label htmlFor="file">
                                        <Publish className="file-icon" />{' '}
                                        <span>Upload Image</span>
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        onChange={handleImageChange}
                                    />
                                </div>
                                <button className="uu-update-button">
                                    Update
                                </button>
                            </div>
                        </form>
                    ) : null}
                </div>
            </div>
        </section>
    );
}

export default User;
