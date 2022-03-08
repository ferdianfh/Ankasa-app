/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import {
  useSearchParams,
  useNavigate,
  useLocation,
  Link
} from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import logo from "../../../assets/img/lilplane.png";
import mail from "../../../assets/img/ic_round-mail-outline.svg";
import pic from "../../../assets/img/nnzkZNYWHaU.svg";
import bell from "../../../assets/img/bell.svg";
import search from "../../../assets/img/search.svg";
import menu from "../../../assets/img/align-right.svg";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import "../../../Pages/Main/main.css";
import "./navbar.css";
import ModalSearchFlight from "../ModalSearchFlight";
// import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get("search");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchParams({ search: e.target.value });
    }
  };
  const indexPage = () => {
    navigate("/");
  };
  const [searchFlightModal, setSearchFlightModal] = useState(false);
  const handleModalSearchFlight = () => {
    setSearchFlightModal(!searchFlightModal);
  };

  // temp function
  // const [click, setClick] = useState(false);
  // const hanldeClick = () => {
  //   setClick(!click);
  // };

  return (
    <Fragment>
      <div className="navbar d-flex justify-content-around p-5 ">
        <div onClick={indexPage} className="logo-brand">
          <img src={logo} alt="Ankasa" />
          <span className="ms-3 fs-5 fw-bolder">Ankasa</span>
        </div>

        <div className="d-md-flex d-none">
          <form className="rounded bg-light p-2">
            <img src={search} alt="" />
            <Input
              className="p-1 ms-1 rounded bg-light border-0"
              type="text"
              placeholder="Where do you want to go?"
              name="search"
              onKeyUp={handleSearch}
            />
          </form>
          <div
            onClick={handleModalSearchFlight}
            className="nav-item ms-5 d-flex flex-column"
          >
            <p className="mt-3 mb-0 navbar-menu ">Find Ticket</p>
            {/* <span className="active-nav"></span> */}
          </div>
          <Link to={"/main/booking"}>
            <div className="nav-item ms-5 d-flex flex-column">
              <p className="mt-3 mb-0 navbar-menu">My Booking</p>
              {/* <span className="active-nav"></span> */}
            </div>
          </Link>
        </div>
        {token ? (
          <div className="d-md-block d-none">
            <div className="d-flex">
              <Link to={"/main/chat"}>
                <div className="navbar-icons me-5">
                  <BiIcons.BiEnvelope className="chat-icon " />
                  {/* <span className="active-nav-icons"></span> */}
                </div>
              </Link>
              <Link to={"/main/notification"}>
                <div className="navbar-icons me-5">
                  <BiIcons.BiBell className="notif-icon" />
                  {/* <span className="active-nav-icons"></span> */}
                </div>
              </Link>
              <Link to={"/main/profile"}>
                <img
                  className="profile-icon rounded-pill border border-primary border-2 p-1"
                  src={pic}
                  alt="Profile"
                />
              </Link>
            </div>
          </div>
        ) : (
          <Button
            className="btn-sign bg-primary rounded-3 p-2 text-white shadow d-md-block d-none"
            onClick={() => {
              navigate("/auth/signup");
            }}
          >
            Sign Up
          </Button>
        )}
        <img className="d-md-none" src={menu} alt="" height="30" />
      </div>

      {searchFlightModal ? <ModalSearchFlight /> : null}
    </Fragment>
  );
};

export default Navbar;
