import './card-item.styles.scss';

const CardItem = ({ image }) => {
  const { url, user } = image;
  return (
    <div className='card-container'>
      <div className='card'>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${url}.jpg)`,
          }}
        />
        <div className='card-body-container'>
          <p>Preview</p>
        </div>
      </div>
    </div>
  );
};

// <img src={`${user.profile_image}.webp`} alt=''/>

export default CardItem;
