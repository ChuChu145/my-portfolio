import React from "react";
import classnames from "classnames"

export default function Button ({variant, className, children, ...rest}) {

    let variantClass = variant && `button-${variant}`
    let colorClass = className && `button-${className}`
    const allClasses = classnames( variantClass, colorClass )

    return(
        <button className={allClasses} >{children}</button>
    )
}