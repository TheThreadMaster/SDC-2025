import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './themeToggle.css';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        className="theme-toggle-checkbox"
        id="theme-toggle"
        checked={darkMode}
        onChange={toggleTheme}
      />
      <label className="theme-toggle-label" htmlFor="theme-toggle">
        <span className="theme-toggle-inner"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;