import * as React from "react"

export default function Edit(props) {
  const {onClick} = props;
  return (
    <svg width={40} height={40} viewBox="0 0 40 40" {...props} onClick={onClick}>
      <defs>
        <clipPath id="prefix__a">
          <path fill="none" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
      <g data-name="Grupo 1516" transform="translate(-311 -118)">
        <circle
          data-name="Elipse 114"
          cx={20}
          cy={20}
          r={20}
          transform="translate(311 118)"
          fill="#fff"
        />
        <g transform="translate(323 130)" clipPath="url(#prefix__a)">
          <path data-name="Rect\xE1ngulo 324" fill="none" d="M0 0h16v16H0z" />
          <path
            data-name="Trazado 110"
            d="M8.154 3.077L2.462 8.923 0 16l7.077-2.308L12.769 8zm7.231-.462l-2-2a1.865 1.865 0 00-2.769 0L8.923 2.308l4.615 4.769 1.846-1.846A1.95 1.95 0 0016 3.846a1.9 1.9 0 00-.615-1.231z"
          />
        </g>
      </g>
    </svg>
  )
}