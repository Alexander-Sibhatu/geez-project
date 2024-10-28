import React from "react";
import classes from "./homepage.module.css";
import { Link } from "react-router-dom";
import angle_icon from '../../assets/angle_icon.svg'
import search_icon from '../../assets/search_icon.svg'

const HomePage = () => {
  return (
    <div className={classes.HomePage}>
      <div className={classes.Icon}>
        <img src={angle_icon} alt="" className={classes.leftIcon} />

        <img src={angle_icon} alt="" className={classes.rightIcon} />
      </div>
      <div className={classes.SearchBar}>
        <input type="text" placeholder="ፈልግ" className={classes.searchBar}/>
        <img src={search_icon} alt="" className={classes.searchIcon}/>
      </div>
      <div className={classes.buttons}>
        <button>
          <Link to="verbs">ግሥ</Link>
        </button>

        <button>
          <Link to="">ነባር</Link>
        </button>
        <button>
          <Link to="">የቅኔ መጠነ ዜማ</Link>
        </button>
        <button>
          <Link to="">አገባብ</Link>
        </button>
        <button>
          <Link to="">ጸያፍ</Link>
        </button>
      </div>
    </div>
  );
};
export default HomePage;
