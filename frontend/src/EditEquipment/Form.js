import React from 'react';
import { useParams } from 'react-router-dom';

export default function Form (props) {

    const { items } = props;
    const { itemID } = useParams();

    const item = items.find(item => {
        return item.id === itemID
    }) || {}

    return (
        <div>
            <h2>Edit Equipment:</h2>
            <form>
                <label>Name:&nbsp;
                    <input value={item.name}
                            //onchange
                           name='name'
                           type='text'
                    />
                </label>
                <label>Description:&nbsp;
                    <input value={item.description}
                           //onchange
                           name='description'
                           type='text'
                    />
                </label>
                <label>Upload a New Image:&nbsp;
                    <input value={item.imgUrl}
                           //onchange
                           name='imgUrl'
                           type='file'
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}