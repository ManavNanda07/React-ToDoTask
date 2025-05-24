import { TailSpin } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner;
