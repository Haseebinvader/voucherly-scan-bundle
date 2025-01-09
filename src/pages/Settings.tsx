import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    expiryDays: "7",
    voucherWidth: "210",
    voucherHeight: "297",
    titleFontSize: "24",
    textFontSize: "12",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Settings saved successfully",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="expiryDays">Voucher Expiry (days)</Label>
                <Input
                  id="expiryDays"
                  type="number"
                  value={settings.expiryDays}
                  onChange={(e) =>
                    setSettings({ ...settings, expiryDays: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="voucherWidth">Width (mm)</Label>
                  <Input
                    id="voucherWidth"
                    type="number"
                    value={settings.voucherWidth}
                    onChange={(e) =>
                      setSettings({ ...settings, voucherWidth: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="voucherHeight">Height (mm)</Label>
                  <Input
                    id="voucherHeight"
                    type="number"
                    value={settings.voucherHeight}
                    onChange={(e) =>
                      setSettings({ ...settings, voucherHeight: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="titleFontSize">Title Font Size (pt)</Label>
                  <Input
                    id="titleFontSize"
                    type="number"
                    value={settings.titleFontSize}
                    onChange={(e) =>
                      setSettings({ ...settings, titleFontSize: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="textFontSize">Text Font Size (pt)</Label>
                  <Input
                    id="textFontSize"
                    type="number"
                    value={settings.textFontSize}
                    onChange={(e) =>
                      setSettings({ ...settings, textFontSize: e.target.value })
                    }
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Save Settings
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;