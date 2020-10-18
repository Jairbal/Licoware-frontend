import * as React from "react"

export default function Error(props) {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" {...props}>
      <g fill="none">
        <path d="M0 0h20v20H0z" />
        <g
          stroke="#ff453a"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.667}
        >
          <path d="M18.666 10.333A8.333 8.333 0 1110.333 2a8.333 8.333 0 018.333 8.333zM10.333 7v3.333M10.333 13.666h0" />
        </g>
      </g>
    </svg>
  )
}

