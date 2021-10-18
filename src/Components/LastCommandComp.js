import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Paper } from '@mui/material';


const LastCommandComp = ({lastCommand}) => {
      return (
            <Paper elevation={12} style={{ marginTop: 25, backgroundColor: "#DAF76E", borderRadius: 15, height: 250, justifyContent: "center", textAlign: "center", overflow: "hidden" }} >
                  <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        
                        <nav aria-label="secondary mailbox folders">
                              <List>
                              {lastCommand?.map((com) =>{
                                    return(
                                          <>
                                     <ListItem disablePadding>
                                          <ListItemButton>
                                                <ListItemText primary={com} />
                                          </ListItemButton>
                                    </ListItem>
                                    <Divider />
                                    </>
                               ) })}
                                   
                                   
                              </List>
                        </nav>
                  </Box>
            </Paper>

      )
}

export default LastCommandComp
