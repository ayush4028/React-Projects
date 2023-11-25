import './App.css'
import Card from './components/card'

function App() {
  let Myobj = {
    username:'Ayush',
    branch:'Computer Engineering',
    hobby:'Playing Chess'
  }

  return (
    <>
     <h1 className='bg-green-500 text-black p-4 rounded-xl mb-5'>Hello World</h1>
      <Card
        username= 'chai aur code with Ayush' 
        btnText = 'Click me'
        image = 'https://qph.cf2.quoracdn.net/main-qimg-99b187f33146ae7e6d014bd2be22b5f0-lq'
        /> 
      <Card 
        username='Hello! learn with Ayush' 
        btnText = 'Try Me'
        image = 'https://thumbs.dreamstime.com/b/portrait-young-beautiful-girl-fashion-photo-29870052.jpg'
        />
    </>

  )
}

export default App
