const Notification = (props) => {
  //  Write your code here.
  const { notification, className, icon } = props;
  const notificationElement = (
    <div className={className}>
      <img src={icon} className="notification-icon" />
      <p className="description">{notification}</p>
    </div>
  );
  return notificationElement;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading"> Notifications </h1>
    <Notification
      notification="Information Message"
      className="information"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      notification="Success Message"
      className="success"
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      notification="Warning Message"
      className="warning"
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      notification="Error message"
      className="danger"
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
