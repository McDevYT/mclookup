import "./InfoBox.css";

export const InfoBox = (props: { title: string; message: string }) => {
  return (
    <div className="info-box">
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  );
};
