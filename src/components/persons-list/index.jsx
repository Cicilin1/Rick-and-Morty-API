import { Container, ContainerList } from "./style"
import { Character } from "../characters/index.jsx"
import { Pagination } from "../pagination/index.jsx"

export const PersonsList = ({ data, fecthNextPage, fecthPreiousPage }) => {
   
    return (
        <Container>
            <ContainerList>
                {data?.results?.map((character) => (
                    <Character character={character} />

                ))}

            </ContainerList>
            <Pagination
            pagination={data?.info} 
            fecthNextPage={(url) => fecthNextPage(url)}
            fecthPreiousPage={(url) => fecthPreiousPage(url)}
            >

            </Pagination>

        </Container>
    )

}
