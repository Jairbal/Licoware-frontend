import * as React from "react";

export default function Delete(props) {
  const { onClick } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 40 40"
      {...props}
      onClick={onClick}
    >
      <circle data-name="Elipse 111" cx={20} cy={20} r={20} fill="#fff" />
      <g data-name="Symbol 85 \u2013 1">
        <path
          d="M13.972 26.1a1.458 1.458 0 001.458 1.458h8.751A1.458 1.458 0 0025.64 26.1V15.889H13.972zm8.265-7.78a.486.486 0 11.972 0v6.806a.486.486 0 01-.972 0zm-2.917 0a.486.486 0 11.972 0v6.806a.486.486 0 01-.972 0zm-2.92 0a.486.486 0 11.972 0v6.806a.486.486 0 01-.972 0zm9.726-5.348H22.48l-.286-.572a.729.729 0 00-.653-.4h-3.473a.721.721 0 00-.65.4l-.286.572h-3.646a.486.486 0 00-.486.486v.972a.486.486 0 00.486.486h12.64a.486.486 0 00.486-.486v-.972a.486.486 0 00-.486-.486z"
          data-name="Grupo 1518"
        />
      </g>
    </svg>
  );
}
