import * as React from "react"

function SvgComponent(props) {
  const {color} = props;
  return (
    <svg width={16.609} height={16.609} viewBox="0 0 16.609 16.609" {...props}>
      <defs>
        <style>
          {
            `.prefix__b{fill:none;stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:1.333px}`
          }
        </style>
      </defs>
      <path fill="none" d="M0 0h16v16H0z" />
      <path
        className="prefix__b"
        d="M12.293 12.293a6.713 6.713 0 01-3.96 1.373C3.666 13.666 1 8.333 1 8.333a12.3 12.3 0 013.373-3.96m2.56-1.213a6.08 6.08 0 011.4-.16C13 3 15.666 8.333 15.666 8.333a12.333 12.333 0 01-1.44 2.127m-4.48-.713A2 2 0 116.92 6.92M1 1l14.666 14.666"
      />
    </svg>
  )
}

export default SvgComponent
