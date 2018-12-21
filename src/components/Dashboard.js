import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends Component{
    render(){
        return(
            <div>
                <div>
                    <Link to='/wizard'>
                        <button>Add New Property</button>
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        <button>Cancel</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Dashboard;