import './App.css';
import Login from './components/Login Screen/Login/Login';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/Login Screen/SignUp';
import Buyer from './components/Login Screen/SignUp/inc/Buyer/Buyer';
import Seller from './components/Login Screen/SignUp/inc/Seller/Seller';
import VerifyNumber from './components/Login Screen/Verfying and reset/VerifyNumber';
import VerifyEmail from './components/Login Screen/Verfying and reset/VerifyEmail';
import ResetPassword from './components/Login Screen/Verfying and reset/ResetPassword';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/buyer" element={<Buyer />} />
			<Route path="/seller" element={<Seller />} />
			<Route path="/verifynumber" element={<VerifyNumber />} />
			<Route path="/verifyemail" element={<VerifyEmail />} />
			<Route path="/reset" element={<ResetPassword />} />
		</Routes>
	);
}

export default App;
