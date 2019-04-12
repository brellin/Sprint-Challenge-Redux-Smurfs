import React from 'react'
import Smurf from './Smurf'
import { connect } from 'react-redux';
import { post } from '../../actions';

class Smurfs extends React.Component {
    state = {
        newSmurf: {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value
            }
        })
    }

    post = e => {
        e.preventDefault();
        this.props.post(this.state.newSmurf)
        this.setState({
            newSmurf: {
                name: '',
                age: '',
                height: ''
            }
        })
    }

    render() {
        return (
            <div className='smurfs'>
                {this.props.smurfs.map((smurf, id) => (
                    <Smurf smurf={smurf} key={id} />
                ))}
                <div className='add'>
                    <h4>Add a Smurf</h4>
                    <form onSubmit={this.post}>
                        Name: <input
                            name='name'
                            value={this.state.newSmurf.name}
                            onChange={this.handleChanges}
                        />
                        Height: <input
                            name='height'
                            value={this.state.newSmurf.height}
                            onChange={this.handleChanges}
                        />
                        Age: <input
                            name='age'
                            value={this.state.newSmurf.age}
                            onChange={this.handleChanges}
                        />
                        <button>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { post })(Smurfs);
