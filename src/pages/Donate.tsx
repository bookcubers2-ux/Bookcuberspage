import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Heart, BookOpen, Users, Leaf, CheckCircle, Shield, CreditCard } from "lucide-react";

const impactLevels = [
  { amount: 25, description: "Provides educational materials for 5 students", icon: BookOpen },
  { amount: 50, description: "Sponsors one youth for a full workshop series", icon: Users },
  { amount: 100, description: "Funds a community library reading circle", icon: Heart },
  { amount: 250, description: "Supports a sustainability project installation", icon: Leaf },
];

const donationUsage = [
  { percentage: 75, label: "Programs & Activities", description: "Direct youth programming" },
  { percentage: 15, label: "Operations", description: "Administrative costs" },
  { percentage: 10, label: "Development", description: "Capacity building" },
];

export default function Donate() {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);

  const handleDonate = () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;
    toast({
      title: "Thank you for your generosity!",
      description: `Your ${isMonthly ? 'monthly' : 'one-time'} donation of $${amount} will make a real difference.`,
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-up">
              Support Our Mission
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up animation-delay-100">
              Your donation empowers Bolivian youth with education, leadership skills, 
              and opportunities they wouldn't otherwise have access to.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Make a Donation
              </h2>

              {/* Frequency Toggle */}
              <div className="flex gap-2 mb-8 p-1 bg-secondary rounded-lg w-fit">
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    !isMonthly ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  One-time
                </button>
                <button
                  onClick={() => setIsMonthly(true)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    isMonthly ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Monthly
                </button>
              </div>

              {/* Amount Selection */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[25, 50, 100, 250].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`p-4 rounded-lg border text-center transition-all ${
                      selectedAmount === amount && !customAmount
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <span className="text-xl font-heading font-bold">${amount}</span>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <Label htmlFor="custom">Custom Amount</Label>
                <div className="relative mt-2">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="custom"
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="pl-8"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              {/* Donate Button */}
              <Button variant="accent" size="xl" className="w-full mb-6" onClick={handleDonate}>
                <Heart className="w-5 h-5 mr-2" />
                Donate ${customAmount || selectedAmount}{isMonthly ? '/month' : ''}
              </Button>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Secure
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Encrypted
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Tax Deductible
                </div>
              </div>
            </div>

            {/* Impact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Your Impact
              </h2>
              <div className="space-y-4 mb-8">
                {impactLevels.map((level) => (
                  <div
                    key={level.amount}
                    className={`p-4 rounded-lg border transition-colors ${
                      selectedAmount === level.amount && !customAmount
                        ? 'border-accent bg-accent/10'
                        : 'border-border'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                        <level.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-foreground">${level.amount}</div>
                        <p className="text-sm text-muted-foreground">{level.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fund Allocation */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  How Funds Are Used
                </h3>
                <div className="space-y-4">
                  {donationUsage.map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-foreground">{item.label}</span>
                        <span className="text-accent">{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section-padding bg-navy-800">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Other Ways to Support
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Can't donate financially? There are many other ways to support our mission.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-2">Volunteer</h3>
              <p className="text-sm text-muted-foreground">Share your time and skills</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-2">Partner</h3>
              <p className="text-sm text-muted-foreground">Corporate partnerships welcome</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-2">Spread the Word</h3>
              <p className="text-sm text-muted-foreground">Share our mission on social media</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
