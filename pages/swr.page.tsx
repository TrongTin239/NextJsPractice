import { StudentDetail } from "component/swr/index.page";
import * as React from "react";

export default function SWRPage() {
  return (
    <div>
      <h1>SWR Page</h1>

      <ul>
        <li>
          <StudentDetail studentID="lea2aa9l7x3a5vb" />
        </li>
        <li>
          <StudentDetail studentID="lea2aa9l7x3a5vb" />
        </li>
        <li>
          <StudentDetail studentID="lea2aa9l7x3a5vb" />
        </li>
      </ul>
    </div>
  );
}
