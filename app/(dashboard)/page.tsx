import PageClient from "./page.client";

export default async function DashboardPage() {
  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      <PageClient />
    </div>
  );
}
