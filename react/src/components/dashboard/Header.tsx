import { useTheme } from "../../context/ThemeContext";

export default function Header() {
    const { theme,toggleTheme } = useTheme();
    
    return (
        <header className='flex justify-between items-center p-4'>
            <div className="">
                <h3>My Dashboard</h3>
                <p className="">Show your dashboad preview</p>
            </div>
            <button 
                onClick={toggleTheme} 
                className={`py-2.5 px-3 cursor-pointer rounded-full border transition-all ${
                    theme === 'dark' 
                        ? 'bg-gray-800 hover:bg-gray-700 text-white border-gray-600' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300'
                }`}
            >
                {theme === 'light' ? (
                    <div className="flex gap-1 items-center justify-center">
                        <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                        </svg>
                        <span>Dark Mode</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <circle cx="12" cy="12" r="4"/>
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                        </svg>
                        <span>Light Mode</span>
                    </div>
                )}
                  {/* {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span> */}
                {/* {theme === 'light' ? (<><Moon /><span>Dark Mode</span></>) : (<><Sun />Light Mode</>)} */}
            </button>
        </header>
    );
}
