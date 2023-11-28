import React from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./success.json";

export const Lotties = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
    };

    const { View } = useLottie(options);

    return <div className="w-full flex justify-center items-center">
        {View}
    </div>;
};
