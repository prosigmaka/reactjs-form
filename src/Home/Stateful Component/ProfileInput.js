import React from "react";
import { Input, Form, FormGroup, Label, Col, Row } from 'reactstrap';
import Profile from './Profile';
import TableProfile from './TableProfile';

export default class HomePage extends React.Component {
    state = {
        name: '',
        age: '',
        adress: '',
        listProfile: [],
    }

    toggle = (data) => {
        this.setState({
            name: '',
            age: '',
            adress: ''
        })
        this.setState({ listProfile: data })
        //console.log(this.state.listProfile)
    }

    dataChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        //console.log('aaa', event.target.value)
    }

    render() {
        return (
            <div className="App" >
                <Row>
                    <Col md="6">
                        <h1>Profile Input</h1>
                        <Form id="formBiodata">
                            <FormGroup>
                                <Label for="name"><b>Name</b></Label>
                                <Input type="text" name="name" id="name"
                                    autoComplete='off'
                                    placeholder="Name..."
                                    value={this.state.name} required
                                    onChange={this.dataChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="age"><b>Age</b></Label>
                                <Input type="text" name="age" id="age"
                                    autoComplete='off'
                                    placeholder="Age..."
                                    value={this.state.age} required
                                    onChange={this.dataChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="adress"><b>Adress</b></Label>
                                <Input type="text" name="adress" id="adress"
                                    autoComplete='off'
                                    placeholder="Adress..."
                                    value={this.state.adress} required
                                    onChange={this.dataChange} />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md="6">
                        <Profile
                            name={this.state.name}
                            age={this.state.age}
                            adress={this.state.adress}
                            reset={(data) => { this.toggle(data) }}
                        />
                    </Col>
                </Row>
                <TableProfile listProfile={this.state.listProfile} key={this.state.listProfile.length}/>
            </div >
        );
    }
}