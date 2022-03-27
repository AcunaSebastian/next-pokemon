import { FC, useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { FavoritePokemon } from "../../components/pokemon";
import { NoFavorites } from '../../components/ui';
import { localFavorites } from "../../utils";

const FavoritesPage:FC = () => {
    const [FavoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons())
    }, [])

    return (
        <Layout title="Favorites">
            {
                FavoritePokemons.length <= 0 
                ? (<NoFavorites/>) 
                : (<FavoritePokemon pokemons={FavoritePokemons}/>)
            }
            
        </Layout>
    );
}

export default FavoritesPage;