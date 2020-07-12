import * as React from "react";
import { IHomeModel } from "./Home_model";
import Section from "../../components/Section";
import { observer } from "mobx-react";
import Navbar from "../../components/Navbar";
import SvgRakutenLogo from "../../components/svg/RakutenLogo";
import Loader from "../../components/Loader/Loader";

export interface IHome {
    model: IHomeModel;
}

const Home: React.FunctionComponent<IHome> = observer((props) => {
    const { model } = props;

    if (!model.sections.length) return <Loader />

    return (
        <>
            <Navbar title={<SvgRakutenLogo width="122px" height="42px"/>} />
            <div className="content__wrapper">
                {model.sections?.map((s) =>  s && (
                    <Section key={s.id} title={s.title} items={s.items} />
                ))}
            </div>
        </>
    );
});

export default Home;
