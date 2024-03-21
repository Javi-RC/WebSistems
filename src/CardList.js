import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InformationCard from './InformationCard';

function CardList() {
    const [checked, setChecked] = React.useState([]);
    const [notDone, setNotDone] = React.useState([1, 2, 3]); // Sample data
    const [done, setDone] = React.useState([4, 5, 6]); // Sample data

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleCheckedRight = () => {
        setDone((prevDone) => [...prevDone, ...checked]);
        setNotDone((prevNotDone) =>
            prevNotDone.filter((value) => !checked.includes(value))
        );
        setChecked([]);
    };

    const handleCheckedLeft = () => {
        setNotDone((prevNotDone) => [...prevNotDone, ...checked]);
        setDone((prevDone) =>
            prevDone.filter((value) => !checked.includes(value))
        );
        setChecked([]);
    };

    const leftChecked = checked.filter((value) => notDone.includes(value));
    const rightChecked = checked.filter((value) => done.includes(value));

    const customList = (items, side) => (
        <Paper sx={{ width: 500, height: 400, overflow: 'auto' }}>
            <List dense component="div" role="list">
                {items.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`;

                    return (
                        <ListItemButton
                            key={value}
                            role="listitem"
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`Item ${value}`} />
                            <InformationCard key={value} /> {/* Render InformationCard */}
                        </ListItemButton>
                    );
                })}
                <ListItemButton />
            </List>
        </Paper>
    );

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item>{customList(notDone, 'left')}</Grid>
                <Grid item>
                    <Stack direction="column" alignItems="center" spacing={1}>
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedRight}
                            disabled={leftChecked.length === 0}
                            aria-label="move selected right"
                        >
                            &gt;
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedLeft}
                            disabled={rightChecked.length === 0}
                            aria-label="move selected left"
                        >
                            &lt;
                        </Button>
                    </Stack>
                </Grid>
                <Grid item>{customList(done, 'right')}</Grid>
            </Grid>
        </Box>
    );
}

export default CardList;
