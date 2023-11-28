import { map } from "lodash";

export default function Page() {
  return (
    <div>
      {new Array(100).fill(0).map((_, i) => (
        <div key={i} className="m-5 p-5 bg-gray-900 text-white">
          <h1>Page {i}</h1>
        </div>
      ))}
    </div>
  );
}
