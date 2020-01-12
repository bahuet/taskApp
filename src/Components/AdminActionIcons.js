import React from 'react'
import {
  IconButton,
} from "@material-ui/core";
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import DeleteIcon from "@material-ui/icons/Delete";

export default () => {
  const handleUrgentClick = () => {
    console.log(`clicked handleUrgentClick`);
  };
  const handleTransferClick = () => {
    console.log(`clicked handleTransferClick`);
  };
  const handleDeleteClick = () => {
    console.log(`clicked handleDeleteClick`);
  };

  
    return (
      <div>
        <IconButton onClick={handleUrgentClick}>
          <ReportProblemIcon fontSize="small" />
        </IconButton>{" "}
        <IconButton onClick={handleTransferClick}>
          <DoubleArrowIcon fontSize="small" />
        </IconButton>{" "}
        <IconButton onClick={handleDeleteClick}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    )
  }
