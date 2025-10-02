import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  const getStyles = ({ isActive }) => {
    const styles = 'flex items-center gap-2 px-3 py-2 rounded-tr-full rounded-br-full transition-all duration-300';
    return isActive
      ? `text-slate-50 bg-indigo-800 ${styles}`
      : `text-slate-800 hover:bg-indigo-800 hover:text-slate-50 ${styles}`;
  };

  return (
    <aside className="flex flex-col gap-3 p-2 border-r-2 border-gray-300 w-[180px] h-[calc(100vh-64px)]">
      <NavLink to="/" className={getStyles} aria-label="Home" title="Home">
        <span className="material-symbols-outlined">home</span>
        <span className="truncate">Home</span>
      </NavLink>

      <NavLink to="/archive" className={getStyles} aria-label="Archive" title="Archive">
        <span className="material-symbols-outlined">archive</span>
        <span className="truncate">Archive</span>
      </NavLink>

      <NavLink to="/important" className={getStyles} aria-label="Important" title="Important">
        <span className="material-symbols-outlined">star</span>
        <span className="truncate">Important</span>
      </NavLink>

      <NavLink to="/bin" className={getStyles} aria-label="Bin" title="Bin">
        <span className="material-symbols-outlined">delete</span>
        <span className="truncate">Bin</span>
      </NavLink>
    </aside>
  );
};
