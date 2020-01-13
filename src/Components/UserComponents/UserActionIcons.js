import React from 'react'
import {
  IconButton,
} from "@material-ui/core";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

export default () => {
  const handleFocusClick = () => {
    console.log(`clicked handleFocusClick`);
  };
  const handleCompletedClick = () => {
    console.log(`clicked handleCompletedClick`);
  };

  
    return (
      <div>
        <IconButton onClick={handleFocusClick}>
          <CenterFocusStrongIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={handleCompletedClick}>
          <AssignmentTurnedInIcon fontSize="small" />
        </IconButton>
      </div>
    )
  }
