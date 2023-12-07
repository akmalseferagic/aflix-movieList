import Head from "next/head";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Head>
        <title>Aflix</title>
        <meta name="description" content="Movie list"/>
      </Head>

      <main className="container mx-auto py-10 px-4 flex flex-col item-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-white">Aflix</h1>
      </main>
    </main>
  )
}
