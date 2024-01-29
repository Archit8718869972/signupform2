import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from '@mui/material'
import React from 'react'
import { useSelector } from "react-redux";

const ThirdPage = () => {
    var user1 = useSelector(state => state.user_first);
    var userData1 = Object.values(user1)[0];

    var user2 = useSelector(state => state.user_second);
    var userData2 = Object.values(user2)[0];

    console.log('>>>>>>>>>1', userData1);
    console.log('>>>>>>>>>2', userData2);

    return (
        <div>
            <div>
                <h2 color='blue'>DATA ADDED SUCCESSFULLY</h2>
            </div><br /><br />
            <TableContainer style={{ display: 'flex', justifyContent: 'center' }}>
                <Table border='1' style={{ width: '1005%', justifyContent: 'center' }} size="small" aria-label='Caption table'>
                    <TableHead>
                        <TableRow style={{ background: 'white', color: 'aliceblue' }} >
                            <TableCell>First Name</TableCell>
                            <TableCell>Middle Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Mobile no.</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell>Birthday</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Blood Group</TableCell>
                            <TableCell>Height</TableCell>
                            <TableCell>Weight</TableCell>
                            <TableCell>Address Line 1</TableCell>
                            <TableCell>Address Line 2</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Madhya Pradesh</TableCell>
                            <TableCell>country</TableCell>
                            <TableCell>Pincode</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{userData1.firstname}</TableCell>
                            <TableCell>{userData1.middlename}</TableCell>
                            <TableCell>{userData1.lastname}</TableCell>
                            <TableCell>{userData1.mobilenumber}</TableCell>
                            <TableCell>{userData1.emailid}</TableCell>
                            <TableCell>{userData1.dob}</TableCell>
                            <TableCell>{userData1.age}</TableCell>
                            <TableCell>{userData1.blood}</TableCell>
                            <TableCell>{userData1.height}</TableCell>
                            <TableCell>{userData1.weight}</TableCell>
                            <TableCell>{userData2.address1}</TableCell>
                            <TableCell>{userData2.address2}</TableCell>
                            <TableCell>{userData2.city}</TableCell>
                            <TableCell>{userData2.state}</TableCell>
                            <TableCell>{userData2.country}</TableCell>
                            <TableCell>{userData2.pin}</TableCell>

                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ThirdPage