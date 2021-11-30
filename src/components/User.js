import React from "react";
import styled from "styled-components";

const StyledUser = styled.div`
display: flex;
border: 2px solid black;
justify-content: space-around;
align-items: center;
width: 80%;

.userInfo{
    display: flex;
    flex-flow: column wrap;
}
`
class User extends React.Component{
    componentDidMount(){
        console.log(`user name is ${this.props.user.name}`)
    }
    render(){
        const { user } = this.props
        return (
            <StyledUser key={user.id}>
                <div>
                    <h2>{user.login}</h2>
                    <img src={user.avatar_url}/>
                </div>
                <div className="userInfo">
                    <h4>Name: {user.name}</h4>
                    <h4>Followers: {user.followers}</h4>
                    <h4>Following: {user.following}</h4>
                </div>
            </StyledUser>
        )
    }
}

export default User;