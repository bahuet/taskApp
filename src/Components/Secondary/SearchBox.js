import React from 'react'

import { TextField, InputAdornment, IconButton } from "@material-ui/core"

import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'

export default ({ tasksFilter }) => (
  <TextField label="Chercher"
    placeholder='ex: "Facture" ou "George"'
    size="small" variant="filled"
    onChange={tasksFilter.onChange} value={tasksFilter.input}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end" >
          <IconButton style={tasksFilter.input ? { visibility: 'visible' } : { visibility: 'hidden' }}
            size='small' onClick={tasksFilter.clear}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </InputAdornment>
      )
    }} />
)