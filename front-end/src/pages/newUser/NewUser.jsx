import { useState } from 'react';
import './NewUser.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewUser() {
    const [user, setUser] = useState({
        name: '',
        username: '',
        gender: '',
        email: '',
        status: '',
        address: '',
        phone: '',
    });

    console.log(user);

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        try {
            axios.post('http://localhost:8801/new-user', user);
            navigate('/users');
        } catch (error) {
            console.log(error);
        }
    }

    console.log(user);

    return (
        <section className="new-user">
            <h1 className="nu-title">New User</h1>
            <form className="nu-form" onSubmit={handleSubmit}>
                <div className="nu-form-item">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="jhon2001"
                        name="username"
                        onChange={handleChange}
                    />
                </div>
                <div className="nu-form-item">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        type="text"
                        id="fullname"
                        placeholder="Jhontri Boyke"
                        name="name"
                        onChange={handleChange}
                    />
                </div>
                <div className="nu-form-item">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="jhon2001@example.com"
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="nu-form-item">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="+1 234 567 8901"
                        name="phone"
                        onChange={handleChange}
                    />
                </div>
                <div className="nu-form-item">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Kapuas | Indonesia"
                        name="address"
                        onChange={handleChange}
                    />
                </div>
                <div className="nu-form-item">
                    <label htmlFor="nu-gender">Gender</label>
                    <div className="nu-gender" id="nu-gender">
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            onChange={handleChange}
                        />
                        <label htmlFor="male">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            onChange={handleChange}
                        />
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                            onChange={handleChange}
                        />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="nu-form-item">
                    <label htmlFor="active">Active</label>
                    <select
                        name="status"
                        id="active"
                        className="nu-select"
                        onChange={handleChange}
                    >
                        <option value="Active">Yes</option>
                        <option value="Not Active">No</option>
                    </select>
                </div>
                <button className="nu-button">Create</button>
            </form>
        </section>
    );
}

export default NewUser;
