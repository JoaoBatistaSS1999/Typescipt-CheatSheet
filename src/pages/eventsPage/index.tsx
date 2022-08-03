import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props {
  handleChange: (
    event: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ) => void;
}

// Have to import some types from react, but typing and
// event gives you autocompletion

const EventsType: React.FC<Props> = ({ handleChange }) => {
  return (
    <div>
      <input type='text' onChange={handleChange} />
    </div>
  );
};
export default EventsType;
