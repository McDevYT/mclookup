import "./InfoBox.css";

export const InfoBox = (props: { title: string; message: string }) => {
  return (
    <div className="info-box">
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
};
