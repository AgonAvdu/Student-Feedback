import { useState } from 'react'

import Edit from '../../assets/icons/edit-dark.svg'
import Delete from '../../assets/icons/delete.svg'

interface Props {
    feedback: feedback
}

interface feedback {
    id: number,
    author: string,
    message: string,
    rate: number,
}

const Feedback: React.FC<Props> = ({ feedback }) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [text, setText] = useState<string>("");

    const onEditHandler = () => {
        setEdit(!edit)
        setText(feedback.message)
    }

    const onSubmitHandler = () => {
        setEdit(false);
    }

    return (
        <div className="feedback">
            <div className="feedback-header u-margin-bottom-medium">
                <div className="feedback__author">{feedback.author}</div>
                <div className="feedback-header-icons">
                    <div className='feedback__icon feedback__icon--edit'>
                        <img onClick={onEditHandler} src={Edit} alt="edit" />
                    </div>
                    <div className='feedback__icon feedback__icon--delete'>
                        <img src={Delete} alt="delete" />
                    </div>
                </div>
            </div>
            {!edit
                ?
                <div className="feedback-info">
                    <div className="feedback-info__comment">{feedback.message}</div>
                    <div className="feedback-info__rating">{feedback.rate}</div>
                </div> :
                <div className='feedback-edit'>
                    <textarea value={text} className='feedback__textarea u-margin-bottom-small ' />
                    <div className="col-1 profile-button--edit feedback__submit ">
                        <button onClick={onSubmitHandler} className="button button__edit">
                            Submit
                        </button>
                    </div>
                </div>
            }


        </div>
    )
}

export default Feedback