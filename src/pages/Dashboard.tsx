import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { VoucherList } from "@/components/VoucherList";
import { Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [vouchers, setVouchers] = useState([
    { id: 1, code: "1234567890", createdAt: new Date(), expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
  ]);

  const generateVoucher = () => {
    const code = Math.random().toString().slice(2, 12);
    const newVoucher = {
      id: vouchers.length + 1,
      code,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    };
    setVouchers([...vouchers, newVoucher]);
    toast({
      title: "Success",
      description: "New voucher generated!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Voucher Dashboard</h1>
          <Button variant="outline" onClick={() => navigate("/settings")}>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Generate Voucher</CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={generateVoucher} className="w-full">
                Generate New Voucher
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Vouchers</CardTitle>
            </CardHeader>
            <CardContent>
              <VoucherList vouchers={vouchers} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;