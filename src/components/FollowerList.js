import React from "react";
import Follower from './Follower';

import styled from 'styled-components';

const StyledList = styled.div`
display: flex;
width: 100%auto;
flex-flow: wrap;
justify-content: space-around;
`

class FollowerList extends React.Component {
    componentDidMount(){
        console.log('Followers List is Mounted')
    }
    render(){
        return(
            <StyledList>
                {
                    this.props.followers.map(follower => (
                        <Follower key={follower.id} follower={follower}/>
                    ))
                }
            </StyledList>
        )
    }
}

export default FollowerList