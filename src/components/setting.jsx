import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, Cog, ShoppingBag, Menu, ArrowLeft } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('Settings');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'Settings':
        return <SettingsContent />;
      case 'Orders':
        return <OrdersContent />;
      case 'Grocery':
        return <GenericContent title="Grocery" />;
      case 'Fashion':
        return <GenericContent title="Fashion" />;
      default:
        return <GenericContent title="Welcome" />;
    }
  };

  const Sidebar = ({ onSelect, active, isOpen, onToggle }) => {
    const navItems = [
      { name: 'Grocery', subItems: ['Vegetables', 'Fruits', 'Dairy'] },
      { name: 'Fashion', subItems: ['Men', 'Women', 'Kids'] },
      { name: 'Orders', icon: <ShoppingBag size={20} />, count: 0 },
      { name: 'Settings', icon: <Cog size={20} /> },
    ];
    
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
      <aside className={`fixed z-40 top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center justify-between px-2 mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Nanshiv Shopping</h1>
            <button
              onClick={onToggle}
              className="md:hidden p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              <Menu size={24} />
            </button>
          </div>
          
          <nav className="flex-1 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => {
                    if (item.subItems) {
                      setOpenDropdown(openDropdown === item.name ? null : item.name);
                    } else {
                      onSelect(item.name);
                      setOpenDropdown(null);
                      onToggle(); // Close sidebar on selection for mobile
                    }
                  }}
                  className={`flex items-center justify-between w-full p-3 font-medium text-lg rounded-xl transition-colors duration-200 ${
                    active === item.name ? 'text-indigo-700' : 'text-gray-700 hover:text-indigo-700'
                  }`}
                >
                  <span className="flex items-center">
                    {item.name}
                    {item.count !== undefined && <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full">({item.count})</span>}
                  </span>
                  {item.subItems && (openDropdown === item.name ? <ChevronDown size={20} /> : <ChevronLeft size={20} />)}
                </button>
                
                {item.subItems && openDropdown === item.name && (
                  <ul className="pl-6 mt-2 space-y-1">
                    {item.subItems.map((subItem) => (
                      <li key={subItem}>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); onSelect(subItem); onToggle(); }}
                          className="block p-2 text-base text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    );
  };
  
  const SettingsContent = () => (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800">Account Settings</h2>
      <p className="mt-4 text-gray-600">This is where you would place forms and controls for user settings.</p>
      <div className="mt-6 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-700">Profile Information</h3>
        <p className="mt-2 text-gray-500 text-sm">Update your name and contact details.</p>
      </div>
    </div>
  );

  const OrdersContent = () => (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800">Your Orders</h2>
      <p className="mt-4 text-gray-600">This section would show a list of past and current orders.</p>
    </div>
  );

  const GenericContent = ({ title }) => (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      <p className="mt-4 text-gray-600">This is a placeholder for the {title} content.</p>
    </div>
  );


  return (
    <div className="relative min-h-screen bg-slate-50 font-sans">
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-100 transition-colors duration-200"
        >
          <Menu size={24} />
        </button>
      </div>

      <Sidebar 
        onSelect={setActiveSection} 
        active={activeSection}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main className={`transition-all duration-300 md:ml-64 p-4 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {renderContent()}
      </main>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default App;
