type Props = {
  isSel: boolean;
};
export const AppointmentIcon = ({ isSel }: Props) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.14286 0V11.0345M25.8571 0V11.0345M7.03571 16.5517H13.6786M26.9643 16.5517H20.3214M7.03571 23.1724H13.6786M20.3214 23.1724H26.9643M3.71429 5.51724H30.2857C30.873 5.51724 31.4362 5.74975 31.8514 6.16363C32.2667 6.5775 32.5 7.13883 32.5 7.72414V29.7931C32.5 30.3784 32.2667 30.9397 31.8514 31.3536C31.4362 31.7675 30.873 32 30.2857 32H3.71429C3.12702 32 2.56381 31.7675 2.14855 31.3536C1.73329 30.9397 1.5 30.3784 1.5 29.7931V7.72414C1.5 7.13883 1.73329 6.5775 2.14855 6.16363C2.56381 5.74975 3.12702 5.51724 3.71429 5.51724V5.51724Z"
        stroke={isSel ? "#FF9E2A" : "#011627"}
        stroke-width="3"
      />
    </svg>
  );
};

export const HomeIcon = ({ isSel }: Props) => {
  return (
    <svg
      width="33"
      height="30"
      viewBox="0 0 33 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.8364 14.7592L18.1978 1.22811L17.2836 0.320671C17.0754 0.115276 16.7937 0 16.5001 0C16.2065 0 15.9248 0.115276 15.7165 0.320671L1.16372 14.7592C0.950287 14.9702 0.781606 15.2215 0.667636 15.4984C0.553666 15.7752 0.496715 16.0718 0.500146 16.3708C0.514265 17.6041 1.54845 18.5886 2.79089 18.5886H4.29099V30H28.7091V18.5886H30.241C30.8446 18.5886 31.4128 18.3539 31.8399 17.93C32.0502 17.7219 32.2169 17.4745 32.3302 17.202C32.4434 16.9296 32.5012 16.6375 32.5 16.3428C32.5 15.7472 32.2635 15.1831 31.8364 14.7592V14.7592ZM18.4767 27.4774H14.5235V20.33H18.4767V27.4774ZM26.1678 16.066V27.4774H20.7356V19.4891C20.7356 18.7148 20.1038 18.0876 19.3238 18.0876H13.6763C12.8963 18.0876 12.2645 18.7148 12.2645 19.4891V27.4774H6.83234V16.066H3.44388L16.5036 3.11307L17.3189 3.92241L29.5598 16.066H26.1678Z"
        fill={isSel ? "#FF9E2A" : "#011627"}
      />
    </svg>
  );
};

export const MyHealthIcon = ({ isSel }: Props) => {
  return (
    <svg
      width="36"
      height="30"
      viewBox="0 0 36 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 0.914673H4C2.075 0.914673 0.5 2.49928 0.5 4.43601V9.71803H4V4.43601H32V9.71803H35.5V4.43601C35.5 2.49928 33.925 0.914673 32 0.914673ZM32 25.5641H4V20.2821H0.5V25.5641C0.5 27.5008 2.075 29.0854 4 29.0854H32C33.925 29.0854 35.5 27.5008 35.5 25.5641V20.2821H32V25.5641Z"
        fill={isSel ? "#FF9E2A" : "#011627"}
      />
      <path
        d="M23.0575 6.95456C22.4625 5.73064 20.52 5.73064 19.925 6.95456L14.5 18.1318L12.5575 14.1541C12.414 13.8557 12.192 13.6047 11.9166 13.4297C11.6413 13.2547 11.3237 13.1627 11 13.1642H0.5V16.7639H9.915L12.925 22.9735C13.24 23.5855 13.835 23.9634 14.5 23.9634C15.165 23.9634 15.76 23.5855 16.0575 22.9735L21.5 11.7962L23.4425 15.774C23.74 16.3859 24.335 16.7639 25 16.7639H35.5V13.1642H26.085L23.0575 6.95456Z"
        fill={isSel ? "#FF9E2A" : "#011627"}
      />
    </svg>
  );
};

