import * as React from "react"

export default function Inventario(props) {
  const {color} = props;
  return (
    <svg width={17} height={17} viewBox="0 0 17 17" {...props}>
      <path
        d="M16.844 2.409L14.592.155a.531.531 0 00-.751 0l-.749.752a.531.531 0 000 .751l-2.551 2.546a4.247 4.247 0 00-4.661.9L.622 10.367a2.125 2.125 0 000 3.005l3.005 3.005a2.125 2.125 0 003.005 0l5.26-5.259a4.247 4.247 0 00.9-4.661l2.546-2.546a.531.531 0 00.751 0l.751-.751a.531.531 0 000-.751zM5.95 14.054l-3.005-3.005 4.047-4.052 3.005 3.005z"
        fill={color}
      />
    </svg>
  )
}