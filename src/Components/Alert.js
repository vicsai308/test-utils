import React from 'react'

const Alert = (props) => {
  const stringLowerCase =(char)=>{
    let lower = char.toLowerCase()
    // returns a word where 1st character is uppercase and concatenated with remaining word with lowe case using slicing
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    // 'props.alert &&' will check if its null or not, if its not null it will return the html else will return false
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{stringLowerCase(props.alert.type)}</strong> {props.alert.msg}
            {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button> */}
    </div>
  )
}

export default Alert
