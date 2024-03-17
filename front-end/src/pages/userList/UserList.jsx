import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:8801/users');
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsers();
    }, [data]);

    function handleDelete(id) {
        try {
            axios.delete('http://localhost:8801/users/' + id);
            setData(data.filter((item) => item.id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="ul-user">
                        <img
                            src={
                                'null'
                                    ? 'https://placehold.co/30x30?text=JB'
                                    : params.row.avatar
                            }
                            alt=""
                        />
                        <span>{params.row.name}</span>
                    </div>
                );
            },
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 150,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/user/' + params.row.id}>
                            <button className="ul-edit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="ul-delete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <section className="user-list">
            <div className="user-list-title">
                <h1>User List</h1>
                <Link to="/new-user">Create User</Link>
            </div>

            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                pageSizeOptions={[8, 16]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </section>
    );
}

export default UserList;
