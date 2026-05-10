import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, ShieldCheck, Zap, AlertTriangle, ArrowRight } from 'lucide-react';

interface SubscriptionInfo {
  status: string;
  days_remaining: number;
  expiry_date: string;
  plan_name: string;
  plan_type: string;
  is_active: boolean;
  trial_used: boolean;
  trial_eligible: boolean;
}

export const SubscriptionStatus = () => {
  const [subscription, setSubscription] = useState<SubscriptionInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/subscription/status`, {
          headers: {
            'Accept': 'application/json',
          }
        });
        const data = await response.json();
        if (data.success) {
          setSubscription(data.subscription);
        }
      } catch (error) {
        console.error("Failed to fetch subscription status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  if (loading) return <div className="h-48 w-full animate-pulse bg-muted rounded-3xl" />;
  if (!subscription) return null;

  const isTrial = subscription.status.toLowerCase().includes('trial');
  const isExpired = !subscription.is_active;
  const progressValue = isTrial ? (subscription.days_remaining / 30) * 100 : 100;

  return (
    <Card className={`overflow-hidden border-none shadow-2xl transition-all duration-500 ${isExpired ? 'bg-rose-50/50' : 'bg-card'}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-black uppercase tracking-widest text-muted-foreground">
          Subscription
        </CardTitle>
        {isTrial ? (
          <Badge variant="secondary" className="bg-blue-100 text-blue-600 border-none font-bold">
            <Zap className="mr-1 h-3 w-3 fill-current" />
            TRIAL
          </Badge>
        ) : isExpired ? (
          <Badge variant="destructive" className="bg-rose-100 text-rose-600 border-none font-bold">
            EXPIRED
          </Badge>
        ) : (
          <Badge variant="secondary" className="bg-emerald-100 text-emerald-600 border-none font-bold">
            <ShieldCheck className="mr-1 h-3 w-3 fill-current" />
            PRO
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <div className="mt-4 space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-2xl font-black tracking-tight text-gray-900 leading-none">
                {subscription.plan_name}
              </h3>
              <p className="text-[11px] font-bold text-gray-400 mt-2 flex items-center gap-1.5 uppercase tracking-wider">
                <Clock className="h-3 w-3" />
                {isExpired ? (
                  <span className="text-rose-500 font-black">Expired on {subscription.expiry_date}</span>
                ) : (
                  <span>Next: {subscription.expiry_date}</span>
                )}
              </p>
            </div>
            {!isExpired && (
              <div className="text-right">
                <span className={`text-3xl font-black leading-none ${subscription.days_remaining <= 3 ? 'text-rose-600 animate-pulse' : 'text-primary'}`}>
                  {subscription.days_remaining}
                </span>
                <p className="text-[10px] font-black uppercase tracking-tighter text-gray-400">Days Left</p>
              </div>
            )}
          </div>

          {!isExpired && (
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                <span>Period Progress</span>
                <span>{Math.round(progressValue)}%</span>
              </div>
              <Progress value={progressValue} className={`h-2 ${subscription.days_remaining <= 3 ? 'bg-rose-100' : ''}`} />
            </div>
          )}

          <div className="pt-2">
            {isExpired ? (
              <Button className="w-full h-11 bg-rose-600 hover:bg-rose-700 text-white font-black rounded-xl shadow-lg shadow-rose-200 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                Renew Plan <ArrowRight className="w-4 h-4" />
              </Button>
            ) : isTrial ? (
              <Button className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-black rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Upgrade Now
              </Button>
            ) : (
              <Button variant="outline" className="w-full h-11 font-black rounded-xl border-2 transition-all hover:bg-gray-50 text-gray-600">
                Manage Billing
              </Button>
            )}
          </div>
        </div>
      </CardContent>

      {isExpired && (
        <div className="bg-rose-600 p-2 flex items-center justify-center gap-2 text-white text-[10px] font-black uppercase tracking-widest">
          <AlertTriangle className="h-3 w-3" />
          Access Restricted - Upgrade to continue
        </div>
      )}
    </Card>
  );
};
