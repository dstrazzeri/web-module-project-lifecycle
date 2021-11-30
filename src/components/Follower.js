import React from "react";

import styled from 'styled-components';

const StyledFollower = styled.div`
display: flex;
width: 20%;
height: auto;
margin: 1% 0;
div {
    margin: 3%auto;
    img {
        max-width:100%;
        max-height:100%;
    }
}
`
class Follower extends React.Component{
    componentDidMount(){
        console.log(`Follower ${this.props.follower.login} Mounts`)
    }

    render() {
        const { follower } = this.props;
        return(
            <StyledFollower key={follower.id}>
                <div className="followerI">
                    <img src={follower.avatar_url} alt={`image of ${follower.login}`} />
                    <h4>{follower.login}</h4>
                </div>
            </StyledFollower>
        )
    }
}

export default Follower;