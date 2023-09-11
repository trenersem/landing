import { PageLayout, ContentLayout, Header, Main, Info, Stats, Partners, Stress, Footer, KnowMore, About, Testimonials, FixedHeader, CTA, CustomForm } from "./components";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route
        path='/'
        element={(
           <PageLayout>
              <FixedHeader />
              <Header />
              <ContentLayout>
                <Main />
                <Info />
                <Stats />
                <Partners />
                <Stress />
                <About />
                <Testimonials />
                <CTA />
                <KnowMore />
              </ContentLayout>
            <Footer />
          </PageLayout>
        )}
      />
      <Route
         path='/try'
         element={(
          <PageLayout>
               <CustomForm />
          </PageLayout>
         )} 
      />
     </Routes>
     </BrowserRouter>
  );
}

export default App;