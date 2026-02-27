import type { Metadata } from "next";
import { FinanceManagementIndustry } from "@/components/industries/FinanceManagementIndustry";

export const metadata: Metadata = {
  title: "Finance Management Solutions | Praverse Tech",
  description:
    "Secure, audit-ready finance automation for budgeting, invoicing, reconciliation, and MIS reporting.",
};

export default function FinanceManagementPage() {
  return <FinanceManagementIndustry />;
}
