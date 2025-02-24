import React from "react";
import RobotImage from "../../../assets/images/robot1.png";

const ComingSoon: React.FC = () => {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1408px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white font-nunito text-lg">Coming Soon</span>
          </div>

          <div className="w-full max-w-md relative h-2 bg-gray-700 rounded-full overflow-hidden">
            <svg
              width="1080"
              height="24"
              viewBox="0 0 1080 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_66_4573)">
                <rect width="1080" height="24" rx="12" fill="#252627" />
                <rect width="695" height="24" rx="12" fill="#21B6F8" />
                <path
                  d="M967.23 17.144C965.96 17.144 964.974 16.872 964.27 16.328C963.566 15.7733 963.214 15 963.214 14.008C963.214 13.4853 963.32 13.0213 963.534 12.616C963.747 12.2 964.046 11.864 964.43 11.608C964.814 11.352 965.256 11.192 965.758 11.128V11.368C965.299 11.2613 964.899 11.08 964.558 10.824C964.216 10.5573 963.95 10.232 963.758 9.848C963.576 9.464 963.486 9.04267 963.486 8.584C963.486 7.63467 963.822 6.89867 964.494 6.376C965.176 5.84267 966.088 5.576 967.23 5.576C968.382 5.576 969.294 5.84267 969.966 6.376C970.648 6.89867 970.99 7.63467 970.99 8.584C970.99 9.04267 970.894 9.46933 970.702 9.864C970.52 10.248 970.259 10.568 969.918 10.824C969.576 11.08 969.176 11.256 968.718 11.352V11.128C969.219 11.192 969.656 11.3573 970.03 11.624C970.414 11.88 970.712 12.2107 970.926 12.616C971.139 13.0213 971.246 13.4853 971.246 14.008C971.246 15 970.894 15.7733 970.19 16.328C969.486 16.872 968.499 17.144 967.23 17.144ZM967.23 16.056C968.136 16.056 968.819 15.88 969.278 15.528C969.747 15.176 969.982 14.6427 969.982 13.928C969.982 13.224 969.747 12.7013 969.278 12.36C968.819 12.008 968.136 11.832 967.23 11.832C966.334 11.832 965.651 12.008 965.182 12.36C964.712 12.7013 964.478 13.224 964.478 13.928C964.478 14.6427 964.712 15.176 965.182 15.528C965.651 15.88 966.334 16.056 967.23 16.056ZM967.23 10.744C968.019 10.744 968.632 10.5627 969.07 10.2C969.507 9.83733 969.726 9.336 969.726 8.696C969.726 8.056 969.507 7.56 969.07 7.208C968.632 6.84533 968.019 6.664 967.23 6.664C966.451 6.664 965.843 6.84533 965.406 7.208C964.968 7.56 964.75 8.056 964.75 8.696C964.75 9.336 964.968 9.83733 965.406 10.2C965.843 10.5627 966.451 10.744 967.23 10.744ZM977.323 17.144C976.47 17.144 975.745 16.9253 975.147 16.488C974.561 16.04 974.118 15.384 973.819 14.52C973.521 13.656 973.371 12.6 973.371 11.352C973.371 10.0933 973.521 9.03733 973.819 8.184C974.118 7.32 974.561 6.66933 975.147 6.232C975.745 5.79467 976.47 5.576 977.323 5.576C978.187 5.576 978.913 5.79467 979.499 6.232C980.086 6.66933 980.529 7.31467 980.827 8.168C981.126 9.02133 981.275 10.0773 981.275 11.336C981.275 12.5947 981.126 13.656 980.827 14.52C980.529 15.384 980.086 16.04 979.499 16.488C978.913 16.9253 978.187 17.144 977.323 17.144ZM977.323 16.008C978.219 16.008 978.881 15.6293 979.307 14.872C979.745 14.1147 979.963 12.936 979.963 11.336C979.963 9.736 979.75 8.568 979.323 7.832C978.897 7.08533 978.23 6.712 977.323 6.712C976.438 6.712 975.777 7.08533 975.339 7.832C974.902 8.57867 974.683 9.74667 974.683 11.336C974.683 12.936 974.897 14.1147 975.323 14.872C975.761 15.6293 976.427 16.008 977.323 16.008ZM987.193 17.4L986.281 16.872L992.921 5.32L993.817 5.848L987.193 17.4ZM986.233 12.488C985.668 12.488 985.177 12.3547 984.761 12.088C984.356 11.8107 984.047 11.416 983.833 10.904C983.62 10.3813 983.513 9.75733 983.513 9.032C983.513 7.944 983.753 7.10133 984.233 6.504C984.713 5.896 985.38 5.592 986.233 5.592C986.799 5.592 987.284 5.73067 987.689 6.008C988.095 6.27467 988.404 6.664 988.617 7.176C988.841 7.688 988.953 8.30667 988.953 9.032C988.953 9.75733 988.841 10.376 988.617 10.888C988.404 11.4 988.095 11.7947 987.689 12.072C987.284 12.3493 986.799 12.488 986.233 12.488ZM986.233 11.544C986.724 11.544 987.113 11.336 987.401 10.92C987.689 10.4933 987.833 9.864 987.833 9.032C987.833 8.2 987.689 7.576 987.401 7.16C987.113 6.744 986.724 6.536 986.233 6.536C985.732 6.536 985.337 6.744 985.049 7.16C984.772 7.576 984.633 8.2 984.633 9.032C984.633 9.864 984.772 10.4933 985.049 10.92C985.337 11.336 985.732 11.544 986.233 11.544ZM993.881 17.144C993.327 17.144 992.841 17.0107 992.425 16.744C992.02 16.4667 991.705 16.072 991.481 15.56C991.268 15.0373 991.161 14.4133 991.161 13.688C991.161 12.6 991.401 11.7573 991.881 11.16C992.372 10.552 993.039 10.248 993.881 10.248C994.447 10.248 994.932 10.3867 995.337 10.664C995.743 10.9307 996.052 11.32 996.265 11.832C996.489 12.344 996.601 12.9627 996.601 13.688C996.601 14.4133 996.495 15.0373 996.281 15.56C996.068 16.072 995.759 16.4667 995.353 16.744C994.948 17.0107 994.457 17.144 993.881 17.144ZM993.881 16.2C994.383 16.2 994.772 15.992 995.049 15.576C995.337 15.1493 995.481 14.52 995.481 13.688C995.481 12.856 995.337 12.232 995.049 11.816C994.772 11.4 994.383 11.192 993.881 11.192C993.391 11.192 993.001 11.4 992.713 11.816C992.436 12.232 992.297 12.856 992.297 13.688C992.297 14.5307 992.436 15.16 992.713 15.576C993.001 15.992 993.391 16.2 993.881 16.2ZM1008.87 17.144C1007.76 17.144 1006.81 16.9093 1006.03 16.44C1005.24 15.9707 1004.63 15.304 1004.2 14.44C1003.79 13.576 1003.58 12.5467 1003.58 11.352C1003.58 10.1573 1003.79 9.13333 1004.2 8.28C1004.63 7.416 1005.24 6.74933 1006.03 6.28C1006.81 5.81067 1007.76 5.576 1008.87 5.576C1009.65 5.576 1010.37 5.69867 1011.03 5.944C1011.69 6.18933 1012.25 6.54667 1012.7 7.016L1012.19 8.088C1011.69 7.62933 1011.18 7.29867 1010.65 7.096C1010.13 6.88267 1009.55 6.776 1008.91 6.776C1007.64 6.776 1006.67 7.176 1005.99 7.976C1005.32 8.776 1004.99 9.90133 1004.99 11.352C1004.99 12.8027 1005.32 13.9333 1005.99 14.744C1006.67 15.544 1007.64 15.944 1008.91 15.944C1009.55 15.944 1010.13 15.8427 1010.65 15.64C1011.18 15.4267 1011.69 15.0907 1012.19 14.632L1012.7 15.704C1012.25 16.1627 1011.69 16.52 1011.03 16.776C1010.37 17.0213 1009.65 17.144 1008.87 17.144ZM1017.75 17.144C1017 17.144 1016.34 16.9787 1015.78 16.648C1015.23 16.3173 1014.8 15.8533 1014.49 15.256C1014.19 14.648 1014.04 13.9333 1014.04 13.112C1014.04 12.2907 1014.19 11.5813 1014.49 10.984C1014.8 10.376 1015.23 9.90667 1015.78 9.576C1016.34 9.24533 1017 9.08 1017.75 9.08C1018.51 9.08 1019.17 9.24533 1019.72 9.576C1020.28 9.90667 1020.7 10.376 1021 10.984C1021.31 11.5813 1021.46 12.2907 1021.46 13.112C1021.46 13.9333 1021.31 14.648 1021 15.256C1020.7 15.8533 1020.28 16.3173 1019.72 16.648C1019.17 16.9787 1018.51 17.144 1017.75 17.144ZM1017.75 16.104C1018.49 16.104 1019.07 15.848 1019.5 15.336C1019.93 14.8133 1020.15 14.0667 1020.15 13.096C1020.15 12.136 1019.93 11.4 1019.5 10.888C1019.07 10.376 1018.49 10.12 1017.75 10.12C1017.03 10.12 1016.45 10.376 1016.01 10.888C1015.57 11.4 1015.35 12.136 1015.35 13.096C1015.35 14.0667 1015.57 14.8133 1016.01 15.336C1016.45 15.848 1017.03 16.104 1017.75 16.104ZM1023.94 17V9.224H1025.21V10.952H1025.03C1025.16 10.5573 1025.35 10.2213 1025.59 9.944C1025.85 9.656 1026.15 9.44267 1026.49 9.304C1026.84 9.15467 1027.22 9.08 1027.64 9.08C1028.3 9.08 1028.83 9.24 1029.24 9.56C1029.66 9.86933 1029.93 10.3547 1030.07 11.016H1029.83C1030.02 10.4187 1030.36 9.94933 1030.86 9.608C1031.36 9.256 1031.94 9.08 1032.6 9.08C1033.19 9.08 1033.67 9.192 1034.04 9.416C1034.42 9.64 1034.71 9.98133 1034.9 10.44C1035.1 10.888 1035.19 11.4587 1035.19 12.152V17H1033.9V12.216C1033.9 11.5013 1033.77 10.9787 1033.53 10.648C1033.28 10.3067 1032.87 10.136 1032.28 10.136C1031.86 10.136 1031.5 10.2373 1031.18 10.44C1030.87 10.6427 1030.63 10.9307 1030.46 11.304C1030.3 11.6667 1030.22 12.0987 1030.22 12.6V17H1028.92V12.216C1028.92 11.5013 1028.79 10.9787 1028.54 10.648C1028.29 10.3067 1027.88 10.136 1027.3 10.136C1026.88 10.136 1026.51 10.2373 1026.2 10.44C1025.89 10.6427 1025.65 10.9307 1025.48 11.304C1025.32 11.6667 1025.24 12.0987 1025.24 12.6V17H1023.94ZM1038.11 19.88V9.224H1039.38V11.064H1039.22C1039.39 10.456 1039.73 9.976 1040.23 9.624C1040.74 9.26133 1041.35 9.08 1042.05 9.08C1042.74 9.08 1043.35 9.24533 1043.86 9.576C1044.38 9.896 1044.78 10.36 1045.06 10.968C1045.35 11.5653 1045.49 12.28 1045.49 13.112C1045.49 13.9333 1045.35 14.648 1045.06 15.256C1044.78 15.8533 1044.39 16.3173 1043.87 16.648C1043.36 16.9787 1042.75 17.144 1042.05 17.144C1041.35 17.144 1040.74 16.968 1040.24 16.616C1039.74 16.2533 1039.4 15.7733 1039.22 15.176H1039.41V19.88H1038.11ZM1041.78 16.104C1042.51 16.104 1043.1 15.848 1043.52 15.336C1043.96 14.8133 1044.18 14.072 1044.18 13.112C1044.18 12.1413 1043.96 11.4 1043.52 10.888C1043.1 10.376 1042.51 10.12 1041.78 10.12C1041.05 10.12 1040.47 10.376 1040.03 10.888C1039.6 11.4 1039.38 12.1413 1039.38 13.112C1039.38 14.072 1039.6 14.8133 1040.03 15.336C1040.47 15.848 1041.05 16.104 1041.78 16.104ZM1050.33 17.144C1049.54 17.144 1048.94 16.9093 1048.53 16.44C1048.14 15.9707 1047.94 15.2987 1047.94 14.424V5.72H1049.24V14.328C1049.24 14.7013 1049.29 15.016 1049.38 15.272C1049.49 15.528 1049.64 15.72 1049.85 15.848C1050.05 15.976 1050.3 16.04 1050.6 16.04C1050.73 16.04 1050.85 16.0347 1050.97 16.024C1051.09 16.0027 1051.21 15.976 1051.32 15.944L1051.29 17.032C1051.12 17.064 1050.95 17.0907 1050.79 17.112C1050.64 17.1333 1050.49 17.144 1050.33 17.144ZM1056.6 17.144C1055.78 17.144 1055.07 16.984 1054.47 16.664C1053.89 16.3333 1053.43 15.8693 1053.1 15.272C1052.78 14.6747 1052.62 13.96 1052.62 13.128C1052.62 12.3173 1052.78 11.6133 1053.1 11.016C1053.42 10.408 1053.86 9.93333 1054.41 9.592C1054.98 9.25067 1055.63 9.08 1056.36 9.08C1057.07 9.08 1057.67 9.23467 1058.17 9.544C1058.67 9.85333 1059.06 10.2907 1059.32 10.856C1059.6 11.4213 1059.74 12.0987 1059.74 12.888V13.384H1053.61V12.536H1058.87L1058.62 12.744C1058.62 11.8907 1058.43 11.2293 1058.04 10.76C1057.67 10.28 1057.12 10.04 1056.39 10.04C1055.85 10.04 1055.39 10.168 1055 10.424C1054.63 10.6693 1054.35 11.016 1054.15 11.464C1053.96 11.9013 1053.87 12.4133 1053.87 13V13.096C1053.87 13.7467 1053.97 14.296 1054.17 14.744C1054.38 15.192 1054.7 15.5333 1055.11 15.768C1055.53 15.992 1056.03 16.104 1056.6 16.104C1057.06 16.104 1057.5 16.0347 1057.93 15.896C1058.37 15.7467 1058.78 15.5067 1059.16 15.176L1059.61 16.088C1059.26 16.408 1058.81 16.664 1058.27 16.856C1057.72 17.048 1057.17 17.144 1056.6 17.144ZM1065.23 17.144C1064.32 17.144 1063.63 16.8987 1063.17 16.408C1062.71 15.9173 1062.48 15.2187 1062.48 14.312V10.232H1060.96V9.224H1062.48V6.84H1063.78V9.224H1066.24V10.232H1063.78V14.184C1063.78 14.792 1063.91 15.256 1064.16 15.576C1064.42 15.8853 1064.83 16.04 1065.41 16.04C1065.58 16.04 1065.75 16.0187 1065.92 15.976C1066.09 15.9333 1066.25 15.8907 1066.39 15.848L1066.61 16.84C1066.47 16.9147 1066.27 16.984 1066 17.048C1065.74 17.112 1065.48 17.144 1065.23 17.144ZM1071.63 17.144C1070.81 17.144 1070.1 16.984 1069.51 16.664C1068.92 16.3333 1068.46 15.8693 1068.13 15.272C1067.81 14.6747 1067.65 13.96 1067.65 13.128C1067.65 12.3173 1067.81 11.6133 1068.13 11.016C1068.45 10.408 1068.89 9.93333 1069.44 9.592C1070.01 9.25067 1070.66 9.08 1071.39 9.08C1072.1 9.08 1072.7 9.23467 1073.2 9.544C1073.7 9.85333 1074.09 10.2907 1074.35 10.856C1074.63 11.4213 1074.77 12.0987 1074.77 12.888V13.384H1068.64V12.536H1073.91L1073.65 12.744C1073.65 11.8907 1073.46 11.2293 1073.07 10.76C1072.7 10.28 1072.15 10.04 1071.43 10.04C1070.88 10.04 1070.42 10.168 1070.03 10.424C1069.66 10.6693 1069.38 11.016 1069.19 11.464C1068.99 11.9013 1068.9 12.4133 1068.9 13V13.096C1068.9 13.7467 1069 14.296 1069.2 14.744C1069.42 15.192 1069.73 15.5333 1070.15 15.768C1070.56 15.992 1071.06 16.104 1071.63 16.104C1072.09 16.104 1072.54 16.0347 1072.96 15.896C1073.4 15.7467 1073.81 15.5067 1074.19 15.176L1074.64 16.088C1074.29 16.408 1073.84 16.664 1073.3 16.856C1072.75 17.048 1072.2 17.144 1071.63 17.144ZM1077.35 14.056L1076.95 5.72H1078.55L1078.15 14.056H1077.35ZM1076.94 17V15.368H1078.57V17H1076.94Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_66_4573">
                  <rect width="1080" height="24" rx="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex flex-row lg:flex-row items-center justify-between gap-6 lg:gap-16">
          <div className="w-2/5 lg:flex-1 flex justify-center lg:justify-end">
            <img
              src={RobotImage}
              alt="AI Tutor Robot"
              className="w-full max-w-[180px] sm:max-w-[350px] lg:max-w-[400px] object-contain"
            />
          </div>

          <div className="w-3/5 lg:flex-1 lg:max-w-[594px] text-left lg:text-left">
            <h3 className="font-nunito font-bold text-[20px] sm:text-[32px] lg:text-[36px] leading-tight sm:leading-[44px] text-white mb-3 sm:mb-6">
              Personalized AI Tutoring
              <br className="hidden sm:block" />
            </h3>

            <p className="font-nunito font-normal text-[14px] sm:text-[20px] lg:text-[24px] leading-[20px] sm:leading-[32px] text-white/90">
              An AI tutor for every student, that would make learning and
              assessment more engaging and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
