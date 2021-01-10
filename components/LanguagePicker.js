import React from "react";

export default function LanguagePicker(props) {

    return (
        <div >
        <p className="text-right font4 mr-4 pt-3"> 
        <span className={`hover:text-white cursor-pointer ${props.language === "EN" && "text-white"}`} onClick={() => props.callback('EN')}>EN</span> |
        {" "}<span className={`hover:text-white cursor-pointer ${props.language === "ES" && "text-white"}`} onClick={() => props.callback('ES')}>ES</span> | 
        {" "}<span className={`hover:text-white cursor-pointer ${props.language === "PT" && "text-white"}`} onClick={() => props.callback('PT')}>PT</span></p>
     </div>
    )
}
