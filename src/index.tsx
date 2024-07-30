import { createRoot } from 'react-dom/client';
import { App } from './appComponent.tsx';
import './style.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <>
      <div className="container">
        <h1 className="background">REACT TEMPLATE!</h1>
        <App />
      </div>
    </>
  );
}
