import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getAPI, postAPI } from '../Normal/shared/APICaller';
import ActionBooking from './ActionBooking';
import { useAppContext } from '../contextApp/useContextApp';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

export default function SimpleTable() {
    const classes = useStyles();
    const [rows, setRow] = useState([]);
    const {
        user,
        updateTabProfile,
        tabProfile,
        updateAllBooking,
        allBooking,
        updateDataEditBookingUser,
    } = useAppContext();


    useEffect(() => {
        getAPI("/booking/user", function (res) {
            console.log(res);
            updateAllBooking(res.data);
            setRow(res.data);
        })
    }, [])

    function handleEdit(id) {
        console.log(id);
        var tmp = allBooking.filter((item) => {
            return item.ID == id;
        });

        console.log(tmp);

        updateDataEditBookingUser(tmp);

        updateTabProfile("edit")
    }

    function handleDeleteBooking(id, resID) {
        var bodyFormData = new FormData();
        bodyFormData.set("Restaurant_ID", resID);
        bodyFormData.set("ID", id);

        postAPI("/booking/delete", bodyFormData, function (res) {
            console.log(res);
        });


    }


    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >Time</TableCell>
                        <TableCell align="right">Member</TableCell>
                        <TableCell align="right">Restaurant</TableCell>
                        <TableCell align="right">Restauran Address</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allBooking.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.Time}
                            </TableCell>
                            <TableCell align="right">{row.Member}</TableCell>
                            <TableCell align="right">{row.Res_name}</TableCell>
                            <TableCell align="right">{row.Res_address}</TableCell>
                            <TableCell align="right">
                                <ActionBooking id={row.ID} idRes={row.ID_Res} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}