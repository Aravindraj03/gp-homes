import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

const BookingSearch = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission logic, e.g., sending data to an API or a new page.
    console.log({ checkInDate, checkOutDate, adults, children, rooms });
  };

  return (
    <div className="booking-wrapper">
      <div className="container">
        <div className="booking-inner clearfix">
          <form onSubmit={handleSubmit} className="form1 clearfix">
            <div className="col1 c1">
              <div className="input1_wrapper">
                <label>Check in</label>
                <div className="input1_inner">
                  <input
                    type="text"
                    className="form-control input datepicker"
                    placeholder="Check in"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col1 c2">
              <div className="input1_wrapper">
                <label>Check out</label>
                <div className="input1_inner">
                  <input
                    type="text"
                    className="form-control input datepicker"
                    placeholder="Check out"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col2 c3">
              <div className="select1_wrapper">
                <label>Adults</label>
                <div className="select1_inner">
                  <select
                    className="select2 select"
                    style={{ width: '100%' }}
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col2 c4">
              <div className="select1_wrapper">
                <label>Children</label>
                <div className="select1_inner">
                  <select
                    className="select2 select"
                    style={{ width: '100%' }}
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                  >
                    <option value="0">Children</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                    <option value="3">3 Children</option>
                    <option value="4">4 Children</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col2 c5">
              <div className="select1_wrapper">
                <label>Rooms</label>
                <div className="select1_inner">
                  <select
                    className="select2 select"
                    style={{ width: '100%' }}
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                  >
                    <option value="1">1 Room</option>
                    <option value="2">2 Rooms</option>
                    <option value="3">3 Rooms</option>
                    <option value="4">4 Rooms</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col3 c6">
              <button type="submit" className="btn-form1-submit">
                Check Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingSearch;
