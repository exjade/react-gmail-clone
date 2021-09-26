import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../../features/mailSlice';
import './SendMail.css'

const SendMail = () => {

    const { register, handleSubmit, watch,  formState: { errors } } = useForm();
    const dispatch = useDispatch()

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon 
                className="sendMail__close" 
                onClick={() => dispatch(closeSendMessage())}
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="to"
                    placeholder="To"
                    type="email"
                    {...register("to", { required: true })}
                     />
                    {errors.to && <p className="sendMail__error">Specify at least one recipient.</p>}
                <input
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    {...register("subjectRequired", { required: true })}
                     />
                      {errors.subjectRequired && <p className="sendMail__error">You must specify at least one subject</p>}
                <input
                    name="message"
                    type="text"
                    className="sendMail__message"
                    {...register("messageRequired", { required: true })}
                     />
                      {errors.messageRequired && <p className="sendMail__error">This field can't be empty</p>}

                <div className="sendMail__options">
                    <Button
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
