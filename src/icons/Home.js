import * as React from "react"

export default function Home(props) {
  const {color} = props;
  return (
    <svg width={18.975} height={18.6} viewBox="0 0 18.975 18.6" {...props}>
      <path
        d="M18.754 7.908L9.916.162a.65.65 0 00-.857 0L.221 7.908a.65.65 0 00.857.977l.684-.6v9.665a.65.65 0 00.65.65h14.152a.65.65 0 00.65-.65V8.29l.684.6a.65.65 0 00.857-.977zM7.988 17.301v-5.354h3V17.3h-3zm7.926-10.149v10.149h-3.625v-6a.65.65 0 00-.65-.65h-4.3a.65.65 0 00-.65.65v6H3.063V7.151l6.426-5.632 6.426 5.632s-.001-.002-.001 0z"
        fill={color}
      />
    </svg>
  )
}
