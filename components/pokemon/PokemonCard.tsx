import { Card, Grid, Row, Text } from "@nextui-org/react"
import { FC } from "react"
import { SmallPokemon } from "../../interfaces"
import { useRouter } from 'next/router';

interface Props {
    pokemon:SmallPokemon
}
export const PokemonCard: FC<Props> = ({pokemon}) => {
    const router = useRouter();
    const onClick = () => { 
        router.push(`/names/${ pokemon.name }`);
    }

  return (
    <>
        <Grid key={pokemon.id} xs={ 6 } sm={ 3 } xl={ 1 }>
            <Card 
                onClick={onClick}
                hoverable clickable>
                <Card.Body css={{ p: 1}}>
                <Card.Image src={pokemon.image} width="100%" height={140}/>
                </Card.Body>
                <Card.Footer>
                <Row justify='space-between'>
                    <Text transform='capitalize'> { pokemon.name }</Text>
                    <Text> { pokemon.id }</Text>
                </Row>
                </Card.Footer>
            </Card>
        </Grid>
    </>
  )
}
