import { Container } from "./style";
import Linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"
import gmail from "../../assets/gmail.svg"
import tag from "../../assets/tag.svg"

export const Footer = () => {
    return (
        <Container>
            <div>
                <a href="https://www.linkedin.com/in/guilherme-cicilini" target="_blank"> <img src={Linkedin} alt="link-linkedin" /></a>
                <a href="https://github.com/Cicilin1" target="_blank"> <img src={github} alt="link-gihub" /></a>
                <a href="mailto:cicilinideveloper@gmail.com" target="_blank"> <img src={gmail} alt="link-linkedin" /></a>
            </div>

            <p><img src={tag}/> Guilherme Cicilini</p>
        </Container>
    )

} 