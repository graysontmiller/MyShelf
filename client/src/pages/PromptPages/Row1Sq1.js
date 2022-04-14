import React from 'react';
import BookForm from '../BookForm';
import { Link } from 'react-router-dom';


const Row1Sq1 = () => {

    return (
    <div>

        <h1> LGBTQIA List Book </h1>
        <p> A Book from r/Fantasy's Top LGBTQIA List: Any book on this list, including sequels.</p>
        <p>Hard mode: A book or series that received ten votes or less.</p>
        
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
        <label class="form-check-label" for="flexCheckDefault">
            upload book under this prompt
        </label>
            
        

        <BookForm/>

        <button className='btn'> 
            <Link to="/profile"> Return to Profile</Link>
        </button>

    </div>
    );

};

export default Row1Sq1;

