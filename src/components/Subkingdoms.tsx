import { useAllSubkingdoms } from "~/utils/trefle/hooks";
import { AllSubkingdoms } from "~/utils/trefle/types";

const Loading = () => {
  return <div>loading...</div>;
};

const Data = ({ subkingdoms }: { subkingdoms: AllSubkingdoms }) => {
  return (
    <>
      {subkingdoms.map((subkingdom) => (
        <div key={`Subkingdom__${subkingdom.id}`}>
          <span>{subkingdom.name}</span>
        </div>
      ))}
    </>
  );
};

const Subkingdoms = () => {
  const { subkingdoms } = useAllSubkingdoms();

  return (
    <div>{subkingdoms ? <Data subkingdoms={subkingdoms} /> : <Loading />}</div>
  );
};

export default Subkingdoms;
