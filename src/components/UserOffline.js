const UserOffline = () => {

    return (
        <div className="no-internet-container">
          <div className="no-internet-content">
            <div className="animation-container">
              <div className="animation-box">
                <div className="animation-inner"></div>
              </div>
              <div className="animation-box">
                <div className="animation-inner"></div>
              </div>
              <div className="animation-box">
                <div className="animation-inner"></div>
              </div>
            </div>
            <h1>Oops! It seems you're offline.</h1>
            <p>Please check your internet connection and try again.</p>
          </div>
        </div>
      );
}

export default UserOffline;