
import { Outlet } from 'react-router-dom';

const AuthLayouts = () => {
    return (
        <div>
            <h2>Auth Layout</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts;