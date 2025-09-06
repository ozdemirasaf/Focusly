import React from "react";
import DayScreen from "../../features/DayScreens/Components/DayScreen";

export default function Days(props: any) {
    console.log(props);

    return <DayScreen {...props} />;
}