export const PerscriptionsIcon = ({ isSel }: Props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.3242 22.1065C14.5674 21.8629 14.7038 21.5328 14.7036 21.1886C14.7034 20.8444 14.5664 20.5144 14.3229 20.2712C14.0793 20.028 13.7491 19.8915 13.4049 19.8917C13.0608 19.892 12.7308 20.0289 12.4876 20.2725L8.59649 24.1636C8.35329 24.4071 8.21679 24.7373 8.21704 25.0815C8.21728 25.4257 8.35424 25.7557 8.59779 25.9989C8.84133 26.2421 9.17152 26.3786 9.5157 26.3783C9.85988 26.3781 10.1899 26.2411 10.4331 25.9976L14.3242 22.1065ZM28.8404 3.15956C27.9974 2.31638 26.9964 1.64753 25.8948 1.1912C24.7932 0.734871 23.6125 0.5 22.4202 0.5C21.2278 0.5 20.0471 0.734871 18.9455 1.1912C17.8439 1.64753 16.843 2.31638 15.9999 3.15956L3.15936 16.0001C1.4566 17.7029 0.5 20.0123 0.5 22.4204C0.5 24.8284 1.4566 27.1379 3.15936 28.8406C4.86212 30.5434 7.17157 31.5 9.57963 31.5C11.9877 31.5 14.2971 30.5434 15.9999 28.8406L28.8404 16.0001C29.6836 15.157 30.3525 14.1561 30.8088 13.0545C31.2651 11.9529 31.5 10.7722 31.5 9.57983C31.5 8.38745 31.2651 7.20676 30.8088 6.10516C30.3525 5.00357 29.6836 4.00265 28.8404 3.15956ZM10.4979 12.3321L19.6679 21.5047L14.1685 27.004C12.9507 28.2116 11.3041 28.8876 9.58902 28.8841C7.87398 28.8806 6.23016 28.1979 5.01727 26.9853C3.80438 25.7728 3.12119 24.1291 3.11719 22.4141C3.1132 20.6991 3.78872 19.0523 4.99595 17.8341L10.4953 12.3321H10.4979ZM27.0065 14.1661L21.5045 19.6681L12.3319 10.5007L17.8339 4.99874C18.435 4.39213 19.1501 3.91023 19.938 3.5807C20.7259 3.25118 21.5711 3.08053 22.4251 3.07854C23.2792 3.07655 24.1252 3.24326 24.9146 3.56911C25.704 3.89495 26.4213 4.37352 27.0253 4.97732C27.6292 5.58112 28.108 6.29827 28.4341 7.0876C28.7601 7.87693 28.9271 8.72289 28.9254 9.57692C28.9236 10.4309 28.7532 11.2762 28.4239 12.0642C28.0946 12.8522 27.6129 13.5674 27.0065 14.1687V14.1661Z"
        fill={isSel ? "#FF9E2A" : "#011627"}
      />
    </svg>
  );
};

