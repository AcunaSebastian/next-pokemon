import Head from "next/head"
import { FC } from "react"
import { Navbar } from '../ui/Navbar';

interface Props {
    title?:string
}


const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout : FC<Props> = ( { children, title } ) => {

    return (
        <>
            <Head>
                <title>{ title || 'Pokemon App'}</title>
                <meta name="author" content="Sebastian Acuna" />
                <meta name="description" content={`Informacion sobre el pokemon ${title} `}/>
                <meta name="keywords" content={`${title}, pokemon, pokedex1`} />

                <meta property="og:title" content={`Información de ${ title } `} />
                <meta property="og:description" content={`Esta es la información sobre ${ title }`} />
                <meta property="og:image" content={`${ origin }/img/banner.png`} />
            </Head>

            <Navbar></Navbar>

            <main style={{
                padding:'0px 20px'
            }}>
                { children }
            </main>
        
        </>
    )
}