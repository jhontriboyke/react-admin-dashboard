import './ProductList.css';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../dummyData';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';

function ProductList() {
    const [data, setData] = useState(productRows);

    function handleDelete(id) {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Product Name',
            width: 400,
            renderCell: (params) => {
                return (
                    <div className="pl-user">
                        <img src={params.row.image} alt="" />
                        <span>{params.row.name}</span>
                    </div>
                );
            },
        },
        { field: 'stock', headerName: 'Stock', width: 100 },
        {
            field: 'status',
            headerName: 'Status',
            width: 100,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 100,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/' + params.row.id}>
                            <button className="pl-edit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="pl-delete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <section className="product-list">
            <h1>Product List</h1>
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

export default ProductList;
