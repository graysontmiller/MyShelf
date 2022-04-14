import React from 'react';
import { Link } from 'react-router-dom';


const BingoCard = ({ reviews }) => {
  return (

    <div className="container">
    <div className="row row-cols-md-5 row-cols-sm-2">

      <div class="border border-danger col text-center">
        <Link to="/Row1Sq1"> LGBTQIA List Book</Link>
      </div>

      <div class="border border-danger col text-center">
        <Link to="/Row1Sq2"> Weird Ecology </Link>
      </div>  

      <div class="border border-danger col text-center">
        <Link to="/Row1Sq3"> Two or More Authors</Link>
      </div> 

      <div class="border border-danger col text-center">
        <Link to="/Row1Sq4"> Historical SFF</Link>
      </div>

      <div class="border border-danger col text-center">
        <Link to="/Row1Sq5"> Set in Space</Link>
      </div>

      <div class="border border-danger col text-center">
        <Link to="/Row2Sq1"> Stand Alone</Link>
      </div>

      <div class="border border-danger col text-center">
        <Link to="/Row2Sq2"> Anti-Hero</Link>
      </div>  

      <div class="border border-danger col text-center">
        <Link to="/Row2Sq3"> Book Club or Readalong Book</Link>
      </div>

     <div class="border border-danger col text-center">
        <Link to="/Row2Sq4"> Cool Weapon</Link>
      </div> 

      <div class="border border-danger col text-center">
        <Link to="/Row2Sq5"> Revolutions and Rebellions</Link>
      </div>


      <div class="border border-danger col text-center">
        <Link to="/Row3Sq1"> Name in the Title</Link>
      </div>

      <div class="border border-danger col text-center">
        <Link to="/Row3Sq2"> Author uses Initials</Link>
      </div>  

      <div class="border border-danger col text-center">
        <Link to="/Row3Sq3"> Published in 2022</Link>
      </div>

      <div class="border border-danger col text-center">
        <Link to="/Row3Sq4"> Urban Fantasy</Link>
      </div>  

      <div class="border border-danger col text-center">
        <Link to="/Row3Sq5"> Set in Africa</Link>
      </div>


      <div class="border border-danger col text-center">
        <Link to="/Row4Sq1"> Non-human Protagonist</Link>
      </div>

      <div class="border border-danger col text-center">
        <Link to="/Row4Sq2"> Wibbly Wobbly Timey Wimey</Link>
      </div>  

      <div class="border border-danger col text-center">
        <Link to="/Row4Sq3"> Five Short Stories</Link>
      </div>

      <div class="border border-danger col text-center">
        <Link to="/Row4Sq4"> Mental Health</Link>
      </div>  

      <div class="border border-danger col text-center">
        <Link to="/Row5Sq5"> Self Published</Link>
      </div>


      <div class="border border-danger col text-center">
        <Link to="/Row5Sq1"> Award Finalist</Link>
      </div>

      <div class="border border-danger col text-center">
        <Link to="/Row5Sq2"> BIPOC Author</Link>
      </div>  

      <div class="border border-danger col text-center">
        <Link to="/Row5Sq3"> Shape-shifters</Link>
      </div>

      <div class="border border-danger col text-center">
        <Link to="/Row5Sq4"> No Ifs, Ands, or Buts</Link>
      </div>

      <div class="border border-danger col text-center">
        <Link to="/Row5Sq5"> Family Matters</Link>
      </div>
    </div>


  </div>


  
  );
};

export default BingoCard;