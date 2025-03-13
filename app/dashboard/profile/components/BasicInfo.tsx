export default function BasicInfo({ name, affiliation, hometown }: { name: string; affiliation: string; hometown: string }) {
    return (
      <div className="p-4 bg-white shadow rounded-md">
        <h2 className="text-lg font-semibold">📝 基本情報</h2>
        <p>名前: {name}</p>
        <p>所属: {affiliation}</p>
        <p>出身: {hometown}</p>
      </div>
    );
  }