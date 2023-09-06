import { PageLayout, ContentLayout, Header, Main, Info, Stats, Partners, Stress } from "./components";

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
      </ContentLayout>
     {/* <Footer /> */}
    </PageLayout>
  );
}

export default App;