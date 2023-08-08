import UserItem from "./UserItem";

function UserComponent(props) {
    const {users} = props;

    return (
        <>
            {users.map((user,index) => {
                return (
                    <UserItem 
                        key={index}
                        name={user.name}
                        email={user.email}
                        marketValueTrend={user.marketValueTrend}
                        isNew={user.isNew}
                    />
                )
            })}

        </>
    )
}

export default UserComponent;