
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';

export default function AppLayout({ title, children }) {
  return (
    <>
      <AppSidebar />
      <AppHeader title={title} />
      <main className="abantu-main">
        <div className="abantu-content">
          {children}
        </div>
      </main>
    </>
  );
}