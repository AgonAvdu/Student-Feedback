import { User } from "../../store/auth/types"

interface Props {
    user: User | undefined
}


const PersonalDetails: React.FC<Props> = ({ user }) => {
    let subjects = user?.subjects?.map(subject => subject.name);
    let result = subjects?.join(", ");
console.log(result); // Output: "Math, Science, English"
    return (
        <div className="row profile-details">
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <div className="profile-details__field">Name</div>
                <div className="profile-details__value">{user?.name}</div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <div className="profile-details__field">Surname</div>
                <div className="profile-details__value">{user?.surname}</div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <div className="profile-details__field">Gender</div>
                <div className="profile-details__value">{user?.gender}</div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <div className="profile-details__field">Email</div>
                <div className="profile-details__value">{user?.email}</div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <div className="profile-details__field">Date of birth</div>
                <div className="profile-details__value">{user?.dateOfBirth}</div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <div className="profile-details__field">Created at</div>
                <div className="profile-details__value">{user?.createdAt}</div>
            </div>
            {user?.role === "Teacher" &&<div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <div className="profile-details__field">Subjects</div>
                <div className="profile-details__value">{result}</div>
                
            </div>}
        </div>
    )
}

export default PersonalDetails