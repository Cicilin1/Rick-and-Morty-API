import { Container, ContainerList } from "./style"
import { Character } from "../characters/index.jsx"

export const PersonsList =  ({data}) => {
    return(
        <Container>
            <ContainerList>
            {data?.results?.map((character) => ( 
                <Character character={character}/>

            ))}

            </ContainerList>
        </Container>
    )

}
 