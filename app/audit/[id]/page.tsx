import mongoose from "mongoose";
import { getAuditById } from "@/actions/audit.action";
import AuditViewer from "@/components/AuditViewer";
import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    notFound();
  }

  const data = await getAuditById(id);

  if (!data) {
    notFound();
  }

  return <AuditViewer {...data} />;
}
