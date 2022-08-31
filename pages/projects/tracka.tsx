import React from "react";
import { InnerProjectLayout } from "../../components/innerProjectLayout";
import TrackaBanner from "../../images/InnerProjectImgs/trackabanner.png";

const Tracka = () => {
  return <InnerProjectLayout 
        image={TrackaBanner}
        buttonColor={"white"}
        buttonBorder={"solid 0.5px white"}
        description={'Hangry is an application for cooking enthusiast as well as for casual users where you can browse all kinds of recipes added by other users if you dont know what you want to eat for breakfast, lunch or dinner. You can give star if you like the recipe which adds it to your favorite and increases the popularity of the recipe. The application also has shopping list feature where you can write down all of the ingredients that you need for choosen recipe'}
        
        />;
};

export default Tracka;
