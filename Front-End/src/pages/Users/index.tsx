import Loading from "../../components/UIElements/Loader";
import Add from "../../assets/icons/icon-plus.svg"
import User from "../../components/User";

const Users: React.FC = () => {

    const users = [
        {
            id: 1,
            name: "Agon",
            surname: "Avdullahu",
            type:"Student",
            gender: "Male",
            dateOfBirth: "18/07/2002",
            createdAt: "20/01/2023"
        },
        {
            id: 1,
            name: "Agon",
            surname: "Avdullahu",
            gender: "Male",
            dateOfBirth: "18/07/2002",
            createdAt: "20/01/2023",
            type:"Student",

        },
        {
            id: 1,
            name: "Agon",
            surname: "Avdullahu",
            gender: "Admin",
            dateOfBirth: "18/07/2002",
            createdAt: "20/01/2023",
            type:"Student",

        },
        {
            id: 1,
            name: "Agon",
            surname: "Avdullahu",
            gender: "Male",
            dateOfBirth: "18/07/2002",
            type:"Teacher",
            createdAt: "20/01/2023"
        }

    ]

    return (
        <div className="users">
            <div className="row justify-content-between u-margin-bottom-medium">
                <h1 className="col-1">Users</h1>
                <div className="col-1 profile-button--edit ">
                    <button className="button button__edit">
                        <img className="button__edit-icon" src={Add} alt="edit" />
                        Create
                    </button>
                </div>
            </div>
            <div className="section">
                    <div className="row u-margin-bottom-big">
                        <div className="col-4 users-table__header">Name</div>
                        <div className="col-2 users-table__header">Type</div>
                        <div className="col-4 users-table__header">Date</div>
                        <div className="col-2 users-table__header">Actions</div>
                    </div>
                    <div>
                        {users.map(user => <User user={user} /> )}
                    </div>
            </div>
        </div>
    )
}

export default Users