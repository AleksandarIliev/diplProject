
import { useForm } from '../../hooks/useForm';

export const AddProduct = ({
    onAddProductSubmit,
}) => {
    const { values, changeHandler, onSubmit} = useForm({
        type: '',
        imageUrl: '',
        length: '',
        width: '',
        height: '',
        addInfo: ''    
    }, onAddProductSubmit); 

    return (
        <>
        <form method="POST" onSubmit={onSubmit}>
                <label htmlFor="type">Type:</label><br />
                <input value={values.type} onChange={changeHandler} type="text" id="type" name="type" placeholder="Enter type" /><br />
                <label htmlFor="imageUrl">Image url:</label><br />
                <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Enter image" /><br />
                <label htmlFor="length">Length</label><br />
                <input value={values.length} onChange={changeHandler} type="text" id="length" name="length" placeholder="Length in mm." /><br />
                <label htmlFor="width">Width:</label><br />
                <input value={values.width} onChange={changeHandler} type="text" id="width" name="width" placeholder="Width in mm." /><br />
                <label htmlFor="height">Height:</label><br />
                <input value={values.height} onChange={changeHandler} type="text" id="height" name="height" placeholder="Height in mm." /><br />
                <label htmlFor="addInfo">Additional information:</label><br />
                <textarea value={values.addInfo} onChange={changeHandler} id="addInfo" name="addInfo" placeholder="Here write additional information for product"></textarea><br /><br />
                <input className="btn submit" type="submit" value="Add Product" /><br />
            </form>
        </>
    );
}