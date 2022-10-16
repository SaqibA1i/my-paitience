import { HBox } from "../../styledComponents/HBox";
import { Screen } from "../../styledComponents/Screen";
import { H1, H4 } from "../../styledComponents/Text";
import { useSelector } from "react-redux";
import { Perscriptions } from "../../redux/OtherData";
import PerscriptionPill from "./PerscriptionPill";
import { getOtherData } from "../../redux/OtherData/selectors";
import { VBox } from "../../styledComponents/VBox";

const Perscription = () => {
  const { perscriptions: persc } = useSelector(getOtherData);
  return (
    <Screen id="3" style={{ alignItems: "stretch" }}>
      <H1>My Perscriptions</H1>
      <HBox>
        <H4 style={{ borderBottom: "3px solid #FF9E2A", paddingBottom: "2px" }}>
          Started
        </H4>
        <H4
          style={{
            borderBottom: "3px solid transparent",
            paddingBottom: "2px",
          }}
        >
          Issued
        </H4>
      </HBox>
      {persc.map((pers: Perscriptions) => (
        <PerscriptionPill perscription={pers} />
      ))}
    </Screen>
  );
};

export default Perscription;
