import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logodashboard.png';
import { toast } from 'react-toastify'; // Example library for notifications

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch logged-in user from localStorage
  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setLoggedInUser(user || 'Guest'); // Fallback to 'Guest' if no user
  }, []);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No authentication token found. Please log in.');
        navigate('/login');
        return;
      }

      const url = 'http://localhost:5002/auth/login';
      const response = await fetch(url, {
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const result = await response.json();
      setProducts(result);
    } catch (err) {
      toast.error(err.message || 'Error fetching products');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    toast.success('Logged out successfully');
    navigate('/homepage');
  };

  const menuClass = 'menu';
  const activeMenuClass = 'menu selected';

  return (
    <div className="menu-container">
      <img src={logo} alt="Dashboard Logo" style={{ width: '50px' }} />
      <div className="menus">
        <ul>
          {[
            { to: '/', label: 'Dashboard', index: 0 },
            { to: '/orders', label: 'Orders', index: 1 },
            { to: '/holdings', label: 'Holdings', index: 2 },
            { to: '/positions', label: 'Positions', index: 3 },
            { to: '/funds', label: 'Funds', index: 4 },
            { to: '/apps', label: 'Apps', index: 5 },
          ].map((item) => (
            <li key={item.index}>
              <Link
                style={{ textDecoration: 'none' }}
                to={item.to}
                onClick={() => handleMenuClick(item.index)}
              >
                <p className={selectedMenu === item.index ? activeMenuClass : menuClass}>
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{loggedInUser ? loggedInUser.slice(0, 2).toUpperCase() : 'GU'}</div>
          <p className="username mt-3">{loggedInUser || 'Guest'}</p>
          {isProfileDropdownOpen && (
            <div className="dropdown">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;