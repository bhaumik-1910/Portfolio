import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import Home from './pages/home'
import Skill from './pages/skill'
import Education from './pages/education'
import Work from './pages/work'
import Contact from './pages/contact'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'
import Sidebar from './component/Sidebar'
import Web from './component/work/web'
import { pages } from './utils/data.constants'

const App = () => (
  <MantineProvider>
    <BrowserRouter>
      <Sidebar pages={pages}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path='/skill' element={<Skill />}></Route>
          <Route path='/education' element={<Education />}></Route>
          <Route path="/work" element={<Work />} />
          <Route path="/web" element={<Web />} />
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  </MantineProvider>
)

export default App
