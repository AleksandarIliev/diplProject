import { Part } from './Part/Part';

export const Catalog = ({
    products,
}) => {
    return (
        <section id="catalog">
            <h3>Products</h3> 
                {products.map(s => <Part key={s._ownerId} {...s}/>)}
            
            {products.length === 0 
            && (<h3 className="noProducts">There are no products in the list</h3>)}
        </section>
    );
}
//2'13