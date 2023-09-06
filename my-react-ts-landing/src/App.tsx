import { PageLayout, ContentLayout, Header, Main, Info, Stats } from "./components";

function App() {
  return (
    <PageLayout>
      <Header />
      <ContentLayout>
        <Main />
        <Info />
        <Stats />
      </ContentLayout>
     {/* <Footer /> */}
    </PageLayout>
  );
}

export default App;