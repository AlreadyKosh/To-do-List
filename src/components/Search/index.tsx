import React, { ReactNode, useState } from "react";
import styles from "./Search.module.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2" ;
import Logo from "../../assets/img/image8.png";

interface ISearch {
  placeholder: string;
  value: string;
  onChange: (e: any) => any;
}

const Search = (props: ISearch) => {

  return (
    <div className={styles.nav}>
      <div className={styles.logoNome}>
        <img src={Logo}></img>
        <h3 className={styles.title}>CoreNotes</h3>
      </div>
      <div className={styles.inputSearch}>
        <input type="text" placeholder={props.placeholder} value={props.value} />
        <HiMagnifyingGlass />
      </div>
      <RiDeleteBinLine />
    </div>
  );
};

export default Search;
