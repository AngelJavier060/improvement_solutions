import Header from "./components/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <section className="mx-auto">
      <div className="flex h-screen flex-col justify-between font-sans">
        <Header />
        <main className="mb-auto">
          <Main />
        </main>
        <Footer />
      </div>
    </section>

  );
}

export default App;
