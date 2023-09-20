import Card from "./assets/components/Card/Card"

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 600
        }}
      >
        Payana Challenge

        <Card />
      </h2>

    </div>
  )
}

export default App