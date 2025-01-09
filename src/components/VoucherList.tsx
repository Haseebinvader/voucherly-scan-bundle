import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

interface Voucher {
  id: number;
  code: string;
  createdAt: Date;
  expiresAt: Date;
}

interface VoucherListProps {
  vouchers: Voucher[];
}

export const VoucherList = ({ vouchers }: VoucherListProps) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

  const downloadPDF = (voucher: Voucher) => {
    const pdf = new jsPDF();
    autoTable(pdf, {
      head: [['Code', 'Created', 'Expires']],
      body: [
        [voucher.code, formatDate(voucher.createdAt), formatDate(voucher.expiresAt)],
      ],
    });
    pdf.save(`Voucher_${voucher.id}.pdf`);
  };

  const handlePrint = (voucher: Voucher) => {
    const printWindow = window.open('', '_blank', 'height=400,width=800');
    printWindow.document.write('<html><head><title>Print Voucher</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(`<div>Code: ${voucher.code}</div>`);
    printWindow.document.write(`<div>Created: ${formatDate(voucher.createdAt)}</div>`);
    printWindow.document.write(`<div>Expires: ${formatDate(voucher.expiresAt)}</div>`);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Code</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Expires</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {vouchers.map((voucher) => (
          <TableRow key={voucher.id}>
            <TableCell>{voucher.code}</TableCell>
            <TableCell>{formatDate(voucher.createdAt)}</TableCell>
            <TableCell>{formatDate(voucher.expiresAt)}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" onClick={() => downloadPDF(voucher)}>
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handlePrint(voucher)}>
                  <Printer className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
