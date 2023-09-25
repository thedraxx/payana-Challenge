import Card from "./assets/components/Card/Card"

const App = () => {
  return (
    <div
      className="flex flex-1 justify-center items-center align-middle h-screen"
    >
      <h2
        className="text-2xl text-center font-bold text-gray-400"
      >
        Payana Challenge

        <Card />
      </h2>

    </div>
  )
}

export default App