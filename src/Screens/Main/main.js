import Container from "../../Components/Container/Container"
import Header from "../../Components/Header/Header";
import "./main.scss";
const Main = () => {
    return (
        <main>
            <Container className="main__container">
                <h1>Hello mello</h1>
                <Header />
            </Container>
        </main>
    )
}

export default Main;