import PropTypes from 'prop-types';

export default function Painting(props) {
  const {
    url,
    title,
    authorUrl,
    authorName,
    quantity = 'неизвестно',
    price,
  } = props;

  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorName}</a>
      </p>
      <p>Цена: {price}кредитов</p>
      <p>Доступность:{quantity <= 10 ? 'заканчивается' : 'есть в наличии'} </p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
