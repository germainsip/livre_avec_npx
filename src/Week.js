import React, { Component } from "react";
import { weekNumber } from "weeknumber";
import { TrashIcon } from "@heroicons/react/solid";

class Week extends Component {


  render() {
    const date = this.props.date;
	let border = (weekNumber(date)%2===0 ? 'border-yellow-300':'border-black-300')
	let textColor = (weekNumber(date)%2===0 ? 'text-yellow-300':'text-gray-300')

    //return         <h2 className="text-4xl text-yellow-600">Semaine numéro: {weekNumber(date)}</h2>
    return (
      <div className={`max-w-md px-8 py-4 my-20 bg-white border-2 ${border} rounded-lg shadow-lg`}>
        <div className="flex justify-center -mt-16 md:justify-end">
          <TrashIcon className={`w-20 h-20 ${textColor} bg-white border-4 ${border} rounded-full`} />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Semaine : {weekNumber(date)}
          </h2>
          <h2 className="text-4xl font-semibold text-red-700">
            {date.getDay() === 3 && weekNumber(date) % 2 === 0
              ? "Action ! C'est demain!"
              : ""}
          </h2>
          <p className="mt-2 text-gray-600">
            La poubelle jaune est ramassée tous les jeudi des semaines paires.
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <a href="/" className="text-xl font-medium text-indigo-500">
            Germain
          </a>
        </div>
      </div>
    );
  }
}

export default Week;
