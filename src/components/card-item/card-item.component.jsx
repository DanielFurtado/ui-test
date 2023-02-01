import './card-item.styles.scss';

const CardItem = ({ image }) => {
  const { url, user } = image;
  return (
    <div 
      className='card-container'
      style={{
        backgroundImage: `url(${url}.jpg)`,
      }}
      >
        <div className='card-body-container'>
          <div className='card-info'>
            <p>{user.name}</p>
          </div>
        </div>
    </div>
  );
};

// <img src={`${user.profile_image}.webp`} alt=''/>

export default CardItem;
