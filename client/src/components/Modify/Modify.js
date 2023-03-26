import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useService } from "../../hooks/useService";
import { productServiceFactory } from "../../services/productService";

export const Modify = (
    onProductModifySubmit,
) => {
    const { productId } = useParams();
    const productService = useService(productServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        type: '',
        imageUrl: '',
        length: '',
        width: '',
        height: '',
        additionalInfo: '',
    }, onProductModifySubmit);

    useEffect(() => {
        productService.getOne(productId)
            .then(result => {
                changeValues(result);
            })
    }, []);

    return (
            <form className="modify" onSubmit={onSubmit}>
                <label htmlFor="type"></label>
                <input type="text" name="type" value={values.type} onChange={changeHandler}/>

                <label htmlFor="imageUrl"></label>
                <input type="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler}/>

                <label htmlFor="length"></label>
                <input type="length" name="length" value={values.length} onChange={changeHandler}/>

                <label htmlFor="width"></label>
                <input type="width" name="width" value={values.width} onChange={changeHandler}/>

                <label htmlFor="height"></label>
                <input type="height" name="length" value={values.height} onChange={changeHandler}/>
                
                <label htmlFor="additionalInfo"></label>
                <textarea type="additionalInfo" name="additionalInfo" value={values.additionalInfo} onChange={changeHandler}></textarea>
                <input className="submit" type="submit" value="Modify product" />
            </form>
    );
}