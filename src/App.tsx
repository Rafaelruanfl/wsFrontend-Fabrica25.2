import Header from "./components/head"
import Footer from "./components/footer"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow p-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Bem-vindo à Pokédex!</h2>
        <p className="text-gray-600">Aqui você poderá explorar e pesquisar Pokémons. 🔍</p>
      </main>

      <Footer />
    </div>
  )
}

export default App
