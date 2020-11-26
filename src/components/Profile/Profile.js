import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile(props) {
  const { name, tag, location, avatar, stats } = props;
  const { followers, views, likes } = stats;

  return (
    <div className={s.profile}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={s.item}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={s.item}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
