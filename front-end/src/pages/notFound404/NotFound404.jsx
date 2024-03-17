import { Error } from '@mui/icons-material';
import './NotFound404.css';

function NotFound404() {
    return (
        <section className="notfound-page">
            <div className="nf-img">404</div>
            <div className="nf-text">
                <h1>The page is still under construction</h1>
                <p>We are sorry</p>
            </div>
        </section>
    );
}

export default NotFound404;
