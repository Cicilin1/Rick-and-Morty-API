import { Container } from "./style";
import Logo from "../../assets/logo.png"

export const Header = () => {
    return ( 
        <Container>
        <img src={Logo} alt="logo"/>


        <nav>
            <a href="#">Docs</a>
            <a href="#">About</a>
            <a href="#">Support us</a>

        </nav>
        </Container>
    )

}