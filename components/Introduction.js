import React from "react";
import LanguagePicker from './LanguagePicker'
import TypeWriter from './TypeWriter'
import TypeWriterES from './TypeWriterES'

export default function Introduction(props) {


    return (
      <div className="bg-hero-bg bg-no-repeat bg-cover  w-screen px-1">
       <LanguagePicker language={props.language} callback={props.callback} />
        <div className="flex justify-center items-center h-screen ">
        <div>
        {props.language == 'EN' ? <TypeWriter />  : props.language == "ES" ? <TypeWriterES /> : "btn-grey"} 
        </div>
      </div>
      </div>
    )
}
