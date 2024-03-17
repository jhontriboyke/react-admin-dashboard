import { Link } from 'react-router-dom';
import './Product.css';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@mui/icons-material';
import { useState } from 'react';

function Product() {
    const [image, setImage] = useState(null);

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    }

    return (
        <section className="product">
            <div className="p-title-container">
                <h1 className="p-title">Product</h1>
                <Link to="/new-product">
                    <button className="p-add-button">Create</button>
                </Link>
            </div>
            <div className="p-top">
                <div className="pt-left">
                    <Chart
                        data={productData}
                        dataKey="Sales"
                        title="Sales Performance"
                        grid
                    />
                </div>
                <div className="pt-right">
                    <div className="product-info-top">
                        <img
                            src={
                                image
                                    ? image
                                    : 'https://unsplash.com/photos/Z8sELbYQCvc/download?force=true&w=640'
                            }
                            alt=""
                            className="pi-img"
                        />
                        <span className="pi-name">Apple Airpods</span>
                    </div>
                    <div className="product-info-bottom">
                        <div className="pi-item">
                            <span className="pi-key">id:</span>
                            <span className="pi-value">123</span>
                        </div>
                    </div>
                    <div className="product-info-bottom">
                        <div className="pi-item">
                            <span className="pi-key">sales:</span>
                            <span className="pi-value">241</span>
                        </div>
                    </div>
                    <div className="product-info-bottom">
                        <div className="pi-item">
                            <span className="pi-key">active:</span>
                            <span className="pi-value">Yes</span>
                        </div>
                    </div>
                    <div className="product-info-bottom">
                        <div className="pi-item">
                            <span className="pi-key">in stock:</span>
                            <span className="pi-value">No</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-bottom">
                <form className="product-form">
                    <div className="product-form-left">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Apple Airpods"
                        />
                        <label htmlFor="inStock">In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label htmlFor="active">Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="product-form-right">
                        <div className="product-upload">
                            <img
                                src={
                                    image
                                        ? image
                                        : 'https://unsplash.com/photos/Z8sELbYQCvc/download?force=true&w=640'
                                }
                                alt=""
                                className="product-upload-img"
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
                        <button className="product-button">Update</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Product;
