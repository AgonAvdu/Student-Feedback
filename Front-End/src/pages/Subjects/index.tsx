import Add from "../../assets/icons/icon-plus.svg"
import Subject from "../../components/Subject";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSubjects } from "../../api/Subject/get-subjects";



const Subjects: React.FC = () => {

    const { data: subjects, } = useQuery(["subjects"], () => getSubjects(), { refetchOnWindowFocus: false })


    return (
        <div className="">
            <div className="row justify-content-between u-margin-bottom-medium">
                <h1 className="col-1">Subjects</h1>
                <div className="col-1 profile-button--edit ">
                    <Link to={`/subjects/create`}>
                        <button className="button button__edit">
                            <img className="button__edit-icon" src={Add} alt="edit" />
                            Create
                        </button>
                    </Link>
                </div>
            </div>
            <div className="section">
                <div className="row u-margin-bottom-big">
                    <div className="col-4 users-table__header">Name</div>
                    <div className="col-4 users-table__header">Semester</div>
                    <div className="col-4 users-table__header">Actions</div>
                </div>
                <div>
                    {subjects?.map((subject: any) => <Subject key={subject.id} subject={subject} />)}
                </div>
            </div>
        </div>
    )
}

export default Subjects