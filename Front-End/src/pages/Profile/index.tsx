import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import Edit from "../../assets/icons/edit.svg"
import Add from "../../assets/icons/icon-plus.svg"
import Feedback from "../../components/Feedback"
import PersonalDetails from "../../components/PersonalDetails"
import DoughnutChartComponent from "../../components/UIElements/DoughnutChart"
import { getUser } from "../../store/auth/selectors"

const feedback = {
    id: 1,
    author: "Agon Avdullahu",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolores amet sit corrupti, rem et, unde, provident culpa impedit corporis debitis cupiditate iste minima libero dolorem non accusantium sequi. Facilis.",
    rate: 3.6
}

const Profile: React.FC = () => {

    const user = useSelector(getUser);

    const params = useParams();

    const id = params.userId;

    if (id && id !== user?.id) {
        console.log("fetch User");
    } 

    return (
        <div className="profile">
            <div className="row justify-content-between u-margin-bottom-medium">
                <h1 className="col-1">Profile</h1>
                <div className="col-1 profile-button--edit ">
                    <Link to={`/users/${user?.id}`} className="button button__edit">
                        <img className="button__edit-icon" src={Edit} alt="edit" />
                        Edit
                    </Link>
                </div>
            </div>
            <div className="section">
                <PersonalDetails user={user} />
            </div>
            {user?.role !== "Admin" && <><div className="section">
                <div className="row justify-content-center u-margin-bottom-huge">
                    <h2 className="col-12 text-center ">Your Feedbacks</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-6 col-xl-6 offset-xl-1 justify-self-end offset-lg-1 col-lg-6 offset-lg-0 col-md-8 offset-md-0 col-sm-8 offset-sm-0">
                        <DoughnutChartComponent value={10} />
                    </div>
                    <div className="col-6 col-xl-5 col-lg-5 col-md-4 col-sm-4">
                        <div className="chart-info u-margin-bottom-small">
                            <div className="square square--green ">&nbsp;</div>
                            <div className="chart__label">Positive</div>
                        </div>
                        <div className="chart-info u-margin-bottom-small">
                            <div className="square square--blue ">&nbsp;</div>
                            <div className="chart__label">Neutral</div>
                        </div>
                        <div className="chart-info u-margin-bottom-small">
                            <div className="square square--red ">&nbsp;</div>
                            <div className="chart__label">Negative</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row u-margin-bottom-medium">
                <div className="col-1 offset-11 profile-button--edit ">
                    <button className="button button__edit">
                        <img className="button__edit-icon" src={Add} alt="Add" />
                        Create
                    </button>
                </div>
            </div>
            <div className="section">
                <Feedback feedback={feedback} />
                <Feedback feedback={feedback} />
                <Feedback feedback={feedback} />
                <Feedback feedback={feedback} />
                <Feedback feedback={feedback} />
                <Feedback feedback={feedback} />

            </div> </>}

        </div>
    )
}

export default Profile