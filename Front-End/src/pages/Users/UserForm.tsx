import { useState } from 'react'
import { useParams } from "react-router-dom";
import Select from 'react-select';
import Input from '../../components/UIElements/Input';


interface User {
    id?: number,
    name?: string,
    surname?: string,
    gender?: string,
    email?: string,
    dateOfBirth?: string,
    subjects?: string[],
}

const UserForm: React.FC = () => {
    const params = useParams();

    const id = params.userId

    const user = {
        id: 1,
        name: "Agon",
        surname: "Avdullahu",
        type: "Teacher",
        gender: "Male",
        dateOfBirth: "18/07/2002",
        createdAt: "20/01/2023",
    }


    const options = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ]

    const [subject, setSubject] = useState<User>({});

    const onChangeHandler = (e: any) => {
        setSubject({
            ...subject,
            [e.target.name]: e.target.value
        })
    }

    const onSelectHandler = (e: any) => {
        setSubject({
            ...subject,
            gender: e.value
        })
    }

    const onMultiSelectHandler = (e: any) => {
        const values: string[] = []
        e.forEach((element: any) => values.push(element.value))
        setSubject({
            ...subject,
            subjects: values
        })
    }

    const subjects = [
        { value: 'math', label: 'Math' },
        { value: 'eng', label: 'English' },
        { value: 'history', label: 'History' },
        { value: 'chem', label: 'Chemistry' },
        { value: 'phy', label: 'Physics' },
        { value: 'PE', label: 'Physical Education' },
    ]

    const onSubmitHandler = (e: any) => {
        e.preventDefault();
    }


    return (
        <div>
            <div className="row justify-content-between u-margin-bottom-medium">
                <h1 className="col-1">{id ? "Edit" : "Create"}</h1>
            </div>
            <div className="section row">
                <form onSubmit={onSubmitHandler}>
                    <div className='subject-form'>
                        <div className='subject-form-row'>
                            <div className='subject-form__group'>
                                <label className="input__label u-margin-bottom-small" htmlFor="name">Name</label>
                                <div className='subject-form__input'>
                                    <Input required name="name" value={subject.name} id="name" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className='subject-form__group'>
                                <label className="input__label u-margin-bottom-small" htmlFor="surname">Surname</label>
                                <div className='subject-form__input'>
                                    <Input required name="surname" value={subject.surname} id="surname" onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>
                        <div className='subject-form-row'>
                            <div className='subject-form__group'>
                                <label className="input__label u-margin-bottom-small" htmlFor="email">Email</label>
                                <div className='subject-form__input'>
                                    <Input type="email" required name="email" value={subject.email} id="email" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className='subject-form__group'>
                                <label className="input__label u-margin-bottom-small" htmlFor="gender">Semester</label>
                                <div className='subject-form__input'> 
                                    <Select required isSearchable={false} name="gender" id="gender" onChange={onSelectHandler} options={options} />
                                </div>
                            </div>
                        </div>
                        <div className='subject-form-row'>
                            <div className='subject-form__group'>
                                <label className="input__label u-margin-bottom-small" htmlFor="dateOfBirth">Date of Birth</label>
                                <div className='subject-form__input'>
                                    <Input type="date" required name="dateOfBirth" value={subject.dateOfBirth} id="dateOfBirth" onChange={onChangeHandler} />
                                </div>
                            </div>
                            {user.type === "Teacher" && <div className='subject-form__group'>
                                <label className="input__label u-margin-bottom-small" htmlFor="gender">Subjects</label>
                                <div className="subject-form__input">
                                    <Select required isMulti name="subjects" className="auth__input" onChange={onMultiSelectHandler} options={subjects} />
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className="col-1 profile-button--edit feedback__submit u-margin-top-big ">
                        <button type='submit' className="button button__edit">
                            Submit
                        </button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default UserForm