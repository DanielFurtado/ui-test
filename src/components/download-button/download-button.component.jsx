const DownloadButton = ({ url }) => {
  const downloadImage = () => {
    window.open(url, '_blank');
  }
  return (
    <button onClick={downloadImage} className='button-primary' aria-label='Download'>
      Download
    </button>
  );
};

export default DownloadButton;