import { useQuery } from '@tanstack/react-query';
import { log } from 'console';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import { getSubject } from '../../api/Subject/get-subject';
import { getSubjects } from '../../api/Subject/get-subjects';
import Input from "../../components/UIElements/Input"
import { Subject } from '../../types/Subject';



const SubjectForm: React.FC = () => {

    const [subject, setSubject] = useState<Subject>({
        name: "",
        semesterNr:1
    });
    const params = useParams();

    const id = params.subjectId

    if(id && subject.id !== +id) {
        const { data: requestedSubject, } = useQuery(["subject"], () => getSubject(+id), { refetchOnWindowFocus: false })
        setSubject(requestedSubject);
    }

    const semester = [
        { value: 1, label: 'Semester 1' },
        { value: 2, label: 'Semester 2' },
        { value: 3, label: 'Semester 3' },
        { value: 4, label: 'Semester 4' },
        { value: 5, label: 'Semester 5' },
        { value: 6, label: 'Semester 6' },
    ]


    const onChangeHandler = (e: any) => {
        setSubject({
            ...subject,
            [e.target.name]: e.target.value
        })
    }

    const onSelectHandler = (e: any) => {
        const [labelName, inputValue] = e.value.split(".");
        setSubject({
            ...subject,
            [labelName]: inputValue
        })
    }

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

                        <div className='subject-form__group'>
                            <label className="input__label u-margin-bottom-small" htmlFor="name">Name</label>
                            <div className='subject-form__input'>
                                <Input required name="name" value={subject.name} id="name" onChange={onChangeHandler} />
                            </div>
                        </div>
                        <div >

                            <label className="input__label u-margin-bottom-small" htmlFor="subject">Semester</label>
                            <div className='subject-form__input'>
                                <Select 
                                    value={{value: subject.semesterNr, label: `Semester ${subject.semesterNr}`}} 
                                    required 
                                    isSearchable={false} 
                                    name="subjects" 
                                    id="subject" 
                                    onChange={onSelectHandler} 
                                    options={semester} />
                            </div>
                        </div>
                    </div>


                    <div className="col-1 profile-button--edit feedback__submit u-margin-top-big ">
                        <button type='submit' className="button button__edit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SubjectForm