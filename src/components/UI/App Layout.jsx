//AppLayout.jsx
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';

export default function AppLayout({user}) {
  return (
    <>
      <AppSidebar />
      <AppHeader user={user}/>
      <main className="abantu-main">
        <div className="abantu-content">
         
        </div>
      </main>
    </>
  );
}