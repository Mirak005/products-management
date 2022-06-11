import './index.css';

const EmptyData = ({ msg = 'N/A' }) => {
  return (
    <div className='empty-data-container'>
      <p>{msg}</p>
    </div>
  );
};

export default EmptyData;
