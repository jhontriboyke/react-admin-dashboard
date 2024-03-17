import './WidgetLg.css';
import profile from '../../../public/profile.jpg';

function WidgetLg() {
    const Button = ({ type }) => {
        return (
            <button className={'wl-button ' + type.toLowerCase()}>
                {type}
            </button>
        );
    };

    return (
        <div className="widget-lg">
            <h3 className="wl-title">Latest Transactions</h3>
            <table className="wl-table">
                <thead>
                    <tr className="wl-tr">
                        <th className="wl-th">Customer</th>
                        <th className="wl-th">Date</th>
                        <th className="wl-th">Amount</th>
                        <th className="wl-th">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="wl-tr">
                        <td className="wl-user">
                            <img src={profile} alt="" className="wl-img" />
                            <span className="wl-name">Jhontri Boyke</span>
                        </td>
                        <td className="wl-date">11 February 2024</td>
                        <td className="wl-amount">$122.00</td>
                        <td className="wl-status">
                            <Button type="Approved" />
                        </td>
                    </tr>
                    <tr className="wl-tr">
                        <td className="wl-user">
                            <img src={profile} alt="" className="wl-img" />
                            <span className="wl-name">Jhontri Boyke</span>
                        </td>
                        <td className="wl-date">11 February 2024</td>
                        <td className="wl-amount">$122.00</td>
                        <td className="wl-status">
                            <Button type="Pending" />
                        </td>
                    </tr>
                    <tr className="wl-tr">
                        <td className="wl-user">
                            <img src={profile} alt="" className="wl-img" />
                            <span className="wl-name">Jhontri Boyke</span>
                        </td>
                        <td className="wl-date">11 February 2024</td>
                        <td className="wl-amount">$122.00</td>
                        <td className="wl-status">
                            <Button type="Declined" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WidgetLg;
