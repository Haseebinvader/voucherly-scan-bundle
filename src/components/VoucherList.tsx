import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";

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
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
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