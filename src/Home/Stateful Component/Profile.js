import React from "react";
import { Card, CardBody, CardHeader, Button } from 'reactstrap';


export default class Profile extends React.Component {
    state = {
        data: []
    }

    saveHandle = async (name, age, adress) => {
        // console.log(name, age, adress)
        await this.setState(prevState => ({
            data: [...prevState.data, { "id": this.state.data.length + 1, "name": name, "age": age, "adress": adress }]
        }))
        await this.props.reset(this.state.data)
    }

    render() {
        return (
            <>
                <Card bg="primary" style={{ height: '300px' }} >
                    <CardHeader style={{ backgroundColor: '#47CDF1' }}><h1>Profile</h1></CardHeader>
                    <CardBody>
                        Name = {this.props.name}
                        <br />
                    Age = {this.props.age}
                        <br />
                    Adress = {this.props.adress}
                    </CardBody>
                    <div style={{ float: 'right' }}>
                        <Button
                            className="btn-pill btn-lg float-right"
                            style={{ background: "#9ACD32", border: "none", width: '100px' }}
                            onClick={() => { this.saveHandle(this.props.name, this.props.age, this.props.adress) }}
                        >
                            Save
                        </Button>
                    </div>
                </Card>

            </>
        );
    }
}

