import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './FeaturedInfo.css';

function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featured-item" title="Revenue">
                <span className="featured-title">Revenue</span>
                <div className="featured-money-container">
                    <span className="featured-money">$2,415</span>
                    <span className="featured-money-rate">
                        -11.4 <ArrowDownward className="featured-icon down" />
                    </span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
            <div className="featured-item" title="Sales">
                <span className="featured-title">Sales</span>
                <div className="featured-money-container">
                    <span className="featured-money">$4,415</span>
                    <span className="featured-money-rate">
                        -9.4 <ArrowDownward className="featured-icon down" />
                    </span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
            <div className="featured-item" title="Cost">
                <span className="featured-title">Cost</span>
                <div className="featured-money-container">
                    <span className="featured-money">$1,415</span>
                    <span className="featured-money-rate">
                        +2.4 <ArrowUpward className="featured-icon up" />
                    </span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
        </div>
    );
}

export default FeaturedInfo;
