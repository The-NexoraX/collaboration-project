import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BrowserPage } from "./pages/BrowserPage";
import { WorkspacePage } from "./pages/WorkspacePage";
import { HistoryPage } from "./pages/HistoryPage";
import { NotesPage } from "./pages/NotesPage";
import { KnowledgePage } from "./pages/KnowledgePage";
import { ComparePage } from "./pages/ComparePage";
import { TimelinePage } from "./pages/TimelinePage";
import { DashboardPage } from "./pages/DashboardPage";
import { SettingsPage } from "./pages/SettingsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browser" element={<BrowserPage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
