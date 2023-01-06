import {Route, Routes} from "react-router-dom";
import Rewards from "./pages/Rewards/Rewards";
import Menu from "./pages/Menu/Menu";
import GiftCards from "./pages/GiftCards/GiftCards";
import Welcome from "./pages/WelcomePage/Welcome";
import JoinNow from "./pages/JoinNow/JoinNow";
import SignIn from "./pages/SignIn/SignIn";
import MenuItem from "./pages/Menu/MenuItem";
import Product from "./pages/Menu/Products/Product";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/Rewards" element={<Rewards/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Gift" element={<GiftCards/>}/>
            <Route path="/Join" element={<JoinNow/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="/Menu/Drink/:namePath" element={<MenuItem/>}/>
            <Route path="/Menu/Product/:productId" element={<Product/>}/>
        </Routes>
    );
}

export default App;

