interface Text {
  children: string;
}
const Alert = ({ children }: Text) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
};

Alert.propTypes = {};

export default Alert;
