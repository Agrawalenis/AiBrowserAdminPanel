import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UsersTable from './components/UsersTable';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <UsersTable />
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
