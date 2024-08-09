import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-hd:hidden"/>
        <span className="orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptNest is an open-source AI prompting tool for the 
        world to discover, create and share creative prompts.
      </p>

      <Feed />
    </section>
  )
}

export default Home
