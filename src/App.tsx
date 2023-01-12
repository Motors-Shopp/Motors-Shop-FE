import Footer from "./components/footers/footer";
import Header from "./components/header";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Announcement from "./pages/announcements/Announcement";
import LoginFrom from "./components/loginFrom";
import CadastroFrom from "./components/cadastroForm";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/Announcement/:id">
                    <Announcement />
                </Route>
                <Route exact path="/">
                    <LoginFrom />
                </Route>
                <Route exact path="/cadastro">
                    <CadastroFrom />
                </Route>
            </Switch>
            <Footer />
        </>
    );
}
export default App;
