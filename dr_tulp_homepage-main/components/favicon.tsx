'use client'

const Favicon = ({ className = "h-6 w-auto" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 1145 1000" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <path 
        d="M333.727 218.673C383.983 46.9106 513.249 12.5892 571.6 16.8987C629.539 21.1778 766.455 70.6345 789.904 250.149C813.352 429.663 674.201 686.127 606.015 794.789L425.809 781.48C374.175 665.445 283.471 390.435 333.727 218.673Z" 
        fill="url(#paint0_linear_228_2)" 
        stroke="#1E1153" 
        strokeWidth="25"
      />
      <path 
        d="M653.572 271.579C778.964 137.683 903.885 162.188 950.671 191.177C997.127 219.961 1087.83 323.603 1020.41 496.206C953 668.809 712.072 841.169 602.261 910.229L457.77 820.702C470.791 693.451 528.181 405.475 653.572 271.579Z" 
        fill="url(#paint1_linear_228_2)" 
        stroke="#1E1153" 
        strokeWidth="25"
      />
      <path 
        d="M142.943 542.817C60.8604 379.178 127.917 271.566 171.706 238.215C215.185 205.099 344.793 157.093 483.763 280.381C622.733 403.668 768.044 639.273 794.497 765.664L591.635 917.677C476.272 860.907 225.026 706.456 142.943 542.817Z" 
        fill="url(#paint2_linear_228_2)" 
        stroke="#1E1153" 
        strokeWidth="25"
      />
      <defs>
        <linearGradient 
          id="paint0_linear_228_2" 
          x1="525.43" 
          y1="39.8799" 
          x2="546.843" 
          y2="439.764" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6CD6"/>
          <stop offset="1" stopColor="#FBF0C4"/>
        </linearGradient>
        <linearGradient 
          id="paint1_linear_228_2" 
          x1="1005.13" 
          y1="255.672" 
          x2="706.344" 
          y2="803.992" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#666CFF"/>
          <stop offset="1" stopColor="#FBF0C4"/>
        </linearGradient>
        <linearGradient 
          id="paint2_linear_228_2" 
          x1="176.484" 
          y1="234.575" 
          x2="658.167" 
          y2="867.003" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0C7FE9"/>
          <stop offset="1" stopColor="#FBEFC3"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Favicon
