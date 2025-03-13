export default function Hobbies({ hobbies }: { hobbies: string[] }) {
    return (
      <div className="p-4 bg-white shadow rounded-md">
        <h2 className="text-lg font-semibold">🎨 趣味</h2>
        <ul className="list-disc list-inside">
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }