import { Navigate } from 'react-router-dom';

/** The old /projects route now lives on the home page as an anchored section. */
export default function Projects() {
  return <Navigate to={{ pathname: '/', hash: '#projects' }} replace />;
}
