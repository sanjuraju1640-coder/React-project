
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Home() {
  return <h1>Welcome to my React App</h1>
}

function About() {
  return <h1>This is the About page</h1>
}

function Contact() {
  return <h1>Contact us at hello@react.com</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
