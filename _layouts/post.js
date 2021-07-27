import DefaultLayout from '@layouts/default'
import Head from 'next/head'
import Link from 'next/link'

export default function PostLayout(props){
    return (
        <DefaultLayout>
            <Head>
                <title>{props.title}</title>
            </Head>
            <article>
                <h1>{props.title}</h1>
                <p>{props.des}</p>
                <div dangerouslySetInnerHTML={{__html:props.content}}/>
            </article>
        </DefaultLayout>
    )
}