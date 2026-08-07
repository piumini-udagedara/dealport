import AdminShell from "@/components/admin/AdminShell";
import { ReactQueryProvider } from "@/lib/query-provider";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AdminShell>{children}</AdminShell>
    </ReactQueryProvider>
  );
}
