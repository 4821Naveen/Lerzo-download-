import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShieldAlert, CreditCard, ArrowRight } from 'lucide-react';

export const TrialExpiredModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/subscription/status`);
        const data = await response.json();
        if (data.success && !data.subscription.is_active) {
          setIsOpen(true);
        }
      } catch (error) {
        console.error("Failed to check subscription status:", error);
      }
    };

    checkStatus();
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md border-none p-0 overflow-hidden bg-white rounded-3xl">
        <div className="bg-destructive/10 p-12 flex flex-col items-center justify-center text-destructive">
          <div className="w-20 h-20 bg-destructive rounded-3xl flex items-center justify-center shadow-lg shadow-destructive/20 mb-6 rotate-3">
            <ShieldAlert className="w-10 h-10 text-white" />
          </div>
          <DialogTitle className="text-3xl font-black text-center text-gray-900 tracking-tight">
            Trial Period Expired
          </DialogTitle>
        </div>
        
        <div className="p-8 space-y-6">
          <DialogDescription className="text-center text-base font-medium text-gray-500 leading-relaxed">
            Your free trial has ended. To continue managing your students and accessing premium features, please choose a subscription plan.
          </DialogDescription>
          
          <div className="space-y-3">
            <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-lg font-black rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center gap-2 group">
              <CreditCard className="w-5 h-5" />
              View Pricing Plans
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Data is safe but features are locked
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
