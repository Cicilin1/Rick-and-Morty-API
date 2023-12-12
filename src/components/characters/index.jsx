import { Container, ContainerInfo } from "./style"

export const Character = ({ character }) => {
    return (
        <Container>
            <img src={character.image} alt={character.name} />
            <ContainerInfo>
                <div>
                    <p className="title" >  {character.name}</p>
                    <p className="status" >
                        <span />
                        {character?.status} = {character?.species}
                    </p>
                </div>

                <div>
                    <p className="info">Last know location</p>
                    <p className="description">{character?.location?.name || 'unknow'}</p>
                </div>

                <div>
                    <p className="info">Origin:</p>
                    <p className="description">{character?.origin?.name || 'unknow'}</p>
                </div>
            </ContainerInfo>
        </Container>
    )



}