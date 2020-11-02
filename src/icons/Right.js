import * as React from "react"

export default function Right(props) {
  return (
    <svg width={25} height={25} viewBox="0 0 18 18" {...props}>
      <g transform="translate(-337 -164)">
        <circle
          cx={9}
          cy={9}
          r={9}
          transform="translate(337 164)"
          fill="#727c8e"
          opacity={0.2}
        />
        <g fill="#fff">
          <path d="M348.182 173.353l-2.829 2.83a.5.5 0 01-.707-.708l2.12-2.121.354-.354-.353-.354-2.121-2.12a.501.501 0 01.707-.708l2.83 2.829a.5.5 0 010 .706z" />
          <path
            d="M347.829 173l-2.83-2.828 2.121 2.12.707.708-.707.707-2.12 2.122 2.829-2.83m.707.708l-2.83 2.829a1 1 0 01-1.414-1.415l2.121-2.121-2.12-2.121a1 1 0 011.414-1.415l2.829 2.829a1 1 0 010 1.414z"
            fill="#727c8e"
          />
        </g>
      </g>
    </svg>
  )
}