import * as React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { observer } from "mobx-react";
import { IDetailModel } from "./Detail_model";
import Navbar from "../../components/Navbar";
import Action from "../../components/Action";
import SvgPlay from "../../components/svg/Play";
import Card from "../../components/Card";
import BackButton from "../../components/Button/BackButton";
import Loader from "../../components/Loader/Loader";

interface IDetailProps {
    model: IDetailModel;
}

const Detail: React.FunctionComponent<IDetailProps> = observer((props) => {
    const { movie } = props.model;

    if (!movie) return <Loader />;

    const title = (
        <>
            {<BackButton onClick={props.model.goBack} />}
            <span>{movie.title}</span>
        </>
    );

    return (
        <>
            <Navbar title={title} className="navbar--detail-page" />
            <div className="content__wrapper content__wrapper--detail-page">
                <div className="detail__banner" style={{ backgroundImage: `url(${movie.snapshot})` }}>
                    <div className="detail__info">
                        <Action href={`/streams/movie/${movie.id}`}>
                            <div className="action__button__wrapper">
                                <SvgPlay width="52px" height="52px" fill="#fff" />
                            </div>
                            <span className="action__label">Trailer</span>
                        </Action>

                        <h1 className="detail__title">{movie.title}</h1>
                    </div>
                </div>
                <div className="detail__content">
                    <div className="detail__content__main">
                        <Card>
                            <div className="detail__content__plot">{movie.plot}</div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
});

export default Detail;
