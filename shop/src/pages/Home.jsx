import Navigation_System from "../component/Navigation_System.jsx"
import "../styles/main.css"
import "../styles/home_page.css"

function Home(){
    return(
        <>
            <div>
                <Navigation_System/>
            </div>

            <main>
                <div className="main-content">
                    <h1>Welcome to my Shop</h1>
                    <p>If you love Hello Kitty, then you will love our Hello Kitty products!</p>
                </div>

                <div className="filiter_card_container">
                    <div className="filiter_card1">
                        <label>School Supplies</label>
                    </div>
                    <div className="filiter_card1">
                        <label>Makeup</label>
                    </div>
                    <div className="filiter_card1">
                        <label>Jewelry</label>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Home