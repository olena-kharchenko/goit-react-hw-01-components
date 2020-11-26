import user from './components/Profile/user.json';
import Profile from './components/Profile/Profile';

import statisticalData from './components/Statistics/statistical-data.json';
import Statistics from './components/Statistics/Statistics';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
    </div>
  );
}
