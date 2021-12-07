import React from "react";
/**
 * base props for generic HTML UI
*/
type Props<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>,T>

/**
 * extends for all props which need custom
 * */ 
type BaseHTMLProps = Props<HTMLElement>

export type {
    Props,
    BaseHTMLProps
}