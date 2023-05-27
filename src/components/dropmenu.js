import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup'; // Add this import statement
import { Link } from 'react-router-dom';
import '../styles/dropdown.css'
import settingsicon from '../images/settingsicon.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DropdownMenu() {
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
          const response = await axios.post('http://localhost:8000/api/accounts/logout/'); // Replace '/logout/' with the actual logout endpoint URL
          console.log(response.data); // Optional: Log the response data
          localStorage.removeItem('token');
          navigate('/login')
          
          // Handle the logout success
          if (response.data.success) {
            // Redirect or perform any necessary actions
            console.log('Logged out successfully');
          } else {
            // Handle the logout failure
            console.log('Failed to log out');
          }
        } catch (error) {
          // Handle any errors
          console.error(error);
        }
      };

    return (
        <>
            <div className="mb-2">
                {['up'].map(
                    (direction) => (
                        <DropdownButton
                            as={ButtonGroup} // Use the imported ButtonGroup component here
                            key={direction}
                            id={`dropdown-button-drop-up`}
                            drop={direction}
                            variant="secondary"
                            title={<img src={settingsicon} alt="Profile" className="profile-image" />}
                            className="disable-background-color"
                            
                            
                            
                        >
                            <Dropdown.Item eventKey="1" className='dopchoice'style= {{
                            backgroundColor: 'blueviolet',
                            border: '1px black',
                             borderRadius: '0px',width:'100%'}}><Link to={'/profile'}>Profile</Link></Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2" className='dopchoice' style= {{
                            backgroundColor: 'blueviolet',
                            border: '1px black',
                             borderRadius: '0px',width:'100%'}}>Edit profile</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3" className='dopchoice' onClick={handleLogout}style= {{
                            backgroundColor: 'blueviolet',
                            border: '1px black',
                             borderRadius: '0px',width:'100%'}}>Log out</Dropdown.Item>
                            
                            
                        </DropdownButton>
                    ),
                )}
            </div>

            
        </>
    );
}

export default DropdownMenu;
