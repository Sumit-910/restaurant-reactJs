import React,{useState} from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map((curElem)=>{
    return curElem.category;
})),
    "All",
];

// console.log(uniqueList);

export default function Restaurant() {
    const [menuData, setMenuData] = useState(Menu);
    // eslint-disable-next-line
    const [menuList, setMenuList] = useState(uniqueList);
    // console.log(menuList);
    const filterItem = (category) =>{
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((currElem)=>{
            return currElem.category === category;
        });
        setMenuData(updatedList);
    };

  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList} />
    <MenuCard menuData={menuData} />
    </>
  )
}
