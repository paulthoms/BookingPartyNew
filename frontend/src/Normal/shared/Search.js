import React, { useState } from 'react';
// import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contextApp/useContextApp';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

function checkExist(arr, value) {
    for (let i in arr) {
        if (arr[i].includes(value)) {
            return i;
        }
    }
    return -1;
}

export default function Search() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const classes = useStyles();
    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const [search, setSearch] = useState();

    const {
        searchResult,
        updateSearchResult,
        allRestaurant
    } = useAppContext();

    function handleChangeInput(e) {
        console.log(e.target.value.split(' '));
        setSearch(e.target.value.split(' '));

    }

    function handleSearch(e) {
        var resultRestaurant = [];
        for (let i in allRestaurant) {
            console.log(checkExist(search, allRestaurant[i].Name));
            if (checkExist(search, allRestaurant[i].Name.split(' ')[0]) !== -1) {
                resultRestaurant.push(allRestaurant[i]);
            }
        }
        updateSearchResult(resultRestaurant);
    }

    return (
        <div className="filter__group" >
            <div className="filter__search" >
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <Icon>search</Icon>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleChangeInput}
                    />
                </div>
            </div>
            <Link to={'/search'}>
                <Button onClick={handleSearch} variant="contained" color="primary">
                    Search
                </Button>
            </Link>
        </div>
    )
}
