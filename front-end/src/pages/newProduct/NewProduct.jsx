import { useState } from 'react';
import './NewProduct.css';

function NewProduct() {
    const [image, setImage] = useState(null);

    function handleUploadImage(e) {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    }

    return (
        <section className="new-product">
            <h1 className="new-product-title">New User</h1>
            <form className="new-product-form">
                <div className="new-product-form-item">
                    <label htmlFor="product-image">Image</label>
                    {image ? (
                        <img src={image} alt="" className="product-image" />
                    ) : null}
                    <input
                        type="file"
                        name="product-image"
                        id="product-image"
                        onChange={handleUploadImage}
                    />
                </div>
                <div className="new-product-form-item">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Apple Airpods" />
                </div>
                <div className="new-product-form-item">
                    <label htmlFor="stock">Stock</label>
                    <input type="text" id="stock" placeholder="123" />
                </div>
                <div className="new-product-form-item">
                    <label htmlFor="active">Active</label>
                    <select
                        name="active"
                        id="active"
                        className="new-product-select"
                    >
                        <option value="yes" defaultValue>
                            Yes
                        </option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="new-product-button">Create</button>
            </form>
        </section>
    );
}

export default NewProduct;
