// import PaintingList from './components/PaintingList';
// import paintings from './paintings.json';
// import Section from './components/Section';
import user from './components/Profile/user.json';
import Profile from './components/Profile/Profile';

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
    </div>
  );
}

// <Section title={'Топ продаж'}>
//   <PaintingList items={paintings} />
// </Section>
// <Section />