export const SettingsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.675 14.6649L20.1398 13.3524C20.2125 12.9071 20.25 12.4524 20.25 11.9978C20.25 11.5431 20.2125 11.0884 20.1398 10.6431L21.675 9.33057C21.7908 9.23144 21.8737 9.09942 21.9126 8.95205C21.9515 8.80468 21.9447 8.64895 21.893 8.50557L21.8719 8.44463C21.4492 7.26344 20.8164 6.16846 20.0039 5.2126L19.9617 5.16338C19.8631 5.04749 19.7318 4.96418 19.5849 4.92443C19.4381 4.88468 19.2826 4.89036 19.1391 4.94072L17.2336 5.61807C16.5305 5.0415 15.7453 4.58682 14.8969 4.26807L14.5289 2.27588C14.5011 2.12598 14.4284 1.98807 14.3204 1.88048C14.2124 1.77289 14.0742 1.70071 13.9242 1.67354L13.8609 1.66182C12.6398 1.4415 11.3555 1.4415 10.1344 1.66182L10.0711 1.67354C9.92108 1.70071 9.78289 1.77289 9.67488 1.88048C9.56688 1.98807 9.49416 2.12598 9.4664 2.27588L9.09609 4.27744C8.25442 4.59626 7.47062 5.0507 6.77577 5.62275L4.85624 4.94072C4.71273 4.88996 4.55716 4.88408 4.41022 4.92385C4.26327 4.96362 4.13191 5.04716 4.03359 5.16338L3.9914 5.2126C3.17987 6.16914 2.54712 7.26393 2.12343 8.44463L2.10234 8.50557C1.99687 8.79854 2.08359 9.12666 2.32031 9.33057L3.87421 10.6571C3.80156 11.0978 3.7664 11.5478 3.7664 11.9954C3.7664 12.4454 3.80156 12.8954 3.87421 13.3337L2.32031 14.6603C2.20451 14.7594 2.12164 14.8914 2.0827 15.0388C2.04377 15.1861 2.05062 15.3419 2.10234 15.4853L2.12343 15.5462C2.54765 16.7274 3.17577 17.8173 3.9914 18.7782L4.03359 18.8274C4.13215 18.9433 4.26352 19.0266 4.41037 19.0664C4.55723 19.1061 4.71268 19.1005 4.85624 19.0501L6.77577 18.3681C7.47421 18.9423 8.25468 19.397 9.09609 19.7134L9.4664 21.7149C9.49416 21.8648 9.56688 22.0028 9.67488 22.1103C9.78289 22.2179 9.92108 22.2901 10.0711 22.3173L10.1344 22.329C11.3667 22.5505 12.6286 22.5505 13.8609 22.329L13.9242 22.3173C14.0742 22.2901 14.2124 22.2179 14.3204 22.1103C14.4284 22.0028 14.5011 21.8648 14.5289 21.7149L14.8969 19.7228C15.745 19.4048 16.5346 18.9487 17.2336 18.3728L19.1391 19.0501C19.2826 19.1009 19.4381 19.1067 19.5851 19.067C19.732 19.0272 19.8634 18.9437 19.9617 18.8274L20.0039 18.7782C20.8195 17.8149 21.4477 16.7274 21.8719 15.5462L21.893 15.4853C21.9984 15.197 21.9117 14.8688 21.675 14.6649ZM18.4758 10.9196C18.5344 11.2735 18.5648 11.6368 18.5648 12.0001C18.5648 12.3634 18.5344 12.7267 18.4758 13.0806L18.3211 14.0204L20.0719 15.5181C19.8065 16.1295 19.4714 16.7083 19.0734 17.2431L16.8984 16.472L16.1625 17.0767C15.6023 17.536 14.9789 17.897 14.3039 18.1501L13.4109 18.4853L12.9914 20.7587C12.3295 20.8337 11.6612 20.8337 10.9992 20.7587L10.5797 18.4806L9.69374 18.1407C9.02577 17.8876 8.40468 17.5267 7.84921 17.0696L7.11327 16.4626L4.92421 17.2407C4.52577 16.704 4.19296 16.1251 3.92577 15.5157L5.69531 14.004L5.54296 13.0665C5.48671 12.7173 5.45624 12.3563 5.45624 12.0001C5.45624 11.6415 5.48437 11.2829 5.54296 10.9337L5.69531 9.99619L3.92577 8.48447C4.19062 7.87275 4.52577 7.29619 4.92421 6.75947L7.11327 7.5376L7.84921 6.93057C8.40468 6.47354 9.02577 6.1126 9.69374 5.85947L10.582 5.52432L11.0016 3.24619C11.6601 3.17119 12.3328 3.17119 12.9937 3.24619L13.4133 5.51963L14.3062 5.85479C14.9789 6.10791 15.6047 6.46885 16.1648 6.92822L16.9008 7.53291L19.0758 6.76182C19.4742 7.29854 19.807 7.87744 20.0742 8.48682L18.3234 9.98447L18.4758 10.9196ZM12 7.64072C9.72187 7.64072 7.87499 9.4876 7.87499 11.7657C7.87499 14.0438 9.72187 15.8907 12 15.8907C14.2781 15.8907 16.125 14.0438 16.125 11.7657C16.125 9.4876 14.2781 7.64072 12 7.64072ZM13.8562 13.622C13.6128 13.8661 13.3234 14.0598 13.0049 14.1917C12.6863 14.3236 12.3448 14.3913 12 14.3907C11.2992 14.3907 10.6406 14.1165 10.1437 13.622C9.89958 13.3785 9.70596 13.0892 9.57403 12.7706C9.4421 12.452 9.37446 12.1105 9.37499 11.7657C9.37499 11.0649 9.64921 10.4063 10.1437 9.90947C10.6406 9.4126 11.2992 9.14072 12 9.14072C12.7008 9.14072 13.3594 9.4126 13.8562 9.90947C14.1004 10.1529 14.294 10.4423 14.426 10.7608C14.5579 11.0794 14.6255 11.4209 14.625 11.7657C14.625 12.4665 14.3508 13.1251 13.8562 13.622Z"
      fill="#011627"
    />
  </svg>
);

