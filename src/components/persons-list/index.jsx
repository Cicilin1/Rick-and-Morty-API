import { Container, ContainerList } from "./style"
import { Character } from "../characters/index"

export const PersonsList =  ({data}) => {

    return(
        <Container>
            <ContainerList>
            {data?.result?.map((character) => ( 
                <Character character={character}/>

            ))}

            </ContainerList>
        </Container>
    )

}
 