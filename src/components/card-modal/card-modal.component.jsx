import { ReactComponent as LikeIcon } from '../../assets/like.svg';
import DownloadButton from '../download-button/download-button.component';
import './card-modal.styles.scss';

const CardModal = (props) => {
  if (!props.show) {
    return null;
  }
  const { url, user, alt_description, description, likes } = props.image;
  return (
    <div className='card-modal-backdrop' onClick={props.onClose}>
      <div className='card-modal' onClick={e => e.stopPropagation()}>
        <div className='card-modal-header'>
          <h4 className='card-modal-title'>Preview</h4>
          <button onClick={props.onClose} type="button" className="card-modal-close-btn">
            <span className="icon-cross"></span>
            <span className="visually-hidden">Close</span>
          </button>
        </div>
        <div className='card-modal-body'>
          <div className='card-modal-image-wrapper'>
            <img src={ `${url}.jpg`} alt={alt_description} className='card-modal-image' />
            <div className='card-modal-image-likes'>
              <span>
                <LikeIcon className='like-icon' />
              </span>
              {likes}
            </div>
          </div> 
          <div className='card-modal-info'>
            <div className='card-modal-profile-wrapper'>
              <div className='card-modal-profile-image'>
                <img 
                  src={ `${user.profile_image}.webp`}
                  alt={user.username} 
                  className='card-profile-image'
                />
                <div className='card-profile-username'>{user.name}</div>
              </div>
            </div>
            <div className='card-description'>{description}</div>
            <DownloadButton url={`${url}.jpg`}></DownloadButton>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
