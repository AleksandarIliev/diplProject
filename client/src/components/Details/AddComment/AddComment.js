import { useForm } from "../../../hooks/useForm";

export const AddComment = ({
    onCommentSubmit,
}) => {
    const { values, changeHandler, onSubmit} = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        <div className="comment">
            <label>Here you write your comment:</label>
            <form className="form" onSubmit={onCommentSubmit}>
                <textarea name="comment" placeholder="Write here ... " value={values.comment} onChange={changeHandler}></textarea> <br />
                <input className="btnSubmit" type="submit" value="Send comment" />
            </form>
        </div>
    );
}