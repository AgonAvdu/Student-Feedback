import Edit from '../../assets/icons/edit-dark.svg'
import Delete from '../../assets/icons/delete.svg'
import { Link } from 'react-router-dom';
import { type } from 'os';

interface Props {
    user: user
}

interface user {
    id: number,
    name: string,
    surname: string,
    gender: string,
    dateOfBirth: string,
    createdAt: string,
    type: string
}

const User: React.FC<Props> = ({user}) => {


    const onIconClicked = () => {
        console.log("Icon");
    }


    return (
        <div className="row user">
            <Link to={`/users/${user.id}`} className="col-4 user__field user__field--selectable">{user.name} {user.surname}</Link>
            <div className="col-2 user__field">{user.type}</div>
            <div className="col-4 user__field">{user.createdAt}</div>
            <div className="col-2 user-action">
                <Link to={`/users/${user.id}/edit`} onClick={onIconClicked} className='user-action__icon user-action__icon--edit'>
                    <img src={Edit} alt="Edit" />
                </Link>
                <div className='user-action__icon user-action__icon--delete'>
                    <img src={Delete} alt="Delete" />
                </div>
            </div>
        </div>
    )
}

export default User