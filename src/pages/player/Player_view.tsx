import * as React from "react";
import { IPlayerModel } from "./Player_model";
import { observer } from "mobx-react";
import BackButton from "../../components/Button/BackButton";
import Loader from "../../components/Loader/Loader";

export interface IPlayerProps {
    model: IPlayerModel;
}

const Player: React.FunctionComponent<IPlayerProps> = observer((props) => {
    const { video } = props.model;

    if (!video) return <Loader />;
    return (
        <div className="video">
            <BackButton className="video__back__wrapper" onClick={props.model.goBack} title={"Go back"} />
            <video className="video__player" src={video.url} autoPlay controls />
        </div>
    );
});

export default Player;
