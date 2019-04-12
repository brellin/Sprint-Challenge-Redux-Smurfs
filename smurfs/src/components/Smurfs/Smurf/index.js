import React from 'react'
import { connect } from 'react-redux';
import { edit, del } from '../../../actions';
import './smurf.scss'

class Smurf extends React.Component {
    state = {
        editing: false,
        upSmurf: {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            upSmurf: {
                ...this.state.upSmurf,
                [e.target.name]: e.target.value
            }
        })
    }

    edit = e => {
        e.preventDefault();
        this.props.edit(this.props.smurf.id, this.state.upSmurf)
        this.setState({
            ...this.state,
            upSmurf: {
                name: '',
                age: '',
                height: ''
            },
            editing: false
        })
    }

    render() {
        console.log(this.props.smurf)
        return (
            <div className='smurf'>
                <button onClick={() => this.setState({
                    ...this.state,
                    editing: true
                })}
                    style={{
                        display: !this.state.editing ?
                            'block' :
                            'none'
                    }}>Edit Smurf</button>
                <form onSubmit={this.edit}>
                    <p>Name: {this.state.editing ?
                        <input
                            name='name'
                            value={this.state.upSmurf.name}
                            onChange={this.handleChanges}
                        /> :
                        this.props.smurf.name}
                    </p>
                    <p>Height: {this.state.editing ?
                        <input
                            name='height'
                            value={this.state.upSmurf.height}
                            onChange={this.handleChanges}
                        /> :
                        this.props.smurf.height}
                    </p>
                    <p>Age: {this.state.editing ?
                        <input
                            name='age'
                            value={this.state.upSmurf.age}
                            onChange={this.handleChanges}
                        /> :
                        this.props.smurf.age}
                    </p>
                    <button style={{
                        display: this.state.editing ?
                            'block' :
                            'none'
                    }}>Submit</button>
                </form>
                <button onClick={() => {
                    this.state.editing ?
                        this.setState({
                            ...this.state,
                            editing: false
                        }) :
                        this.props.del(this.props.smurf.id)
                }}>{this.state.editing ?
                    'Cancel' :
                    'Delete'
                    }</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { del, edit })(Smurf)
