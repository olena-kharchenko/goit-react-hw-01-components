import PaintingList from './components/PaintingList';
import paintings from './paintings.json';
import Section from './components/Section';

export default function App() {
  return (
    <div>
      <Section title={'Топ продаж'}>
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}
