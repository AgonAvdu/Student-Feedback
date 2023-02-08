import ClipLoader from "react-spinners/ClipLoader";

interface Props {
  loading: boolean;
}

const Loading: React.FC<Props> = ({ loading }) => {
  return (
    <section className={loading ? `holder` : `hide`}>
      <div className={`override`}>
        <ClipLoader size={100} color={"#0062ae"} loading={loading} />
      </div>
    </section>
  );
};

export default Loading;
