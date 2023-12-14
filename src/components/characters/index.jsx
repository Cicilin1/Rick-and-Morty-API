import { Container, ContainerInfo } from "./style"

export const Character = ({ character }) => {

    const getStatusColor = (status) => {
        if(status == "Alive" ) return "#55cc44";
        if(status == "Dead" ) return "#D63D2E";
        return "#9E9E9E"

    }

    return (
        <Container>
            <img src={character.image} alt={character.name} />
            <ContainerInfo backgroundColor={getStatusColor(character?.status)}>
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