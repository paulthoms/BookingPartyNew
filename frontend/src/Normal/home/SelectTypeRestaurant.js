import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { useAppContext } from '../../contextApp/useContextApp';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


export default function SelectFilter(props) {

    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const {
        allRestaurant,
        updateTypeRestaurantFilter,
        updateRestaurantFilter
    } = useAppContext();

    useEffect(() => {
        console.log(props);
    }, []);

    const handleChange = event => {
        console.log(event.target.value)
        updateRestaurantFilter(allRestaurant);
        updateTypeRestaurantFilter(event.target.value);
        setPersonName(event.target.value);
    };

    return (
        <div className="home__discovery-select-filter" >
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-checkbox-label">Type</InputLabel>
                <Select
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={selected => selected.join(', ')}
                // MenuProps={MenuProps}
                >
                    {[...new Set(allRestaurant.map(item => { return item.Type }))].map(item => (
                        <MenuItem key={item} value={item}>
                            <Checkbox checked={personName.indexOf(item) > -1} />
                            <ListItemText primary={item} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}