export const DownGood = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0V11.3333C0 11.5101 0.0702379 11.6797 0.195262 11.8047C0.320286 11.9298 0.489856 12 0.666667 12H12V10.6667H1.33333V0H0Z"
      fill="#38BA9B"
    />
    <path
      d="M6.27604 7.276C6.21418 7.33796 6.14071 7.38712 6.05984 7.42066C5.97896 7.4542 5.89226 7.47147 5.80471 7.47147C5.71715 7.47147 5.63046 7.4542 5.54958 7.42066C5.4687 7.38712 5.39523 7.33796 5.33337 7.276L2.00004 3.94267L2.94271 3L5.80471 5.862L7.33338 4.33333C7.39523 4.27137 7.4687 4.22221 7.54958 4.18867C7.63046 4.15513 7.71715 4.13787 7.80471 4.13787C7.89226 4.13787 7.97896 4.15513 8.05984 4.18867C8.14071 4.22221 8.21418 4.27137 8.27604 4.33333L11.6094 7.66667L10.6667 8.60933L7.80471 5.74733L6.27604 7.276Z"
      fill="#38BA9B"
    />
  </svg>
);

export const UpBad = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0V11.3333C0 11.5101 0.0702379 11.6797 0.195262 11.8047C0.320286 11.9298 0.489856 12 0.666667 12H12V10.6667H1.33333V0H0Z"
      fill="#F0466E"
    />
    <path
      d="M7.33333 7.276C7.39519 7.33796 7.46866 7.38712 7.54954 7.42066C7.63041 7.4542 7.71711 7.47147 7.80467 7.47147C7.89222 7.47147 7.97892 7.4542 8.05979 7.42066C8.14067 7.38712 8.21414 7.33796 8.276 7.276L11.6093 3.94267L10.6667 3L7.80467 5.862L6.276 4.33333C6.21414 4.27137 6.14067 4.22221 6.0598 4.18867C5.97892 4.15513 5.89222 4.13787 5.80467 4.13787C5.71711 4.13787 5.63041 4.15513 5.54954 4.18867C5.46866 4.22221 5.39519 4.27137 5.33333 4.33333L2 7.66667L2.94267 8.60933L5.80467 5.74733L7.33333 7.276Z"
      fill="#F0466E"
    />
  </svg>
);

export const Neutral = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0V11.3333C0 11.5101 0.0702379 11.6797 0.195262 11.8047C0.320286 11.9298 0.489856 12 0.666667 12H12V10.6667H1.33333V0H0Z"
      fill="#F2C94C"
    />
    <line x1="2" y1="5.5" x2="12" y2="5.5" stroke="#F2C94C" />
  </svg>
);
