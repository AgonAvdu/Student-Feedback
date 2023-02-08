import Edit from '../../assets/icons/edit-dark.svg'
import Delete from '../../assets/icons/delete.svg'
import { Link } from 'react-router-dom'

interface Props {
    subject: Subject
}

interface Subject {
    id: number,
    name: string,
    semester: number,
}


const Subject: React.FC<Props> = ({subject}) => {

    const onIconClicked = () => {
        console.log("Icon");
    }


    return (
        <div className="row user">
            <div className="col-4 user__field">{subject.name}</div>
            <div className="col-4 user__field">Semester {subject.semester}</div>
            <div className="col-2 user-action">
                <Link to={`/subjects/${subject.id}`} onClick={onIconClicked} className='user-action__icon user-action__icon--edit'>
                    <img src={Edit} alt="Edit" />
                </Link>
                <div className='user-action__icon user-action__icon--delete'>
                    <img src={Delete} alt="Delete" />
                </div>
            </div>
        </div>
    )
}

export default Subject