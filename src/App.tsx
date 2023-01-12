import Footer from "./components/footers/footer";
import Header from "./components/header";
import Announcement from "./pages/announcements/Announcement";
import Home from "./pages/home/Home";

// import PageOneFindSeller from "./pages/pageForOneSeller/pageForOneSeller";
// import PageIsSeller from "./pages/pageSeller/pageSeller";

function App() {
    return (
        <>  
            <Header />
            <Announcement />
            {/* <Home /> */}
            <Footer />
        </>
    );
}
export default App;
