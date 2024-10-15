import React, { Profiler } from 'react';
import './Book.css'; // Make sure this file is styled properly
import car from "./assets/car.png"
import person from "./assets/person.png"
const Book = () => {
  return (
    <>
      <div className="nav">
        <div className="title"><h1>eV-<span>finder</span></h1></div>
        <div className="profile"><img src={person} alt="no-image" className="img"/></div>
    </div>
    
    <div className="wrapper">

        <div className="container">
             
            <div className="section-1">

               <div className="one">

                    <div className="common">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter Your Name"/>
                    </div>
                    
                    <div className="common">
                        <label for="staffid">Staff ID</label>
                        <input type="text" id="staffid" name="staffid" placeholder="Enter your ID"/>
                    </div>
                    
                    <div className="common checkbox">
                        <label className="important">Important</label>
                        <input type="checkbox" id="important" name="important"/>
                    </div>

                </div>
            

             <div className="two">

                    <div className="common">
                        <label for="source">Source Place</label>
                        <select id="source" name="source">
                            <option value="Gate - A">Gate - A</option>
                            <option value="Gate - B">Gate - B</option>
                            <option value="Gate - C">Gate - C</option>
                            <option value="MAIN PARKING">MAIN PARKING</option>
                            <option value="PARKING (GROUND SIDE)">PARKING (GROUND SIDE)</option>
                            <option value="RESEARCH PARK">RESEARCH PARK</option>
                            <option value="AS BLOCK (FRONT)">AS BLOCK (FRONT)</option>
                            <option value="AS BLOCK (MID)">AS BLOCK (MID)</option>
                            <option value="AS BLOCK (END)">AS BLOCK (END)</option>
                            <option value="IB BLOCK (FRONT)">IB BLOCK (FRONT)</option>
                            <option value="IB BLOCK (MID)">IB BLOCK (MID)</option>
                            <option value="IB BLOCK (END)">IB BLOCK (END)</option>
                            <option value="SF BLOCK">SF BLOCK</option>
                            <option value="MECHANICAL SCIENCE">MECHANICAL SCIENCE</option>
                            <option value="BOYS HOSTEL">BOYS HOSTEL</option>
                            <option value="TENNIS COURT">TENNIS COURT</option>
                            <option value="PEARL GUEST HOUSE">PEARL GUEST HOUSE</option>
                            <option value="CAFETARIA">CAFETARIA</option>
                            <option value="LEARNING CENTER">LEARNING CENTER</option>
                            <option value="GIRLS HOSTEL">GIRLS HOSTEL</option>
                            <option value="GROUND">GROUND</option>
                            <option value="INDOOR BADMITON">INDOOR BADMITON</option>
                            <option value="STAFF QUATERS">STAFF QUATERS</option>
                        </select>
                    </div>
                    
                    <div className="common">
                        <label for="destination">Destination Place</label>
                        <select id="destination" name="destination">
                            <option value="Gate - A">Gate - A</option>
                            <option value="Gate - B">Gate - B</option>
                            <option value="Gate - C">Gate - C</option>
                            <option value="MAIN PARKING">MAIN PARKING</option>
                            <option value="PARKING (GROUND SIDE)">PARKING (GROUND SIDE)</option>
                            <option value="RESEARCH PARK">RESEARCH PARK</option>
                            <option value="AS BLOCK (FRONT)">AS BLOCK (FRONT)</option>
                            <option value="AS BLOCK (MID)">AS BLOCK (MID)</option>
                            <option value="AS BLOCK (END)">AS BLOCK (END)</option>
                            <option value="IB BLOCK (FRONT)">IB BLOCK (FRONT)</option>
                            <option value="IB BLOCK (MID)">IB BLOCK (MID)</option>
                            <option value="IB BLOCK (END)">IB BLOCK (END)</option>
                            <option value="SF BLOCK">SF BLOCK</option>
                            <option value="MECHANICAL SCIENCE">MECHANICAL SCIENCE</option>
                            <option value="BOYS HOSTEL">BOYS HOSTEL</option>
                            <option value="TENNIS COURT">TENNIS COURT</option>
                            <option value="PEARL GUEST HOUSE">PEARL GUEST HOUSE</option>
                            <option value="CAFETARIA">CAFETARIA</option>
                            <option value="LEARNING CENTER">LEARNING CENTER</option>
                            <option value="GIRLS HOSTEL">GIRLS HOSTEL</option>
                            <option value="GROUND">GROUND</option>
                            <option value="INDOOR BADMITON">INDOOR BADMITON</option>
                            <option value="STAFF QUATERS">STAFF QUATERS</option>
                        </select>
                    </div>

                    <div className="common">
                        <label for="reason">Reason</label>
                        <input type="text" id="reason" name="reason" placeholder="Enter reason for booking"/>
                    </div>

                </div>   
                {/* section-1 */}
                
          </div>

            <div className="section-2">
                <div className="common">
                    <input type="submit" className="submit" value="Submit"/>
                </div>
            </div>

        </div>

        <div className="instruction">
            <div>
            <img src={car} alt="not found" className="instruction-image"/>
            </div>
                <div className="rules">
                    <h2>Instructions</h2>
                    <p>&#8658; Fill the details for creating a new request</p>
                    <p>&#8658; Check the box in case of an important or emergency situation</p>
                    <p>&#8658; Once you fill this form, your request will be added and after a few minutes, you’ll receive the response</p>
                </div>
        </div>

    </div>        
    </>
  );
};

export default Book;
