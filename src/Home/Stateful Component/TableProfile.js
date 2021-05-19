import React from "react";
import { Card, CardBody, CardHeader, Table } from 'reactstrap';


export default class TableProfile extends React.Component {

    render() {
        return (
            <div>
                <Card bg="primary" style={{ height: '300px' }} >
                    <CardHeader style={{ backgroundColor: '#F1C047' }}><h2>Table Profile</h2></CardHeader>
                    <CardBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Adress</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.listProfile.length ?
                                    this.props.listProfile.map(data => (
                                        <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>{data.age}</td>
                                            <td>{data.adress}</td>
                                        </tr>
                                    ))
                                    :
                                    (<tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>)
                                }
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

            </div>
        );
    }
}

