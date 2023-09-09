import { PageLayout, ContentLayout, Header, Main, Info, Stats, Partners, Stress, Footer, KnowMore, About, Testimonials } from "./components";

function App() {
  return (
    <PageLayout>
      <Header />
      <ContentLayout>
        <Main />
        <Info />
        <Stats />
        <Partners />
        <Stress />
        <About />
        <Testimonials />
        <KnowMore />
      </ContentLayout>
     <Footer />
    </PageLayout>
  );
}

export default App;