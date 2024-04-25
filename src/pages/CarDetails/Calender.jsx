/* eslint-disable react/prop-types */
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Calender = ({value}) => {
  // const isValidDate = (date) => {
  //   return date instanceof Date && !isNaN(date);
  // };

  // If value is not a valid date, use current date as default
  // const startDate = isValidDate(value) ? new Date(value) : new Date();
  // const endDate = isValidDate(value) ? new Date(value) : new Date();

  // Creating an object with startDate and endDate
  // const valueAsObject = { startDate, endDate };

  return (
    <DateRange
    ranges={[value]}
    rangeColors={[
      
         '#F43F5E', 
      
    ]}
    

    
      
     
      direction='vertical'
      showDateDisplay={false}
      
    >
      </DateRange>
  )
}

export default Calender