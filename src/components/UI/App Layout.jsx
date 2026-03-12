//AppLayout.jsx

import AppHeader from './AppHeader';


export default function AppLayout({user}) {
  return (
    <>
    
      <AppHeader user={user}/>
      <main className="abantu-main">
        <div className="abantu-content">
         
        </div>
      </main>
    </>
  );
}