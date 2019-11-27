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
    const [searchTmp, setSearchTmp] = useState([]);

    const {
        searchResult,
        updateSearchResult,
        allRestaurant
    } = useAppContext();

    function handleChangeInput(e) {

        setSearchTmp([]);
        console.log(e.target.value.length);

        if (e.target.value.length) {

            var tmpSearch = [];
            for (let i in allRestaurant) {
                if (allRestaurant[i].Name.toLowerCase().includes(e.target.value)) {
                    console.log(allRestaurant[i]);
                    tmpSearch.push(allRestaurant[i]);
                }
            }
            setSearchTmp(tmpSearch);

            console.log(e.target.value.split(' '));
            setSearch(e.target.value);
        }
    }

    function handleSearch(e) {

        // if (e.target.value != undefined) {
        console.log(search);

        var resultRestaurant = [];
        for (let i in allRestaurant) {
            if (allRestaurant[i].Name.toLowerCase().includes(search)) {
                resultRestaurant.push(allRestaurant[i]);
            }
        }
        updateSearchResult(resultRestaurant);
        // }


    }

    function handleBlurInput(e) {
        setTimeout(() => {
            setSearchTmp([]);
        }, 1000);
    }

    return (
        <>
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
                            onBlur={handleBlurInput}
                        />
                    </div>
                </div>
                <Link to={'/search'}>
                    <Button onClick={handleSearch} variant="contained" color="primary">
                        Search
                    </Button>
                </Link>
            </div>
            {console.log(searchTmp)}
            <div className="search__result-temp" >
                {
                    searchTmp.length < 1 ? <></> :
                        searchTmp.map((item) => {
                            return (
                                <Link to={"/about/restaurant/" + item.ID}>
                                    <div className="search__result-single" >
                                        <img className="search__result-image" src={`/uploads/${item.Image}`} />
                                        <div className="search__result-single-group" >
                                            <div className="search__result-single-restaurantname" >
                                                {item.Name}
                                            </div>
                                            <div className="search__result-single-restaurantaddr" >
                                                {item.Address}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })
                }
            </div>
        </>
    )
}
