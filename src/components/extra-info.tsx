import React from "react";

type Props = {
  additionalInfo: string[];
};

const ExtraInfo: React.FC<Props> = ({ additionalInfo }) => (
  <>
    {additionalInfo.map((info, idx) => (
      <div key={idx} className="additional-info">
        {info}
      </div>
    ))}
  </>
);

export default ExtraInfo;
