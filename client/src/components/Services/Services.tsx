import styles from "./Services.module.css";

export default function Services() {
  const services = [
    {
      text: "Servis i održavanje klima opreme",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          fill="currentColor"
          className="bi bi-wind"
          viewBox="0 0 16 16"
        >
          <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
        </svg>
      ),
    },
    {
      text: "Hitna intervencija za klima uređaje",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          fill="currentColor"
          className="bi bi-exclamation-triangle"
          viewBox="0 0 16 16"
        >
          <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
          <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
        </svg>
      ),
    },
    {
      text: "Dijagnostika kvarova i popravka",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          fill="currentColor"
          className="bi bi-gear"
          viewBox="0 0 16 16"
        >
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
        </svg>
      ),
    },
    {
      text: "Zamena starih klima uređaja",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          fill="currentColor"
          className="bi bi-fan"
          viewBox="0 0 16 16"
        >
          <path d="M10 3c0 1.313-.304 2.508-.8 3.4a2 2 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8 8 0 0 0-.491-.454A6 6 0 0 1 8 2c.691 0 1.355.117 1.973.332Q10 2.661 10 3m0 5q0 .11-.012.217c1.018-.019 2.2-.353 3.331-1.006a8 8 0 0 0 .57-.361 6 6 0 0 0-2.53-3.823 9 9 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254m-.137.728a2 2 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377q.3.174.605.317a6 6 0 0 0 2.053-4.111q-.311.11-.641.199c-1.264.339-2.493.356-3.482.11ZM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391q0 .346.027.678A6 6 0 0 0 8 14c.94 0 1.83-.216 2.623-.602a8 8 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96Q8.149 10 8 10M6 8q0-.12.014-.239c-1.02.017-2.205.351-3.34 1.007a8 8 0 0 0-.568.359 6 6 0 0 0 2.525 3.839 8 8 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A2 2 0 0 1 6 8m-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8 8 0 0 0-.594-.312 6 6 0 0 0-2.06 4.106q.309-.11.637-.199M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        </svg>
      ),
    },
    {
      text: "Postavljanje ventilacionih sistema",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 512 512"
          version="1.1"
        >
          <path d="" stroke="none" fill="currentColor" fill-rule="evenodd" />
          <path
            d="M 41.230 74.115 C 38.882 75.278, 35.384 78.070, 33.457 80.321 C 26.620 88.309, 27 78.880, 27 240.500 C 27 400.843, 26.691 392.568, 32.970 400.160 C 36.711 404.683, 45.124 409, 50.196 409 L 54 409 54 422.845 C 54 434.988, 54.225 436.893, 55.829 438.345 C 57.450 439.812, 61.231 439.998, 89.079 439.985 C 106.543 439.976, 121.149 439.559, 121.960 439.046 C 122.763 438.538, 126.815 431.682, 130.964 423.811 L 138.507 409.500 256 409.500 L 373.493 409.500 381.036 423.811 C 385.185 431.682, 389.237 438.538, 390.040 439.046 C 390.852 439.559, 405.524 439.976, 423.095 439.985 C 452.445 439.999, 454.808 439.870, 456.345 438.171 C 457.715 436.657, 458 433.989, 458 422.671 L 458 409 460.634 409 C 468.848 409, 477.753 402.873, 481.626 394.556 L 483.980 389.500 483.980 240 L 483.980 90.500 481.633 85.459 C 480.342 82.687, 477.817 79.182, 476.022 77.672 C 468.782 71.580, 485.105 72, 255.628 72.001 L 45.500 72.002 41.230 74.115 M 48.388 86.976 C 47.227 87.448, 45.314 89.057, 44.138 90.552 L 42 93.270 42 240.619 L 42 387.968 44.918 391.234 L 47.836 394.500 256 394.500 L 464.164 394.500 467.082 391.234 L 470 387.968 470 372.521 L 470 357.074 422.250 356.787 L 374.500 356.500 369.181 353.554 C 362.705 349.966, 358.541 345.380, 355.101 338.046 L 352.500 332.500 352.500 241 C 352.500 135.478, 351.846 142.989, 361.910 132.936 C 371.414 123.442, 370.103 123.648, 423.750 123.232 L 470 122.874 470 107.953 L 470 93.032 467.082 89.766 L 464.164 86.500 257.332 86.310 C 143.574 86.205, 49.550 86.505, 48.388 86.976 M 172.635 114.065 C 130.393 119.920, 93.996 145.941, 75.056 183.829 C 60.503 212.938, 58.092 249.843, 68.708 281 C 74.933 299.273, 84.964 315.150, 99.407 329.593 C 125.276 355.463, 157.697 368.157, 194 366.631 C 227.290 365.231, 255.078 353.033, 278.507 329.536 C 296.925 311.063, 308.124 290.183, 313.655 264 C 314.953 257.853, 315.450 251.070, 315.450 239.500 C 315.450 227.930, 314.953 221.147, 313.655 215 C 308.215 189.248, 297.488 169.368, 279.069 150.905 C 260.061 131.851, 239.820 120.919, 213.500 115.494 C 203.876 113.510, 182.126 112.749, 172.635 114.065 M 177.324 129.064 C 128.948 133.749, 89.074 169.986, 78.912 218.500 C 76.599 229.541, 76.358 250.471, 78.421 261.250 C 86.014 300.934, 114.076 333.561, 152 346.798 C 187.482 359.182, 227.905 352.580, 258 329.485 C 265.289 323.891, 276.742 311.742, 281.934 304.097 C 288.147 294.949, 294.613 280.785, 297.730 269.500 C 300.303 260.184, 300.487 258.234, 300.425 241 C 300.365 224.297, 300.103 221.551, 297.730 212.723 C 285.318 166.552, 246.732 133.798, 199.144 129.036 C 193.448 128.466, 188.048 128.061, 187.144 128.136 C 186.240 128.211, 181.821 128.629, 177.324 129.064 M 377.500 139.417 C 373.773 141.081, 369.469 145.596, 368.064 149.315 C 366.582 153.236, 366.580 327.756, 368.061 331.685 C 369.640 335.872, 374.935 340.887, 378.956 342.004 C 381.032 342.581, 400.623 342.991, 426.250 342.994 L 470 343 470 240.500 L 470 138 425.250 138.039 C 390.090 138.070, 379.857 138.365, 377.500 139.417 M 189.300 154.862 C 174.296 160.047, 166.606 171.958, 165.324 192 C 165.025 196.675, 165.286 204.070, 165.906 208.434 C 166.630 213.544, 166.687 216.713, 166.064 217.336 C 163.129 220.271, 142.626 202.834, 130.885 187.416 C 126.373 181.493, 122.774 177.730, 121.254 177.349 C 115.517 175.909, 111.052 183.599, 105.271 204.874 C 101.805 217.626, 101.541 233.798, 104.669 241.632 C 107.459 248.618, 111.219 253.290, 117.079 257.050 C 127.088 263.473, 140.768 265.878, 156.564 263.992 C 162.512 263.282, 166.595 263.195, 167.165 263.765 C 168.725 265.325, 158.737 279.019, 149.805 287.566 C 145.237 291.937, 138.446 297.747, 134.714 300.476 C 127.573 305.698, 126.045 308.374, 127.626 312.890 C 128.368 315.012, 130.197 316.119, 137.412 318.812 C 142.293 320.633, 150.609 323.283, 155.893 324.700 C 183.713 332.160, 205.103 323.688, 211.563 302.651 C 213.682 295.752, 214.505 279.137, 213.154 270.520 C 212.488 266.265, 212.420 263.180, 212.982 262.618 C 214.443 261.157, 224.442 267.717, 233.096 275.813 C 237.395 279.835, 244.127 287.346, 248.056 292.505 C 255.502 302.282, 258.655 304.325, 262.840 302.086 C 265.306 300.766, 270.431 288.552, 273.754 276.074 C 277.292 262.791, 277.471 246.141, 274.167 237.823 C 271.692 231.596, 265.680 224.880, 260.051 222.056 C 250.441 217.234, 246.218 216.496, 228.750 216.588 C 215.942 216.655, 212 216.380, 212 215.421 C 212 214.732, 214.239 210.819, 216.976 206.727 C 222.525 198.431, 231.622 189.423, 243.850 180.114 C 251.118 174.581, 252 173.557, 252 170.646 C 252 168.851, 251.438 166.613, 250.750 165.673 C 249.210 163.567, 230 156.701, 219.689 154.571 C 209.396 152.445, 195.922 152.574, 189.300 154.862 M 197.326 168.034 C 192.342 169.032, 188.095 171.113, 185.868 173.648 C 180.958 179.238, 178.449 190.183, 179.484 201.500 L 180.124 208.500 189.562 208.500 C 194.753 208.500, 199 208.220, 199 207.878 C 199 205.268, 210.901 189.840, 219.122 181.794 L 229.038 172.087 225.019 171.044 C 215.943 168.687, 213.225 168.167, 207.500 167.694 C 204.200 167.422, 199.622 167.575, 197.326 168.034 M 391.051 168.758 C 387.768 171.416, 387.963 176.711, 391.454 179.714 L 394.222 182.095 419.577 181.797 C 447.406 181.471, 447.353 181.483, 448.589 175.303 C 449.103 172.736, 448.735 171.644, 446.657 169.566 L 444.091 167 418.656 167 C 395.880 167, 392.995 167.184, 391.051 168.758 M 119.562 205.296 C 118.703 208.158, 117.479 214.550, 116.842 219.500 C 115.831 227.365, 115.904 229.248, 117.423 234.430 C 120.871 246.195, 128.767 250.296, 146.985 249.786 L 157.208 249.500 157.354 240.272 L 157.500 231.045 152.709 228.437 C 145.231 224.368, 133.818 214.842, 127.177 207.126 L 121.123 200.092 119.562 205.296 M 392.664 200.682 C 389.995 201.405, 388.007 206.723, 389.164 210.042 C 390.752 214.595, 393.224 215, 419.436 215 C 441.730 215, 443.973 214.843, 446.089 213.129 C 448.943 210.818, 449.260 204.833, 446.666 202.236 C 445.121 200.689, 442.189 200.483, 419.716 200.342 C 405.847 200.256, 393.674 200.408, 392.664 200.682 M 182 223.121 C 178.806 224.391, 174.225 228.728, 172.411 232.200 C 170.357 236.131, 170.636 244.366, 172.977 248.956 C 178.101 258.999, 192.302 261.239, 201.004 253.378 C 210.435 244.857, 208.413 229.981, 196.991 223.855 C 193.243 221.846, 186.089 221.495, 182 223.121 M 221.408 240.371 L 221.500 249.973 228 253.737 C 231.921 256.007, 239.039 261.964, 245.937 268.750 C 252.227 274.938, 257.477 280, 257.604 280 C 257.730 280, 258.771 276.007, 259.917 271.126 C 263.416 256.220, 262.496 245.120, 257.245 238.879 C 252.698 233.475, 247.135 231.683, 233.408 231.197 L 221.315 230.769 221.408 240.371 M 392.828 234.136 C 388.057 235.883, 387.166 243.753, 391.423 246.542 C 393.323 247.786, 397.986 247.990, 419.493 247.767 L 445.286 247.500 447.249 244.870 C 450.148 240.985, 448.878 236.265, 444.432 234.407 C 440.430 232.735, 397.274 232.508, 392.828 234.136 M 391.051 267.758 C 388.089 270.156, 388 275.445, 390.874 278.318 C 393.004 280.448, 393.668 280.500, 418.992 280.500 C 447.521 280.500, 447.343 280.537, 448.589 274.303 C 449.103 271.736, 448.735 270.644, 446.657 268.566 L 444.091 266 418.656 266 C 395.880 266, 392.995 266.184, 391.051 267.758 M 177.285 277 C 172.760 284.795, 166.366 292.477, 157.493 300.779 L 148.907 308.812 157.827 310.906 C 174.959 314.928, 187.232 313.267, 193.253 306.111 C 197.020 301.634, 198.127 297.155, 198.715 284 L 199.229 272.500 189.563 272.500 L 179.897 272.500 177.285 277 M 392.043 300.273 C 387.384 302.631, 387.736 310.648, 392.597 312.862 C 394.245 313.613, 403.372 314, 419.436 314 C 441.730 314, 443.973 313.843, 446.089 312.129 C 449.300 309.529, 449.300 303.471, 446.089 300.871 C 443.970 299.155, 441.736 299.001, 419.139 299.015 C 401.509 299.025, 393.801 299.383, 392.043 300.273 M 68 417.519 L 68 426.038 90.630 425.769 L 113.260 425.500 117.721 417.250 L 122.182 409 95.091 409 L 68 409 68 417.519 M 395.230 417.500 L 399.446 426 421.723 426 L 444 426 444 417.500 L 444 409 417.507 409 L 391.015 409 395.230 417.500"
            stroke="none"
            fill="currentColor"
            fill-rule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className={`${styles.servicesContainer} container`}>
      {services.map((service, index) => (
        <div className={styles.serviceContent} key={index}>
          {service.icon}
          <p>{service.text}</p>
        </div>
      ))}
    </div>
  );
}
