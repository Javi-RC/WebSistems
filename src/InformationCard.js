import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { MdEdit, MdEditOff } from "react-icons/md";
import { GoHeart, GoHeartFill } from "react-icons/go";
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { deepOrange, deepPurple } from '@mui/material/colors';

const editButtonStyle = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    padding: '0',
    margin: '0',
};
const likeButtonStyle = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    marginRight: '200',
};

function InformationCard() {
    const [editing, setEditing] = useState(false);
    const [liked, setLiked] = useState(false);
    const [open, setOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleClickEdit = () => {
        setEditing(!editing);
        setSnackbarMessage('Edit mode activated!');
        setOpen(true);
    };

    const handleClickLike = () => {
        setLiked(!liked);
        setSnackbarMessage(liked ? 'Unliked' : 'Liked');
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Box sx={{ minWidth: 400, maxHeight: 200, overflow: 'auto' }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography style={{ textAlign: 'right' }}>
                        <Tooltip title="Edit" placement="top">
                            <button onClick={handleClickEdit} style={editButtonStyle}>
                                {editing ? <MdEditOff size={20} /> : <MdEdit size={20} />}
                            </button>
                        </Tooltip>
                        <Tooltip title="Like" placement="top">
                            <button onClick={handleClickLike} style={likeButtonStyle}>
                                {liked ? <GoHeartFill size={20} /> : <GoHeart size={20} />}
                            </button>
                        </Tooltip>
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <Avatar sx={{ bgcolor: deepOrange[500], marginRight: '10px' }}>A</Avatar>
                        <Typography variant="body1" style={{ flex: 1, textAlign: 'left' }}>
                            <TextField
                                disabled={!editing}
                                id="standard-multiline-flexible"
                                variant="standard"
                                multiline
                                maxRows={4}
                                defaultValue="Lorem Ipsum"
                            />
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <MuiAlert severity={liked ? 'info' : 'success'} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </Box>
    );
}

export default InformationCard;