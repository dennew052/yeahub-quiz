import QuestionsPage from '@/pages/QuestionsPage';
import SkillsPage from '@pages/SkillsPage/SkillsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SkillsPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
