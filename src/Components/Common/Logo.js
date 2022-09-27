import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link
      to={'/'}
      className={{ width: '8rem', marginRight: 'auto', display: 'flex', flexShrink: '0' }}
    >
      <svg
        width='8rem'
        height='64'
        viewBox='0 0 101 54'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5.03605 46.8547C4.26132 46.8547 3.56518 46.72 2.94763 46.4505C2.34132 46.1698 1.86412 45.788 1.51605 45.3052C1.16798 44.8112 0.988333 44.2442 0.977105 43.6042H2.61079C2.66693 44.1544 2.89149 44.6203 3.28447 45.0021C3.68868 45.3726 4.27254 45.5579 5.03605 45.5579C5.76588 45.5579 6.33851 45.3782 6.75395 45.0189C7.18061 44.6484 7.39395 44.1768 7.39395 43.6042C7.39395 43.1551 7.27044 42.7901 7.02342 42.5094C6.7764 42.2287 6.46763 42.0154 6.09711 41.8694C5.72658 41.7235 5.22693 41.5663 4.59816 41.3979C3.82342 41.1958 3.20026 40.9937 2.72868 40.7916C2.26833 40.5894 1.86974 40.2751 1.53289 39.8484C1.20728 39.4105 1.04447 38.8266 1.04447 38.0968C1.04447 37.4568 1.20728 36.8898 1.53289 36.3958C1.85851 35.9017 2.31325 35.52 2.89711 35.2505C3.49219 34.981 4.17149 34.8463 4.935 34.8463C6.03535 34.8463 6.9336 35.1214 7.62974 35.6716C8.33711 36.2217 8.7357 36.9516 8.82553 37.861H7.14132C7.08518 37.4119 6.84939 37.0189 6.43395 36.6821C6.01851 36.334 5.46833 36.16 4.78342 36.16C4.14342 36.16 3.62132 36.3284 3.21711 36.6652C2.81289 36.9909 2.61079 37.4512 2.61079 38.0463C2.61079 38.473 2.72868 38.821 2.96447 39.0905C3.21149 39.36 3.50904 39.5677 3.85711 39.7137C4.2164 39.8484 4.71605 40.0056 5.35605 40.1852C6.13079 40.3986 6.75395 40.6119 7.22553 40.8252C7.69711 41.0273 8.10132 41.3473 8.43816 41.7852C8.775 42.2119 8.94342 42.7958 8.94342 43.5368C8.94342 44.1094 8.79184 44.6484 8.48868 45.1537C8.18553 45.6589 7.7364 46.0687 7.14132 46.3831C6.54623 46.6975 5.84447 46.8547 5.03605 46.8547ZM16.2683 46.8547C15.1792 46.8547 14.1855 46.6021 13.2872 46.0968C12.389 45.5803 11.676 44.8673 11.1483 43.9579C10.6318 43.0372 10.3736 42.0042 10.3736 40.8589C10.3736 39.7137 10.6318 38.6863 11.1483 37.7768C11.676 36.8561 12.389 36.1431 13.2872 35.6379C14.1855 35.1214 15.1792 34.8631 16.2683 34.8631C17.3686 34.8631 18.3679 35.1214 19.2662 35.6379C20.1644 36.1431 20.8718 36.8505 21.3883 37.76C21.9048 38.6694 22.163 39.7024 22.163 40.8589C22.163 42.0154 21.9048 43.0484 21.3883 43.9579C20.8718 44.8673 20.1644 45.5803 19.2662 46.0968C18.3679 46.6021 17.3686 46.8547 16.2683 46.8547ZM16.2683 45.5242C17.0879 45.5242 17.8234 45.3333 18.4746 44.9516C19.1371 44.5698 19.6536 44.0252 20.0241 43.3179C20.4058 42.6105 20.5967 41.7909 20.5967 40.8589C20.5967 39.9158 20.4058 39.0961 20.0241 38.4C19.6536 37.6926 19.1427 37.148 18.4914 36.7663C17.8402 36.3845 17.0992 36.1937 16.2683 36.1937C15.4374 36.1937 14.6964 36.3845 14.0451 36.7663C13.3939 37.148 12.8774 37.6926 12.4957 38.4C12.1251 39.0961 11.9399 39.9158 11.9399 40.8589C11.9399 41.7909 12.1251 42.6105 12.4957 43.3179C12.8774 44.0252 13.3939 44.5698 14.0451 44.9516C14.7076 45.3333 15.4486 45.5242 16.2683 45.5242ZM35.8411 35.0821V46.7368H34.3084V38.0463L30.4347 46.7368H29.3568L25.4663 38.0294V46.7368H23.9337V35.0821H25.5842L29.8958 44.7158L34.2074 35.0821H35.8411ZM43.5097 46.8547C42.4206 46.8547 41.4269 46.6021 40.5287 46.0968C39.6304 45.5803 38.9175 44.8673 38.3897 43.9579C37.8732 43.0372 37.615 42.0042 37.615 40.8589C37.615 39.7137 37.8732 38.6863 38.3897 37.7768C38.9175 36.8561 39.6304 36.1431 40.5287 35.6379C41.4269 35.1214 42.4206 34.8631 43.5097 34.8631C44.6101 34.8631 45.6094 35.1214 46.5076 35.6379C47.4059 36.1431 48.1132 36.8505 48.6297 37.76C49.1462 38.6694 49.4045 39.7024 49.4045 40.8589C49.4045 42.0154 49.1462 43.0484 48.6297 43.9579C48.1132 44.8673 47.4059 45.5803 46.5076 46.0968C45.6094 46.6021 44.6101 46.8547 43.5097 46.8547ZM43.5097 45.5242C44.3294 45.5242 45.0648 45.3333 45.7161 44.9516C46.3785 44.5698 46.895 44.0252 47.2655 43.3179C47.6473 42.6105 47.8382 41.7909 47.8382 40.8589C47.8382 39.9158 47.6473 39.0961 47.2655 38.4C46.895 37.6926 46.3841 37.148 45.7329 36.7663C45.0817 36.3845 44.3406 36.1937 43.5097 36.1937C42.6789 36.1937 41.9378 36.3845 41.2866 36.7663C40.6354 37.148 40.1189 37.6926 39.7371 38.4C39.3666 39.0961 39.1813 39.9158 39.1813 40.8589C39.1813 41.7909 39.3666 42.6105 39.7371 43.3179C40.1189 44.0252 40.6354 44.5698 41.2866 44.9516C41.949 45.3333 42.6901 45.5242 43.5097 45.5242ZM54.8972 46.8547C54.1225 46.8547 53.4264 46.72 52.8088 46.4505C52.2025 46.1698 51.7253 45.788 51.3772 45.3052C51.0292 44.8112 50.8495 44.2442 50.8383 43.6042H52.472C52.5281 44.1544 52.7527 44.6203 53.1457 45.0021C53.5499 45.3726 54.1337 45.5579 54.8972 45.5579C55.6271 45.5579 56.1997 45.3782 56.6151 45.0189C57.0418 44.6484 57.2551 44.1768 57.2551 43.6042C57.2551 43.1551 57.1316 42.7901 56.8846 42.5094C56.6376 42.2287 56.3288 42.0154 55.9583 41.8694C55.5878 41.7235 55.0881 41.5663 54.4593 41.3979C53.6846 41.1958 53.0615 40.9937 52.5899 40.7916C52.1295 40.5894 51.7309 40.2751 51.3941 39.8484C51.0685 39.4105 50.9057 38.8266 50.9057 38.0968C50.9057 37.4568 51.0685 36.8898 51.3941 36.3958C51.7197 35.9017 52.1744 35.52 52.7583 35.2505C53.3534 34.981 54.0327 34.8463 54.7962 34.8463C55.8965 34.8463 56.7948 35.1214 57.4909 35.6716C58.1983 36.2217 58.5969 36.9516 58.6867 37.861H57.0025C56.9464 37.4119 56.7106 37.0189 56.2951 36.6821C55.8797 36.334 55.3295 36.16 54.6446 36.16C54.0046 36.16 53.4825 36.3284 53.0783 36.6652C52.6741 36.9909 52.472 37.4512 52.472 38.0463C52.472 38.473 52.5899 38.821 52.8257 39.0905C53.0727 39.36 53.3702 39.5677 53.7183 39.7137C54.0776 39.8484 54.5772 40.0056 55.2172 40.1852C55.992 40.3986 56.6151 40.6119 57.0867 40.8252C57.5583 41.0273 57.9625 41.3473 58.2993 41.7852C58.6362 42.2119 58.8046 42.7958 58.8046 43.5368C58.8046 44.1094 58.653 44.6484 58.3499 45.1537C58.0467 45.6589 57.5976 46.0687 57.0025 46.3831C56.4074 46.6975 55.7057 46.8547 54.8972 46.8547ZM76.9522 35.0821V46.7368H75.4196V38.0463L71.5459 46.7368H70.468L66.5775 38.0294V46.7368H65.0449V35.0821H66.6954L71.007 44.7158L75.3186 35.0821H76.9522ZM86.2378 44.1263H81.1178L80.1746 46.7368H78.5578L82.802 35.0652H84.5704L88.7978 46.7368H87.1809L86.2378 44.1263ZM85.7999 42.88L83.6778 36.9516L81.5557 42.88H85.7999ZM94.117 46.8547C93.3422 46.8547 92.6461 46.72 92.0286 46.4505C91.4222 46.1698 90.945 45.788 90.597 45.3052C90.2489 44.8112 90.0693 44.2442 90.058 43.6042H91.6917C91.7479 44.1544 91.9724 44.6203 92.3654 45.0021C92.7696 45.3726 93.3535 45.5579 94.117 45.5579C94.8468 45.5579 95.4194 45.3782 95.8349 45.0189C96.2615 44.6484 96.4749 44.1768 96.4749 43.6042C96.4749 43.1551 96.3514 42.7901 96.1043 42.5094C95.8573 42.2287 95.5486 42.0154 95.178 41.8694C94.8075 41.7235 94.3079 41.5663 93.6791 41.3979C92.9043 41.1958 92.2812 40.9937 91.8096 40.7916C91.3493 40.5894 90.9507 40.2751 90.6138 39.8484C90.2882 39.4105 90.1254 38.8266 90.1254 38.0968C90.1254 37.4568 90.2882 36.8898 90.6138 36.3958C90.9394 35.9017 91.3942 35.52 91.978 35.2505C92.5731 34.981 93.2524 34.8463 94.0159 34.8463C95.1163 34.8463 96.0145 35.1214 96.7107 35.6716C97.418 36.2217 97.8166 36.9516 97.9065 37.861H96.2222C96.1661 37.4119 95.9303 37.0189 95.5149 36.6821C95.0994 36.334 94.5493 36.16 93.8643 36.16C93.2243 36.16 92.7022 36.3284 92.298 36.6652C91.8938 36.9909 91.6917 37.4512 91.6917 38.0463C91.6917 38.473 91.8096 38.821 92.0454 39.0905C92.2924 39.36 92.59 39.5677 92.938 39.7137C93.2973 39.8484 93.797 40.0056 94.437 40.1852C95.2117 40.3986 95.8349 40.6119 96.3065 40.8252C96.778 41.0273 97.1822 41.3473 97.5191 41.7852C97.8559 42.2119 98.0243 42.7958 98.0243 43.5368C98.0243 44.1094 97.8728 44.6484 97.5696 45.1537C97.2665 45.6589 96.8173 46.0687 96.2222 46.3831C95.6272 46.6975 94.9254 46.8547 94.117 46.8547Z'
          fill='black'
        />
        <rect x='35.7896' y='4.31592' width='27.7895' height='27.7895' fill='#FAFF00' />
        <path d='M19.5791 4.31592L35.6233 32.1054H3.53479L19.5791 4.31592Z' fill='#FF0000' />
        <circle cx='77.6843' cy='18.2107' r='13.8947' fill='#0038FF' />
        <line
          x1='86.7962'
          y1='1.15312'
          x2='100.48'
          y2='31.6794'
          stroke='white'
          strokeWidth='1.05263'
        />
      </svg>
    </Link>
  )
}
