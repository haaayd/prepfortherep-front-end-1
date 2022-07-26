import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddSubjectCard from './pages/AddSubjectCard/AddSubjectCard'
import * as subjectCardService from "./services/subjectCardService"
import Cards from './pages/Cards/Cards'
import AddTerm from './pages/AddTerm/AddTerm'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [cards, setCards] = useState([])
  const [terms, setTerms] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  useEffect(() => {
    const fetchAllCards = async () => {
      const cardData = await subjectCardService.getAll()
      setCards(cardData)
    }
    fetchAllCards()
  }, [] )

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddCard = async cardData => {
    const newCard = await subjectCardService.create(cardData)
    setCards([...cards, newCard])
    navigate("/")
  }
  const handleAddTerm = async termData => {
    const newTerm = await subjectCardService.createTerm(termData)
    setTerms([...terms, newTerm])
    navigate("/cards/:cardid/terms")
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route 
          path="/add" 
          element={<AddSubjectCard 
          handleAddCard={handleAddCard} />}
          />
        <Route 
          path="/" 
          element={<Cards cards={cards} />}
          />
        <Route 
          path="/cards/:cardId/terms" 
          element={<AddTerm cards={cards} handleAddTerm={handleAddTerm} />}
          />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  )
}

export default App
