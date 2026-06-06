import Navigation_System from "../component/Navigation_System.jsx"
import "../styles/main.css"

function Home(){
    return(
        <>
            <div>
                <Navigation_System/>
            </div>

            <main>
                <div>
                    <h1>Welcome to our Shop</h1>
                    <p>Explore our wide range of products</p>
                </div>
            </main>
        </>
    )
}
export default Home