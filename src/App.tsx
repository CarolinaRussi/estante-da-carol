import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LanguageToggle } from './components/LanguageToggle'
import { ScrollToTop } from './components/ScrollToTop'
import { LocaleProvider } from './i18n/LocaleProvider'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectPage } from './pages/ProjectPage'

export default function App() {
  return (
    <LocaleProvider>
      <BrowserRouter>
        <ScrollToTop />
        <LanguageToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projeto/:id" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </LocaleProvider>
  )
}
