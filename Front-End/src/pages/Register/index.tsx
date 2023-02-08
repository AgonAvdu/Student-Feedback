import { useMutation, useQuery } from "@tanstack/react-query";
import { log } from "console";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Select, { StylesConfig } from 'react-select';
import { registerUser } from "../../api/Auth/register";
import { getFaculties } from "../../api/Faculty/get-faculties";
import { getSubjects } from "../../api/Subject/get-subjects";
import Input from "../../components/UIElements/Input"
import PasswordInput from "../../components/UIElements/PasswordInput/PasswordInput"
import { Faculty } from "../../types/Faculty";
import { Register as RegisterType} from "../../types/Register";
import { Subject } from "../../types/Subject";


interface SelectOption {
    value: string;
    label: string;
  }

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [register, setRegister] = useState<RegisterType>({
        name: "test",
        surname: "test",
        email:"test@gmail.com",
        password: "Pa$$w0rd",
    })

    const [step, setStep] = useState<number>(1);

    const { mutate, isLoading } = useMutation(registerUser, {
        onSuccess(data) {
            console.log(data);
            navigate('/login')
        },
        onError(error: any) {
            console.log(error)
        },
    })
    let facultyOptions: SelectOption[] = [];
    let subjectOptions: SelectOption[] = [];

    const { data: faculties, } = useQuery(["faculties"], () => getFaculties(), { refetchOnWindowFocus: false })
    const { data: subjects, } = useQuery(["subjects"], () => getSubjects(), { refetchOnWindowFocus: false })
    
    faculties && faculties.forEach((faculty: Faculty) => {
        facultyOptions.push({value: `faculty.${faculty.id}`, label: `${faculty.name} - ${faculty.city.name}`})
    });
    subjects && subjects.forEach((subject: Subject) => {
        subjectOptions.push({value: `${subject.id}`, label: subject.name!})
    });


    const onChangeHandler = (e: any) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
        
        console.log(register);
    }

    const onSelectHandler = (e: any) => {
        const [labelName, inputValue] = e.value.split(".");
        setRegister({
            ...register,
            [labelName]: inputValue
        })
    }
    const onMultiSelectHandler = (e: any) => {
        const values: string[] = []
        e.forEach((element: any) => values.push(element.value))
        setRegister({
            ...register,
            subjects: values
        })
        console.log(values);
    }




    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2)
        } else {
            mutate(register);
        }
    }
    const options = [
        { value: 'gender.Male', label: 'Male' },
        { value: 'gender.Female', label: 'Female' },
    ]
    
    const typeOptions = [
        { value: 'type.Student', label: 'Student' },
        { value: 'type.Teacher', label: 'Teacher' },
    ]
    const firstStep = (
        <div>
            <div className="auth-row">
                <div>
                    <label className="input__label u-margin-bottom-small" htmlFor="name">Name</label>
                    <div className="row u-margin-bottom-big  auth__input">
                        <Input required type="text" name="name" onChange={onChangeHandler} value={register.name} />
                    </div>
                </div>
                <div>
                    <label className="input__label u-margin-bottom-small" htmlFor="surname">Surname</label>
                    <div className="row u-margin-bottom-big  auth__input">
                        <Input required type="text" name="surname" onChange={onChangeHandler} value={register.surname} />
                    </div>
                </div>
            </div>
            <label className="input__label u-margin-bottom-small" htmlFor="gender">Gender</label>
            <div className="u-margin-bottom-big">
                <Select isSearchable={false}  name="gender" required className="auth__input" onChange={onSelectHandler} options={options} />
            </div>
            <label className="input__label u-margin-bottom-small" htmlFor="gender">Date of Birth</label>
            <div className="u-margin-bottom-big">
                <Input type="date" name="birthDate" required className="auth__input" onChange={onChangeHandler} value={register.birthDate?.toString()} />
            </div>
            <label className="input__label u-margin-bottom-small" htmlFor="email">Email</label>
            <div className="row u-margin-bottom-big  auth__input">
                <Input required type="email" name="email" onChange={onChangeHandler} value={register.email} />
            </div>
            <label className="input__label u-margin-bottom-small" htmlFor="password">Password</label>
            <div className="row u-margin-bottom-huge auth__input">
                <PasswordInput required name="password" onChange={onChangeHandler} value={register.password} />
            </div>
            
            
        </div>
    )

    const secondStep = (
        <div>
            <label className="input__label u-margin-bottom-small" htmlFor="gender">Faculty</label>
            <div className="u-margin-bottom-huge">
                <Select isSearchable={false} name="faculty" required className="auth__input" onChange={onSelectHandler} options={facultyOptions} />
            </div>
            <label className="input__label u-margin-bottom-small" htmlFor="gender">Type</label>
            <div className="u-margin-bottom-huge">
                <Select isSearchable={false} name="type" required className="auth__input" onChange={onSelectHandler} options={typeOptions} />
            </div>

            {register.type === "Teacher" && <><label className="input__label u-margin-bottom-small" htmlFor="gender">Subjects</label>
                <div className="u-margin-bottom-huge">
                    <Select required isMulti name="subjects" className="auth__input" onChange={onMultiSelectHandler} options={subjectOptions} />
                </div></>}
            
        </div>
    )

    return (
        <div className="register">
            <div className="auth__title">Register</div>
            <form onSubmit={onSubmitHandler}>
                {step === 1 ? firstStep : secondStep}

                <div className="auth__button">
                    <button className="button button__primary" type="submit">{step === 1 ? "Continue" : "Register"}</button>
                </div>
            </form>
        </div>
    )
}

export default Register