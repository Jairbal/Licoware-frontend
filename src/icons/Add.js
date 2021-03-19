import * as React from "react"

export default function Add(props) {
  const {onClick} = props; 
  return (
    <svg width={40} height={40} viewBox="0 0 40 40" {...props} onClick={onClick}>
      <circle cx={20} cy={20} r={20} fill="#fff" />
      <path d="M19 28v-7h-7v-2h7v-7h2v7h7v2h-7v7z" />
    </svg>
  )
}
