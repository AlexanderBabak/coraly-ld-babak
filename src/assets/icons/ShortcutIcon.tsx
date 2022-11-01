import { SVGProps, memo } from "react";

const ShortcutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={28} height={29} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.3118 19H9.34304L12.9276 8.81818H15.2045L18.794 19H16.8253L14.1058 10.9062H14.0263L11.3118 19ZM11.3764 15.0078H16.7457V16.4893H11.3764V15.0078Z"
      fill="#464356"
    />
    <g filter="url(#filter0_d_699_816)">
      <path
        d="M22.9355 1H4.37469C3.31445 1 2.43844 1.82738 2.37795 2.8859L1.12081 24.8859C1.05523 26.0334 1.96813 27 3.11755 27H24.8212C25.9932 27 26.914 25.9969 26.8139 24.8292L24.9282 2.8292C24.8395 1.79463 23.9739 1 22.9355 1Z"
        stroke="#C1C0C7"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_699_816"
        x="0.617188"
        y="0.5"
        width="26.7041"
        height="28"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_699_816"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_699_816"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default memo(ShortcutIcon);
