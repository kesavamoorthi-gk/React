interface Props {
  onClose: () => void;
}
const ShowAlert = ({ onClose }: Props) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible" role="alert">
        My Alert
        <button
          onClick={onClose}
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

ShowAlert.propTypes = {};

export default ShowAlert;
