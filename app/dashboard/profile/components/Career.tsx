export default function Career({ career }: { career: string[] }) {
    return (
      <div className="p-4 bg-white shadow rounded-md">
        <h2 className="text-lg font-semibold">💼 経歴</h2>
        <ul className="list-disc list-inside">
          {career.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }