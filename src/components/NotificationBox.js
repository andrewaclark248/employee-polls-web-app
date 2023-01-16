import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';


function NotificationBox(props) {
      return (

        <Alert variant="danger" onClose={() => props.showNotificationBox(false)} dismissible>
          <span>
            {props.alertText}
          </span>
        </Alert>
      );
  }

  export default NotificationBox;