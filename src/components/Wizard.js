import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateName, updateAddress, updateCity, updateState, updateZipcode} from '../ducks/reducer';

class Wizard extends Component{
    render(){
        const{updateName, updateAddress, updateCity, updateState, updateZipcode}=this.props;
        return(
        <div>   
           <div>Name:
                <h1>
                    {/* {this.props.name} */}
                </h1>
                <input onChange={(e)=>updateName(e.target.value)}/>
            </div>
            <div>Address:
                <h1>
                    {/* {this.props.address} */}
                </h1>
                <input onChange={(e)=>updateAddress(e.target.value)}/>
            </div>
            <div>City:
                <h1>
                    {/* {this.props.city} */}
                </h1>
                <input onChange={(e)=>updateCity(e.target.value)}/>
            </div>
            <div>State:
                <h1>
                    {/* {this.props.state} */}
                </h1>
                <input onChange={(e)=>updateState(e.target.value)}/>
            </div>
            <div>Zipcode:
                <h1>
                    {/* {this.props.zipcode} */}
                </h1>
                <input onChange={(e)=>updateZipcode(e.target.value)}/>
            </div>
            <Link to='/house'><button>Next</button></Link>
        </div>
        )
    }
}

function mapStateToProps(state){
    return{
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode
    }
}

export default connect(mapStateToProps, 
    {updateName, updateAddress, updateCity, updateState, updateZipcode})
    (Wizard);