import { Link } from "react-router-dom";
export function HomePage() {
  return <main className="page"><section className="card">
    <h1>AI Browser</h1>
    <p className="muted">AI-powered browser workspace frontend.</p>
    <Link to="/browser">Open Browser →</Link>
  </section></main>;
}
