// Write all the code here
import { useState } from 'react';
import Popup from 'reactjs-popup';

const Contact = () => {
    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(false);

    return (<>
        <div className="contact">
            <form action="">
                <h2></h2>
                <input type="text" name="" id="" />
                <textarea name="" id="" cols="5"></textarea>
                <button type="button" onClick={() => setOpen(true)}>Send</button>
            </form>
            <div className="formBorder">
                <div>
                    <img src="/assets/burger1.png" alt="Contact Burger" />
                </div>
            </div>

            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div style={{color: 'black'}}>
                    <a className="close" onClick={closeModal}>
                        &times;
                    </a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
                    omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
                    ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
                    doloribus. Odit, aut.
                </div>
            </Popup>
        </div>
    </>)
};

export default Contact;