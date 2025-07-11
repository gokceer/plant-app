import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const ProfileIcon = (props: SvgProps) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <Path
        d="M12.952 11.772c2.384 0 4.456-2.002 4.456-4.61a4.456 4.456 0 00-4.456-4.483c-2.384 0-4.456 1.95-4.456 4.505 0 2.586 2.06 4.588 4.456 4.588zm-7.475 9.657h14.94c1.191 0 1.904-.522 1.904-1.387 0-2.69-3.598-6.403-9.38-6.403-5.771 0-9.37 3.712-9.37 6.403 0 .865.714 1.387 1.906 1.387z"
        fill={props.color || "#BDBDBD"}
      />
    </Svg>
  );
};

export default ProfileIcon;
