import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VideoDetail from './pages/VideoDetail'

function App() {

  return (
    <div className="bg-slate-800 w-full font-sans">
      <div className="container max-w-6xl mx-auto w-full px-3 flex flex-col min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route
              path="/video/:videoId"
              element={<VideoDetail />}
            >
            </Route>
            <Route
              path="/"
              element={<Home />}
            >
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
