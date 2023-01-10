import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export const FriendListItem = ({avatar, name, isOnline}) => {
  // const {} = props;
  return (
    <li className={css.frien}>
      <span className={isOnline ? css.isOnline : css.isOfline}></span>
      <img className={css.avaterImage} src={avatar} alt={name} width="48" />
      {name}
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};