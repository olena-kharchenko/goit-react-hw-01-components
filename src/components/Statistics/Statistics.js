import PropTypes from 'prop-types';
import randColor from './randColor';
import s from './Statistics.module.css';

function Statistics(props) {
  const { title, stats } = props;
  return (
    <section className={s.statistics}>
      {title && <h2 className="title">Upload stats</h2>}

      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: randColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
