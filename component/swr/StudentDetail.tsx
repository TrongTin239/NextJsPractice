import * as React from "react";
import useSWR from "swr";

export interface IStudentDetailProps {
  studentID: string;
}

export default function StudentDetail({ studentID }: IStudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(
    `/students/${studentID}`
  );
  function handeMutateClick() {
    mutate({ name: "trong tin" }, false);
  }
  return (
    <div>
      Name: {data?.name || "--"}{" "}
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handeMutateClick}
      >
        Mutate
      </button>{" "}
    </div>
  );
}
