import './App.css'
import PrimeiroCarrossel from './carrosseis/carrossel1'
import SegundoCarrossel from './carrosseis/carrossel2'
import TerceiroCarrossel from './carrosseis/carrossel3'

function App() {
  return (
    <main>
    <h1>Carrosseis</h1>
    <div className='div'>
       <PrimeiroCarrossel />
    </div>
      <SegundoCarrossel />
      <TerceiroCarrossel />
    </main>
  )
}

export default App
